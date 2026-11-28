import * as ko from "@/content/projects";
import type { Project } from "@/content/projects";

// English text for each project, in the same order as the Korean list. Links, stack and period come from the Korean entry.
const PROJECT_TEXT: Partial<Project>[] = [
  {
    name: "Jjikmeok",
    englishName: undefined,
    headline: "Turned taste data into a working recommendation experience.",
    summary:
      "A service for discovering new hobbies based on topics of interest, preferred mood and activity area. As one of three backend developers, I handled Spring Boot API development, recommendation logic improvements and the deployment environment.",
    contribution: [
      "Designed a personalized activity API that combines topic, region and preference tags",
      "Upgraded recommendations from tag-overlap scoring to vector similarity",
      "Used the authenticated principal instead of a userId in the request path to block access to other users' data",
      "Set up the Docker and GitHub Actions deployment environment and Redis configuration",
    ],
    decisions: [
      "Reflect similar tastes more precisely while keeping recommendations explainable",
      "Manage auth boundaries and the runtime environment as one flow alongside feature work",
    ],
  },
  {
    name: "Soksak Letter",
    englishName: undefined,
    headline: "Turned complex matching rules and report generation into stable domain logic.",
    summary:
      "A service that supports self-reflection and sincere connection through a daily question and anonymous letter exchange. As one of three backend developers on a team of eight, I built API, database and operations features.",
    contribution: [
      "Implemented match-candidate exclusion rules covering friends, blocks, existing sessions and the session limit",
      "Synced the matching pool when interests change and tightened session state transitions",
      "Improved weekly report generation and lookup, and the duplicate-generation error flow",
      "Applied a common response format, validation middleware and Swagger for a consistent API contract",
    ],
    decisions: [
      "Manage matching as explicit exclusion conditions and a state model, not a random lookup",
      "Separate the normal no-report state from real failures to simplify client error handling",
    ],
    award: "UMC Demo Day Excellence Award",
  },
  {
    headline: "Delivered developers' code all the way to the server users reach.",
    summary:
      "A service that visualizes budget and spending data to build healthy spending habits. On a three-person backend team, I owned CI/CD and the server environment and helped harden the authentication flow.",
    contribution: [
      "Built a GitHub Actions pipeline running tests, image build and deployment",
      "Standardized the application runtime with Docker Compose so it is reproducible",
      "Introduced Caddy to move the service from HTTP to HTTPS",
      "Stabilized authentication by adjusting the Kakao OAuth path and JWT filter exceptions",
    ],
    decisions: [
      "Unified the unit of execution as a container to reduce deployment failures caused by environment differences",
      "Kept test logs and reports, not just automated deploys, so failures can be traced",
    ],
    serviceNote: "Server shut down",
  },
  {
    headline: "Completed the API contract and data flow end to end, even in a short hackathon.",
    summary:
      "A service that classifies emotion records into Signal and Noise and reviews them as reports. As one of three backend developers, I implemented the post, bookmark, classified lookup and report APIs and the Prisma schema.",
    contribution: [
      "Implemented Signal/Noise lookups, post deletion and the bookmark toggle API",
      "Built the report and Noise-to-Signal conversion APIs and cleaned up the Swagger docs",
    ],
    decisions: ["Applied a common response format and auth middleware to cut integration cost in a short collaboration"],
    award: "UMC Long Hackathon Excellence Award",
  },
];

export const PROJECTS: Project[] = ko.PROJECTS.map((project, index) => ({ ...project, ...PROJECT_TEXT[index] }));
if (process.env.NODE_ENV !== "production") {
  console.assert(PROJECT_TEXT.length === ko.PROJECTS.length, "every project needs English text");
}

export const CAREER_HIGHLIGHTS = [
  {
    period: "2026 H1",
    items: [
      "Joined It's Time (intercollegiate club), 9th cohort",
      "Worked on Spring Boot and AWS/OCI for the Jjikmeok project at It's Time",
    ],
  },
  {
    period: "2025 H2",
    items: [
      "Joined Leets (campus club) and UMC (intercollegiate club)",
      "Built Node.js APIs for SINO at the UMC Long Hackathon, Excellence Award",
      "Built Node.js APIs for Soksak Letter at UMC Demo Day, Excellence Award",
      "Completed the UMC Node.js track",
      "Worked on Spring Boot for MoniFit, the Leets final project",
      "Completed the Leets Server track",
    ],
  },
  {
    period: "2025 H1",
    items: [
      "Joined CodeIn (campus club), 1st place at the club hackathon",
      "Took part in the CodeIn X Bright Eye Clinic collaboration task force project",
    ],
  },
];

export const AWARDS = [
  { title: "Excellence Award", organization: "UMC Demo Day · Soksak Letter", year: "2025" },
  { title: "Excellence Award", organization: "UMC Long Hackathon · SINO", year: "2025" },
  { title: "1st Place", organization: "CodeIn Campus Hackathon", year: "2025" },
  { title: "SQLD", organization: "Korea Data Agency", year: "2024" },
];

export const MILESTONES = [
  {
    period: "2026 H1",
    items: [{ title: "Jjikmeok", detail: "It's Time 9th cohort · Spring Boot API and recommendation logic, AWS/OCI deployment environment" }],
  },
  {
    period: "2025 H2",
    items: [
      { title: "Soksak Letter", detail: "UMC Demo Day Excellence Award · Node.js API development" },
      { title: "SINO", detail: "UMC Long Hackathon Excellence Award · Node.js API development" },
    ],
  },
  {
    period: "2025 H1",
    items: [{ title: "CodeIn Hackathon", detail: "1st place, campus club hackathon" }],
  },
  {
    period: "2024",
    items: [{ title: "SQLD", detail: "Korea Data Agency" }],
  },
];
