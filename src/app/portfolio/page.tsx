"use client";
//use client를 붙이면 client side rendering이 됨, 그러면 client가 완성시키기에 onClick같은 이벤트 발생이 가능
//저걸 안 붙이면 server side rendering이 되어 완성시켜서 client에게 주어야하기에 이벤트 발생이 불가능

import SectionBox from "../components/SectionBox";
import Logo from "../components/Image";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl p-6">
        {/* 공용 섹션 박스 - 어떤 정적 페이지에도 쉽게 재사용 */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
          <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Portfolio
          </h1>

          {/* 보조 설명 */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            All about me
          </p>
        </section>
        <SectionBox title="About me">
          <p className="text-sm text-gray-600">
            <h1>I am a Full-Stack Developer</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <button
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                onClick={() => alert("GitHub")}
              >
                GitHub
              </button>
              <button
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                onClick={() => alert("LinkedIn")}
              >
                LinkedIn
              </button>
            </div>
          </p>
        </SectionBox>
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
          <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-extrabold text-gray-900">
            Projects &amp; Technical Skills
          </h2>{" "}
          {/* 프로젝트 당 사용된 언어, 라이브러리, 프레임워크, 기타 기술 작성 */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            Projects, Skills, and what I build
          </p>
        </section>
        <section className="mx-auto w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <SectionBox className="h-full">
              <section className="pb-4">
                <div className="flex justify-start items-center gap-3 mb-3">
                  <h3 className="col-span-full text-center mr-4 text-6xl md:text-2xl font-extrabold text-gray-900">
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
              <div className="flex justify-start items-center gap-3">
                <Logo src="/logo/java.svg" title="Java" alt="Java" />
                <Logo src="/logo/spring.svg" title="Spring" alt="Spring" />
              </div>
            </SectionBox>
            <SectionBox className="h-full">
              <section className="pb-4">
                <div className="flex justify-start items-center gap-3 mb-3">
                  <h3 className="col-span-full text-center mr-1 text-6xl md:text-2xl font-extrabold text-gray-900">
                    if (you can) save him;
                  </h3>
                  <a
                    href="https://www.youtube.com/watch?v=ftclpB9toT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Logo
                      src="/youtube.svg"
                      title="youtube"
                      alt="hangman"
                      sizeClass="size-[0.9em] md:size-[2em]"
                    />
                  </a>
                  <a
                    href="https://github.com/user040131/if-you-can-save-him"
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
              <div className="flex justify-start items-center gap-3">
                <Logo src="/logo/java.svg" title="Java" alt="Java" />
                <Logo src="/logo/spring.svg" title="Spring" alt="Spring" />
              </div>
            </SectionBox>
            <SectionBox className="h-full">
              <section className="pb-4">
                <div className="flex justify-start items-center gap-3 mb-3">
                  <h3 className="col-span-full text-left mr-4 text-6xl md:text-2xl font-extrabold text-gray-900">
                    MyOwnPage
                  </h3>
                  <a
                    href="https://github.com/user040131/my_own_portfolio"
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
                </div>
              </section>
              <div className="flex justify-start items-center gap-3">
                <Logo src="/logo/html.svg" title="HTML" alt="HTML" />
                <Logo src="/logo/css.svg" title="CSS" alt="CSS" />
                <Logo src="/logo/JS.svg" title="JavaScript" alt="JavaScript" />
                <Logo
                  src="/logo/next.svg"
                  title="Next.js"
                  alt="Next.js"
                  ml="ml-2"
                />
              </div>
            </SectionBox>
            <SectionBox className="h-full">
              <Logo src="/logo/node.svg" title="Node.js" alt="Node.js" />
            </SectionBox>
            <SectionBox className="h-full">
              <Logo src="/logo/spring.svg" title="Spring" alt="Spring" />
            </SectionBox>
            <SectionBox className="h-full">
              <Logo src="/logo/next.svg" title="Next.js" alt="Next.js" />
            </SectionBox>
          </div>
        </section>
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
          <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-extrabold text-gray-900">
            Experience
          </h2>
          {/* 대학교 관련 정보, 동아리, 자격증, 수상내역 이런거? */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            Education, clubs, certifications, and awards — snapshot of my
            experience.
          </p>
        </section>
        <section>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-sky-300 w-45 h-45 shrink-0">
            <Logo src="/college.svg" title="college" alt="college" sizeClass="size-40"/>
            </div>
            <SectionBox className="w-full">
              <p className="text-center text-6xl md:text-3xl font-bold text-gray-900">
                가천대학교
              </p>
            </SectionBox>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-3">
            <SectionBox className="w-full">
              <p className="text-center text-6xl md:text-3xl font-bold text-gray-900">
                Leets, UMC, codein
              </p>
            </SectionBox>
            <div className="flex items-center justify-center rounded-full bg-sky-300 w-45 h-45 shrink-0">
            <Logo src="/circle.svg" title="college" alt="college" sizeClass="size-32"/>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-sky-300 w-45 h-45 shrink-0">
            <Logo src="/certification.svg" title="college" alt="college" sizeClass="size-30"/>
            </div>
            <SectionBox className="w-full">
              <p className="text-center text-6xl md:text-3xl font-bold text-gray-900">
                SQLD
              </p>
            </SectionBox>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-3">
            <SectionBox className="w-full">
              <p className="text-center text-6xl md:text-3xl font-bold text-gray-900">
                병신이라 없음
              </p>
            </SectionBox>
            <div className="flex items-center justify-center rounded-full bg-sky-300 w-45 h-45 shrink-0">
            <Logo src="/award.svg" title="college" alt="college" sizeClass="size-30"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
