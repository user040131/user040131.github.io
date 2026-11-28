import type { Project } from "@/content/projects";
import { CONTENT, UI, type Lang } from "@/content/ui";
import { fetchVelogPosts } from "@/lib/velog";

const GITHUB_URL = "https://github.com/user040131";
const TISTORY_URL = "https://seungjub270.tistory.com/";
const EMAIL = "seungjub270@gmail.com";

// Team repos: link straight to this author's merged and open PRs so claims can be checked.
function myPullsUrl(project: Project) {
  return `${project.github}/pulls?q=is%3Apr+author%3Auser040131`;
}

// shortcut: regex tag/entity stripping is enough for a two-line teaser, swap for a parser if excerpts get longer
function excerpt(html: string) {
  return String(html ?? "").replace(/<[^>]*>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim().slice(0, 140);
}

// Each skill row links to the projects whose stack lists it (1-based, matches #project-N).
function SkillLine({ name, detail, projects, lang }: { name: string; detail: string; projects: number[]; lang: Lang }) {
  return (
    <div className="skill-line">
      <strong>{name}</strong>
      <span>{detail}</span>
      <p>
        {projects.map((n) => (
          <a key={n} href={`#project-${n}`}>{CONTENT[lang].PROJECTS[n - 1].name}</a>
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

function ProjectCard({ project, index, lang }: { project: Project; index: number; lang: Lang }) {
  const t = UI[lang];
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
          <h4>{t.contributionHeading}</h4>
          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.decisionsHeading}</h4>
          <ul>
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footer">
        <ul className="tag-list" aria-label={`${project.name} ${t.stackLabel}`}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.serviceNote && <span>{project.serviceNote}</span>}
          {project.service && (
            <a href={project.service} target="_blank" rel="noreferrer" aria-label={`${project.name} ${t.service}`}>
              {t.service} <ArrowIcon />
            </a>
          )}
          <a href={myPullsUrl(project)} target="_blank" rel="noreferrer" aria-label={`${project.name} ${t.myPrs}`}>
            {t.myPrs} <ArrowIcon />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} ${t.repository}`}>
            {t.repository} <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function Home({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const { AWARDS, CAREER_HIGHLIGHTS, MILESTONES, PROJECTS } = CONTENT[lang];
  const posts = await fetchVelogPosts(3);

  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <h1>
            <span>{t.heroTitle[0][0]}<br className="mobile-break" />{t.heroTitle[0][1]}</span>
            <span><em>{t.heroTitle[1][0]}<br className="mobile-break" />{t.heroTitle[1][1]}</em></span>
          </h1>
          <p className="hero-description">
            {t.heroDescription[0]}
            <br className="desktop-break" />{t.heroDescription[1]}
          </p>
          <p className="hero-meta">{t.heroMeta}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.viewProjects} <ArrowIcon down />
            </a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              {t.githubProfile} <ArrowIcon />
            </a>
            <a className="button button-secondary" href={TISTORY_URL} target="_blank" rel="noreferrer">
              {t.tistoryBlog} <ArrowIcon />
            </a>
          </div>
        </div>

        <aside className="hero-summary liquid-glass" aria-labelledby="hero-summary-title">
          <h2 id="hero-summary-title">{t.featuredProjects}</h2>
          <ol>
            {/* The panel highlights the first two projects in PROJECTS (찍먹, 속삭편지); the section below shows all of them. */}
            {PROJECTS.slice(0, 2).map((project, index) => (
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

      <section className="proof-strip" aria-label={t.awardsLabel}>
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
            label={t.nav.projects}
            title={t.projectsTitle}
            description={t.projectsDescription}
          />
          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} lang={lang} />
            ))}
          </div>

        </div>
      </section>

      <section className="section-shell capability-section" id="skills">
        <SectionHeading
          label={t.nav.skills}
          title={t.skillsTitle}
          description={t.skillsDescription}
        />
        <div className="capability-grid">
          <article className="capability-primary liquid-glass liquid-glass--frost">
            <h3>Backend</h3>
            <SkillLine name="Java · Spring Boot" detail={t.skillDetails[0]} lang={lang} projects={[1, 3]} />
            <SkillLine name="Node.js · Express" detail={t.skillDetails[1]} lang={lang} projects={[2, 4]} />
          </article>
          <article className="liquid-glass liquid-glass--frost">
            <h3>Database</h3>
            <SkillLine name="MySQL · PostgreSQL" detail={t.skillDetails[2]} lang={lang} projects={[2, 4]} />
            <SkillLine name="Redis" detail={t.skillDetails[3]} lang={lang} projects={[1, 2]} />
          </article>
          <article className="liquid-glass liquid-glass--frost">
            <h3>Infrastructure</h3>
            <SkillLine name="Docker · Actions" detail={t.skillDetails[4]} lang={lang} projects={[1, 3]} />
            <SkillLine name="AWS · OCI" detail={t.skillDetails[5]} lang={lang} projects={[1, 3]} />
          </article>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-shell">
          <SectionHeading
            label={t.nav.journey}
            title={t.journeyTitle}
            description={t.journeyDescription}
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
              <h3 id="award-panel-title">{t.milestonesHeading}</h3>
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
            label={t.nav.writing}
            title={t.writingTitle}
            description={t.writingDescription}
          />
        {posts.length === 0 ? (
          // Feed unavailable at build time: keep a way to reach the blog.
          <a className="text-link" href="https://velog.io/@user040131" target="_blank" rel="noreferrer">
            {t.velogFallback} <ArrowIcon />
          </a>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <a className="liquid-glass liquid-glass--frost" key={post.link} href={post.link} target="_blank" rel="noreferrer">
                <time dateTime={post.pubDate}>
                  {new Intl.DateTimeFormat(t.dateLocale, { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.pubDate))}
                </time>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{excerpt(post.description)}</p>
                {post.tags.length > 0 && (
                  <ul className="post-tags" aria-label={t.tagsLabel}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <li key={tag}>#{tag}</li>
                    ))}
                  </ul>
                )}
                <p>{t.readPost} <ArrowIcon /></p>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner liquid-glass">
          <h2>
            {t.contactTitle[0]}
            <br />{t.contactTitle[1]}
          </h2>
          <p>{t.contactDescription}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`}>{t.emailCta} <ArrowIcon /></a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">{t.githubProfile} <ArrowIcon /></a>
          </div>
          <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>
    </>
  );
}
