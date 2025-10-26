# 🚀 Next.js + Tailwind Minimal Starter

깔끔한 정적/하이브리드 웹사이트를 빠르게 만들기 위한 **Next.js(App Router) + Tailwind CSS** 템플릿 가이드.
이 문서는 계속 **추가/수정**해 사용하도록 구성되어 있습니다.

---

## 📦 Tech Stack

* **Framework**: Next.js (App Router, TypeScript)
* **Styling**: Tailwind CSS
* **Images**: `next/image` (public assets)
* **Linting**: ESLint (Next preset)

---

## ⚡️ Quick Start

```bash
# Node 18+ 권장
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir --eslint
cd my-app
npm run dev
```

앱이 이미 생성된 상태라면:

```bash
npm i
npm run dev
```

개발 서버: [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Project Structure (권장)

```
src/
  app/
    layout.tsx        # 전역 레이아웃(헤더/풋터/전역 스타일)
    page.tsx          # 홈
    globals.css       # Tailwind base/components/utilities
  components/
    SectionBox.tsx    # 공용 카드/섹션 래퍼
    LogoItem.tsx      # 로고(아이콘) + 텍스트 컴포넌트
public/
  logo/               # SVG/PNG 자산 (예: java.svg)
```

> 경로 별칭: `@/*` → `./src/*`

---

## 🧱 Core Components

### 1) `SectionBox`

어떤 정적 페이지에도 쓰기 좋은 카드형 섹션 래퍼.

```tsx
// src/components/SectionBox.tsx
export default function SectionBox({ title, children, className = "" }: {
  title?: string; children?: React.ReactNode; className?: string;
}) {
  return (
    <section className={`rounded-2xl border bg-white p-6 shadow-sm ${className}`}>
      {title && <h2 className="mb-2 text-lg font-semibold">{title}</h2>}
      {children}
    </section>
  );
}
```

### 2) `LogoItem`

로고 크기를 **일관**되게 보여주는 패턴(`next/image` + `object-contain`).

```tsx
// src/components/LogoItem.tsx
import Image, { type StaticImageData } from "next/image";

type Props = { src: string | StaticImageData; title: string; label?: string; alt?: string };
export default function LogoItem({ src, title, label, alt }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative size-14 md:size-16 shrink-0">
        <Image src={src} alt={alt ?? `${title} logo`} fill sizes="64px" className="object-contain" />
      </div>
      <span className="text-sm text-gray-700">{label ?? title}</span>
    </div>
  );
}
```

사용 예시:

```tsx
<SectionBox title="Java">
  <LogoItem src="/logo/java.svg" title="Java" />
</SectionBox>
```

---

## 🧭 Routing (App Router)

* 새 페이지: `src/app/<route>/page.tsx` → 경로 `/<route>` 자동 생성
* 중첩 레이아웃: `src/app/<route>/layout.tsx`
* 동적 라우트: `src/app/blog/[slug]/page.tsx` → `/blog/hello`

---

## 🧩 Server vs Client Components

* **기본은 Server Component**. 브라우저 상호작용(이벤트/상태)이 필요하면 해당 파일 상단에 **`"use client"`**.
* 서버에서 클라이언트로 **함수/클로저를 props로 넘기면 안 됨**.

```tsx
// 상호작용 분리 예시
// src/components/ClientButton.tsx
"use client";
export default function ClientButton() {
  return <button onClick={() => alert("clicked")}>Click</button>;
}

// src/app/page.tsx (Server)
import ClientButton from "@/components/ClientButton";
...
<SectionBox><ClientButton /></SectionBox>
```

---

## 🖼️ Images with `next/image`

* `public` 폴더 자산은 루트 기준 경로 사용: `src="/logo/java.svg"`
* **필수**: `alt` + `width/height` 또는 `fill`
* 로고/아이콘을 균일하게 보이려면 **고정 슬롯 + `fill` + `object-contain`** 패턴 권장(상단 `LogoItem` 참고)

```tsx
<Image src="/logo/java.svg" alt="Java logo" width={48} height={48} />
```

---

## 🎛️ Layout Recipes (자주 쓰는 패턴)

### 2×2 카드(반응형 확장)

```tsx
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
  <SectionBox title="A"/> <SectionBox title="B"/>
  <SectionBox title="C"/> <SectionBox title="D"/>
</div>
```

### 많은 카드가 화면 폭을 꽉 채우도록

```tsx
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {/* SectionBox × N */}
</div>
```

### 페이지 중앙 헤더(히어로)

```tsx
<section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
  <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight">Portfolio & Skills</h1>
  <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">...
  </p>
</section>
```

### 풀블리드(가로 꽉 채우기)

```tsx
<section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
  <div className="mx-auto w-full max-w-screen-xl px-6 py-8">
    {/* 콘텐츠 */}
  </div>
</section>
```

---

## 🎨 Tailwind Quick Notes

* 외부 간격: `m, mx, my, mt, mr, mb, ml`
* 내부 간격: `p, px, py, pt, pr, pb, pl`
* 형제 간격: `gap-*`(grid/flex), `space-x/y-*`(flex)
* 카드 느낌: `rounded-2xl border bg-white p-6 shadow-sm`
* 타이틀: `text-4xl md:text-6xl font-extrabold tracking-tight`

---

## 🛡️ Semantics & A11y

* **의미 없는 컨테이너**: `div`
* **주제 구획**: `section` + 제목(`h2`) 또는 `aria-label`
* 페이지당 `h1`은 1개가 바람직, 섹션 제목은 `h2/h3` 사용

---

## 🧯 Common Pitfalls & Fixes

* **Cannot find name 'html'**: `tsconfig.json`에 `lib: ["dom", ...]` + `include: ["next-env.d.ts", ...]` 확인.
* **Event handlers cannot be passed to Client Component props**: 서버 컴포넌트에서 `onClick` 사용 금지 → 해당 부분을 **`"use client"` 컴포넌트**로 분리.
* **그리드에서 제목이 왼쪽만 차지**: `col-span-*`은 **그리드 직접 자식**에게만 적용. 제목 섹션에 `col-span-full` 부여.
* **로고 크기 제각각**: 공통 래퍼(`relative size-14`) + `Image fill object-contain` 사용.
* **`p` 안에 `h1` 배치**: 블록 중첩 오류 → `h3` + `p`로 분리.

---

## 🔧 Scripts

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 빌드된 앱 실행
npm run lint     # ESLint
```

---

## 🚀 Deploy

* **Vercel** 권장: 깃헙 연동 → 프로젝트 Import → 자동 빌드/배포
* 환경변수는 `Project Settings → Environment Variables` 또는 `.env.local`

---

## 📝 Change Log (예시)

* 2025-10-24: 기본 레이아웃/섹션/로고 슬롯/그리드 레시피 정리
* YYYY-MM-DD: 기능/페이지 추가 …

---

## ✅ TODO Template

* [ ] 헤더 네비 정리 (`<Link>`)
* [ ] SEO 메타데이터 보강
* [ ] 다크 모드 토글
* [ ] Projects 데이터 분리(JSON/MDX)
* [ ] 이미지 자산 최적화(SVG viewBox 확인)

---

## 📄 License

