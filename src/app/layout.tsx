import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  title: "보안운영 엔지니어 | 포트폴리오",
  description: profile.description,
  openGraph: {
    title: "보안운영 엔지니어 | 포트폴리오",
    description: profile.description,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "보안운영 엔지니어 | 포트폴리오",
    description: profile.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
