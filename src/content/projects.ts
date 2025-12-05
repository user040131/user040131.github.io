export type ProjectId = "Roommate" | "Roommate_Sum" | "myOwnPage" | "myOwnPage_Sum";

export const PROJECT_DESCRIPTIONS: Record<ProjectId, string> = {
    Roommate: `
Stackers는 Spring Boot와 React를 기반으로 한 스터디/미션 관리 플랫폼입니다.
팀별 미션 관리, 출석 체크, 리워드 시스템을 통해 스터디 참여를 유도합니다.
`,
    Roommate_Sum: `
Roommate는 Springboot, Thymeleaf를 사용해 개발된 ai 정량적 평가를 기반으로 한 
룸메이트 매칭 웹 애플리케이션입니다.
`,
    myOwnPage: `
개발 블로그 글을 자동으로 불러와서 포트폴리오에 노출하는 프로젝트입니다.
Next.js App Router와 Velog RSS를 활용해서 최신 글 두 개를 실시간으로 가져옵니다.
`,
    myOwnPage_Sum: `
한 줄 소개보다, 실제 코드와 결과물로 말하는 개발자를 보여주기 위해 포트폴리오를 직접 제작했습니다.
`,
};
