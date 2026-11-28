import * as ko from "@/content/projects";
import * as en from "@/content/projects.en";

export type Lang = "ko" | "en";

// Project, career and award data per language. English must export the same shape as Korean.
export const CONTENT: Record<Lang, typeof ko> = { ko, en };

// Where each language's home page lives. Korean stays at the root so existing links keep working.
export const HOME: Record<Lang, string> = { ko: "/", en: "/en/" };

const UI_KO = {
  dateLocale: "ko-KR",
  // Site shell
  metaTitle: "박승주 | 백엔드 개발자",
  metaTitleTemplate: "%s | 박승주",
  metaDescription:
    "Spring Boot와 Node.js로 API와 데이터 흐름을 설계하고 Docker, CI/CD, 클라우드 운영까지 연결하는 백엔드 개발자 박승주의 포트폴리오입니다.",
  metaKeywords: ["박승주", "백엔드 개발자", "Spring Boot", "Node.js", "Java", "포트폴리오", "CI/CD"],
  authorName: "박승주",
  ogLocale: "ko_KR",
  ogSiteName: "박승주 백엔드 포트폴리오",
  ogTitle: "박승주 | 선택을 결과로 잇는 백엔드 개발자",
  ogDescription: "API와 데이터 흐름을 설계하고 배포와 운영까지 책임지는 백엔드 개발자입니다.",
  twitterDescription: "선택지를 설명할 수 있는 개발자, 선택을 결과로 잇는 개발자.",
  skipLink: "본문으로 건너뛰기",
  navLabel: "주요 메뉴",
  nav: { projects: "프로젝트", skills: "역량", journey: "성장", writing: "글", contact: "연락" },
  emailCta: "이메일 보내기",
  // The toggle is written in the language it switches to.
  switchLabel: "EN",
  switchAria: "View in English",
  footerLine: "문제를 이해하고 · 근거로 선택하고 · 운영으로 검증합니다.",
  // Home page. Each hero title line is split where a narrow screen breaks it.
  heroTitle: [["선택지를 ", "설명할 수 있는 개발자,"], ["선택을 결과로 ", "잇는 개발자."]],
  heroDescription: ["Spring Boot와 Node.js로 API와 데이터 흐름을 설계하고,", " Docker·CI/CD·클라우드 환경까지 책임지는 백엔드 개발자 박승주입니다."],
  heroMeta: "가천대학교 컴퓨터공학과 3학년 재학 · 군 복무 후 졸업 예정",
  viewProjects: "대표 프로젝트 보기",
  githubProfile: "GitHub 프로필",
  tistoryBlog: "Tistory 블로그",
  featuredProjects: "대표 프로젝트",
  awardsLabel: "수상·자격",
  projectsDescription: "실제 저장소의 구현과 병합 이력을 바탕으로 정리한 대표 백엔드 프로젝트입니다.",
  projectsTitle: "기술 이름보다, 해결한 문제로 설명합니다.",
  contributionHeading: "제가 만든 변화",
  decisionsHeading: "판단의 기준",
  stackLabel: "기술 스택",
  service: "서비스",
  myPrs: "내 PR",
  repository: "저장소",
  skillsTitle: "도구는 목적에 맞게, 역량은 근거와 함께.",
  skillsDescription: "프로젝트에서 실제로 사용하고 문제를 해결한 기술을 중심으로 정리했습니다.",
  // Same order as the skill rows on the page.
  skillDetails: [
    "REST API, JPA, Security, 계층형 아키텍처",
    "Prisma, 미들웨어, 세션·매칭 도메인",
    "관계 모델링, 조회·집계, 무결성",
    "매칭 풀, 캐시, 운영 설정",
    "실행 환경 표준화, 테스트·배포 자동화",
    "EC2/S3, HTTPS, Nginx/Caddy",
  ],
  journeyTitle: "짧게 배우고, 빠르게 만들고, 반드시 회고합니다.",
  journeyDescription: "데이터 기본기에서 시작해 팀 서비스의 API와 운영을 책임지는 개발자로 성장해 왔습니다.",
  milestonesHeading: "결과로 남은 성장",
  writingTitle: "구현하며 배운 것을 언어로 남깁니다.",
  writingDescription: "새로 알게 된 원리와 시행착오를 기록하고, 다음 선택의 근거로 사용합니다.",
  velogFallback: "Velog에서 글 보기",
  tagsLabel: "태그",
  readPost: "읽으러 가기",
  contactTitle: ["함께 만들 서비스의", " 든든한 백엔드가 되겠습니다."],
  contactDescription: "코드와 선택의 이유를 더 자세히 이야기하고 싶습니다.",
};

