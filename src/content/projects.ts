export type Project = {
  name: string;
  englishName?: string;
  period: string;
  role: string;
  headline: string;
  summary: string;
  contribution: string[];
  decisions: string[];
  stack: string[];
  award?: string;
  github: string;
  service?: string;
  serviceNote?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "찍먹",
    englishName: "Jjikmeok",
    period: "2026.03 — 2026.07",
    role: "Backend · Personalization · Infrastructure",
    headline: "취향 데이터를 실제 추천 경험으로 연결했습니다.",
    summary:
      "관심 주제·선호 분위기·활동 지역을 바탕으로 새로운 취미를 탐색하는 서비스입니다. 백엔드 개발자 3인 중 한 명으로 Spring Boot API 개발부터 추천 로직 고도화, 배포 환경 구성까지 담당했습니다.",
    contribution: [
      "주제·지역·선호 태그를 조합한 사용자별 맞춤 활동 API 설계",
      "태그 중복 점수 기반 추천을 벡터 유사도 방식으로 고도화",
      "요청 경로의 userId 대신 인증 주체를 사용해 타 사용자 데이터 조회 차단",
      "Docker·GitHub Actions 기반 배포 환경과 Redis 설정 구성",
    ],
    decisions: [
      "추천 결과의 설명 가능성을 유지하면서 유사 취향을 더 세밀하게 반영",
      "기능 구현과 함께 인증 경계와 운영 환경까지 하나의 흐름으로 관리",
    ],
    stack: ["Java", "Spring Boot", "JPA", "Redis", "Docker", "GitHub Actions", "AWS · OCI"],
    github: "https://github.com/JJICK-MEOK/Server",
    service: "https://jjick-meok.vercel.app/",
    featured: true,
  },
  {
    name: "속삭편지",
    englishName: "Soksak Letter",
    period: "2025.11 — 2026.02",
    role: "Backend · Matching · Reporting",
    headline: "복잡한 매칭 규칙과 리포트 생성을 안정적인 도메인 로직으로 풀었습니다.",
    summary:
      "오늘의 질문과 익명 편지 교환으로 자기 성찰과 진정성 있는 연결을 돕는 서비스입니다. 8인 팀의 백엔드 개발자 3인 중 한 명으로 API·DB·운영 기능을 개발했습니다.",
    contribution: [
      "친구·차단·기존 세션·최대 세션 수를 반영한 매칭 후보 제외 규칙 구현",
      "관심사 변경 시 매칭 풀을 동기화하고 세션 상태 전이 로직 보완",
      "주간 리포트 생성·조회 기능과 중복 생성 예외 흐름 개선",
      "공통 응답·검증 미들웨어·Swagger를 적용해 API 계약 일관성 강화",
    ],
    decisions: [
      "매칭을 단순 랜덤 조회가 아닌 명시적인 제외 조건과 상태 모델로 관리",
      "리포트가 없는 정상 상태와 실제 장애를 구분해 클라이언트 예외 처리 단순화",
    ],
    stack: ["Node.js", "Express", "Prisma", "MySQL", "Redis", "JWT", "Docker · Nginx"],
    award: "UMC 데모데이 우수상",
    github: "https://github.com/soksak-letter/soksak-Server",
    service: "https://www.soksak-letter.com/",
    featured: true,
  },
  {
    name: "MoniFit",
    period: "2025.12 — 2026.02",
    role: "Backend · CI/CD · Server Operations",
    headline: "개발자의 코드를 사용자가 만나는 서버까지 전달했습니다.",
    summary:
      "예산과 지출 데이터를 시각화해 건강한 소비 습관을 돕는 서비스입니다. 백엔드 3인 팀에서 CI/CD와 서버 운영 환경을 전담하고 인증 흐름을 함께 보완했습니다.",
    contribution: [
      "GitHub Actions에서 테스트·이미지 빌드·배포로 이어지는 파이프라인 구성",
      "Docker Compose로 애플리케이션 실행 환경을 재현 가능하게 표준화",
      "Caddy를 도입해 HTTP에서 HTTPS 운영 환경으로 전환",
      "Kakao OAuth 경로와 JWT 필터 예외 조건을 조정해 인증 흐름 안정화",
    ],
    decisions: [
      "환경 차이로 생기는 배포 실패를 줄이기 위해 실행 단위를 컨테이너로 통일",
      "배포 자동화뿐 아니라 테스트 로그와 리포트까지 남겨 실패 원인 추적성 확보",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Security", "Docker", "GitHub Actions", "Caddy", "AWS"],
    github: "https://github.com/Leets-Official/MoniFit-BE",
    serviceNote: "서버 운영 종료",
    featured: true,
  },
  {
    name: "SINO",
    period: "2025.12",
    role: "Backend · API · Data Modeling",
    headline: "짧은 해커톤에서도 API 계약과 데이터 흐름을 끝까지 완성했습니다.",
    summary:
      "감정 기록을 Signal과 Noise로 분류하고 리포트로 돌아보는 서비스입니다. 백엔드 개발자 3인 중 한 명으로 게시물·북마크·분류 조회·리포트 API와 Prisma 스키마를 구현했습니다.",
    contribution: [
      "Signal·Noise별 조회와 게시물 삭제·북마크 토글 API 구현",
      "리포트 및 Noise→Signal 전환 API와 Swagger 문서 정비",
    ],
    decisions: ["공통 응답 형식과 인증 미들웨어를 적용해 단기 협업의 통합 비용 절감"],
    stack: ["Node.js", "Express", "Prisma", "MySQL", "Swagger"],
    award: "UMC 장기 해커톤 우수상",
    github: "https://github.com/UMC-SINO/SINO-Server",
  },
];

