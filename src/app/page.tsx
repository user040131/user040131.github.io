// 1. next/navigation의 useRouter로 JS/TS식 라우팅 활용
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Badge from "./components/Badge";
import SectionBox from "./components/SectionBoxbg";

export default function HomePage() {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
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
          <a className="ml-4 shadow-lg rounded-xl p-2" href="https://github.com/user040131">
            GitHub
          </a>
          <a className="ml-4 shadow-lg rounded-xl p-2" /* 내 이메일로 입력되는 이메일 그걸로 넘어가기 */>
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

      {/* 하단 Featured Projects */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
            <span>View All</span>
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>
        <div className="flex justify-start items-center gap-3">
          <SectionBox className="h-full w-full bg-blue-500 shadow-lg">
            <h1 className="font-bold">Roommate</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="Java" />
              <Badge label="Springboot" />
              <Badge label="MySQL" />
              <Badge label="thymeleaf" />
            </div>
          </SectionBox>
          <SectionBox className="h-full w-full bg-blue-500 shadow-lg">
            <h1 className="font-bold">My Own Page</h1>
            <p> 어쩌고 저쩌고 설명 </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge label="HTML" />
              <Badge label="Tailwind CSS" />
              <Badge label="JS/TS" />
              <Badge label="Next.js" />
            </div>
          </SectionBox>
        </div>
      </div>
    </>
  );
}
