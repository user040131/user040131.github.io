// 1. next/navigation의 useRouter로 JS/TS식 라우팅 활용
import Badge from "./components/Badge";
import SectionBox from "./components/SectionBoxbg";
import Link from "next/link";
import { fetchVelogPosts, VelogPost } from "@/lib/velog";
import { PROJECT_DESCRIPTIONS } from "@/content/projects";
import Logo from "./components/Image";

type ProjectCardProps = {
  projectId: "Roommate_Sum" | "myOwnPage_Sum";
  title: string;
};

export const revalidate = 3600; // 1 hour

export default async function HomePage() {
  const velogPosts: VelogPost[] = await fetchVelogPosts(2);
  const [latest, second] = velogPosts;
  const roommateDesc = PROJECT_DESCRIPTIONS["Roommate_Sum"];
  const myOwnPageDesc = PROJECT_DESCRIPTIONS["myOwnPage_Sum"];

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
              href="mailto:seungjub270@gmail.com"
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
                <Badge label="Java - SpringBoot" />
                <Badge label="JS - Node.js / Express" />
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
                <Badge label="React - Next.js" />
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
                <Badge label="Swagger" />
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

      {/* What I Can Do */}
      <section>
        <div className="mt-12 mb-12">
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-4xl font-bold text-gray-900">What I Can Do</h2>
          </div>
          <div className="text-center text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
            <p>Comprehensive skills across the development stack</p>
          </div>
        </div>
        {/* 가로 4개 카드: 폭 균등 + 높이 동일 */}
        <div className="flex gap-3 items-stretch">
          <SectionBox className="flex-1 shadow-lg shadow-blue-400/70">
            {/*프론트*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-blue-300/70">
              <Logo
                src="/frontend.svg"
                title="frontend"
                alt="my_own_page"
                sizeClass="size-[0.9em] md:size-[1.5em]"
              />
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Frontend Development
            </div>
            <Badge label="Next.js" className="bg-blue-400 mt-2" />
            <Badge label="React" className="bg-blue-400" />
            <Badge label="Tailwind CSS" className="bg-blue-400" />
          </SectionBox>

          <SectionBox className="flex-1 shadow-lg shadow-green-400/70">
            {/*백*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-green-300/70">
              <Logo
                src="/backend.svg"
                title="backend"
                alt="my_own_page"
                sizeClass="size-[0.9em] md:size-[1.5em]"
              />
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Backend Development
            </div>
            <Badge label="Node.js" className="bg-green-500/80 mt-2" />
            <Badge label="Express" className="bg-green-500/80" />
            <Badge label="Spring Boot" className="bg-green-500/80" />
          </SectionBox>

          <SectionBox className="flex-1 shadow-lg shadow-purple-500/70">
            {/*db*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-purple-400/70">
              <Logo
                src="/database.svg"
                title="database"
                alt="my_own_page"
                sizeClass="size-[0.9em] md:size-[2em]"
              />
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Database Management
            </div>
            <Badge label="MySQL" className="bg-purple-400/70 mt-2" />
          </SectionBox>

          <SectionBox className="flex-1 shadow-lg shadow-orange-400/70">
            {/*tech*/}
            <div className="mx-auto grid place-items-center size-12 rounded-2xl bg-orange-300/70">
              <Logo
                src="/tech.svg"
                title="tech"
                alt="my_own_page"
                sizeClass="size-[0.9em] md:size-[1.7em]"
              />
            </div>
            <div className="mt-1 text-center font-semibold text-gray-900">
              Tech Stack & Tools
            </div>
            <Badge label="SQLD" className="bg-orange-300/70" />
            <Badge label="Postman" className="bg-orange-300/70" />
            <Badge label="Swagger" className="bg-orange-300/70" />
          </SectionBox>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mt-12 mb-12">
          <div className="flex items-stretch justify-between mb-4">
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
          {/* 가로 2개 프로젝트 카드 */}
          <div className="flex gap-3 items-stretch">
            <SectionBox className="flex-1 bg-white shadow-lg">
              <h1 className="font-bold">Roommate</h1>
              <p className="text-sm text-neutral-600">{roommateDesc}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge label="Java" className="bg-blue-400" />
                <Badge label="Springboot" className="bg-blue-400" />
                <Badge label="MySQL" className="bg-blue-400" />
                <Badge label="thymeleaf" className="bg-blue-400" />
              </div>
            </SectionBox>

            <SectionBox className="flex-1 bg-white shadow-lg">
              <h1 className="font-bold">My Own Page</h1>
              <p className="text-sm text-neutral-600">{myOwnPageDesc}</p>
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

      {/* Latest Blog Posts */}
      <section>
        <div className="mt-12 mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Blog Posts
            </h2>
            <a href="https://velog.io/@user040131/posts">
              <button className="group inline-flex items-center gap-1 text-sm font-medium shadow-lg p-2 rounded-xl mr-3 hover:text-blue-800">
                <span>View All</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* 가로 2개 Velog 카드 */}
        <div className="flex gap-3 items-stretch">
          <SectionBox className="flex-1 bg-white shadow-lg">
            <a
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h1 className="font-bold">{latest.title}</h1>
              <p className="text-xs text-neutral-500">
                {new Date(latest.pubDate).toLocaleString("ko-KR")}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge label="Springboot" className="bg-green-500/80" />
              </div>
            </a>
          </SectionBox>

          <SectionBox className="flex-1 bg-white shadow-lg">
            <a
              href={second.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h1 className="font-bold">{second.title}</h1>
              <p className="text-xs text-neutral-500">
                {new Date(second.pubDate).toLocaleString("ko-KR")}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge label="Springboot" className="bg-green-500/80" />
                <Badge label="Stackers" className="bg-green-500/80" />
              </div>
            </a>
          </SectionBox>
        </div>
      </section>

      {/* PlayGround */}
      <section>
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
        <div className="flex gap-3 items-stretch">
          <SectionBox className="flex-1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h1 className="font-bold text-lg text-gray-900">
              Digital Wave Simulation
            </h1>

            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              Three.js를 활용하여 수많은 입자가 마우스 움직임에 따라 시점이 변하고, <br />
              파동이 일렁이는 인터랙티브 3D 웹 시뮬레이션을 구현했습니다. <br />
              사용자는 마우스나 터치로 파동을 조작하며 몰입감 있는 경험을 즐길 수 있습니다.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge label="Three.js" className="bg-yellow-500/80 text-white" />
              <Badge label="WebGL" className="bg-yellow-500/80 text-white" />
              <Badge label="Interactive Art" className="bg-yellow-500/80 text-white"/>
            </div>
          </SectionBox>
        </div>
      </section>
    </>
  );
}
