// src/lib/tistory.ts
import { XMLParser } from 'fast-xml-parser';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  tags: string[]; // 최종적으로 우리가 쓰는 태그 배열
}

// RSS XML 하나의 <item> 구조
interface RssItemRaw {
  title: string;
  link: string;
  pubDate: string;
  description: string;

  // Tistory RSS에서는 글의 카테고리가 <category> 로 내려옴 (예: "소프트웨어 설계/DDD")
  // 여러 개면 string[], 하나면 string, 없으면 undefined
  category?: string | string[];
}

interface RssChannel {
  item?: RssItemRaw | RssItemRaw[];
}

interface RssRoot {
  rss?: {
    channel?: RssChannel;
  };
}

// 블로그 주소. 글 목록을 못 불러왔을 때 페이지가 대신 거는 링크이기도 하다.
export const TISTORY_URL = 'https://seungjub270.tistory.com/';

const RSS_URL = `${TISTORY_URL}rss`;

export async function fetchTistoryPosts(limit = 2): Promise<BlogPost[]> {
  try {
    const res = await fetch(RSS_URL, {
      // App Router 서버 컴포넌트에서 1시간마다 재검증
      next: { revalidate: 60 * 60 },
      // 피드가 응답 없이 멈춰도 빌드가 기다리지 않게 한다 (catch에서 빈 목록으로 처리)
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error('Failed to fetch Tistory RSS', res.status, res.statusText);
      return [];
    }

    const xml = await res.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
    });

    const parsed = parser.parse(xml) as RssRoot;

    const items = parsed.rss?.channel?.item;
    if (!items) return [];

    // 피드는 외부 입력이다. 날짜를 못 읽으면 페이지의 날짜 포맷이 빌드를 깨고, http(s)가 아닌 링크는 href에 넣지 않는다.
    const itemArray: RssItemRaw[] = (Array.isArray(items) ? items : [items]).filter(
      (item) => item?.title != null && /^https?:\/\//.test(String(item.link)) && Number.isFinite(new Date(item.pubDate).getTime()),
    );

    // pubDate 기준 최신순 정렬
    itemArray.sort((a, b) => {
      const da = new Date(a.pubDate).getTime();
      const db = new Date(b.pubDate).getTime();
      return db - da;
    });

    return itemArray.slice(0, limit).map((item) => {
      // <category> 하나 or 여러 개 or 없음 → 전부 string[] 으로 정규화
      const rawCategory = item.category;

      const tags =
        typeof rawCategory === 'string'
          ? [rawCategory]
          : Array.isArray(rawCategory)
          ? rawCategory
          : [];

      return {
        // 숫자만 있는 제목은 XML 파서가 number로 준다
        title: String(item.title),
        link: String(item.link),
        pubDate: item.pubDate,
        description: String(item.description ?? ''),
        tags,
      };
    });
  } catch (error) {
    console.error('Unable to load Tistory RSS', error);
    return [];
  }
}
