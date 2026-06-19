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
  eyebrow: string;
  headline: string;
  englishLines: string[];
  koreanLines: string[];
  viewBusiness: string;
  enterLiveOs: string;
  contact: string;
  aboutEnglish: string;
  aboutKorean: string;
  business: BusinessItem[];
  portfolio: PortfolioItem[];
  conceptLabels: string[];
  teamEnglish: string;
  teamKorean: string;
  roles: string[];
  contactEnglish: string;
  contactKorean: string;
  contactCta: string;
};

const navItems = ['About', 'Business', 'Portfolio', 'Team', 'Contact'];

const mediaPaths = {
  heroVideo: '/media/wave-hero.mp4',
  heroPoster: '/media/wave-hero-poster.jpg'
};

const portfolioItems: PortfolioItem[] = [
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

const businessItems: BusinessItem[] = [
  { title: 'Korea to Global', body: '한국 콘텐츠 IP의 해외 시장 확장.' },
  { title: 'Global to Korea', body: '글로벌 라이브·컬처 IP의 한국 진입.' },
  { title: 'IP & Rights', body: '공연·전시·콘텐츠 IP의 구조화와 판권 기획.' },
  { title: 'Market Entry', body: '우선 시장 진입과 파트너십 설계.' }
];

const baseCopy: HomeCopy = {
  locale: 'root',
  eyebrow: 'TIDE BRIDGE',
  headline: 'Connecting the Next Wave of Culture',
  englishLines: ['Korean Content.', 'Global Live IP.', 'One Cross-Border Bridge.'],
  koreanLines: ['한국 콘텐츠와', '글로벌 라이브 IP를', '하나의 브릿지로 연결합니다.'],
  viewBusiness: 'View Business',
  enterLiveOs: 'Enter Live OS',
  contact: 'Contact',
  aboutEnglish: 'Tide Bridge connects Korean content, global live opportunities, and verified partners across culture, entertainment, and market entry.',
  aboutKorean: 'Tide Bridge는 한국 콘텐츠와 글로벌 라이브·컬처 IP를 연결하는\n크로스보더 엔터테인먼트 컴퍼니입니다.',
  business: businessItems,
  portfolio: portfolioItems,
  conceptLabels: ['Global Markets', 'Artist & IP Network', 'Cross-Border Partners', 'Cultural Opportunities'],
  teamEnglish: 'A cross-border team built around live entertainment, IP strategy, partnerships, and market execution.',
  teamKorean: '라이브 엔터테인먼트, IP 전략, 파트너십, 시장 실행을 연결하는\n크로스보더 팀입니다.',
  roles: ['IP Strategy', 'Live Entertainment', 'Partnerships', 'Market Entry', 'Intelligence'],
  contactEnglish: 'For partnerships, market entry, and global live IP opportunities.',
  contactKorean: '파트너십, 시장 진입, 글로벌 라이브 IP 기회를 함께 논의합니다.',
  contactCta: 'Contact Tide Bridge'
};

const copyByLocale: Record<HomeLocale, HomeCopy> = {
  root: baseCopy,
  en: { ...baseCopy, locale: 'en' },
  ko: {
    ...baseCopy,
    locale: 'ko',
    viewBusiness: '비즈니스 보기',
    enterLiveOs: 'Live OS 입장',
    contact: '문의하기',
    contactCta: 'Tide Bridge 문의'
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    koreanLines: ['韓国コンテンツと', 'グローバルライブIPを', 'ひとつのブリッジでつなぎます。'],
    aboutKorean: 'Tide Bridgeは、韓国コンテンツとグローバルライブ・カルチャーIPをつなぐ\nクロスボーダー・エンターテインメントカンパニーです。',
    teamKorean: 'ライブエンターテインメント、IP戦略、パートナーシップ、市場実行をつなぐ\nクロスボーダーチームです。',
    contactKorean: 'パートナーシップ、市場参入、グローバルライブIP機会についてご相談ください。',
    viewBusiness: 'Businessを見る',
    contact: 'Contact'
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    koreanLines: ['连接韩国内容与', '全球现场娱乐 IP，', '构建跨境桥梁。'],
    aboutKorean: 'Tide Bridge 是连接韩国内容与全球现场娱乐及文化 IP 的\n跨境娱乐公司。',
    teamKorean: '连接现场娱乐、IP 策略、伙伴关系与市场执行的\n跨境团队。',
    contactKorean: '共同讨论伙伴关系、市场进入与全球现场娱乐 IP 机会。',
    viewBusiness: '查看业务',
    contact: '联系',
    contactCta: '联系 Tide Bridge'
  }
};

function publicFileExists(publicPath: string) {
  return existsSync(path.join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
}

function localizedPath(locale: HomeLocale, nextPath: string) {
  if (locale === 'root') return nextPath || '/';
  return `/${locale}${nextPath}`;
}

function textLines(value: string) {
  return value.split('\n').map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));
}

