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
  heroTitle: string[];
  heroSubcopy: string;
  secondaryTitle: string[];
  secondarySubcopy: string;
  businessCta: string;
  portfolioCta: string;
  contactCtaShort: string;
  enterLiveOs: string;
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
  heroPoster: '/media/wave-hero-poster.jpg',
  heroFallback: '/images/home/hero-wave.jpg'
};

const imagePaths = {
  about: '/images/home/about-culture.jpg',
  business: '/images/home/business-global.jpg',
  team: '/images/home/team.jpg',
  contact: '/images/home/contact.jpg'
};

const businessItems: BusinessItem[] = [
  { title: 'Korea to Global', body: '한국 IP의 글로벌 확장.' },
  { title: 'Global to Korea', body: '글로벌 IP의 한국 진입.' },
  { title: 'IP & Rights', body: '공연·전시·콘텐츠 판권 구조화.' },
  { title: 'Market Entry', body: '우선 시장 진입과 파트너십 설계.' }
];

const portfolioItems: PortfolioItem[] = [
  {
    title: 'K-Content IP',
    body: 'Music, artists, actors, formats.',
    tags: ['Content', 'IP', 'Global'],
    image: '/images/home/portfolio-kcontent.jpg'
  },
  {
    title: 'Live Events',
    body: 'Concerts, fan events, showcases.',
    tags: ['Live', 'Tour', 'Fans'],
    image: '/images/home/portfolio-live.jpg'
  },
  {
    title: 'Exhibitions',
    body: 'Cultural and immersive experiences.',
    tags: ['Culture', 'Space', 'Experience'],
    image: '/images/home/portfolio-exhibition.jpg'
  },
  {
    title: 'Brand Culture',
    body: 'Culture-led brand partnerships.',
    tags: ['Brand', 'Audience', 'Culture'],
    image: '/images/home/portfolio-brand.jpg'
  },
  {
    title: 'Esports',
    body: 'Fandom-driven event IP.',
    tags: ['Esports', 'Fandom', 'Event'],
    image: '/images/home/portfolio-esports.jpg'
  },
  {
    title: 'Market Entry',
    body: 'Launch support for new IP.',
    tags: ['Launchpad', 'Market', 'Growth'],
    image: '/images/home/portfolio-market-entry.jpg'
  }
];

const baseCopy: HomeCopy = {
  locale: 'root',
  heroTitle: ['Culture. IP. Live.', 'Across Borders.'],
  heroSubcopy: 'A cross-border company for live and cultural IP.',
  secondaryTitle: ['문화와 IP를', '국경 너머로.'],
  secondarySubcopy: '라이브와 컬처 IP를 연결하는 크로스보더 컴퍼니.',
  businessCta: 'Business',
  portfolioCta: 'Portfolio',
  contactCtaShort: 'Contact',
  enterLiveOs: 'Enter Live OS',
  aboutEnglish: 'We connect Korean content, global live IP, and verified partners.',
  aboutKorean: '한국 콘텐츠와 글로벌 라이브 IP,\n검증된 파트너를 연결합니다.',
  business: businessItems,
  portfolio: portfolioItems,
  conceptLabels: ['Global Markets', 'IP Network', 'Cross-Border Partners', 'Cultural Opportunities'],
  teamEnglish: 'Cross-border IP, live, and market execution.',
  teamKorean: 'IP, 라이브, 시장 실행을 연결하는 팀.',
  roles: ['IP Strategy', 'Live', 'Partnerships', 'Market Entry', 'Intelligence'],
  contactEnglish: 'Partnerships. Market Entry. Global Live IP.',
  contactKorean: '파트너십, 시장 진입, 글로벌 라이브 IP.',
  contactCta: 'Contact Tide Bridge'
};

