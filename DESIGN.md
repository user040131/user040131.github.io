---
name: 박승주 백엔드 포트폴리오
description: 무채색 잉크와 파랑 하나, 그 위에 놓인 리퀴드 글래스.
colors:
  link-blue: "#2457f5"
  link-blue-dark: "#6b8cff"
  ink: "#111111"
  ink-dark: "#f5f5f7"
  ink-muted: "#5c5c61"
  ink-muted-dark: "#a1a1a8"
  paper: "#f4f4f5"
  paper-dark: "#0b0b0c"
  surface: "#ffffff"
  surface-dark: "#1a1a1c"
  line: "rgba(17, 17, 17, 0.1)"
  line-dark: "rgba(255, 255, 255, 0.12)"
  line-strong: "#8a8a8f"
  line-strong-dark: "#77777d"
  glass-tint: "rgba(255, 255, 255, 0.06)"
  glass-tint-dark: "rgba(255, 255, 255, 0.03)"
  glass-frost: "rgba(255, 255, 255, 0.65)"
  glass-frost-dark: "rgba(16, 16, 20, 0.6)"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: "3.25rem"
    letterSpacing: "-0.02em"
  display-compact:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: "2.5rem"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: "2.125rem"
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.625rem"
  body:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.625rem"
  label:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.25rem"
  caption:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.125rem"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.375rem"
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
spacing:
  space-2: "8px"
  space-4: "16px"
  space-6: "24px"
  space-10: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-muted}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "48px"
  chip-tag:
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  chip-award:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  glass-panel:
    backgroundColor: "{colors.glass-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  glass-card:
    backgroundColor: "{colors.glass-frost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "40px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: 박승주 백엔드 포트폴리오

## Overview

**Creative North Star: "Glass's System"**

유리가 주인공인 체계다. 화면은 차분하고 정밀하다. 색은 무채색 잉크와 파랑 하나뿐이고, 나머지 표정은 전부 유리가 만든다. 유리는 장식으로 흐려 놓은 판이 아니라 실제 재질처럼 행동한다. 가장자리에서 배경을 휘게 하고, 테두리에서 빛을 받고, 가운데는 뒤를 그대로 비춘다.

유리가 유리로 보이려면 뒤에 휠 것이 있어야 한다. 그래서 배경은 색 글로우 위에 선명한 격자와 원을 얹은 도면 같은 층이고, 이 층은 뷰포트에 고정된다. 스크롤하면 유리 패널이 그 위를 지나가며 선이 모서리에서 꺾인다.

이 체계가 거절하는 모습은 네 가지로 확정되어 있다. 굴절 없이 반투명과 블러만 있는 유리, 두꺼운 흰 광택 띠로 두른 테두리, 가운데까지 휘거나 흐려지는 유리, 프로젝트마다 다른 강조색을 쓴 카드.

**Key Characteristics:**
- 무채색 잉크 + 링크 블루 하나. 그 밖의 색은 배경 글로우에만 있다.
- 유리는 가장자리 16px 띠에서만 굴절하고, 그 안쪽은 손대지 않는다.
- 윤곽은 선이 아니라 빛으로 그린다. 왼쪽 위에서 들어오는 스펙큘러와 오른쪽 아래의 약한 반사.
- 라이트와 다크는 운영체제 설정을 따르고, 같은 토큰 이름으로 양쪽 값을 가진다.
- 컴포넌트는 단단하고 분명하다. 누를 수 있는 것은 한눈에 보인다.

## Colors

잉크와 종이 사이의 무채색 계단에 파랑 하나를 얹은 팔레트다.

### Primary
- **링크 블루** (`link-blue`, 다크에서는 `link-blue-dark`): 누를 수 있는 텍스트 링크, 포커스 링, 배경 글로우에 쓴다. 버튼 배경에는 쓰지 않는다.

### Neutral
- **잉크** (`ink` / `ink-dark`): 본문과 제목, 기본 버튼의 배경.
- **흐린 잉크** (`ink-muted` / `ink-muted-dark`): 기간, 역할, 요약, 태그 같은 보조 정보. 프로스트 카드나 불투명 표면 위에서만 쓴다.
- **종이** (`paper` / `paper-dark`): 페이지 바탕. 배경 이미지는 이 색 위에 30% 불투명도로 얹힌다.
- **표면** (`surface` / `surface-dark`): 보조 버튼의 배경, 기본 버튼의 글자색, 글 카드의 호버 상태.
- **선** (`line` / `line-dark`): 유리 안의 구분선과 태그 테두리.
- **진한 선** (`line-strong` / `line-strong-dark`): 보조 버튼과 수상 칩의 테두리.
- **유리 틴트** (`glass-tint` / `glass-tint-dark`): 맑은 유리 패널의 몸통. 무색이다.
- **유리 프로스트** (`glass-frost` / `glass-frost-dark`): 글이 많은 카드 아래에 까는 한 겹.