function imageStyle(image: string, fallback: string) {
  const imageValue = publicFileExists(image) ? `url(${image})` : 'none';

  return { '--image': imageValue, '--fallback': fallback } as CSSProperties;
}

function SectionLabel({ id, title }: { id: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4 md:mb-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne/80">{id}</p>
      <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-ivory/55">{title}</h2>
    </div>
  );
}

function BridgeMark() {
  return (
    <span className="relative inline-flex h-8 w-14 items-end" aria-hidden="true">
      <span className="absolute bottom-2 left-0 h-px w-full bg-champagne/70" />
      <span className="absolute bottom-2 left-1 h-5 w-12 rounded-t-full border border-b-0 border-champagne/70" />
      <span className="absolute bottom-0 left-1 h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,transparent,rgba(215,181,109,0.85),transparent)]" />
    </span>
  );
}

function ImageSurface({
  image,
  fallback,
  className = '',
  children
}: {
  image: string;
  fallback: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[image:linear-gradient(135deg,rgba(215,181,109,0.24),rgba(247,240,230,0.07)_34%,rgba(12,12,11,0.96)),var(--image),var(--fallback)] bg-cover bg-center ${className}`}
      style={imageStyle(image, fallback)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.7))]" />
      {children}
    </div>
  );
}

function HeroMedia() {
  const hasVideo = publicFileExists(mediaPaths.heroVideo);
  const hasPoster = publicFileExists(mediaPaths.heroPoster);

  if (hasVideo) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={hasPoster ? mediaPaths.heroPoster : undefined}
        aria-hidden="true"
      >
        <source src={mediaPaths.heroVideo} type="video/mp4" />
      </video>
    );
  }

  if (hasPoster) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mediaPaths.heroPoster})` }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(215,181,109,0.2),transparent_28%),radial-gradient(circle_at_28%_76%,rgba(88,114,129,0.28),transparent_34%),linear-gradient(135deg,#07121b,#0b0b0b_48%,#17120b)]"
      aria-hidden="true"
    />
  );
}

function HomeHeader({ copy }: { copy: HomeCopy }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111a]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href={localizedPath(copy.locale, '')} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
          <BridgeMark />
          <span>Tide Bridge</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/58 transition hover:text-champagne">
              {item}
            </a>
          ))}
        </nav>
        <Link
          href={localizedPath(copy.locale, '/live-os')}
          className="rounded-full border border-champagne/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink"
        >
          {copy.enterLiveOs}
        </Link>
      </div>
    </header>
  );
}

function BrandHero({ copy }: { copy: HomeCopy }) {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-28">
      <HeroMedia />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,14,0.92),rgba(3,9,14,0.58)_52%,rgba(3,9,14,0.84)),linear-gradient(180deg,rgba(3,9,14,0.26),rgba(12,12,11,0.94))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0c0c0b] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.44em] text-champagne">
            <BridgeMark />
            {copy.eyebrow}
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
            {copy.headline}
          </h1>
          <div className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.025em] text-ivory/86 md:text-4xl">
            {copy.englishLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl whitespace-pre-line break-keep text-lg leading-8 text-ivory/70 md:text-xl">{copy.koreanLines.join('\n')}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#business" className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.viewBusiness}
            </a>
            <Link href={localizedPath(copy.locale, '/live-os')} className="rounded-full border border-champagne/45 px-6 py-3 text-sm font-semibold text-champagne transition hover:bg-champagne hover:text-ink">
              {copy.enterLiveOs}
            </Link>
            <a href="#contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:text-champagne">
              {copy.contact}
            </a>
          </div>
        </div>

        <div className="hidden border-l border-white/15 pl-7 lg:block">
          <div className="grid gap-4">
            {copy.conceptLabels.map((label) => (
              <p key={label} className="border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory/58">
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: HomeCopy }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel id="01" title="About" />
      <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne/70">Cross-Border Company</p>
        <div>
          <p className="max-w-5xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white/90 md:text-5xl">{copy.aboutEnglish}</p>
          <p className="mt-8 max-w-4xl whitespace-pre-line break-keep text-xl font-medium leading-9 text-ivory/68 md:text-2xl">
            {textLines(copy.aboutKorean)}
          </p>
        </div>
      </div>
    </section>
  );
}

