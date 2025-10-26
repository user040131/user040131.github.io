import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  title: string;
  /** 아이콘 컨테이너 크기를 tailwind로 주입 (예: "size-[0.9em]" 또는 "size-10 md:size-12") */
  sizeClass?: string;
  /** sizes 힌트(선택) — em을 쓸 땐 생략해도 OK */
  sizesHint?: string;
  ml?: string;
};

export default function Logo({ src, alt, title, sizeClass, sizesHint, ml}: Props) {
  return (
    <div className="flex items-center gap-4">
      {/* 부모 박스 크기가 이미지 크기를 결정 (fill 사용) */}
      <div
        className={clsx(
          "relative shrink-0",
          // 기본값: 예전과 동일 (56px / 64px)
          sizeClass ?? "size-14 md:size-16",
          ml ?? ""
        )}
      >
        <Image
          src={src}
          alt={alt ?? `${title} logo`}
          fill
          // em 기반일 때는 생략 가능, px 기반이면 맞춰 주면 좋아요
          sizes={sizesHint ?? "(min-width: 768px) 64px, 56px"}
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
