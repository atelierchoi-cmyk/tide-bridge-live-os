import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Locale } from '@/lib/i18n';

type HomeLocale = Locale | 'root';

type CinematicCopy = {
  locale: HomeLocale;
  eyebrow: string;
  title: string;
  lines: string[];
  cta: {
    liveOs: string;
    partnership: string;
  };
  nav: string[][];
  mood: string[][];
  bridge: string[][];
  layers: string[][];
  markets: string[][];
  final: {
    lines: string[];
    primary: string;
    secondary: string;
  };
};

const media = {
  heroVideo: '/media/tide-bridge-live-hero.mp4',
  heroPoster: '/media/tide-bridge-live-poster.jpg',
  mood: [
    '/media/tide-bridge-mood-stage.jpg',
    '/media/tide-bridge-mood-broadcast.jpg',
    '/media/tide-bridge-mood-city.jpg',
    '/media/tide-bridge-mood-backstage.jpg',
    '/media/tide-bridge-mood-audience.jpg',
    '/media/tide-bridge-mood-venue.jpg'
  ],
  markets: [
    '/media/market-korea.jpg',
    '/media/market-japan.jpg',
    '/media/market-southeast-asia.jpg',
    '/media/market-north-america.jpg',
    '/media/market-middle-east.jpg',
    '/media/market-europe.jpg'
  ]
};

const baseCopy: CinematicCopy = {
  locale: 'root',
  eyebrow: 'TIDE BRIDGE',
  title: 'Global Live & Cultural IP Bridge',
  lines: ['Korean Content.', 'Global Live IP.', 'One Cross-Border Bridge.'],
  cta: {
    liveOs: 'Enter Live OS',
    partnership: 'Request Partnership'
  },
  nav: [
    ['Live OS', '/live-os'],
    ['Intelligence', '/intelligence'],
    ['Launchpad', '/launchpad'],
    ['Network', '/verified-network'],
    ['Partnership', '/apply']
  ],
  mood: [
    ['Live Stage', 'Light, scale, signal.'],
    ['Broadcast', 'Frames built for reach.'],
    ['Backstage', 'Where movement begins.'],
    ['Global City', 'Markets after dark.'],
    ['Audience', 'Crowd energy, local pulse.'],
    ['Venue', 'Rooms ready for culture.']
  ],
  bridge: [
    ['Korean Content', 'Tide Bridge', 'Global Markets'],
    ['Global Live IP', 'Tide Bridge', 'Korea']
  ],
  layers: [
    ['Live OS', 'Private B2B infrastructure for live and cultural IP opportunities.'],
    ['Intelligence', 'Market signals, IP value, partner trust, and deal readiness.'],
    ['Launchpad', 'Market-entry support for emerging Korean IP.'],
    ['Verified Network', 'Reviewed partners for cross-border execution.']
  ],
  markets: [
    ['Korea', 'IP Export'],
    ['Japan', 'Live Import'],
    ['Southeast Asia', 'Market Entry'],
    ['North America', 'Partner Network'],
    ['Middle East', 'Promotion'],
    ['Europe', 'IP Export']
  ],
  final: {
    lines: ['Build the next bridge', 'for live and cultural IP.'],
    primary: 'Request Partnership',
    secondary: 'Enter Live OS'
  }
};