const UI_EN: typeof UI_KO = {
  dateLocale: "en-US",
  metaTitle: "Seungju Park | Backend Developer",
  metaTitleTemplate: "%s | Seungju Park",
  metaDescription:
    "Portfolio of Seungju Park, a backend developer who designs APIs and data flows with Spring Boot and Node.js and carries them through Docker, CI/CD and cloud operations.",
  metaKeywords: ["Seungju Park", "Backend Developer", "Spring Boot", "Node.js", "Java", "Portfolio", "CI/CD"],
  authorName: "Seungju Park",
  ogLocale: "en_US",
  ogSiteName: "Seungju Park Backend Portfolio",
  ogTitle: "Seungju Park | A backend developer who turns choices into results",
  ogDescription: "A backend developer who designs APIs and data flows and owns deployment and operations.",
  twitterDescription: "A developer who can explain the options, and turn choices into results.",
  skipLink: "Skip to main content",
  navLabel: "Main menu",
  nav: { projects: "Projects", skills: "Skills", journey: "Journey", writing: "Writing", contact: "Contact" },
  emailCta: "Email me",
  switchLabel: "한",
  switchAria: "한국어로 보기",
  footerLine: "Understand the problem · Choose with evidence · Verify in operation.",
  heroTitle: [["A developer who can ", "explain the options,"], ["and turn choices ", "into results."]],
  heroDescription: ["I design APIs and data flows with Spring Boot and Node.js,", " and own everything through Docker, CI/CD and the cloud. I'm Seungju Park, a backend developer."],
  heroMeta: "Junior in Computer Engineering at Gachon University · Graduating after military service",
  viewProjects: "View featured projects",
  githubProfile: "GitHub profile",
  tistoryBlog: "Tistory blog",
  featuredProjects: "Featured projects",
  awardsLabel: "Awards and certifications",
  projectsTitle: "Explained by the problems solved, not the names of the tools.",
  projectsDescription: "Featured backend projects, written up from the actual implementation and merge history in each repository.",
  contributionHeading: "What I changed",
  decisionsHeading: "Why I chose it",
  stackLabel: "tech stack",
  service: "Service",
  myPrs: "My PRs",
  repository: "Repository",
  skillsTitle: "Tools that fit the purpose, skills backed by evidence.",
  skillsDescription: "Centered on the technologies I actually used to solve problems in projects.",
  skillDetails: [
    "REST APIs, JPA, Security, layered architecture",
    "Prisma, middleware, session and matching domains",
    "Relational modeling, queries and aggregation, integrity",
    "Matching pool, caching, runtime configuration",
    "Standardized runtime, automated testing and deployment",
    "EC2/S3, HTTPS, Nginx/Caddy",
  ],
  journeyTitle: "Learn in short cycles, build fast, always look back.",
  journeyDescription: "Starting from data fundamentals, I have grown into a developer who owns the API and operations of team services.",
  milestonesHeading: "Growth that left results",
  writingTitle: "I put what I learn while building into words.",
  writingDescription: "I record new principles and the trial and error behind them, and use them as the basis for the next choice.",
  velogFallback: "Read on Velog",
  tagsLabel: "Tags",
  readPost: "Read post",
  contactTitle: ["I'll be the dependable backend", " for the service we build together."],
  contactDescription: "I'd love to talk in more detail about the code and the reasons behind each choice.",
};

export const UI: Record<Lang, typeof UI_KO> = { ko: UI_KO, en: UI_EN };
