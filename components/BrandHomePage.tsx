import { existsSync } from 'fs';
import path from 'path';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';

type HomeLocale = Locale | 'root';

type BusinessItem = {
  title: string;
  body: string;
};

type PortfolioItem = {
  title: string;
  body: string;
  tags: string[];
  image: string;
};

type HomeCopy = {
  locale: HomeLocale;
  title: string;
  lines: string[];
  viewBusiness: string;
  contact: string;
  about: string;
  business: BusinessItem[];
  portfolio: PortfolioItem[];
  team: string;
  roles: string[];
  contactText: string;
  contactCta: string;
};

const navItems = ['About', 'Business', 'Portfolio', 'Team', 'Contact'];

const assetPaths = {
  hero: '/images/home/hero-stage.jpg',
  team: '/images/home/team-placeholder.jpg'
};

const basePortfolio: PortfolioItem[] = [
  {
    title: 'K-Content IP',
    body: 'Korean music, artists, actors, and cultural formats for global expansion.',
    tags: ['Korea to Global', 'IP Strategy', 'Market Entry'],
    image: '/images/home/portfolio-kcontent.jpg'
  },
  {
    title: 'Live Events',
    body: 'Concerts, fan events, showcases, and touring opportunities across markets.',
    tags: ['Live', 'Touring', 'Promoters'],
    image: '/images/home/portfolio-live-events.jpg'
  },
  {
    title: 'Exhibitions',
    body: 'Cultural exhibitions, immersive formats, and destination-based experiences.',
    tags: ['Culture', 'Exhibition', 'Experience'],
    image: '/images/home/portfolio-exhibitions.jpg'
  },
  {
    title: 'Brand Culture',
    body: 'Brand-led cultural collaborations connecting IP, audience, and market context.',
    tags: ['Brand', 'Culture', 'Partnership'],
    image: '/images/home/portfolio-brand-culture.jpg'
  },
  {
    title: 'Esports',
    body: 'Entertainment-driven esports IP, events, and fan-based global formats.',
    tags: ['Esports', 'Fandom', 'Event'],
    image: '/images/home/portfolio-esports.jpg'
  },
  {
    title: 'Market Entry',
    body: 'Structured entry support for emerging Korean IP in priority territories.',
    tags: ['Launchpad', 'North America', 'Growth'],
    image: '/images/home/portfolio-market-entry.jpg'
  }
];

const baseCopy: HomeCopy = {
  locale: 'root',
  title: 'Global Live & Cultural IP Company',
  lines: ['Korean Content.', 'Global Live IP.', 'One Cross-Border Bridge.'],
  viewBusiness: 'View Business',
  contact: 'Contact',
  about: 'Tide Bridge connects Korean content, global live opportunities, and verified partners across culture, entertainment, and market entry.',
  business: [
    { title: 'Korea to Global', body: 'Expanding Korean content IP into global live and cultural markets.' },
    { title: 'Global to Korea', body: 'Bringing global live, exhibition, and cultural IP into Korea.' },
    { title: 'Intelligence', body: 'Market demand, IP fit, partner credibility, and deal readiness.' },
    { title: 'Network', body: 'A reviewed partner network for cross-border execution.' }
  ],
  portfolio: basePortfolio,
  team: 'A cross-border team built around live entertainment, IP strategy, partnerships, and market execution.',
  roles: ['IP Strategy', 'Live Entertainment', 'Partnerships', 'Market Entry', 'Intelligence'],
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
      { title: 'Korea to Global', body: '한국 콘텐츠 IP의 해외 시장 확장.' },
      { title: 'Global to Korea', body: '글로벌 라이브·컬처 IP의 한국 진입.' },
      { title: 'Intelligence', body: '시장 수요와 파트너 신뢰도 분석.' },
      { title: 'Network', body: '검증 기반 글로벌 파트너 연결.' }
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
    about: 'Tide Bridgeは、韓国コンテンツとグローバルライブIPをつなぐ\nクロスボーダー・エンターテインメントカンパニーです。',
    business: [
      { title: 'Korea to Global', body: '韓国コンテンツIPの海外市場展開。' },
      { title: 'Global to Korea', body: 'グローバルライブ・カルチャーIPの韓国進出。' },
      { title: 'Intelligence', body: '市場需要とパートナー信頼度の分析。' },
      { title: 'Network', body: '検証ベースのグローバルパートナー接続。' }
    ],
    team: 'ライブエンターテインメント、IP戦略、パートナーシップ、市場実行をつなぐ\nクロスボーダーチームです。',
    contactText: 'パートナーシップ、市場参入、グローバルライブIP機会についてご相談ください。',
    contactCta: 'Contact Tide Bridge'
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    lines: ['连接韩国内容与', '全球现场娱乐 IP，', '构建跨境桥梁。'],
    viewBusiness: '查看业务',
    contact: '联系',
    about: 'Tide Bridge 是连接韩国内容与全球现场娱乐 IP 的\n跨境娱乐公司。',
    business: [
      { title: 'Korea to Global', body: '韩国内容 IP 的海外市场扩展。' },
      { title: 'Global to Korea', body: '全球现场娱乐及文化 IP 进入韩国。' },
      { title: 'Intelligence', body: '市场需求与伙伴信任度分析。' },
      { title: 'Network', body: '基于验证的全球伙伴连接。' }
    ],
    team: '连接现场娱乐、IP 策略、伙伴关系与市场执行的\n跨境团队。',
    contactText: '共同讨论伙伴关系、市场进入与全球现场娱乐 IP 机会。',
    contactCta: '联系 Tide Bridge'
  }
};

function localizedPath(locale: HomeLocale, path: string) {
  if (locale === 'root') return path || '/';
  return `/${locale}${path}`;
}

