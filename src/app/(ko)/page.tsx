import Home from "@/app/components/Home";

export const revalidate = 3600;

export default function HomePage() {
  return <Home lang="ko" />;
}
