"use client";
//use client를 붙이면 client side rendering이 됨, 그러면 client가 완성시키기에 onClick같은 이벤트 발생이 가능
//저걸 안 붙이면 server side rendering이 되어 완성시켜서 client에게 주어야하기에 이벤트 발생이 불가능

import SectionBox from "../components/SectionBox";
import Logo from "../components/Image";
import Badge from "../components/Badge";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl p-6">
        {/* 공용 섹션 박스 - 어떤 정적 페이지에도 쉽게 재사용 */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
          <h1 className="text-center text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Portfolio
          </h1>

          {/* 보조 설명 */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            All about me
          </p>
        </section>
        <SectionBox title="About me">
          <p className="text-sm text-gray-600">
            <h1>
              원리 이해, 근거 기반 사고, 확장 지향적 프로그래밍을 지향합니다.
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href="https://github.com/user040131"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Logo
                  src="/github.svg"
                  title="github"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
              </a>
              <a
                href="https://github.com/user040131"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Logo
                  src="/linkedIn.svg"
                  title="github"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
              </a>
            </div>
          </p>
        </SectionBox>
        <section>
          <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-bold text-gray-900">
            Skills &amp; Learning
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            Languages, frameworks, and tools I work with
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionBox className="h-full">
              <h4 className="text-lg font-bold text-gray-800 mb-6 pl-3 border-l-4 border-blue-500">
                Frontend Skills
                <div className="mt-2 flex justify-start items-center gap-2">
                <Logo
                  src="/logo/html.svg"
                  title="html"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
                <Logo
                  src="/logo/css.svg"
                  title="css"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
                <Logo
                  src="/logo/JS.svg"
                  title="javascript"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
                <Logo
                  src="/logo/typescript.svg"
                  title="typescript"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
                <Logo
                  src="/logo/next.svg"
                  title="nextjs"
                  alt="my_own_page"
                  sizeClass="size-[0.9em] md:size-[2em]"
                />
                </div>
              </h4>
              <h4 className="text-lg font-bold text-gray-800 mb-6 pl-3 border-l-4 border-green-500">
                Backend Skills
                <div className="mt-2 flex justify-start items-center gap-2">
                  <Logo 
                    src="/logo/java.svg"
                    title="java"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                  <Logo 
                    src="/logo/spring.svg"
                    title="springboot"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                  <Logo
                    src="/logo/node.svg"
                    title="nodejs"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                  <Logo
                    src="/logo/express.svg"
                    title="expressjs"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </div>
              </h4>
              <h4 className="text-lg font-bold text-gray-800 mb-6 pl-3 border-l-4 border-purple-500">
                Tools & Others
                <div className="mt-2 flex justify-start items-center gap-2">
                  <Logo
                    src="/logo/git.svg"
                    title="git"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                  <Logo
                    src="/logo/github.svg"
                    title="github"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                  <Logo
                    src="/logo/mysql.svg"
                    title="mysql"
                    alt="my_own_page"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </div>
              </h4>
            </SectionBox>
            <SectionBox className="h-full">
            {/* Next Skill Loading 카드 */}
<div className="flex flex-col justify-center p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
  
  {/* 상단 텍스트 & 아이콘 */}
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      {/* 뱅글뱅글 도는 로딩 아이콘 */}
      <div className="animate-spin mr-2 text-xl">⏳</div> 
      <h4 className="font-bold text-gray-600">Next Skill Loading...</h4>
    </div>
    <span className="text-xs font-bold text-blue-500 animate-pulse">Installing...</span>
  </div>

  {/* 프로그레스 바 (게이지) */}
  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
    {/* 파란색 바: animate-pulse를 넣어서 살아있는 느낌을 줌 */}
    <div 
      className="h-full bg-blue-400 rounded-full animate-pulse" 
      style={{ width: '33%' }}
    ></div>
  </div>

  {/* 하단 설명 (유머 한 스푼) */}
  <div className="flex justify-between mt-2 text-xs text-gray-500">
    <span>지식 습득 중...</span>
    <span>???%</span>
  </div>

</div>
            </SectionBox>
          </div>
        </section>
        <section
          id="projects"
          className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8"
        >
          {/* 타이틀 */}
          <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-bold text-gray-900">
            About Projects
          </h2>
          {/* 프로젝트 당 사용된 언어, 라이브러리, 프레임워크, 기타 기술 작성 */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            Projects, what I build
          </p>
        </section>
        <section className="mx-auto w-full">
          <div>
            <SectionBox className="h-full">
              <section>
                <div className="flex justify-start items-center gap-3 mb-1">
                  <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                    Roommate
                  </h3>
                  <a
                    href="https://github.com/user040131/Roommate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Logo
                      src="/github.svg"
                      title="github"
                      alt="hangman"
                      sizeClass="size-[0.9em] md:size-[2em]"
                    />
                  </a>
                </div>
              </section>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.05.16 ~ 2025.10.07</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  chatgpt api를 이용, 사용자 정량 평가를 통한 룸메이트 매칭 웹
                  어플리케이션을 구현하였습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="SpringBoot" className="bg-blue-500 text-white" />
                <Badge label="MySQL" className="bg-blue-500 text-white" />
                <Badge label="OpenAI API" className="bg-blue-500 text-white" />
                <Badge label="JPA" className="bg-blue-500 text-white" />
                <Badge label="Thymeleaf" className="bg-blue-500 text-white" />
                <Badge
                  label="솔로 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  MyOwnPage
                </h3>
                <a
                  href="https://github.com/user040131/user040131.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.10.24 ~ ∞</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  현재 보고 있는 홈페이지가 해당 프로젝트를 통해 구현 중인 웹
                  사이트입니다.<br></br>
                  Next.js와 Tailwind CSS를 활용하여 반응형 디자인과 모던한
                  UI/UX를 구현하였습니다.<br></br>
                  또한, GitHub Pages를 통해 배포하여 안정적인 호스팅 환경을
                  제공하고 있습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="HTML/CSS/JS" className="bg-blue-500 text-white" />
                <Badge label="Next.js" className="bg-blue-500 text-white" />
                <Badge label="Tailwind" className="bg-blue-500 text-white" />
                <Badge
                  label="GitHub Pages"
                  className="bg-blue-500 text-white"
                />
                <Badge
                  label="솔로 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  if(you can)save him;
                </h3>
                <a
                  href="https://github.com/user040131/hangman_stackers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
                <a
                  href="https://youtu.be/ftclpB9toT8?si=2WYmrWsU6AtOsgge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/youtube.svg"
                    title="youtube"
                    alt="hangman"
                    sizeClass="size-[0.7em] md:size-[1.7em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.04.08 ~ 2025.04.12</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  프로그래밍을 배우고 처음으로 진행한 프로젝트이자 팀
                  프로젝트입니다.<br></br>
                  RESTful API 방식으로 SpringBoot를 사용하여 백엔드를
                  구축하였으며, <br></br>
                  해당 프로젝트를 통해 계층형 아키텍쳐의 기본적 이해와 협업의
                  방향성을 배웠습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="SpringBoot" className="bg-blue-500 text-white" />
                <Badge
                  label="팀 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  WhatShouldIDo
                </h3>
                <a
                  href="https://github.com/user040131/WhatShouldIDo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.12.14 ~ 진행 중</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  개발자로써 다양한 기능을 실험하고 상상을 마음껏 구현하는 All-in-one playground입니다.<br></br>
                  흥미가 돋는 기능을 LLM과 적극적으로 협업하여 빠르게 프로토타이핑하고 이를 고도화하는 것을<br></br>
                  목표로 삼고 있습니다.<br></br>
                  <ul>
                    <li>----- 현재 구현된 기능들 -----</li>
                    <li>1. 메뉴 추천 기능 </li>
                    <li>2. 로또 번호 출력 <Badge label="LinkedHashSet" className="bg-b-500 text-white" /></li>
                    <li>3. ai 챗봇 <Badge label="ollama" className="bg-blue-500 text-white" /> <Badge label="AJAX" className="bg-blue-500 text-white" /></li>
                    <li>4. 영화 추천 <Badge label="MovieDB API" className="bg-blue-500 text-white" /> <Badge label="R^10으로 분석된 유저 취향 기반 추천" className="bg-blue-500 text-white" /></li>
                  </ul>
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="JAVA" className="bg-blue-500 text-white" />
                <Badge label="SpringBoot" className="bg-blue-500 text-white" />
                <Badge label="Thymeleaf" className="bg-blue-500 text-white" />
                <Badge
                  label="MySQL"
                  className="bg-blue-500 text-white"
                />
                <Badge label="외부 API 호출" className="bg-blue-500 text-white" />
                <Badge label="HTML/CSS/JS" className="bg-blue-500 text-white" />
                <Badge
                  label="솔로 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  SINO
                </h3>
                <a
                  href="https://github.com/UMC-SINO/SINO-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.12.15 ~ 2025.12.22</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  SINO 프로젝트는 ai 분석을 적극 활용, 사용자의 감정을 기반으로 하여 post를 signal과 noise로 나누어 연/월별 리포트 생성을 주 기능으로 하여,<br></br>
                  사용자가 사진과 함께 일상을 감정으로써 정리할 수 있도록 도운 프로젝트입니다.<br></br>
                  --------------------------------------------------------------------------------------<br></br>
                  해당 프로젝트에선 백엔드 개발 전반에 참여하였으며, 최종적으로 우수상 수상을 하였습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="JS" className="bg-blue-500 text-white" />
                <Badge label="Node.js" className="bg-blue-500 text-white" />
                <Badge label="Express.js" className="bg-blue-500 text-white" />
                <Badge label="prisma" className="bg-blue-500 text-white" />
                <Badge
                  label="MySQL"
                  className="bg-blue-500 text-white"
                />
                <Badge
                  label="UMC 장기해커톤"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  속삭편지
                </h3>
                <a
                  href="https://github.com/soksak-letter/soksak-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.11.17 ~ 2026.02.20</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  이 서비스는 도파민 과잉과 피상적 연결에 지친 20대를 대상으로,<br></br>
                  ‘3일 뒤 나에게 쓰는 편지’와 제한된 익명 교환 편지를 통해 성찰과<br></br>
                  진정성 있는 연결을 유도하는 심리적 루틴 설계형 플랫폼입니다.<br></br>
                  데이터 기반 매칭·후기 반영 알고리즘과 암호화·예약 발송 시스템을 통해, <br></br>
                  즉각적 자극이 아닌 지연 보상과 깊이 있는 대화를 습관화하도록 돕는 감정 관리 서비스를 목표하였습니다.<br></br>
                  --------------------------------------------------------------------------------------<br></br>
                  해당 프로젝트에선 백엔드 개발 전반에 참여하였으며, 최종적으로 우수상 수상을 하였습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="JS" className="bg-blue-500 text-white" />
                <Badge label="Node.js" className="bg-blue-500 text-white" />
                <Badge label="Express.js" className="bg-blue-500 text-white" />
                <Badge label="prisma" className="bg-blue-500 text-white" />
                <Badge
                  label="MySQL"
                  className="bg-blue-500 text-white"
                />
                <Badge
                  label="UMC 최종 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full mt-6">
              <div className="flex justify-start items-center gap-3 mb-1">
                <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-bold text-gray-900">
                  MoniFit
                </h3>
                <a
                  href="https://github.com/Leets-Official/MoniFit-BE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Logo
                    src="/github.svg"
                    title="github"
                    alt="hangman"
                    sizeClass="size-[0.9em] md:size-[2em]"
                  />
                </a>
              </div>
              <section className="mb-1">
                <p className="text-sm font-bold">2025.12.22 ~ 2026.02.13</p>
              </section>
              <section className="mb-4">
                <p className="text-gray-500 text-sm pl-2">
                  UI로써 가시성을 제공해 사용자가 보다 목표를 명확히 인지할 수 있도록 돕는 가계부 어플리케이션입니다.<br></br>
                  --------------------------------------------------------------------------------------<br></br>
                  해당 프로젝트에선 CI/CD 및 서버 관련에 대해서 전담하였습니다.
                </p>
              </section>
              <div className="flex justify-start items-center gap-1">
                <Badge label="AWS" className="bg-blue-500 text-white" />
                <Badge label="Github Actions" className="bg-blue-500 text-white" />
                <Badge
                  label="Leets 최종 프로젝트"
                  className="bg-green-500 text-white"
                />
              </div>
            </SectionBox>
          </div>
        </section>
        <section>
          <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
            {/* 타이틀 */}
            <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-bold text-gray-900">
              Experience
            </h2>

            {/* 대학교 관련 정보, 동아리, 자격증, 수상내역 이런거? */}
            <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
              Key milestones in my developer journey, shown in chronological
              order
            </p>
          </section>
          <section>
            <div>
              <h2 className="md:text-xl">2024</h2>
              <ol className="list-disc pl-8">
                <li>2024년도 1학기, c언어 자습으로 프로그래밍 입문</li>
                <li>2024년도 여름방학, SQLD 자격증 취득</li>
                <li>2024년도 2학기, 컴퓨터공학과로 전과</li>
              </ol>
              <h2 className="md:text-xl">2025</h2>
              <ol className="list-disc pl-8">
                <li>가천대학교 교내 동아리 codein 참여</li>
                <li>codein 내에서 진행하는 해커톤 참여, 1등상 수상</li>
                <li>codein과 밝은눈안과 협업 tf 프로젝트 참여</li>
                <li>2025년도 2학기, 교내동아리 Leets와 연합동아리 UMC 참여</li>
                <li>UMC 내에서 진행된 장기 해커톤, SINO Node.js 파트 참여, 우수상 수상</li>
                <li>UMC 내에서 진행된 데모데이, 속삭편지 Node.js 파트 참여, 우수상 수상</li>
                <li>Leets 내에서 진행된 최종 프로젝트, MoniFit SpringBoot 파트 참여</li>
              </ol>
              <h2 className="md:text-xl">2026</h2>
              <ol className="list-disc pl-8">
                <li>복학 예정</li>
              </ol>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
