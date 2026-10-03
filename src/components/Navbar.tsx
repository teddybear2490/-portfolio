"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, Shield, X } from "lucide-react";
const links = [
  { id: "about", label: "소개" },
  { id: "experience", label: "경험" },
  { id: "projects", label: "프로젝트" },
  { id: "skills", label: "기술 역량" },
  { id: "contact", label: "연락" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <nav className="container navbar" aria-label="주요 메뉴">
        <a
          className="brand"
          href="#home"
          aria-label="보안 엔지니어 포트폴리오 홈"
        >
          <Shield size={21} />
          <span>
            SEC<span className="muted"> / </span>OPS
            <span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-resume" href="#resume">
          이력서 보기 <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
