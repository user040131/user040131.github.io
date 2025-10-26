// 공용 섹션 박스
// - 카드/섹션/공지/프리뷰 등 다용도
// - tailwind 유틸만 사용 (디자인은 나중에 손보기 좋게 최소화)
type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string; // 추가 스타일을 덧입힐 수 있게
};

export default function SectionBox({ title, children, className = "" }: Props) {
  return (
    <section className={`rounded-2xl border bg-white p-6 shadow-sm ${className}`}>
      {title && <h2 className="mb-2 text-lg font-semibold">{title}</h2>}
      {children}
    </section>
  );
}
 