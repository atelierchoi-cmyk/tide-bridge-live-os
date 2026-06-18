import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Locale } from '@/lib/i18n';

type HomeLocale = Locale | 'root';

type HomeCopy = {
  locale: HomeLocale;
  title: string;
  lines: string[];
  viewBusiness: string;
  contact: string;
  about: string;
  business: string[][];
  portfolio: string[][];
  team: string;
  contactText: string;
  contactCta: string;
};

const navItems = ['About', 'Business', 'Portfolio', 'Team', 'Contact'];

const portfolioMedia = [
  '/media/portfolio-k-content-ip.jpg',
  '/media/portfolio-live-events.jpg',
  '/media/portfolio-exhibitions.jpg',
  '/media/portfolio-brand-culture.jpg',
  '/media/portfolio-esports.jpg',
  '/media/portfolio-market-entry.jpg'
];

const baseCopy: HomeCopy = {
  locale: 'root',
  title: 'Global Live & Cultural IP Company',
  lines: ['Korean Content.', 'Global Live IP.', 'One Cross-Border Bridge.'],
  viewBusiness: 'View Business',
  contact: 'Contact',
  about: 'Tide Bridge connects Korean content, global live opportunities, and verified partners across culture, entertainment, and market entry.',
  business: [
    ['Korea to Global', 'Korean content IP expansion into international markets.'],
    ['Global to Korea', 'Global live and cultural IP entry into Korea.'],
    ['Intelligence', 'Market demand, IP value, and partner trust signals.'],
    ['Network', 'Verified partner connection for cross-border execution.']
  ],
  portfolio: [
    ['K-Content IP', 'Korean music, creators, formats, and culture-led IP.'],
    ['Live Events', 'Concerts, showcases, festivals, and touring concepts.'],
    ['Exhibitions', 'Culture-led spaces, fan experiences, and touring formats.'],
    ['Brand Culture', 'Partnership moments across entertainment and lifestyle.'],
    ['Esports', 'Competitive culture, fandom, and live-community formats.'],
    ['Market Entry', 'Structured paths for cross-border launch and expansion.']
  ],
  team: 'A cross-border team built around live entertainment, IP strategy, partnerships, and market execution.',
  contactText: 'For partnerships, market entry, and global live IP opportunities.',
  contactCta: 'Contact Tide Bridge'
};

const copyByLocale: Record<HomeLocale, HomeCopy> = {
  root: baseCopy,
  en: { ...baseCopy, locale: 'en' },
  ko: {
    ...baseCopy,
    locale: 'ko',
    lines: ['한국 콘텐츠와', '글로벌 라이브 IP를', '하나의 브릿지로 연결합니다.'],
    viewBusiness: '비즈니스 보기',
    contact: '문의하기',
    about: 'Tide Bridge는 한국 콘텐츠와 글로벌 라이브 IP를 연결하는\n크로스보더 엔터테인먼트 컴퍼니입니다.',
    business: [
      ['Korea to Global', '한국 콘텐츠 IP의 해외 시장 확장.'],
      ['Global to Korea', '글로벌 라이브·컬처 IP의 한국 진입.'],
      ['Intelligence', '시장 수요와 파트너 신뢰도 분석.'],
      ['Network', '검증 기반 글로벌 파트너 연결.']
    ],
    team: '라이브 엔터테인먼트, IP 전략, 파트너십, 시장 실행을 연결하는\n크로스보더 팀입니다.',
    contactText: '파트너십, 시장 진입, 글로벌 라이브 IP 기회를 함께 논의합니다.',
    contactCta: 'Tide Bridge 문의'
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    lines: ['韓国コンテンツと', 'グローバルライブIPを', 'ひとつのブリッジでつなぎます。'],
    viewBusiness: 'Businessを見る',
    contact: 'Contact',
    about: 'Tide Bridgeは韓国コンテンツ、グローバルライブIP、検証済みパートナーをつなぐクロスボーダーエンターテインメントカンパニーです。',
    business: [
      ['Korea to Global', '韓国コンテンツIPの海外市場展開。'],
      ['Global to Korea', 'グローバルライブ・カルチャーIPの韓国進出。'],
      ['Intelligence', '市場需要とパートナー信頼度の分析。'],
      ['Network', '検証ベースのグローバルパートナー接続。']
    ],
    team: 'ライブエンターテインメント、IP戦略、パートナーシップ、市場実行をつなぐクロスボーダーチームです。',
    contactText: 'パートナーシップ、市場参入、グローバルライブIP機会についてご相談ください。',
    contactCta: 'Contact Tide Bridge'
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    lines: ['连接韩国内容与', '全球现场娱乐 IP，', '构建跨境桥梁。'],
    viewBusiness: '查看业务',
    contact: '联系',
    about: 'Tide Bridge 连接韩国内容、全球现场娱乐 IP 与已验证伙伴，服务文化、娱乐与市场进入。',
    business: [
      ['Korea to Global', '韩国内容 IP 的海外市场扩展。'],
      ['Global to Korea', '全球现场娱乐及文化 IP 进入韩国。'],
      ['Intelligence', '市场需求与伙伴信任度分析。'],
      ['Network', '基于验证的全球伙伴连接。']
    ],
    team: '连接现场娱乐、IP 策略、伙伴关系与市场执行的跨境团队。',
    contactText: '共同讨论伙伴关系、市场进入与全球现场娱乐 IP 机会。',
    contactCta: '联系 Tide Bridge'
  }
};