const copyByLocale: Record<HomeLocale, CinematicCopy> = {
  root: baseCopy,
  en: { ...baseCopy, locale: 'en' },
  ko: {
    ...baseCopy,
    locale: 'ko',
    lines: ['한국 콘텐츠와', '글로벌 라이브 IP를', '하나의 브릿지로 연결합니다.'],
    cta: {
      liveOs: 'Live OS 입장',
      partnership: '파트너십 요청'
    },
    nav: [
      ['Live OS', '/live-os'],
      ['Intelligence', '/intelligence'],
      ['Launchpad', '/launchpad'],
      ['Network', '/verified-network'],
      ['Partnership', '/apply']
    ],
    mood: [
      ['Live Stage', '빛, 스케일, 신호.'],
      ['Broadcast', '확장을 위한 프레임.'],
      ['Backstage', '움직임이 시작되는 곳.'],
      ['Global City', '밤의 글로벌 시장.'],
      ['Audience', '관객 에너지와 현지 감각.'],
      ['Venue', '컬처를 위한 공간.']
    ],
    bridge: [
      ['한국 콘텐츠', 'Tide Bridge', '글로벌 시장'],
      ['글로벌 라이브 IP', 'Tide Bridge', '한국']
    ],
    layers: [
      ['Live OS', '라이브·컬처 IP 기회를 위한 비공개 B2B 인프라.'],
      ['Intelligence', '시장 신호, IP 가치, 파트너 신뢰, 딜 준비도.'],
      ['Launchpad', '새로운 한국 IP를 위한 시장 진입 지원.'],
      ['Verified Network', '크로스보더 실행을 위한 검토된 파트너.']
    ],
    markets: baseCopy.markets,
    final: {
      lines: ['다음 글로벌 라이브 IP 기회를', 'Tide Bridge와 함께 설계하세요.'],
      primary: '파트너십 요청',
      secondary: 'Live OS 입장'
    }
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    lines: ['韓国コンテンツと', 'グローバルライブIPを', 'ひとつのブリッジでつなぎます。'],
    cta: {
      liveOs: 'Live OSへ',
      partnership: 'Partnershipを依頼'
    },
    nav: baseCopy.nav,
    mood: [
      ['Live Stage', '光、スケール、シグナル。'],
      ['Broadcast', '拡張のためのフレーム。'],
      ['Backstage', '動きが始まる場所。'],
      ['Global City', '夜のグローバル市場。'],
      ['Audience', '観客の熱量と地域の鼓動。'],
      ['Venue', 'カルチャーのための空間。']
    ],
    bridge: [
      ['韓国コンテンツ', 'Tide Bridge', 'グローバル市場'],
      ['グローバルライブIP', 'Tide Bridge', '韓国']
    ],
    layers: [
      ['Live OS', 'ライブ・カルチャーIP機会のための非公開B2Bインフラ。'],
      ['Intelligence', '市場シグナル、IP価値、パートナー信頼、ディール準備度。'],
      ['Launchpad', '新しい韓国IPの市場参入支援。'],
      ['Verified Network', 'クロスボーダー実行のためのレビュー済みパートナー。']
    ],
    final: {
      lines: ['次のライブ・カルチャーIPの橋を', 'Tide Bridgeと共に。'],
      primary: 'Partnershipを依頼',
      secondary: 'Live OSへ'
    }
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    lines: ['连接韩国内容与', '全球现场娱乐 IP，', '构建跨境桥梁。'],
    cta: {
      liveOs: '进入 Live OS',
      partnership: '申请合作'
    },
    nav: baseCopy.nav,
    mood: [
      ['Live Stage', '灯光、规模、信号。'],
      ['Broadcast', '面向传播的画面。'],
      ['Backstage', '行动开始的地方。'],
      ['Global City', '夜色中的全球市场。'],
      ['Audience', '观众能量与本地脉搏。'],
      ['Venue', '为文化准备的空间。']
    ],
    bridge: [
      ['韩国内容', 'Tide Bridge', '全球市场'],
      ['全球现场娱乐 IP', 'Tide Bridge', '韩国']
    ],
    layers: [
      ['Live OS', '面向现场与文化 IP 机会的非公开 B2B 基础设施。'],
      ['Intelligence', '市场信号、IP 价值、伙伴信任与交易准备度。'],
      ['Launchpad', '面向新兴韩国 IP 的市场进入支持。'],
      ['Verified Network', '面向跨境执行的已审核伙伴。']
    ],
    final: {
      lines: ['与 Tide Bridge 一起', '构建下一座现场娱乐 IP 桥梁。'],
      primary: '申请合作',
      secondary: '进入 Live OS'
    }
  }
};

function localizedPath(locale: HomeLocale, path: string) {
  if (locale === 'root') return path;
  return `/${locale}${path}`;
}

function localizedNav(locale: HomeLocale, path: string) {
  return localizedPath(locale, path);
}

function VisualCard({ item, image, index }: { item: string[]; image: string; index: number }) {
  return (
    <article className={`group relative min-h-[19rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-smoke ${index === 0 ? 'md:col-span-2' : ''}`}>
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(215,181,109,0.22),rgba(11,11,11,0.18)_42%,rgba(11,11,11,0.88)),var(--image)] bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ '--image': `url(${image})` } as CSSProperties}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      <div className="relative flex h-full min-h-[19rem] flex-col justify-end p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne/85">{item[0]}</p>
        <p className="mt-3 max-w-sm text-xl font-semibold leading-snug text-ivory">{item[1]}</p>
      </div>
    </article>
  );
}