const copyByLocale: Record<HomeLocale, HomeCopy> = {
  root: baseCopy,
  en: { ...baseCopy, locale: 'en' },
  ko: {
    ...baseCopy,
    locale: 'ko',
    heroTitle: ['문화와 IP를', '국경 너머로.'],
    heroSubcopy: '라이브와 컬처 IP를 연결하는 크로스보더 컴퍼니.',
    secondaryTitle: ['Culture. IP. Live.', 'Across Borders.'],
    secondarySubcopy: 'A cross-border company for live and cultural IP.',
    businessCta: '비즈니스',
    portfolioCta: '포트폴리오',
    contactCtaShort: '문의하기',
    enterLiveOs: 'Live OS 입장',
    contactCta: 'Tide Bridge 문의'
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    heroTitle: ['文化とIPを', '国境を越えて。'],
    heroSubcopy: 'ライブとカルチャーIPをつなぐクロスボーダーカンパニー。',
    secondaryTitle: ['Culture. IP. Live.', 'Across Borders.'],
    secondarySubcopy: 'A cross-border company for live and cultural IP.',
    aboutKorean: '韓国コンテンツ、グローバルライブIP、\n信頼できるパートナーをつなぎます。',
    teamKorean: 'IP、ライブ、市場実行をつなぐチーム。',
    contactKorean: 'パートナーシップ、市場参入、グローバルライブIP。'
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    heroTitle: ['文化与IP', '跨越边界。'],
    heroSubcopy: '连接现场娱乐与文化 IP 的跨境公司。',
    secondaryTitle: ['Culture. IP. Live.', 'Across Borders.'],
    secondarySubcopy: 'A cross-border company for live and cultural IP.',
    aboutKorean: '连接韩国内容、全球现场娱乐IP，\n以及可信伙伴。',
    teamKorean: '连接 IP、现场娱乐与市场执行的团队。',
    contactKorean: '伙伴关系、市场进入、全球现场娱乐IP。'
  }
};

function publicFileExists(publicPath: string) {
  return existsSync(path.join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
}

function localizedPath(locale: HomeLocale, nextPath: string) {
  if (locale === 'root') return nextPath || '/';
  return `/${locale}${nextPath}`;
}

function textLines(lines: string[] | string) {
  const value = Array.isArray(lines) ? lines : lines.split('\n');

  return value.map((line) => (
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
  label,
  className = '',
  children
}: {
  image: string;
  fallback: string;
  label?: string;
  className?: string;
  children?: ReactNode;
}) {
  const hasImage = publicFileExists(image);

  return (
    <div
      className={`relative overflow-hidden bg-[image:linear-gradient(135deg,rgba(4,13,22,0.12),rgba(4,13,22,0.46)),var(--image),var(--fallback)] bg-cover bg-center ${className}`}
      style={imageStyle(image, fallback)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,14,0.08),rgba(3,9,14,0.72)),radial-gradient(circle_at_18%_18%,rgba(215,181,109,0.16),transparent_18rem)]" />
      {!hasImage && label ? (
        <div className="absolute inset-0 opacity-75">
          <div className="absolute left-6 top-6 h-px w-24 bg-champagne/45" />
          <div className="absolute right-6 top-6 h-24 w-px bg-champagne/30" />
          <div className="absolute bottom-8 left-6 flex items-end gap-4">
            <BridgeMark />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne/70">{label}</span>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.04)_46%,transparent_47%)]" />
        </div>
      ) : null}
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

  if (hasPoster || publicFileExists(mediaPaths.heroFallback)) {
    const image = hasPoster ? mediaPaths.heroPoster : mediaPaths.heroFallback;

    return <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />;
  }

  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(215,181,109,0.2),transparent_26rem),radial-gradient(circle_at_20%_76%,rgba(41,66,84,0.34),transparent_24rem),linear-gradient(135deg,#06111b,#0b0b0b_52%,#171209)]"
      aria-hidden="true"
    />
  );
}