function BusinessCards({ copy }: { copy: HomeCopy }) {
  return (
    <section id="business" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel id="02" title="Business" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {copy.business.map((item, index) => (
          <article key={item.title} className="group min-h-72 border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-champagne/45 hover:bg-white/[0.055]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-champagne">0{index + 1}</p>
              <span className="h-2 w-2 rounded-full bg-champagne/75 opacity-50 transition group-hover:opacity-100" />
            </div>
            <h3 className="mt-16 font-serif text-3xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
            <p className="mt-7 break-keep text-sm leading-6 text-ivory/64">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioGrid({ copy }: { copy: HomeCopy }) {
  const fallbacks = [
    'linear-gradient(135deg,#172531,#41321d 52%,#0b0b0b)',
    'linear-gradient(135deg,#132a2f,#2d3524 50%,#0b0b0b)',
    'linear-gradient(135deg,#26252a,#5b4929 54%,#0b0b0b)',
    'linear-gradient(135deg,#1a1e2a,#4b3528 52%,#0b0b0b)',
    'linear-gradient(135deg,#10252a,#313c4b 48%,#0b0b0b)',
    'linear-gradient(135deg,#202410,#54401e 52%,#0b0b0b)'
  ];

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel id="03" title="Portfolio" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {copy.portfolio.map((item, index) => (
          <article key={item.title} className="group overflow-hidden border border-white/10 bg-[#141311] transition duration-300 hover:-translate-y-1 hover:border-champagne/45">
            <ImageSurface image={item.image} fallback={fallbacks[index]} className="h-72 transition duration-700 group-hover:scale-[1.025]">
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
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
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

function ConceptBand({ copy }: { copy: HomeCopy }) {
  return (
    <section className="border-y border-white/10 bg-[#10100e]">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-6 md:grid-cols-4">
        {copy.conceptLabels.map((label) => (
          <div key={label} className="border-white/10 py-5 md:border-l md:px-6 md:first:border-l-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamPreview({ copy }: { copy: HomeCopy }) {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel id="04" title="Team" />
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <ImageSurface image="/images/home/team-placeholder.jpg" fallback="linear-gradient(135deg,#151f28,#493b22_54%,#0b0b0b)" className="min-h-[24rem] border border-white/10" />
        <div className="flex flex-col justify-between gap-12 border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <div>
            <p className="max-w-4xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white/90 md:text-5xl">{copy.teamEnglish}</p>
            <p className="mt-7 whitespace-pre-line break-keep text-xl font-medium leading-9 text-ivory/66 md:text-2xl">{textLines(copy.teamKorean)}</p>
          </div>
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

function ContactSection({ copy }: { copy: HomeCopy }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid gap-10 border border-white/10 bg-[linear-gradient(135deg,rgba(215,181,109,0.16),rgba(247,240,230,0.045)_42%,rgba(247,240,230,0.025))] p-7 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/80">Contact</p>
          <h2 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-6xl">
            {copy.contactEnglish}
          </h2>
          <p className="mt-7 max-w-xl break-keep text-lg leading-8 text-ivory/66">{copy.contactKorean}</p>
        </div>

        <form className="grid gap-4" action={localizedPath(copy.locale, '/apply')}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="label">Name</span>
              <input className="input" name="name" type="text" autoComplete="name" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="label">Email</span>
              <input className="input" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="label">Opportunity</span>
            <input className="input" name="opportunity" type="text" placeholder="Partnership, market entry, global live IP" />
          </label>
          <label className="grid gap-2">
            <span className="label">Message</span>
            <textarea
              className="input min-h-36 resize-y"
              name="message"
              placeholder="Tell us what you would like to build with Tide Bridge."
            />
          </label>
          <button className="mt-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne" type="submit">
            {copy.contactCta}
          </button>
        </form>
      </div>
    </section>
  );
}

export function BrandHomePage({ locale = 'root' }: { locale?: HomeLocale }) {
  const copy = copyByLocale[locale];
  const isCjk = copy.locale === 'ko' || copy.locale === 'ja' || copy.locale === 'zh';

  return (
    <div className={`min-h-screen scroll-smooth bg-[#0c0c0b] text-ivory ${isCjk ? 'cjk-keep' : ''}`}>
      <HomeHeader copy={copy} />
      <main>
        <BrandHero copy={copy} />
        <AboutSection copy={copy} />
        <BusinessCards copy={copy} />
        <PortfolioGrid copy={copy} />
        <ConceptBand copy={copy} />
        <TeamPreview copy={copy} />
        <ContactSection copy={copy} />
      </main>
    </div>
  );
}