export function CinematicHomePage({ locale = 'root' }: { locale?: HomeLocale }) {
  const copy = copyByLocale[locale];
  const isCjk = copy.locale === 'ko' || copy.locale === 'ja' || copy.locale === 'zh';
  const liveOsHref = localizedPath(copy.locale, '/live-os');
  const partnershipHref = localizedPath(copy.locale, '/apply');

  return (
    <div className={`bg-ink text-ivory ${isCjk ? 'cjk-keep' : ''}`}>
      <header className="absolute left-0 right-0 top-0 z-[60] border-b border-white/10 bg-ink/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
          <Link href={localizedPath(copy.locale, '') || '/'} className="text-xs font-semibold uppercase tracking-[0.4em] text-white">
            Tide Bridge
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {copy.nav.map(([label, href]) => (
              <Link key={label} href={localizedNav(copy.locale, href)} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-champagne">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(215,181,109,0.22),transparent_30%),linear-gradient(135deg,rgba(182,106,69,0.18),transparent_38%),linear-gradient(180deg,#15110e,#050505)]" />
        <video className="absolute inset-0 h-full w-full object-cover opacity-70" autoPlay muted loop playsInline poster={media.heroPoster} aria-hidden="true">
          <source src={media.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.84),rgba(5,5,5,0.38)_48%,rgba(5,5,5,0.76)),linear-gradient(0deg,rgba(5,5,5,0.94),transparent_48%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-28 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-champagne">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">{copy.title}</h1>
          <div className="mt-8 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white/92 md:text-6xl">
            {copy.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={liveOsHref} className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.cta.liveOs}
            </Link>
            <Link href={partnershipHref} className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-champagne hover:text-champagne">
              {copy.cta.partnership}
            </Link>
          </div>
          <div className="mt-14 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
            <span className="h-9 w-px bg-gradient-to-b from-champagne to-transparent" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-4">
          {copy.mood.map((item, index) => (
            <VisualCard key={item[0]} item={item} image={media.mood[index]} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="grid gap-4 lg:grid-cols-2">
            {copy.bridge.map((route) => (
              <div key={route.join('-')} className="rounded-[1.75rem] border border-white/10 bg-ink/70 p-4 shadow-glow md:p-6">
                <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                  {route.map((label, index) => (
                    <div key={label} className="contents">
                      <div className={`rounded-2xl border px-5 py-6 text-center text-sm font-semibold uppercase tracking-[0.12em] ${index === 1 ? 'border-champagne/40 bg-champagne/[0.1] text-champagne' : 'border-white/10 bg-white/[0.04] text-white'}`}>
                        {label}
                      </div>
                      {index < route.length - 1 ? <div className="hidden text-champagne/75 md:block">→</div> : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-4">
          {copy.layers.map(([title, body], index) => (
            <article key={title} className="min-h-64 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(247,240,230,0.07),rgba(247,240,230,0.025))] p-6">
              <p className="text-sm font-semibold text-champagne">0{index + 1}</p>
              <h2 className="mt-12 text-3xl font-semibold tracking-[-0.035em] text-white">{title}</h2>
              <p className="mt-5 text-sm leading-6 text-white/55">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-smoke/35 py-10">
        <div className="flex min-w-max gap-4 px-5">
          {copy.markets.map(([market, tag], index) => (
            <div key={market} className="relative h-72 w-[18rem] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-smoke md:w-[24rem]">
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.12),rgba(11,11,11,0.9)),var(--image)] bg-cover bg-center"
                style={{ '--image': `url(${media.markets[index]})` } as CSSProperties}
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne/80">{tag}</p>
                <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white">{market}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(215,181,109,0.18),transparent_30%)]" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-5 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-champagne">TIDE BRIDGE</p>
          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-8xl">
            {copy.final.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={partnershipHref} className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.final.primary}
            </Link>
            <Link href={liveOsHref} className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-champagne hover:text-champagne">
              {copy.final.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
