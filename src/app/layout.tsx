import type { Metadata, Viewport } from "next";
import Link from "next/link";
import LiquidGlass from "@/app/components/LiquidGlass";
import "@/app/globals.css";

const SITE_URL = "https://user040131.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "박승주 | 백엔드 개발자",
    template: "%s | 박승주",
  },
  description:
    "Spring Boot와 Node.js로 API와 데이터 흐름을 설계하고 Docker, CI/CD, 클라우드 운영까지 연결하는 백엔드 개발자 박승주의 포트폴리오입니다.",
  keywords: [
    "박승주",
    "백엔드 개발자",
    "Spring Boot",
    "Node.js",
    "Java",
    "포트폴리오",
    "CI/CD",
  ],
  authors: [{ name: "박승주", url: SITE_URL }],
  creator: "박승주",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "박승주 백엔드 포트폴리오",
    title: "박승주 | 선택을 결과로 잇는 백엔드 개발자",
    description:
      "API와 데이터 흐름을 설계하고 배포와 운영까지 책임지는 백엔드 개발자입니다.",
  },
  twitter: {
    card: "summary",
    title: "박승주 | 백엔드 개발자",
    description: "선택지를 설명할 수 있는 개발자, 선택을 결과로 잇는 개발자.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        {/* shortcut: font served from jsDelivr, self-host under public/fonts if the CDN becomes a concern */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <LiquidGlass />
        <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
        <div className="header-edge" aria-hidden="true" />
        <header className="site-header liquid-glass">
          <div className="header-inner">
            <nav aria-label="주요 메뉴">
              <Link href="/#projects">프로젝트</Link>
              <Link href="/#skills">역량</Link>
              <Link href="/#journey">성장</Link>
              <Link href="/#writing">글</Link>
              <Link href="/#contact">연락</Link>
            </nav>
            <a className="header-contact" href="mailto:seungjub270@gmail.com">
              이메일 보내기
            </a>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="section-shell footer-inner">
            <p>© {new Date().getFullYear()} Park Seungju</p>
            <p>문제를 이해하고 · 근거로 선택하고 · 운영으로 검증합니다.</p>
            <a href="#top">TOP <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" /></svg></a>
          </div>
        </footer>
      </body>
    </html>
  );
}