function textLines(value: string) {
  return value.split('\n').map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));
}

function homeImageStyle(image: string) {
  const localImagePath = path.join(process.cwd(), 'public', image.replace(/^\//, ''));
  const imageValue = existsSync(localImagePath) ? `url(${image})` : 'none';

  return { '--image': imageValue } as CSSProperties;
}

function SectionLabel({ id, title }: { id: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4 md:mb-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne/80">{id}</p>
      <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-ivory/55">{title}</h2>
    </div>
  );
}

function ImageSurface({
  image,
  className = '',
  children
}: {
  image: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[linear-gradient(135deg,rgba(215,181,109,0.28),rgba(247,240,230,0.08)_38%,rgba(12,12,11,0.96)),var(--image)] bg-cover bg-center ${className}`}
      style={homeImageStyle(image)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.2),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
      {children}
    </div>
  );
}

function BrandHero({ copy }: { copy: HomeCopy }) {
  return (
    <section className="mx-auto grid min-h-[88vh] max-w-7xl items-end gap-10 px-5 pb-16 pt-24 lg:grid-cols-[0.78fr_1.22fr] lg:pt-28">
      <div className="relative z-10 max-w-xl pb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.44em] text-champagne">TIDE BRIDGE</p>
        <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-7xl">
          {copy.title}
        </h1>
        <div className="mt-9 text-3xl font-semibold leading-[1.04] tracking-[-0.035em] text-white/84 md:text-5xl">
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
          <a href="#contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:text-champagne">
            {copy.contact}
          </a>
        </div>
      </div>
      <ImageSurface image={assetPaths.hero} className="min-h-[58vh] rounded-[1.1rem] border border-white/10 shadow-2xl shadow-black/45 lg:min-h-[72vh]">
        <div className="relative z-10 flex h-full min-h-[58vh] flex-col justify-between p-5 md:p-8 lg:min-h-[72vh]">
          <div className="flex justify-end">
            <span className="border border-white/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
              Global Live IP
            </span>
          </div>
          <div>
            <div className="grid max-w-md grid-cols-3 gap-2">
              {['Korea', 'Live', 'Culture'].map((item) => (
                <div key={item} className="border-t border-white/25 pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ImageSurface>
    </section>
  );
}

function AboutSection({ copy }: { copy: HomeCopy }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionLabel id="01" title="About" />
      <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne/70">Cross-Border Company</p>
        <p className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white/88 md:text-5xl">
          {textLines(copy.about)}
        </p>
      </div>
    </section>
  );
}

function BusinessCards({ copy }: { copy: HomeCopy }) {
  return (
    <section id="business" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionLabel id="02" title="Business" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {copy.business.map((item, index) => (
          <article key={item.title} className="group min-h-72 border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-champagne/45 hover:bg-white/[0.055]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-champagne">0{index + 1}</p>
              <span className="h-2 w-2 rounded-full bg-champagne/75 opacity-50 transition group-hover:opacity-100" />
            </div>
            <h3 className="mt-16 text-3xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
            <p className="mt-7 text-sm leading-6 text-ivory/62">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioGrid({ copy }: { copy: HomeCopy }) {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionLabel id="03" title="Portfolio" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {copy.portfolio.map((item) => (
          <article key={item.title} className="group overflow-hidden border border-white/10 bg-[#141311] transition duration-300 hover:-translate-y-1 hover:border-champagne/45">
            <ImageSurface image={item.image} className="h-72 transition duration-700 group-hover:scale-[1.025]">
              <div className="absolute inset-x-0 bottom-0 z-10 translate-y-4 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/78 backdrop-blur">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ImageSurface>
            <div className="p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne/75">Portfolio</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ivory/62">{item.body}</p>
              <div className="mt-6 flex flex-wrap gap-2 md:hidden">
                {item.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ivory/55">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TeamPreview({ copy }: { copy: HomeCopy }) {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionLabel id="04" title="Team" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ImageSurface image={assetPaths.team} className="min-h-[24rem] border border-white/10" />
        <div className="flex flex-col justify-between gap-12 border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <p className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white/88 md:text-5xl">
            {textLines(copy.team)}
          </p>
          <div className="flex flex-wrap gap-3">
            {copy.roles.map((item) => (
              <span key={item} className="border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/62">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA({ copy }: { copy: HomeCopy }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <div className="grid gap-10 border border-white/10 bg-[linear-gradient(135deg,rgba(215,181,109,0.16),rgba(247,240,230,0.045)_42%,rgba(247,240,230,0.025))] p-7 md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/80">Contact</p>
          <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {textLines(copy.contactText)}
          </h2>
        </div>
        <Link href={localizedPath(copy.locale, '/apply')} className="inline-flex rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
          {copy.contactCta}
        </Link>
      </div>
    </section>
  );
}

export function BrandHomePage({ locale = 'root' }: { locale?: HomeLocale }) {
  const copy = copyByLocale[locale];
  const isCjk = copy.locale === 'ko' || copy.locale === 'ja' || copy.locale === 'zh';

  return (
    <div className={`min-h-screen scroll-smooth bg-[#0c0c0b] text-ivory ${isCjk ? 'cjk-keep' : ''}`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0c0b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
          <Link href={localizedPath(copy.locale, '')} className="text-xs font-semibold uppercase tracking-[0.38em] text-ivory">
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
        <BrandHero copy={copy} />
        <AboutSection copy={copy} />
        <BusinessCards copy={copy} />
        <PortfolioGrid copy={copy} />
        <TeamPreview copy={copy} />
        <ContactCTA copy={copy} />
      </main>
    </div>
  );
}