function HomeHeader({ copy }: { copy: HomeCopy }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111a]/72 backdrop-blur-xl">
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,14,0.9),rgba(3,9,14,0.52)_52%,rgba(3,9,14,0.84)),linear-gradient(180deg,rgba(3,9,14,0.15),rgba(12,12,11,0.94))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0c0c0b] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.44em] text-champagne">
            <BridgeMark />
            TIDE BRIDGE
          </p>
          <h1 className="mt-8 max-w-4xl break-keep font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.045em] text-white md:text-8xl">
            {textLines(copy.heroTitle)}
          </h1>
          <p className="mt-7 max-w-xl break-keep text-base font-medium leading-7 text-ivory/70 md:text-lg">{copy.heroSubcopy}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#business" className="rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne">
              {copy.businessCta}
            </a>
            <a href="#portfolio" className="rounded-full border border-champagne/45 px-6 py-3 text-sm font-semibold text-champagne transition hover:bg-champagne hover:text-ink">
              {copy.portfolioCta}
            </a>
            <a href="#contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:text-champagne">
              {copy.contactCtaShort}
            </a>
          </div>
        </div>

        <div className="hidden border-l border-white/15 pl-7 lg:block">
          <p className="break-keep font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-ivory/82">
            {textLines(copy.secondaryTitle)}
          </p>
          <p className="mt-5 break-keep text-sm leading-6 text-ivory/54">{copy.secondarySubcopy}</p>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: HomeCopy }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel id="01" title="About" />
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <ImageSurface image={imagePaths.about} fallback="linear-gradient(135deg,#07121b,#2d2618_54%,#0c0c0b)" label="Culture" className="min-h-[22rem] border border-white/10 md:min-h-[30rem]" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne/70">Cross-Border Company</p>
          <p className="mt-8 max-w-4xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white/90 md:text-5xl">{copy.aboutEnglish}</p>
          <p className="mt-7 max-w-3xl whitespace-pre-line break-keep text-xl font-medium leading-8 text-ivory/66 md:text-2xl">
            {textLines(copy.aboutKorean)}
          </p>
        </div>
      </div>
    </section>
  );
}

function BusinessCards({ copy }: { copy: HomeCopy }) {
  return (
    <section id="business" className="relative isolate overflow-hidden border-y border-white/10 px-5 py-20 md:py-28">
      <ImageSurface image={imagePaths.business} fallback="linear-gradient(135deg,#07121b,#272313_52%,#0c0c0b)" className="absolute inset-0 -z-10 opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[#0c0c0b]/70" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel id="02" title="Business" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {copy.business.map((item, index) => (
            <article key={item.title} className="group min-h-64 border border-white/10 bg-[#07111a]/62 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-champagne/45 hover:bg-[#10100e]/80">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-champagne">0{index + 1}</p>
                <span className="h-px w-10 bg-champagne/55 transition group-hover:w-14" />
              </div>
              <h3 className="mt-16 font-serif text-3xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
              <p className="mt-6 break-keep text-sm leading-6 text-ivory/68">{item.body}</p>
            </article>
          ))}
        </div>
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
          <article key={item.title} className="group overflow-hidden border border-white/10 bg-[#10100e] transition duration-300 hover:-translate-y-1 hover:border-champagne/45">
            <ImageSurface image={item.image} fallback={fallbacks[index]} label={item.title} className="h-80 transition duration-700 group-hover:scale-[1.025]">
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <div className="mb-4 h-px w-16 bg-champagne/70 transition group-hover:w-24" />
                <h3 className="font-serif text-3xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/70">{item.body}</p>
              </div>
            </ImageSurface>
            <div className="flex flex-wrap gap-2 p-5">
              {item.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ivory/55">
                  {tag}
                </span>
              ))}
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
        <ImageSurface image={imagePaths.team} fallback="linear-gradient(135deg,#151f28,#493b22_54%,#0b0b0b)" label="Team" className="min-h-[24rem] border border-white/10" />
        <div className="flex flex-col justify-between gap-12 border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <div>
            <p className="max-w-4xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white/90 md:text-5xl">{copy.teamEnglish}</p>
            <p className="mt-7 break-keep text-xl font-medium leading-8 text-ivory/66 md:text-2xl">{copy.teamKorean}</p>
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
      <div className="grid overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(215,181,109,0.16),rgba(247,240,230,0.045)_42%,rgba(247,240,230,0.025))] lg:grid-cols-[0.78fr_1.22fr]">
        <ImageSurface image={imagePaths.contact} fallback="linear-gradient(135deg,#07121b,#3b321f_54%,#0c0c0b)" label="Contact" className="min-h-[22rem]" />

        <div className="p-7 md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/80">Contact</p>
            <h2 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-6xl">
              {copy.contactEnglish}
            </h2>
            <p className="mt-7 max-w-xl break-keep text-lg leading-8 text-ivory/66">{copy.contactKorean}</p>
          </div>

          <form className="mt-10 grid gap-4" action={localizedPath(copy.locale, '/apply')}>
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
              <textarea className="input min-h-36 resize-y" name="message" placeholder="Tell us what you would like to build with Tide Bridge." />
            </label>
            <button className="mt-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne" type="submit">
              {copy.contactCta}
            </button>
          </form>
        </div>
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