### Named Rules
**The One Blue Rule.** 강조색은 링크 블루 하나다. 프로젝트나 섹션마다 다른 강조색을 주지 않는다.

**The Colorless Glass Rule.** 유리 틴트에는 색을 넣지 않는다. 유리에 보이는 색은 전부 뒤의 배경에서 온다.

**The Ink-On-Clear Rule.** 맑은 유리와 페이지 바탕 위의 글자는 잉크만 쓴다. 흐린 잉크와 링크 블루는 프로스트나 불투명 표면 위에서만 쓴다.

## Typography

**Display Font:** Pretendard Variable (대체: Apple SD Gothic Neo, Noto Sans KR, system-ui)
**Body Font:** Pretendard Variable
**Label/Mono Font:** ui-monospace (SF Mono, Menlo, Consolas)

**Character:** 한 가지 산세리프를 굵기와 크기로만 나눠 쓴다. 모노스페이스는 날짜와 기간에만 나온다.

### Hierarchy
- **Display** (600, 3rem/3.25rem, -0.02em): 히어로 제목 한 곳. 600px 이하에서는 Display compact(2.25rem/2.5rem).
- **Headline** (600, 1.75rem/2.125rem, -0.01em): 섹션 제목과 프로젝트 이름.
- **Title** (600, 1.25rem/1.625rem): 카드 제목, 프로젝트 한 줄 요약, 반기 라벨.
- **Body** (400, 1rem/1.625rem): 본문. 카드 안 설명은 680px 폭으로 제한한다.
- **Label** (500, 0.875rem/1.25rem): 버튼, 내비게이션, 링크, 소제목.
- **Caption** (400, 0.8125rem/1.125rem): 태그, 보조 설명, 푸터.
- **Mono** (400, 0.875rem/1.375rem): 프로젝트 기간.

### Named Rules
**The Role-Not-Size Rule.** 글자 크기는 `--type-*` 역할 토큰으로만 쓴다. 값은 rem이라 읽는 사람의 브라우저 글자 크기 설정을 따른다. 기본 16px에서 13 · 14 · 16 · 20 · 28 · 48px(모바일 제목 36px)이다.

**The Keep-All Rule.** 한글은 단어 단위로 줄바꿈한다(`word-break: keep-all`). 제목은 `text-wrap: balance`, 본문은 `text-wrap: pretty`.

## Layout

본문 폭은 1080px이고 양옆 여백은 24px(600px 이하에서 16px)이다. 간격은 8 · 16 · 24 · 40px 네 단계만 쓰고, 섹션 사이는 40px의 배수로 띄운다.

- **히어로**: 왼쪽 문구 1.3 대 오른쪽 유리 패널 0.7(최소 320px).
- **성장**: 왼쪽 타임라인 1.5 대 오른쪽 "결과로 남은 성장" 패널 0.5(최소 280px).
- **역량·글**: 3열 카드.
- **900px 이하**: 히어로와 성장은 1열, 수상 스트립은 2열, 역량과 글은 1열.
- **600px 이하**: 버튼은 한 줄 전체 폭, 프로젝트 카드 안쪽 여백은 24px, 타임라인은 1열.

헤더는 화면 위 16px에 떠 있는 고정 유리 막대이고, 앵커 이동은 96px 위 여백을 둔다.

## Elevation & Depth

깊이는 세 가지로 만든다. 가장자리의 굴절, 테두리의 반사광, 유리 아래의 부드러운 그림자. 확정된 방향은 "더 입체적으로"다. 상태에 따라 높이가 바뀌어야 한다.

현재 구현은 유리 패널에만 그림자가 있고 버튼과 본문은 평평하다. 호버에서 떠오르는 동작과 그 수치는 아직 정해지지 않았다.

### Shadow Vocabulary
- **유리 그림자** (`--glass-shadow`): 유리가 배경 위에 떠 있다는 것을 알린다. 라이트는 `0 14px 34px` 12% 잉크, 다크는 `0 16px 40px` 45% 검정.
- **테두리 반사** (`--glass-inner`): 왼쪽 위 안쪽의 글레어, 오른쪽 아래의 약한 반사와 그늘. 전부 가장자리에 붙어 있다.
- **스펙큘러 림** (`.liquid-glass::after`): 135° 그라데이션으로 그린 1.5px 빛 테두리. 왼쪽 위가 밝고 옆면은 비어 있다.

