import { AWARDS, CAREER_HIGHLIGHTS, PROJECTS, type Project } from "@/content/projects";
import { fetchVelogPosts } from "@/lib/velog";

const GITHUB_URL = "https://github.com/user040131";
const EMAIL = "seungjub270@gmail.com";

export const revalidate = 3600;

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-topline">
        <span className="project-index">0{index + 1}</span>
        <span>{project.period}</span>
      </div>

      <div className="project-title-row">
        <div>
          <p className="project-role">{project.role}</p>
          <h3>{project.name}</h3>
          {project.englishName && <span className="english-name">{project.englishName}</span>}
        </div>
        {project.award && <span className="award-chip">★ {project.award}</span>}
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
        <div className="tag-list" aria-label={`${project.name} 기술 스택`}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.service && (
            <a href={project.service} target="_blank" rel="noreferrer">
              서비스 <ArrowIcon />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function HomePage() {
  const posts = await fetchVelogPosts(3);
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span /> Backend Developer · Park Seungju
          </div>
          <h1>
            <span>기능 구현에서 <br className="mobile-break" />멈추지 않고,</span>
            <span><em>운영까지 <br className="mobile-break" />연결합니다.</em></span>
          </h1>
          <p className="hero-description">
            Spring Boot와 Node.js로 API와 데이터 흐름을 설계하고,
            <br className="desktop-break" /> Docker·CI/CD·클라우드 환경까지 책임지는 백엔드 개발자 박승주입니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              대표 프로젝트 보기 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
            <a className="text-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </div>

        <aside className="terminal-card" aria-label="개발자 프로필 요약">
          <div className="terminal-bar">
            <div><span /><span /><span /></div>
            <p>seungju@backend ~ %</p>
          </div>
          <div className="terminal-body">
            <p><b>$</b> whoami</p>
            <strong>박승주 / Backend Developer</strong>
            <p><b>$</b> cat focus.json</p>
            <dl>
              <div><dt>core</dt><dd>Spring Boot · Node.js</dd></div>
              <div><dt>own</dt><dd>API · Data · CI/CD · Infra</dd></div>
              <div><dt>care</dt><dd>경계 · 예외 · 운영 가능성</dd></div>
            </dl>
            <p><b>$</b> echo $PRINCIPLE</p>
            <strong className="terminal-highlight">“근거로 선택하고, 운영으로 검증합니다.”</strong>
            <span className="cursor" aria-hidden="true" />
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="핵심 성과">
        <div className="section-shell proof-grid">
          <div><strong>4</strong><span>팀 백엔드 프로젝트</span></div>
          <div><strong>3</strong><span>프로젝트 수상</span></div>
          <div><strong>2</strong><span>Spring · Node 서버 스택</span></div>
          <div><strong>SQLD</strong><span>데이터 기본기</span></div>
        </div>
      </section>

      <section className="section-shell value-section" id="about">
        <SectionHeading
          eyebrow="HOW I WORK"
          title="백엔드는 보이지 않는 곳에서 신뢰를 만듭니다."
          description="요청이 성공하는 순간만이 아니라 실패하는 경계, 데이터의 일관성, 반복 가능한 배포까지 함께 설계합니다."
        />
        <div className="value-grid">
          <article>
            <span className="value-number">01</span>
            <h3>도메인을 코드로 명확하게</h3>
            <p>비즈니스 규칙을 조건문의 묶음으로 두지 않고 상태와 책임이 드러나는 흐름으로 정리합니다.</p>
            <small>매칭 세션 · 추천 규칙 · 예산 주기</small>
          </article>
          <article>
            <span className="value-number">02</span>
            <h3>정상과 예외의 경계를 분명하게</h3>
            <p>인증 주체, 검증 미들웨어, 공통 응답을 통해 API 사용자와 서버가 같은 계약을 보게 합니다.</p>
            <small>JWT · Validation · Swagger</small>
          </article>
          <article>
            <span className="value-number">03</span>
            <h3>배포 가능한 코드로 마무리</h3>
            <p>로컬에서 동작하는 기능을 넘어 테스트, 컨테이너, HTTPS, 자동 배포까지 이어지는 경로를 만듭니다.</p>
            <small>Docker · GitHub Actions · AWS/OCI</small>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-shell">
          <SectionHeading
            eyebrow="SELECTED WORK"
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
              <p className="eyebrow">MORE EXPERIENCE</p>
              <h3>빠른 실행에서도 지킨 기본기</h3>
            </div>
            {otherProjects.map((project) => (
              <article key={project.name}>
                <div>
                  <span>{project.period}</span>
                  <h4>{project.name}</h4>
                  <p>{project.headline}</p>
                </div>
                <div className="compact-project-meta">
                  {project.award && <b>{project.award}</b>}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                    GitHub <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell capability-section" id="skills">
        <SectionHeading
          eyebrow="CAPABILITY"
          title="도구는 목적에 맞게, 역량은 근거와 함께."
          description="프로젝트에서 실제로 사용하고 문제를 해결한 기술을 중심으로 정리했습니다."
        />
        <div className="capability-grid">
          <article className="capability-primary">
            <p>01 · APPLICATION</p>
            <h3>Backend</h3>
            <div className="skill-line"><strong>Java · Spring Boot</strong><span>REST API, JPA, Security, 계층형 아키텍처</span></div>
            <div className="skill-line"><strong>Node.js · Express</strong><span>Prisma, 미들웨어, 세션·매칭 도메인</span></div>
          </article>
          <article>
            <p>02 · DATA</p>
            <h3>Database</h3>
            <div className="skill-line"><strong>MySQL · PostgreSQL</strong><span>관계 모델링, 조회·집계, 무결성</span></div>
            <div className="skill-line"><strong>Redis</strong><span>매칭 풀, 캐시, 운영 설정</span></div>
          </article>
          <article>
            <p>03 · DELIVERY</p>
            <h3>Infrastructure</h3>
            <div className="skill-line"><strong>Docker · Actions</strong><span>실행 환경 표준화, 테스트·배포 자동화</span></div>
            <div className="skill-line"><strong>AWS · OCI</strong><span>EC2/S3, HTTPS, Nginx/Caddy</span></div>
          </article>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-shell journey-layout">
          <div>
            <SectionHeading
              eyebrow="JOURNEY"
              title="짧게 배우고, 빠르게 만들고, 반드시 회고합니다."
              description="데이터 기본기에서 시작해 팀 서비스의 API와 운영을 책임지는 개발자로 성장해 왔습니다."
            />
            <div className="timeline">
              {CAREER_HIGHLIGHTS.map((item) => (
                <article key={item.year}>
                  <span>{item.year}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>

          <aside className="award-panel">
            <p className="eyebrow">MILESTONES</p>
            <h3>결과로 남은 성장</h3>
            <div>
              {AWARDS.map((award) => (
                <article key={`${award.title}-${award.organization}`}>
                  <span>{award.year}</span>
                  <div><strong>{award.title}</strong><p>{award.organization}</p></div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section-shell writing-section" id="writing">
          <SectionHeading
            eyebrow="ENGINEERING NOTES"
            title="구현하며 배운 것을 언어로 남깁니다."
            description="새로 알게 된 원리와 시행착오를 기록하고, 다음 선택의 근거로 사용합니다."
          />
          <div className="post-grid">
            {posts.map((post, index) => (
              <a key={post.link} href={post.link} target="_blank" rel="noreferrer">
                <span>0{index + 1}</span>
                <time dateTime={post.pubDate}>
                  {new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.pubDate))}
                </time>
                <h3>{post.title}</h3>
                <p>읽으러 가기 <ArrowIcon /></p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <p className="eyebrow">LET&apos;S BUILD RELIABLE SYSTEMS</p>
          <h2>
            함께 만들 서비스의
            <br /> 든든한 백엔드가 되겠습니다.
          </h2>
          <p>코드와 선택의 이유를 더 자세히 이야기하고 싶습니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`}>이메일 보내기 <ArrowIcon /></a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub 보기 <ArrowIcon /></a>
          </div>
          <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>
    </>
  );
}
