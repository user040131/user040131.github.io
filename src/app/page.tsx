// 1. next/navigation의 useRouter로 JS/TS식 라우팅 활용
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Badge from "./components/Badge";

export default function HomePage() {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {/* 메인 컨텐츠 */}
      <div className="flex gap-12 items-center">
        {/* Left: 인삿말 & 설명 */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Hello, I am <br />a Developer
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            I create efficient and scalable <br />
            software solutions.
          </p>
        </div>
        {/* Right: 아이콘(혹은 이미지) 박스 
          여기다가 Current Tech Stack 작성하기 그냥 그림보다 훨 나을 듯*/}
        <aside
          className="
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
              <Badge label="Spring Boot" />
              <Badge label="JPA" />
              <Badge label="MySQL" />
            </div>
          </div>

          {/* Frontend */}
          <div className="text-white/90 text-[11px] leading-relaxed">
            <div className="font-semibold mb-1 text-white text-[11px]">
              Frontend
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge label="Next.js" />
              <Badge label="React" />
              <Badge label="Tailwind CSS" />
            </div>
          </div>

          {/* Tools & Others */}
          <div className="text-white/90 text-[11px] leading-relaxed">
            <div className="font-semibold mb-1 text-white text-[11px]">
              Tools & Others
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge label="Git" />
              <Badge label="Docker" />
              <Badge label="AWS" />
            </div>
          </div>

          {/* Divider line */}
          <div className="h-px bg-white/20" />

          {/* Focus / 현재 관심 영역 */}
          <div className="text-[11px] leading-snug text-white/90">
            <div className="font-semibold text-white/90 mb-1">
              Currently focusing on
            </div>
            <p className="text-white/80">
              Spring Boot APIs ·
              <br />
              Next.js frontends ·
              <br />
              SQLD-level data modeling
            </p>
          </div>
        </aside>
      </div>

      {/* 하단 Featured Projects */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <div className="flex gap-6">
          {/* Project 카드(샘플 두 개) */}
          <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center opacity-70">
            {/* 샘플용 Gray bar */}
            <div className="w-4/5 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center opacity-70">
            <div className="w-4/5 h-3 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
}
