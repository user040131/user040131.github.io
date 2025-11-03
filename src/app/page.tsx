// 1. next/navigation의 useRouter로 JS/TS식 라우팅 활용
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Badge from "./components/Badge";
import SectionBox from "./components/SectionBoxbg";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <section>
        {/* 메인 컨텐츠 */}
        <div className="flex gap-6 items-center">
          {/* Left: 인삿말 & 설명 */}
          <div className="max-w-[480px]">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Hello, I am <br /> &nbsp;a Developer
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              I create efficient and scalable <br />
              software solutions.
            </p>
            <a
              className="ml border rounded-xl p-2 bg-gray-900 text-white shadow-lg"
              href="../portfolio"
            >
              View portfolio
            </a>
            <a
              className="ml-4 shadow-lg rounded-xl p-2"
              href="https://github.com/user040131"
            >
              GitHub
            </a>
            <a
              className="ml-4 shadow-lg rounded-xl p-2" /* 내 이메일로 입력되는 이메일 그걸로 넘어가기 */
            >
              Contact
            </a>
          </div>
          {/* Right: 아이콘(혹은 이미지) 박스 
          여기다가 Current Tech Stack 작성하기 그냥 그림보다 훨 나을 듯*/}
          <aside
            className="
          ml-20
          mt-3
          w-[320px]
          rounded-2xl
          bg-blue-500
          text-white
          shadow-lg
          text-sm
          p-4
          flex
          flex-col
          gap-4
  "
          >
            {/* 헤더 */}
            <div className="text-white">
              <p className="text-[13px] font-semibold leading-tight">
                Current Tech Stack
              </p>
            </div>

            {/* Backend */}
            <div className="text-white/90 text-[11px] leading-relaxed">
              <div className="font-semibold mb-1 text-white text-[11px]">
                Backend
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge label="Java" />
                <Badge label="JavaScript" />
                <Badge label="Spring Boot" />
                <Badge label="Node.js" />
              </div>
            </div>

            {/* Frontend */}
            <div className="text-white/90 text-[11px] leading-relaxed">
              <div className="font-semibold mb-1 text-white text-[11px]">
                Frontend
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge label="HTML" />
                <Badge label="Tailwind CSS" />
                <Badge label="JavaScript" />
                <Badge label="React" />
                <Badge label="Next.js" />
              </div>
            </div>

            {/* Tools & Others */}
            <div className="text-white/90 text-[11px] leading-relaxed">
              <div className="font-semibold mb-1 text-white text-[11px]">
                Tools & Others
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge label="Git" />
                <Badge label="Postman" />
                <Badge label="MySQL" />
              </div>
            </div>

            {/* Divider line */}
            <div className="h-px bg-white/20" />

            {/* Focus / 현재 관심 영역 */}
            <div className="text-[11px] leading-snug text-white/90">
              <div className="font-semibold text-white/90 mb-1">
                Currently focusing on (2025/10/26)
              </div>
              <p className="text-white/80">
                HTML + CSS + JS (Next.js) ·
                <br />
                Node.js(Express) Backend ·
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section>
        <div className="mt-12 mb-12">
          {/* 최신으로 포스팅된 2개의 블로그 크롤링 */}
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-4xl font-bold text-gray-900">What I Can Do</h2>
          </div>
          <div className="text-center text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
            <p>Comprehensive skills across the development stack</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <SectionBox className="h-full w-full shadow-lg shadow-blue-400/70">
            {" "}
            {/*프론트*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-blue-300/70">
              <span className="font-mono text-xl text-gray-800">
                <p className="text-blue-900">&lt;/&gt;</p>
              </span>
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Frontend Development
            </div>
            <Badge label="Next.js" className="bg-blue-400 mt-2" />
            <Badge label="React" className="bg-blue-400" />
            <Badge label="Tailwind CSS" className="bg-blue-400" />
          </SectionBox>
          <SectionBox className="h-full w-full shadow-lg shadow-green-400/70">
            {" "}
            {/*백*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-green-300/70">
              <span className="font-mono text-xl text-gray-800">&lt;/&gt;</span>
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Backend Development
            </div>
            <Badge label="Node.js" className="bg-green-500/80 mt-2" />
            <Badge label="Express" className="bg-green-500/80" />
            <Badge label="Spring Boot" className="bg-green-500/80" />
          </SectionBox>
          <SectionBox className="h-full w-full shadow-lg shadow-purple-400/70">
            {" "}
            {/*db*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-purple-300/70"></div>
          </SectionBox>
          <SectionBox className="h-full w-full shadow-lg shadow-orange-400/70">
            {" "}
            {/*tech*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-orange-300/70"></div>
          </SectionBox>
        </div>
      </section>
      <section>
        {/* 하단 Featured Projects */}
        <div className="mt-12 mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <a href="/portfolio#projects">
              <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
                <span>View All</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </a>
          </div>
          <div className="flex justify-start items-center gap-3">
            <SectionBox className="h-full w-full bg-white shadow-lg">
              <h1 className="font-bold">Roommate</h1>
              <p> 어쩌고 저쩌고 설명 </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge label="Java" className="bg-blue-400" />
                <Badge label="Springboot" className="bg-blue-400" />
                <Badge label="MySQL" className="bg-blue-400" />
                <Badge label="thymeleaf" className="bg-blue-400" />
              </div>
            </SectionBox>
            <SectionBox className="h-full w-full bg-white shadow-lg">
              <h1 className="font-bold">My Own Page</h1>
              <p> 어쩌고 저쩌고 설명 </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge label="HTML" className="bg-blue-400" />
                <Badge label="Tailwind CSS" className="bg-blue-400" />
                <Badge label="JS/TS" className="bg-blue-400" />
                <Badge label="Next.js" className="bg-blue-400" />
              </div>
            </SectionBox>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-12 mb-12">
          {/* 최신으로 포스팅된 2개의 블로그 크롤링 */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Blog Posts
            </h2>
            <a href="/blog">
              <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
                <span>View All</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">Blog Post Title 1</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="블로그 태그 1" className="bg-green-500/80" />
              <Badge label="블로그 태그 2" className="bg-green-500/80" />
            </div>
          </SectionBox>
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">Blog Post Title 2</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="블로그 태그 3" className="bg-green-500/80" />
              <Badge label="블로그 태그 4" className="bg-green-500/80" />
            </div>
          </SectionBox>
        </div>
      </section>
      <section>
        <div className="mt-12 mb-12">
          {/* 최신 미니게임 2개 크롤링 */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Mini Games</h2>
            <a href="/mini-game">
              <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
                <span>View All</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">Mini Game Title 1</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="게임 태그 1" className="bg-purple-400" />
              <Badge label="게임 태그 2" className="bg-purple-400" />
            </div>
          </SectionBox>
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">Mini Game Title 2</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="게임 태그 3" className="bg-purple-400" />
              <Badge label="게임 태그 4" className="bg-purple-400" />
            </div>
          </SectionBox>
        </div>
      </section>
      <section>
        {/* 최하단 PlayGround 최신 2개 크롤링 */}
        <div className="mt-12 mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">PlayGround</h2>
            <a href="/playground">
              <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
                <span>View All</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">PlayGround Title 1</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="플레이그라운드 태그 1" className="bg-yellow-400" />
              <Badge label="플레이그라운드 태그 2" className="bg-yellow-400" />
            </div>
          </SectionBox>
          <SectionBox className="h-full w-full bg-white shadow-lg">
            <h1 className="font-bold">PlayGround Title 2</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="플레이그라운드 태그 3" className="bg-yellow-400" />
              <Badge label="플레이그라운드 태그 4" className="bg-yellow-400" />
            </div>
          </SectionBox>
        </div>
      </section>
    </>
  );
}
