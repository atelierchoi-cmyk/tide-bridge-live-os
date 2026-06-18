import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type CompanyLocale = Locale | 'root';

type LandingCopy = {
  locale: CompanyLocale;
  eyebrow: string;
  title: string[];
  body: string;
  cta: {
    explore: string;
    liveOs: string;
    partnership: string;
    final: string;
  };
  nav: string[];
  metrics: string[][];
  bridge: {
    title: string;
    routes: string[][];
  };
  layers: {
    title: string;
    items: string[][];
  };
  business: {
    title: string;
    items: string[][];
  };
  flow: {
    title: string;
    steps: string[];
  };
  matrix: {
    title: string;
    territories: string[];
    signals: string[];
  };
  partners: {
    title: string;
    items: string[][];
  };
  final: {
    title: string;
    body: string;
  };
};

const marketIntensity = [
  [true, true, true, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, false],
  [false, true, true, true, true],
  [true, true, true, false, true]
];

const baseCopy: LandingCopy = {
  locale: 'root',
  eyebrow: 'TIDE BRIDGE',
  title: ['Global Live & Cultural IP Infrastructure'],
  body: 'A private B2B layer connecting Korean content, global live opportunities, verified partners, and market intelligence.',
  cta: {
    explore: 'Explore Platform',
    liveOs: 'View Live OS',
    partnership: 'Request Partnership',
    final: 'Start Partnership Review'
  },
  nav: ['Platform', 'Business', 'Live OS', 'Launchpad', 'Network', 'Contact'],
  metrics: [
    ['01', 'Parent platform'],
    ['04', 'Operating layers'],
    ['06', 'Market regions']
  ],
  bridge: {
    title: 'Cross-Border Bridge Visual',
    routes: [
      ['Korean Content IP', 'Tide Bridge', 'Global Markets'],
      ['Global Live IP', 'Tide Bridge', 'Korea']
    ]
  },
  layers: {
    title: 'Platform Layers',
    items: [
      ['Live OS', 'Private infrastructure for live IP review, partner access, and opportunity workflows.'],
      ['Intelligence', 'Market signals, IP context, trust indicators, and expansion readiness.'],
      ['Launchpad', 'Structured entry paths for new formats, markets, and cultural IP programs.'],
      ['Verified Network', 'A reviewed partner graph across promoters, brands, public bodies, and investors.']
    ]
  },
  business: {
    title: 'Business Units',
    items: [
      ['Korean Content IP', 'K-POP, creators, formats, fan culture, and cultural exports.'],
      ['Global Live IP', 'Touring concepts, branded live formats, festivals, and market-ready shows.'],
      ['Market Intelligence', 'Territory signals shaped into concise opportunity judgment.']
    ]
  },
  flow: {
    title: 'Operating Model Flow',
    steps: ['IP / Partner Intake', 'Market Review', 'Trust Check', 'Opportunity Structuring', 'Execution Path']
  },
  matrix: {
    title: 'Market Scope Matrix',
    territories: ['Korea', 'Japan', 'Southeast Asia', 'North America', 'Middle East', 'Europe'],
    signals: ['IP Export', 'Live Import', 'Market Entry', 'Promotion', 'Partner Network']
  },
  partners: {
    title: 'Partner Entry Points',
    items: [
      ['IP Owners', 'Package cultural IP for reviewed international paths.'],
      ['Promoters', 'Bring market capacity, venues, and operating readiness.'],
      ['Brands & Sponsors', 'Connect campaigns with live and cultural IP moments.'],
      ['Public / Cultural Partners', 'Shape programs around cultural exchange and market access.'],
      ['Strategic Investors', 'Evaluate platform expansion, infrastructure, and co-build opportunities.']
    ]
  },
  final: {
    title: 'One platform for cross-border live and cultural IP decisions.',
    body: 'Concise access. Verified context. Structured next steps.'
  }
};