function localizedPath(locale: HomeLocale, path: string) {
  if (locale === 'root') return path;
  return `/${locale}${path}`;
}

function textLines(value: string) {
  return value.split('\n').map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));
}

function SectionLabel({ id, title }: { id: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/80">{id}</p>
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-ivory/50">{title}</h2>
    </div>
  );
}

export function CinematicHomePage({ locale = 'root' }: { locale?: HomeLocale }) {
  const copy = copyByLocale[locale];
  const isCjk = copy.locale === 'ko' || copy.locale === 'ja' || copy.locale === 'zh';

  return (
    <div className={`min-h-screen bg-[#0c0c0b] text-ivory ${isCjk ? 'cjk-keep' : ''}`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0c0b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
          <Link href={localizedPath(copy.locale, '') || '/'} className="text-xs font-semibold uppercase tracking-[0.38em] text-ivory">
            Tide Bridge
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/55 transition hover:text-champagne">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[86vh] max-w-7xl items-end gap-12 px-5 pb-16 pt-24 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-champagne">TIDE BRIDGE</p>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-8xl">
              {copy.title}
            </h1>
            <div className="mt-10 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white/85 md:text-6xl">
              {copy.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#business" className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
                {copy.viewBusiness}
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:text-champagne">
                {copy.contact}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.business.map(([title], index) => (
              <div key={title} className="min-h-44 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(247,240,230,0.08),rgba(247,240,230,0.02))] p-5">
                <p className="text-xs font-semibold text-champagne">0{index + 1}</p>
                <p className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel id="01" title="About" />
          <p className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white/88 md:text-5xl">
            {textLines(copy.about)}
          </p>
        </section>

        <section id="business" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel id="02" title="Business" />
          <div className="grid gap-4 md:grid-cols-4">
            {copy.business.map(([title, body]) => (
              <article key={title} className="min-h-64 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-8 text-sm leading-6 text-ivory/58">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel id="03" title="Portfolio" />
          <div className="grid gap-4 md:grid-cols-3">
            {copy.portfolio.map(([title, body], index) => (
              <article key={title} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.035]">
                <div
                  className="h-60 bg-[linear-gradient(135deg,rgba(215,181,109,0.24),rgba(247,240,230,0.06)_42%,rgba(11,11,11,0.9)),var(--image)] bg-cover bg-center"
                  style={{ '--image': `url(${portfolioMedia[index]})` } as CSSProperties}
                />
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/80">Portfolio</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ivory/55">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel id="04" title="Team" />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white/88 md:text-5xl">
              {textLines(copy.team)}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {['IP Strategy', 'Partnerships', 'Market Execution'].map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ivory/62">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,181,109,0.14),rgba(247,240,230,0.035)_45%,rgba(247,240,230,0.02))] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/80">Contact</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {textLines(copy.contactText)}
            </h2>
            <Link href={localizedPath(copy.locale, '/apply')} className="mt-10 inline-flex rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.contactCta}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
