import type { Metadata, Viewport } from "next";
import Link from "next/link";
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
    title: "박승주 | 운영까지 연결하는 백엔드 개발자",
    description:
      "API와 데이터 흐름을 설계하고 배포와 운영까지 책임지는 백엔드 개발자입니다.",
  },
  twitter: {
    card: "summary",
    title: "박승주 | 백엔드 개발자",
    description: "기능 구현에서 멈추지 않고, 운영까지 연결합니다.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
        <header className="site-header">
          <div className="header-inner">
            <Link className="brand" href="/#top" aria-label="박승주 포트폴리오 홈">
              <span>PSJ</span>
              <div>
                <strong>박승주</strong>
                <small>BACKEND DEVELOPER</small>
              </div>
            </Link>
            <nav aria-label="주요 메뉴">
              <Link href="/#about">소개</Link>
              <Link href="/#projects">프로젝트</Link>
              <Link href="/#skills">역량</Link>
              <Link href="/#journey">성장</Link>
            </nav>
            <a className="header-contact" href="mailto:seungjub270@gmail.com">
              함께 일하기 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="section-shell footer-inner">
            <p>© {new Date().getFullYear()} Park Seungju</p>
            <p>문제를 이해하고 · 근거로 선택하고 · 운영으로 검증합니다.</p>
            <a href="#top">TOP ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