const companyCopy: Record<CompanyLocale, LandingCopy> = {
  root: baseCopy,
  en: baseCopy,
  ko: {
    ...baseCopy,
    locale: 'ko',
    title: ['한국 콘텐츠와', '글로벌 라이브·컬처 IP를', '하나의 크로스보더 인프라로 연결합니다.'],
    body: '비공개 접근. 검증된 파트너. 구조화된 IP 판단.',
    cta: {
      explore: '플랫폼 보기',
      liveOs: 'Live OS 보기',
      partnership: '파트너십 요청',
      final: '파트너십 검토 시작'
    },
    nav: ['Platform', 'Business', 'Live OS', 'Launchpad', 'Network', 'Contact'],
    metrics: [
      ['01', '상위 플랫폼'],
      ['04', '운영 레이어'],
      ['06', '시장 권역']
    ],
    bridge: {
      title: '크로스보더 브리지',
      routes: [
        ['한국 콘텐츠 IP', 'Tide Bridge', '글로벌 시장'],
        ['글로벌 라이브 IP', 'Tide Bridge', '한국']
      ]
    },
    layers: {
      title: '플랫폼 레이어',
      items: [
        ['Live OS', '라이브 IP 검토, 파트너 접근, 기회 흐름을 위한 비공개 인프라.'],
        ['Intelligence', '시장 신호, IP 맥락, 신뢰 지표, 확장 준비도 판단.'],
        ['Launchpad', '신규 포맷, 시장, 컬처 IP 프로그램을 위한 구조화된 진입 경로.'],
        ['Verified Network', '프로모터, 브랜드, 공공·문화 파트너, 투자자를 잇는 검증 네트워크.']
      ]
    },
    business: {
      title: '비즈니스 유닛',
      items: [
        ['한국 콘텐츠 IP', 'K-POP, 크리에이터, 포맷, 팬 문화, 컬처 수출.'],
        ['글로벌 라이브 IP', '투어링 콘셉트, 브랜드 라이브 포맷, 페스티벌, 시장형 쇼.'],
        ['Market Intelligence', '시장 신호를 간결한 기회 판단으로 구조화.']
      ]
    },
    flow: {
      title: '운영 모델 플로우',
      steps: ['IP / 파트너 인입', '시장 검토', '신뢰 확인', '기회 구조화', '실행 경로']
    },
    matrix: {
      ...baseCopy.matrix,
      title: '시장 범위 매트릭스',
      territories: ['한국', '일본', '동남아시아', '북미', '중동', '유럽']
    },
    partners: {
      title: '파트너 진입점',
      items: [
        ['IP Owners', '컬처 IP를 검토 가능한 국제 진출 구조로 패키징.'],
        ['Promoters', '시장 역량, 공연장, 현지 실행 준비도 연결.'],
        ['Brands & Sponsors', '캠페인을 라이브·컬처 IP 모먼트와 연결.'],
        ['Public / Cultural Partners', '문화 교류와 시장 접근 중심의 프로그램 설계.'],
        ['Strategic Investors', '플랫폼 확장, 인프라, 공동 구축 기회 검토.']
      ]
    },
    final: {
      title: '크로스보더 라이브·컬처 IP 판단을 위한 하나의 플랫폼.',
      body: '간결한 접근. 검증된 맥락. 구조화된 다음 단계.'
    }
  },
  ja: {
    ...baseCopy,
    locale: 'ja',
    title: ['韓国コンテンツと', 'グローバルなライブ・カルチャーIPを', 'ひとつのクロスボーダーインフラでつなぎます。'],
    body: '非公開アクセス。検証済みパートナー。構造化されたIP判断。',
    cta: {
      explore: 'Platformを見る',
      liveOs: 'Live OSを見る',
      partnership: 'Partnershipを依頼',
      final: 'Partnership Review'
    },
    metrics: [
      ['01', '親ブランド'],
      ['04', '運用レイヤー'],
      ['06', '市場地域']
    ],
    bridge: {
      title: 'クロスボーダーブリッジ',
      routes: [
        ['韓国コンテンツIP', 'Tide Bridge', 'グローバル市場'],
        ['グローバルライブIP', 'Tide Bridge', '韓国']
      ]
    },
    layers: {
      title: 'プラットフォームレイヤー',
      items: [
        ['Live OS', 'ライブIPレビュー、パートナーアクセス、機会ワークフローの非公開インフラ。'],
        ['Intelligence', '市場シグナル、IP文脈、信頼指標、展開レディネス。'],
        ['Launchpad', '新しいフォーマット、市場、カルチャーIPプログラムの構造化された入口。'],
        ['Verified Network', 'プロモーター、ブランド、公共・文化パートナー、投資家をつなぐ検証済みネットワーク。']
      ]
    },
    business: {
      title: 'ビジネスユニット',
      items: [
        ['韓国コンテンツIP', 'K-POP、クリエイター、フォーマット、ファンカルチャー、文化輸出。'],
        ['グローバルライブIP', 'ツアーコンセプト、ブランドライブ形式、フェスティバル、市場対応ショー。'],
        ['Market Intelligence', '地域シグナルを簡潔な機会判断へ整理。']
      ]
    },
    flow: {
      title: 'オペレーティングモデル',
      steps: ['IP / Partner Intake', 'Market Review', 'Trust Check', 'Opportunity Structuring', 'Execution Path']
    },
    matrix: {
      ...baseCopy.matrix,
      title: '市場スコープマトリクス',
      territories: ['韓国', '日本', '東南アジア', '北米', '中東', '欧州']
    },
    partners: {
      title: 'パートナーエントリー',
      items: [
        ['IP Owners', 'カルチャーIPを国際展開に向けたレビュー可能な形へ。'],
        ['Promoters', '市場キャパシティ、会場、現地運営レディネスを接続。'],
        ['Brands & Sponsors', 'キャンペーンをライブ・カルチャーIPの瞬間へ接続。'],
        ['Public / Cultural Partners', '文化交流と市場アクセスを軸にしたプログラム設計。'],
        ['Strategic Investors', 'プラットフォーム拡張、インフラ、共同構築機会を評価。']
      ]
    },
    final: {
      title: 'クロスボーダーのライブ・カルチャーIP判断をひとつのプラットフォームで。',
      body: '簡潔なアクセス。検証済みの文脈。構造化された次のステップ。'
    }
  },
  zh: {
    ...baseCopy,
    locale: 'zh',
    title: ['连接韩国内容与', '全球现场娱乐及文化 IP，', '打造跨境 B2B 基础设施。'],
    body: '非公开访问。已验证伙伴。结构化 IP 判断。',
    cta: {
      explore: '查看平台',
      liveOs: '查看 Live OS',
      partnership: '申请合作',
      final: '开始合作审核'
    },
    metrics: [
      ['01', '母品牌平台'],
      ['04', '运营层'],
      ['06', '市场区域']
    ],
    bridge: {
      title: '跨境桥接视图',
      routes: [
        ['韩国内容 IP', 'Tide Bridge', '全球市场'],
        ['全球现场娱乐 IP', 'Tide Bridge', '韩国']
      ]
    },
    layers: {
      title: '平台层',
      items: [
        ['Live OS', '用于现场 IP 审核、伙伴访问与机会流程的非公开基础设施。'],
        ['Intelligence', '市场信号、IP 语境、信任指标与扩张准备度。'],
        ['Launchpad', '面向新形式、新市场与文化 IP 项目的结构化入口。'],
        ['Verified Network', '连接主办方、品牌、公共文化伙伴与投资方的验证网络。']
      ]
    },
    business: {
      title: '业务单元',
      items: [
        ['韩国内容 IP', 'K-POP、创作者、形式、粉丝文化与文化出口。'],
        ['全球现场娱乐 IP', '巡演概念、品牌现场形式、音乐节与市场化演出。'],
        ['Market Intelligence', '将地区信号组织为简洁的机会判断。']
      ]
    },
    flow: {
      title: '运营模型流程',
      steps: ['IP / 伙伴接入', '市场审核', '信任检查', '机会结构化', '执行路径']
    },
    matrix: {
      ...baseCopy.matrix,
      title: '市场范围矩阵',
      territories: ['韩国', '日本', '东南亚', '北美', '中东', '欧洲']
    },
    partners: {
      title: '伙伴入口',
      items: [
        ['IP Owners', '将文化 IP 打包为可审核的国际路径。'],
        ['Promoters', '连接市场能力、场馆资源与本地执行准备度。'],
        ['Brands & Sponsors', '把品牌活动连接到现场与文化 IP 时刻。'],
        ['Public / Cultural Partners', '围绕文化交流与市场进入设计项目。'],
        ['Strategic Investors', '评估平台扩张、基础设施与共同建设机会。']
      ]
    },
    final: {
      title: '一个平台，判断跨境现场娱乐与文化 IP。',
      body: '简洁访问。验证语境。结构化下一步。'
    }
  }
};

