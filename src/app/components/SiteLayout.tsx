import type { Metadata, Viewport } from "next";
import Link from "next/link";
import BackgroundSwap from "@/app/components/BackgroundSwap";
import DawnEgg from "@/app/components/DawnEgg";
import LiquidGlass from "@/app/components/LiquidGlass";
import { HOME, UI, type Lang } from "@/content/ui";
import "@/app/globals.css";

const SITE_URL = "https://user040131.github.io";

export function siteMetadata(lang: Lang): Metadata {
  const t = UI[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.metaTitle, template: t.metaTitleTemplate },
    description: t.metaDescription,
    keywords: t.metaKeywords,
    authors: [{ name: t.authorName, url: SITE_URL }],
    creator: t.authorName,
    alternates: { canonical: HOME[lang], languages: HOME },
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      url: SITE_URL + HOME[lang],
      siteName: t.ogSiteName,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    twitter: { card: "summary", title: t.metaTitle, description: t.twitterDescription },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

// The whole document for one language. Each language has its own root layout (app/(ko), app/(en)) so <html lang> is right on both.
export default function SiteLayout({ lang, children }: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  const t = UI[lang];
  const home = HOME[lang];
  const other: Lang = lang === "ko" ? "en" : "ko";
  return (
    <html lang={lang}>
      <head>
        {/* shortcut: font served from jsDelivr, self-host under public/fonts if the CDN becomes a concern */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <LiquidGlass />
        <BackgroundSwap />
        <DawnEgg message={t.dawnMessage} />
        <a className="skip-link" href="#main-content">{t.skipLink}</a>
        <div className="header-edge" aria-hidden="true" />
        <header className="site-header">
          <div className="header-inner liquid-glass">
            <nav aria-label={t.navLabel}>
              <Link href={`${home}#projects`}>{t.nav.projects}</Link>
              <Link href={`${home}#skills`}>{t.nav.skills}</Link>
              <Link href={`${home}#journey`}>{t.nav.journey}</Link>
              <Link href={`${home}#writing`}>{t.nav.writing}</Link>
              <Link href={`${home}#contact`}>{t.nav.contact}</Link>
            </nav>
            <a className="header-contact" href="mailto:seungjub270@gmail.com">
              {t.emailCta}
            </a>
          </div>
          {/* The other language is a separate document, so this is a normal link, not a script. */}
          <a className="lang-toggle liquid-glass" href={HOME[other]} hrefLang={other} lang={other} aria-label={t.switchAria}>
            {t.switchLabel}
          </a>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="section-shell footer-inner">
            <p>© {new Date().getFullYear()} Park Seungju</p>
            <p>{t.footerLine}</p>
            <a href="#top">TOP <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" /></svg></a>
          </div>
        </footer>
      </body>
    </html>
  );
}