### Named Rules
**The Edge-Only Rule.** 굴절, 반사, 글레어는 가장자리에만 있다. 패널 가운데는 배경을 그대로 비춘다.

**The Backdrop-First Rule.** 유리를 손보기 전에 배경을 본다. 유리가 밋밋하면 블러나 불투명도를 올리지 말고 배경에 휠 것이 있는지 확인한다.

## Shapes

모서리는 세 단계다. 버튼과 칩은 8px, 글이 많은 카드는 12px, 맑은 유리 패널과 헤더는 18px. 유리에는 테두리 선이 없고 윤곽은 빛으로만 그린다. 선은 유리 안의 구분선(1px)과 버튼·칩의 테두리(1px)에만 쓴다.

## Components

컴포넌트는 단단하고 분명하다. 유리는 표면에만 쓰고, 그 위에 놓이는 버튼과 칩은 불투명하거나 선으로 된 단순한 형태다.

### Buttons
- **Shape:** 완만한 모서리(8px), 높이 48px, 좌우 여백 16px.
- **Primary:** 잉크 배경에 표면색 글자. 호버에서 흐린 잉크로 밝아진다.
- **Secondary:** 표면색 배경에 진한 선 테두리. 호버에서 테두리가 잉크로 진해진다.
- **Hover / Focus:** 0.2초 전환, 누르면 0.97배로 눌린다. 포커스는 링크 블루 2px 외곽선(2px 띄움). 동작 줄이기 설정에서는 전환이 없다.

### Chips
- **Tag:** 선 테두리, 흐린 잉크 글자, 4px 8px 여백. 기술 스택 표시용이고 누를 수 없다.
- **Award:** 진한 선 테두리, 잉크 글자, 8px 16px 여백. 프로젝트 카드의 수상 표시.

### Cards / Containers
- **Glass panel (맑은 유리):** 18px 모서리, 유리 틴트, 블러 없음. 히어로 요약, 수상 스트립, "결과로 남은 성장", 연락 섹션에 쓴다. 글자는 잉크만.
- **Glass card (프로스트 유리):** 12px 모서리, 유리 프로스트(라이트 65%, 다크 60%), 블러 없음. 프로젝트·역량·글 카드처럼 흐린 잉크와 링크가 많은 곳에 쓴다.
- **Shadow Strategy:** 두 종류 모두 유리 그림자 + 테두리 반사 + 스펙큘러 림.
- **Border:** 없음.
- **Internal Padding:** 패널 24px, 프로젝트 카드 40px(600px 이하 24px).

### Navigation
- 화면 위에 떠 있는 유리 막대. 본문이 아래로 지나가므로 이 표면만 4px 블러를 가진다.
- 링크는 Label 타이포, 10px 14px 여백, 12px 모서리. 호버에서 옅은 선택 배경이 깔린다.
- 600px 이하에서는 이메일 버튼이 숨고, 메뉴는 가로로 스크롤된다.

### Liquid Glass (signature)
- 요소마다 크기에 맞는 변위 맵을 구워 `backdrop-filter`로 건다(`src/app/components/LiquidGlass.tsx`).
- 렌즈 띠 16px, 최대 변위 18px. 테두리에서 가장 세고 안쪽으로 갈수록 0이 된다.
- Chromium에서만 굴절한다. 그 밖의 브라우저는 블러와 테두리 광택으로 대체된다.

## Do's and Don'ts

### Do:
- **Do** 유리 가장자리 16px 안에서만 배경을 휘게 한다.
- **Do** 윤곽을 스펙큘러 림과 테두리 반사로 그린다.
- **Do** 유리 뒤에 선명한 디테일(격자, 원)이 있는 배경을 둔다.
- **Do** 색은 토큰으로만 쓴다. 라이트와 다크 값을 함께 둔다.
- **Do** 글이 많은 카드에는 프로스트 유리를 쓴다.

### Don't:
- **Don't** 반투명과 블러만으로 유리를 만들지 않는다.
- **Don't** 두꺼운 흰 광택 띠로 테두리를 두르지 않는다.
- **Don't** 패널 가운데까지 휘거나 흐리게 하지 않는다. 헤더만 예외다.
- **Don't** 프로젝트나 카드마다 다른 강조색을 쓰지 않는다.
- **Don't** 유리 안에 유리를 겹치지 않는다. 칩과 버튼은 유리가 아니다.
- **Don't** 맑은 유리 위에 흐린 잉크나 링크 블루 글자를 올리지 않는다.
