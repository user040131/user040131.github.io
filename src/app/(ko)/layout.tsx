import SiteLayout, { siteMetadata } from "@/app/components/SiteLayout";

export { viewport } from "@/app/components/SiteLayout";
export const metadata = siteMetadata("ko");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteLayout lang="ko">{children}</SiteLayout>;
}
