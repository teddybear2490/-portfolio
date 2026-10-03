/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS QA script */
// Local QA only. Uses the bundled Playwright package when PLAYWRIGHT_MODULE is set.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");
const assert = require("node:assert/strict");
const root = path.resolve("out");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
};
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split("?")[0]);
  if (base && url.startsWith(base + "/")) url = url.slice(base.length);
  let file = path.resolve(root, "." + url);
  if (!file.startsWith(root + path.sep) && file !== root) {
    res.writeHead(403);
    return res.end();
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory())
    file = path.join(file, "index.html");
  if (!fs.existsSync(file)) {
    res.writeHead(404);
    return res.end();
  }
  res.setHeader(
    "Content-Type",
    types[path.extname(file)] || "application/octet-stream",
  );
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise((resolve) => server.listen(4173, "127.0.0.1", resolve));
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.BROWSER_CHANNEL || "msedge",
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  try {
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`http://127.0.0.1:4173${base}/`, {
        waitUntil: "networkidle",
      });
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator(".project-card").count(), 8);
      await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
      const accessibility = await page.evaluate(
        async () =>
          await window.axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
          }),
      );
      assert.deepEqual(
        accessibility.violations.map((item) => ({
          id: item.id,
          nodes: item.nodes.map((node) => node.target),
        })),
        [],
      );
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        "Horizontal overflow at " + width,
      );
      const broken = await page
        .locator('a[href^="#"]')
        .evaluateAll((links) =>
          links
            .filter((link) => !document.getElementById(link.hash.slice(1)))
            .map((link) => link.hash),
        );
      assert.deepEqual(broken, []);
      await page.getByRole("button", { name: "AI / PoC", exact: true }).click();
      assert.equal(await page.locator(".project-card").count(), 1);
      await page.locator("summary").click();
      assert(await page.locator("details").evaluate((el) => el.open));
      const expanded = await page.evaluate(
        async () =>
          await window.axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
          }),
      );
      assert.deepEqual(
        expanded.violations.map((item) => ({
          id: item.id,
          nodes: item.nodes.map((node) => node.target),
        })),
        [],
      );
      await page.getByRole("button", { name: "전체 프로젝트" }).click();
      if (width <= 760) {
        await page.getByRole("button", { name: "메뉴 열기" }).click();
        await page
          .locator("#navigation-links")
          .getByRole("link", { name: "기술 역량", exact: true })
          .click();
        assert.equal(
          await page
            .getByRole("button", { name: "메뉴 열기" })
            .getAttribute("aria-expanded"),
          "false",
        );
      }
      console.log(
        `PASS viewport ${width}: layout, filters, disclosures, anchors, mobile navigation`,
      );
    }
    assert.deepEqual(errors, []);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`http://127.0.0.1:4173${base}/`, {
      waitUntil: "networkidle",
    });
    fs.mkdirSync("artifacts", { recursive: true });
    await page.screenshot({ path: "artifacts/desktop.png", fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: "artifacts/mobile.png", fullPage: true });
    console.log("PASS no browser errors or missing assets");
  } finally {
    await browser.close();
    server.close();
  }
})().catch((error) => {
  console.error(error);
  server.close();
  process.exitCode = 1;
});
