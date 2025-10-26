// src/app/layout.tsx
// 전역 레이아웃: 모든 페이지 공통 UI
import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css"; // Tailwind base/styles

export const metadata: Metadata = {
  title: "승주의 사이트",
  description: "Next.js + Tailwind minimal template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* min-h-dvh: 모바일 주소창 높이 이슈에도 꽉 차게 */}
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        {/* 필요하면 헤더를 여기에 추가 */}
        <main className="min-h-screen flex items-center justify-center bg-gray-100 py-16 text-gray-900">
          <section className="bg-white rounded-2xl shadow-lg w-[900px] max-w-full px-12 py-10 relative">
            <header className="flex items-center justify-between px-6 pb-4 pt-0">
              {/* 왼쪽 동그란 버튼 */}
                <div aria-label="Go to main" className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400"/>

              {/* 오른쪽 네비 */}
                <nav aria-label="Primary">
                  <ul className="flex items-center gap-10">
                   <li><Link href="/"         className="text-gray-700 hover:underline font-medium">Main</Link></li>
                   <li><a href="/portfolio"   className="text-gray-700 hover:underline font-medium">Portfolio</a></li>
                   <li><a href="/blog"        className="text-gray-700 hover:underline font-medium">Blog</a></li>
                   <li><a href="/mini-game"   className="text-gray-700 hover:underline font-medium">MiniGame</a></li>
                   <li><a href="/playground"  className="text-gray-700 hover:underline font-medium">PlayGround</a></li>
                 </ul>
                </nav>
            </header>
            {children}
          </section>
        </main>
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-gray-500">
            © {new Date().getFullYear()} 승주 · All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