function localizedHref(locale: CompanyLocale, path: string) {
  if (locale === 'root') return path;
  return `/${locale}${path === '/' ? '' : path}`;
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <p className="label">{kicker}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-ivory md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}

export function CompanyLandingPage({ locale = 'root' }: { locale?: CompanyLocale }) {
  const copy = companyCopy[locale];
  const isCjk = copy.locale === 'ko' || copy.locale === 'ja' || copy.locale === 'zh';
  const cjkClass = isCjk ? 'cjk-keep' : '';
  const platformHref = localizedHref(copy.locale, '/platform');
  const liveOsHref = localizedHref(copy.locale, '/platform');
  const applyHref = localizedHref(copy.locale, '/apply');

  return (
    <div className={`overflow-hidden bg-ink ${cjkClass}`}>
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(215,181,109,0.16),transparent_32%),linear-gradient(135deg,rgba(247,240,230,0.08),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 md:pb-24">
          <nav className="mb-16 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
            {copy.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-champagne">
                {item}
              </a>
            ))}
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div>
              <p className="label">{copy.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-ivory md:text-7xl lg:text-8xl">
                {copy.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/68 md:text-lg">{copy.body}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={platformHref} className="btn-primary">
                  {copy.cta.explore}
                </Link>
                <Link href={liveOsHref} className="btn-secondary">
                  {copy.cta.liveOs}
                </Link>
                <Link href={applyHref} className="btn-secondary">
                  {copy.cta.partnership}
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-glow md:p-6">
              <div className="grid gap-3">
                {copy.metrics.map(([value, label]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink/60 px-5 py-4">
                    <span className="text-3xl font-semibold text-champagne">{value}</span>
                    <span className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-ivory/55">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-champagne/25 bg-champagne/[0.07] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne/80">Live & Cultural IP</p>
                <div className="mt-5 grid grid-cols-3 items-center gap-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ivory/60">
                  <span>Korea</span>
                  <span className="rounded-full border border-champagne/40 px-3 py-2 text-champagne">Tide Bridge</span>
                  <span>Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader kicker="01" title={copy.bridge.title} />
        <div className="grid gap-4 lg:grid-cols-2">
          {copy.bridge.routes.map((route) => (
            <div key={route.join('-')} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 md:p-6">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                {route.map((label, index) => (
                  <div key={label} className="contents">
                    <div className={`rounded-2xl border px-5 py-5 text-center text-sm font-semibold ${index === 1 ? 'border-champagne/35 bg-champagne/[0.08] text-champagne' : 'border-white/10 bg-ink/70 text-ivory'}`}>
                      {label}
                    </div>
                    {index < route.length - 1 ? <div className="hidden text-champagne/70 md:block">→</div> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="business" className="border-y border-white/10 bg-smoke/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start md:py-24">
          <div>
            <SectionHeader kicker="02" title={copy.layers.title} />
            <div className="space-y-4">
              {copy.business.items.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-ink/55 p-5">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ivory">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ivory/56">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.layers.items.map(([title, body], index) => (
              <div key={title} className="min-h-56 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
                <p className="text-sm font-semibold text-champagne">0{index + 1}</p>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-ivory">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-ivory/58">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="live-os" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader kicker="03" title={copy.flow.title} />
        <div className="grid gap-3 md:grid-cols-5">
          {copy.flow.steps.map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-semibold text-champagne/85">0{index + 1}</p>
              <h3 className="mt-5 min-h-14 text-lg font-semibold leading-6 tracking-[-0.02em] text-ivory">{step}</h3>
              {index < copy.flow.steps.length - 1 ? <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-champagne md:block">→</span> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="launchpad" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <SectionHeader kicker="04" title={copy.matrix.title} />
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
            <div className="grid min-w-[760px] grid-cols-[1.2fr_repeat(5,1fr)] bg-smoke/60">
              <div className="border-b border-white/10 p-4 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/45">Territory</div>
              {copy.matrix.signals.map((signal) => (
                <div key={signal} className="border-b border-l border-white/10 p-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ivory/50">
                  {signal}
                </div>
              ))}
              {copy.matrix.territories.map((territory, rowIndex) => (
                <div key={territory} className="contents">
                  <div className="border-b border-white/10 bg-ink/55 p-4 text-sm font-semibold text-ivory">{territory}</div>
                  {copy.matrix.signals.map((signal, columnIndex) => (
                    <div key={`${territory}-${signal}`} className="flex items-center justify-center border-b border-l border-white/10 bg-ink/35 p-4">
                      <span className={`h-3 w-3 rounded-full ${marketIntensity[rowIndex][columnIndex] ? 'bg-champagne shadow-[0_0_20px_rgba(215,181,109,0.45)]' : 'border border-white/20 bg-white/[0.04]'}`} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="network" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader kicker="05" title={copy.partners.title} />
        <div className="grid gap-4 md:grid-cols-5">
          {copy.partners.items.map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
              <h3 className="min-h-14 text-xl font-semibold tracking-[-0.03em] text-ivory">{title}</h3>
              <p className="mt-5 text-sm leading-7 text-ivory/55">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="label">Tide Bridge</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-ivory md:text-6xl">{copy.final.title}</h2>
            <p className="mt-5 text-base text-ivory/58">{copy.final.body}</p>
          </div>
          <Link href={applyHref} className="btn-primary shrink-0 text-center">
            {copy.cta.final}
          </Link>
        </div>
      </section>
    </div>
  );
}
