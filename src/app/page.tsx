import { AWARDS, CAREER_HIGHLIGHTS, MILESTONES, PROJECTS, type Project } from "@/content/projects";
import { fetchVelogPosts } from "@/lib/velog";

const GITHUB_URL = "https://github.com/user040131";
const TISTORY_URL = "https://seungjub270.tistory.com/";
const EMAIL = "seungjub270@gmail.com";

export const revalidate = 3600;

// Team repos: link straight to this author's merged and open PRs so claims can be checked.
function myPullsUrl(project: Project) {
  return `${project.github}/pulls?q=is%3Apr+author%3Auser040131`;
}

const FEATURED = PROJECTS.filter((project) => project.featured);

// shortcut: regex tag/entity stripping is enough for a two-line teaser, swap for a parser if excerpts get longer
function excerpt(html: string) {
  return String(html ?? "").replace(/<[^>]*>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim().slice(0, 140);
}

// Each skill row links to the featured projects whose stack lists it (1-based, matches #project-N).
function SkillLine({ name, detail, projects }: { name: string; detail: string; projects: number[] }) {
  return (
    <div className="skill-line">
      <strong>{name}</strong>
      <span>{detail}</span>
      <p>
        {projects.map((n) => (
          <a key={n} href={`#project-${n}`}>{FEATURED[n - 1].name}</a>
        ))}
      </p>
    </div>
  );
}

function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d={down ? "M8 3v10M3.5 8.5 8 13l4.5-4.5" : "M4.5 11.5l7-7M5.5 4.5h6v6"} />
    </svg>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <h2>{label}</h2>
      <p className="section-lead">{title}</p>
      <p>{description}</p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card liquid-glass liquid-glass--frost" id={`project-${index + 1}`}>
      <div className="project-topline">
        <span>{project.period}</span>
      </div>

      <div className="project-title-row">
        <div>
          <p className="project-role">{project.role}</p>
          <h3>{project.name}</h3>
          {project.englishName && <span className="english-name">{project.englishName}</span>}
        </div>
        {project.award && <span className="award-chip">{project.award}</span>}
      </div>

      <p className="project-headline">{project.headline}</p>
      <p className="project-summary">{project.summary}</p>

      <div className="project-detail-grid">
        <div>
          <h4>제가 만든 변화</h4>
          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>판단의 기준</h4>
          <ul>
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footer">
        <ul className="tag-list" aria-label={`${project.name} 기술 스택`}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.serviceNote && <span>{project.serviceNote}</span>}
          {project.service && (
            <a href={project.service} target="_blank" rel="noreferrer" aria-label={`${project.name} 서비스`}>
              서비스 <ArrowIcon />
            </a>
          )}
          <a href={myPullsUrl(project)} target="_blank" rel="noreferrer" aria-label={`${project.name} 내 PR`}>
            내 PR <ArrowIcon />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} 저장소`}>
            저장소 <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function HomePage() {
  const posts = await fetchVelogPosts(3);
  const featuredProjects = FEATURED;
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <h1>
            <span>선택지를 <br className="mobile-break" />설명할 수 있는 개발자,</span>
            <span><em>선택을 결과로 <br className="mobile-break" />잇는 개발자.</em></span>
          </h1>
          <p className="hero-description">
            Spring Boot와 Node.js로 API와 데이터 흐름을 설계하고,
            <br className="desktop-break" /> Docker·CI/CD·클라우드 환경까지 책임지는 백엔드 개발자 박승주입니다.
          </p>
          <p className="hero-meta">가천대학교 컴퓨터공학과 3학년 재학 · 군 복무 후 졸업 예정</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              대표 프로젝트 보기 <ArrowIcon down />
            </a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub 프로필 <ArrowIcon />
            </a>
            <a className="button button-secondary" href={TISTORY_URL} target="_blank" rel="noreferrer">
              Tistory 블로그 <ArrowIcon />
            </a>
          </div>
        </div>

        <aside className="hero-summary liquid-glass" aria-labelledby="hero-summary-title">
          <h2 id="hero-summary-title">대표 프로젝트</h2>
          <ol>
            {featuredProjects.map((project, index) => (
              <li key={project.name}>
                <a href={`#project-${index + 1}`}>
                  <strong>{project.name}</strong>
                  {project.award && <b>{project.award}</b>}
                  <span>{project.headline}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="proof-strip" aria-label="수상·자격">
        <div className="section-shell proof-grid liquid-glass">
          {AWARDS.map((award) => (
            <div key={`${award.title}-${award.organization}`}>
              <strong>{award.title}</strong>
              <span>{award.organization} · {award.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-shell">
          <SectionHeading
            label="프로젝트"
            title="기술 이름보다, 해결한 문제로 설명합니다."
            description="실제 저장소의 구현과 병합 이력을 바탕으로 정리한 대표 백엔드 프로젝트입니다."
          />
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          <div className="compact-projects">
            <div>
              <h3>빠른 실행에서도 지킨 기본기</h3>
            </div>
            {otherProjects.map((project) => (
              <article className="liquid-glass liquid-glass--frost" key={project.name}>
                <div>
                  <span>{project.period}</span>
                  <h4>{project.name}</h4>
                  <p>{project.headline}</p>
                </div>
                <div className="compact-project-meta">
                  {project.award && <b>{project.award}</b>}
                  <a href={myPullsUrl(project)} target="_blank" rel="noreferrer" aria-label={`${project.name} 내 PR`}>
                    내 PR <ArrowIcon />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} 저장소`}>
                    저장소 <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell capability-section" id="skills">
        <SectionHeading
          label="역량"
          title="도구는 목적에 맞게, 역량은 근거와 함께."
          description="프로젝트에서 실제로 사용하고 문제를 해결한 기술을 중심으로 정리했습니다."
        />
        <div className="capability-grid">
          <article className="capability-primary liquid-glass liquid-glass--frost">
            <h3>Backend</h3>
            <SkillLine name="Java · Spring Boot" detail="REST API, JPA, Security, 계층형 아키텍처" projects={[1, 3]} />
            <SkillLine name="Node.js · Express" detail="Prisma, 미들웨어, 세션·매칭 도메인" projects={[2]} />
          </article>
          <article className="liquid-glass liquid-glass--frost">
            <h3>Database</h3>
            <SkillLine name="MySQL · PostgreSQL" detail="관계 모델링, 조회·집계, 무결성" projects={[2]} />
            <SkillLine name="Redis" detail="매칭 풀, 캐시, 운영 설정" projects={[1, 2]} />
          </article>
          <article className="liquid-glass liquid-glass--frost">
            <h3>Infrastructure</h3>
            <SkillLine name="Docker · Actions" detail="실행 환경 표준화, 테스트·배포 자동화" projects={[1, 3]} />
            <SkillLine name="AWS · OCI" detail="EC2/S3, HTTPS, Nginx/Caddy" projects={[1, 3]} />
          </article>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-shell">
          <SectionHeading
            label="성장"
            title="짧게 배우고, 빠르게 만들고, 반드시 회고합니다."
            description="데이터 기본기에서 시작해 팀 서비스의 API와 운영을 책임지는 개발자로 성장해 왔습니다."
          />
          <div className="journey-layout">
            <div className="timeline">
              {CAREER_HIGHLIGHTS.map((item) => (
                <article key={item.period}>
                  <h3>{item.period}</h3>
                  <ul>
                    {item.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <aside className="award-panel liquid-glass" aria-labelledby="award-panel-title">
              <h3 id="award-panel-title">결과로 남은 성장</h3>
              <ol>
                {MILESTONES.map((milestone) => (
                  <li key={milestone.period}>
                    <span>{milestone.period}</span>
                    {milestone.items.map((item) => (
                      <div key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.detail}</p>
                      </div>
                    ))}
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-shell writing-section" id="writing">
          <SectionHeading
            label="글"
            title="구현하며 배운 것을 언어로 남깁니다."
            description="새로 알게 된 원리와 시행착오를 기록하고, 다음 선택의 근거로 사용합니다."
          />
        {posts.length === 0 ? (
          // Feed unavailable at build time: keep a way to reach the blog.
          <a className="text-link" href="https://velog.io/@user040131" target="_blank" rel="noreferrer">
            Velog에서 글 보기 <ArrowIcon />
          </a>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <a className="liquid-glass liquid-glass--frost" key={post.link} href={post.link} target="_blank" rel="noreferrer">
                <time dateTime={post.pubDate}>
                  {new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.pubDate))}
                </time>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{excerpt(post.description)}</p>
                {post.tags.length > 0 && (
                  <ul className="post-tags" aria-label="태그">
                    {post.tags.slice(0, 3).map((tag) => (
                      <li key={tag}>#{tag}</li>
                    ))}
                  </ul>
                )}
                <p>읽으러 가기 <ArrowIcon /></p>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner liquid-glass">
          <h2>
            함께 만들 서비스의
            <br /> 든든한 백엔드가 되겠습니다.
          </h2>
          <p>코드와 선택의 이유를 더 자세히 이야기하고 싶습니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`}>이메일 보내기 <ArrowIcon /></a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub 프로필 <ArrowIcon /></a>
          </div>
          <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>
    </>
  );
}
