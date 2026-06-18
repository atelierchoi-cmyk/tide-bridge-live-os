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
  mood: string[][];
  bridge: string[][];
  layers: string[][];
  markets: string[];
  final: string[];
};

const media = {
  heroVideo: '/media/tide-bridge-live-hero.mp4',
  heroPoster: '/media/tide-bridge-live-poster.jpg',
  mood: [
    '/media/tide-bridge-mood-stage.jpg',
    '/media/tide-bridge-mood-broadcast.jpg',
    '/media/tide-bridge-mood-city.jpg',
    '/media/tide-bridge-mood-backstage.jpg'
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
  title: 'Global Live & Cultural IP Infrastructure',
  lines: ['Korean Content.', 'Global Live IP.', 'One Cross-Border Bridge.'],
  cta: {
    liveOs: 'Enter Live OS',
    partnership: 'Request Partnership'
  },
  mood: [
    ['Live IP', 'Stage formats built for global movement.'],
    ['Broadcast', 'Signals, audiences, territories.'],
    ['Culture', 'Korean content in international rooms.'],
    ['Network', 'Partners with market presence.']
  ],
  bridge: [
    ['Korean Content', 'Tide Bridge', 'Global Markets'],
    ['Global Live IP', 'Tide Bridge', 'Korea']
  ],
  layers: [
    ['Live OS', 'Private operating layer'],
    ['Intelligence', 'Market signal layer'],
    ['Launchpad', 'Market entry layer'],
    ['Verified Network', 'Partner trust layer']
  ],
  markets: ['Korea', 'Japan', 'Southeast Asia', 'North America', 'Middle East', 'Europe'],
  final: ['Global stages.', 'Cultural IP.', 'One bridge.']
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
    mood: [
      ['Live IP', '글로벌 무대를 위한 라이브 포맷.'],
      ['Broadcast', '신호, 관객, 시장 권역.'],
      ['Culture', '국제 무대 위의 한국 콘텐츠.'],
      ['Network', '시장 존재감을 가진 파트너.']
    ],
    bridge: [
      ['한국 콘텐츠', 'Tide Bridge', '글로벌 시장'],
      ['글로벌 라이브 IP', 'Tide Bridge', '한국']
    ],
    layers: [
      ['Live OS', '비공개 운영 레이어'],
      ['Intelligence', '시장 신호 레이어'],
      ['Launchpad', '시장 진입 레이어'],
      ['Verified Network', '파트너 신뢰 레이어']
    ],
    markets: ['Korea', 'Japan', 'Southeast Asia', 'North America', 'Middle East', 'Europe'],
    final: ['글로벌 무대.', '컬처 IP.', '하나의 브릿지.']
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    lines: ['韓国コンテンツと', 'グローバルライブIPを', 'ひとつのブリッジでつなぎます。'],
    cta: {
      liveOs: 'Live OSへ',
      partnership: 'Partnershipを依頼'
    },
    mood: [
      ['Live IP', 'グローバル展開するライブ形式。'],
      ['Broadcast', 'シグナル、観客、市場地域。'],
      ['Culture', '国際空間に届く韓国コンテンツ。'],
      ['Network', '市場接点を持つパートナー。']
    ],
    bridge: [
      ['韓国コンテンツ', 'Tide Bridge', 'グローバル市場'],
      ['グローバルライブIP', 'Tide Bridge', '韓国']
    ],
    layers: [
      ['Live OS', '非公開オペレーションレイヤー'],
      ['Intelligence', '市場シグナルレイヤー'],
      ['Launchpad', '市場参入レイヤー'],
      ['Verified Network', 'パートナー信頼レイヤー']
    ],
    final: ['グローバルステージ。', 'カルチャーIP。', 'ひとつのブリッジ。']
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    lines: ['连接韩国内容与', '全球现场娱乐 IP，', '构建跨境桥梁。'],
    cta: {
      liveOs: '进入 Live OS',
      partnership: '申请合作'
    },
    mood: [
      ['Live IP', '面向全球移动的现场形式。'],
      ['Broadcast', '信号、观众、市场区域。'],
      ['Culture', '进入国际场景的韩国内容。'],
      ['Network', '具备市场触点的伙伴。']
    ],
    bridge: [
      ['韩国内容', 'Tide Bridge', '全球市场'],
      ['全球现场娱乐 IP', 'Tide Bridge', '韩国']
    ],
    layers: [
      ['Live OS', '非公开运营层'],
      ['Intelligence', '市场信号层'],
      ['Launchpad', '市场进入层'],
      ['Verified Network', '伙伴信任层']
    ],
    final: ['全球舞台。', '文化 IP。', '一座桥梁。']
  }
};

function localizedPath(locale: HomeLocale, path: string) {
  if (locale === 'root') return path;
  return `/${locale}${path}`;
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
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-white/45">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-smoke/35 py-10">
        <div className="flex min-w-max gap-4 px-5">
          {copy.markets.map((market, index) => (
            <div key={market} className="relative h-72 w-[18rem] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-smoke md:w-[24rem]">
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.12),rgba(11,11,11,0.9)),var(--image)] bg-cover bg-center"
                style={{ '--image': `url(${media.markets[index]})` } as CSSProperties}
              />
              <div className="relative flex h-full items-end p-6">
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
            {copy.final.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={liveOsHref} className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.cta.liveOs}
            </Link>
            <Link href={partnershipHref} className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-champagne hover:text-champagne">
              {copy.cta.partnership}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
