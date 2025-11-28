// src/lib/velog.ts
import { XMLParser } from 'fast-xml-parser';

export interface VelogPost {
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

  // Velog RSS에서는 태그가 <category> 로 내려옴
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

// 본인 Velog 아이디
const VELOG_USERNAME = 'user040131';

// Velog v2 RSS 주소
const RSS_URL = `https://v2.velog.io/rss/${VELOG_USERNAME}`;

export async function fetchVelogPosts(limit = 2): Promise<VelogPost[]> {
  const res = await fetch(RSS_URL, {
    // App Router 서버 컴포넌트에서 1시간마다 재검증
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    console.error('Failed to fetch Velog RSS', res.status, res.statusText);
    return [];
  }

  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const parsed = parser.parse(xml) as RssRoot;

  const items = parsed.rss?.channel?.item;
  if (!items) return [];

  const itemArray: RssItemRaw[] = Array.isArray(items) ? items : [items];

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
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description,
      tags,
    };
  });
}