export const CAREER_HIGHLIGHTS = [
  {
    period: "2026 상반기",
    items: [
      "연합 동아리 It's Time 9기 참여",
      "It's Time에서 찍먹 프로젝트 Spring Boot 및 AWS/OCI 파트 참여",
    ],
  },
  {
    period: "2025 하반기",
    items: [
      "교내 동아리 Leets 및 연합 동아리 UMC 참여",
      "UMC 장기 해커톤 SINO에 Node.js 파트 API 개발로 참여, 우수상 수상",
      "UMC 데모데이 속삭편지에 Node.js 파트 API 개발로 참여, 우수상 수상",
      "UMC Node.js 파트 수료",
      "Leets 최종 프로젝트 MoniFit Spring Boot 파트 참여",
      "Leets Server 파트 수료",
    ],
  },
  {
    period: "2025 상반기",
    items: [
      "교내 동아리 CodeIn 참여, 동아리 해커톤 1등상 수상",
      "CodeIn X 밝은눈안과 협업 TF 프로젝트 참여",
    ],
  },
];

export const AWARDS = [
  { title: "우수상", organization: "UMC 데모데이 · 속삭편지", year: "2025" },
  { title: "우수상", organization: "UMC 장기 해커톤 · SINO", year: "2025" },
  { title: "1등상", organization: "CodeIn 교내 해커톤", year: "2025" },
  { title: "SQLD", organization: "한국데이터산업진흥원", year: "2024" },
];

// "결과로 남은 성장" panel: what each half-year left behind, award or not. One entry per period, so results from the same period stay together.
export const MILESTONES = [
  {
    period: "2026 상반기",
    items: [{ title: "찍먹", detail: "It's Time 9기 · Spring Boot API와 추천 로직 개발, AWS/OCI 배포 환경 구성" }],
  },
  {
    period: "2025 하반기",
    items: [
      { title: "속삭편지", detail: "UMC 데모데이 우수상 · Node.js 파트 API 개발" },
      { title: "SINO", detail: "UMC 장기 해커톤 우수상 · Node.js 파트 API 개발" },
    ],
  },
  {
    period: "2025 상반기",
    items: [{ title: "CodeIn 해커톤", detail: "교내 동아리 해커톤 1등상" }],
  },
  {
    period: "2024",
    items: [{ title: "SQLD", detail: "한국데이터산업진흥원" }],
  },
];
