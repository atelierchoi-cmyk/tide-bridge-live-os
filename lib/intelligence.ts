import type { Locale } from '@/lib/i18n';

type Card = {
  title: string;
  body: string;
  points?: string[];
};

type Tier = {
  title: string;
  points: string[];
};

type IntelligenceCopy = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    support: string;
  };
  architecture: {
    eyebrow: string;
    title: string;
    body: string;
    items: Card[];
  };
  modules: {
    eyebrow: string;
    title: string;
    body: string;
    items: Card[];
  };
  subscribe: {
    eyebrow: string;
    title: string;
    body: string;
    audiences: Card[];
  };
  tiers: {
    eyebrow: string;
    title: string;
    body: string;
    items: Tier[];
    ctas: string[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: Card[];
  };
  trust: {
    eyebrow: string;
    title: string;
    notes: string[];
  };
};

const moduleItems: Card[] = [
  {
    title: 'IP Value Intelligence',
    body: 'Evaluate the current and future market potential of live and cultural IP before making a commercial proposal.',
    points: ['Current IP value signal', 'Future growth potential', 'Audience momentum', 'Territory fit', 'Benchmark reference', 'Estimated offer range', 'Revenue scenario preview', 'Risk level']
  },
  {
    title: 'Market Demand Signals',
    body: 'Identify where live and cultural IP is gaining demand before committing to a market.',
    points: ['Demand signal', 'Market heat', 'Audience interest', 'Local promoter interest', 'Comparable event history', 'Venue capacity fit', 'Territory heat level']
  },
  {
    title: 'Territory Opportunity Map',
    body: 'Compare Korea-to-Global and Global-to-Korea opportunities by demand, partner readiness, venue fit, and commercial potential.',
    points: ['Korean content IP expanding overseas', 'International touring IP into Korea', 'International exhibitions into Korea', 'International performances into Korea', 'Brand-culture collaborations']
  },
  {
    title: 'Promoter Trust Score',
    body: 'Review promoter credibility before granting private IP access or considering a commercial offer.',
    points: ['Verified profile', 'Track record', 'Settlement reliability', 'Venue access', 'Local marketing capacity', 'Sponsor network', 'Reference status', 'Execution readiness']
  },
  {
    title: 'Deal Readiness Report',
    body: 'Turn IP value, market demand, promoter credibility, and commercial conditions into a structured readiness report.',
    points: ['Opportunity summary', 'Demand signals', 'Territory priority', 'Estimated capacity range', 'Ticket price benchmark', 'Promoter reliability review', 'Deal risk notes', 'Recommended next step']
  },
  {
    title: 'Comparable Deal Benchmark',
    body: 'Compare similar live and cultural IP opportunities to understand whether an offer is commercially reasonable.',
    points: ['Anonymized benchmark', 'Comparable market reference', 'Similar IP category', 'Similar territory', 'Venue size', 'Ticket price range', 'Range-based estimate']
  }
];

const categoryPoints = [
  'K-POP concerts and fan meetings',
  'Actor and celebrity fan events',
  'Musicals and stage productions',
  'Exhibitions and immersive experiences',
  'Esports and entertainment events',
  'Brand-culture collaborations',
  'Global touring IP into Korea',
  'International exhibitions into Korea',
  'International performances into Korea'
];

const english: IntelligenceCopy = {
  hero: {
    eyebrow: 'LIVE & CULTURAL IP INTELLIGENCE',
    title: 'Know the value. Verify the partner. Structure the opportunity.',
    body: 'Tide Bridge Intelligence helps promoters, IP owners, and partners evaluate cross-border live and cultural IP opportunities through IP value signals, market demand intelligence, partner verification, and deal readiness reporting.',
    support: 'Tide Bridge Intelligence is the intelligence and trust layer for cross-border live and cultural IP opportunities.'
  },
  architecture: {
    eyebrow: 'Product Architecture',
    title: 'Live & Cultural IP Intelligence + Verified B2B Infrastructure',
    body: 'The Intelligence Layer connects the existing Live OS operating workflow with verified partner review and Launchpad-style market-entry support.',
    items: [
      { title: 'Live OS', body: 'Private B2B infrastructure for cross-border live and cultural IP opportunities.' },
      { title: 'Intelligence Layer', body: 'IP value signals, demand intelligence, territory review, benchmark notes, and deal readiness.' },
      { title: 'Verified Network', body: 'Promoter verification, reference checks, settlement reliability, and execution track record.' },
      { title: 'Launchpad', body: 'Market-entry and label-services support for emerging Korean content IP where available.' }
    ]
  },
  modules: {
    eyebrow: 'Intelligence Modules',
    title: 'A decision layer before access, offers, and deal review.',
    body: 'The dashboard turns fragmented market, partner, and commercial signals into structured B2B intelligence without claiming exact valuation or guaranteed outcomes.',
    items: moduleItems
  },
  subscribe: {
    eyebrow: 'Subscription Value',
    title: 'Why partners subscribe to Tide Bridge Intelligence',
    body: 'Subscription access is designed around better decisions before capital, rights, or private IP materials are exposed.',
    audiences: [
      { title: 'For Promoters', body: 'Promoters subscribe to review private IP opportunities, understand value signals, compare territory potential, estimate demand and capacity range, submit more credible offers, and reduce blind risk before entering a deal.' },
      { title: 'For IP Owners', body: 'IP owners subscribe to review verified promoter profiles, compare offer quality, understand territory demand, reduce operational and settlement risk, protect private IP access, and identify trusted market-entry partners.' },
      { title: 'For Brands, Investors, and Public / Industry Partners', body: 'Partners subscribe to track live and cultural IP trends, understand market readiness, identify verified execution partners, and review category and territory intelligence.' }
    ]
  },
  tiers: {
    eyebrow: 'Access Tiers',
    title: 'A non-priced framework for subscription access.',
    body: 'Tiers are intentionally framed as access levels, not consumer checkout or rights purchase flows.',
    items: [
      { title: 'Verified Partner Access', points: ['Private opportunity previews', 'Market demand signals', 'Basic IP value indicators', 'Submit market interest'] },
      { title: 'Professional Intelligence', points: ['IP value intelligence', 'Territory opportunity map', 'Comparable benchmark notes', 'Deal readiness preview'] },
      { title: 'IP Owner / Agency Intelligence', points: ['Verified promoter profiles', 'Promoter trust score', 'Offer comparison', 'Risk review notes', 'Market demand dashboard'] },
      { title: 'Enterprise / Advisory', points: ['Custom market reports', 'Korea-to-Global and Global-to-Korea strategy', 'Partner sourcing', 'Deal structuring support', 'Launchpad integration'] }
    ],
    ctas: ['Request Private Access', 'Request Intelligence Preview', 'Apply as Verified Partner', 'Discuss Enterprise Access']
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: 'Built for cross-border live and cultural IP decisions.',
    items: [
      { title: 'For Promoters', body: 'Know which IP is worth pursuing, understand market demand and estimated offer range, and submit more credible commercial proposals.' },
      { title: 'For IP Owners', body: 'Know whether a promoter is trustworthy, compare offers and territories, protect IP access, and reduce execution risk.' },
      { title: 'For Brands & Investors', body: 'Understand which live and cultural IP opportunities have market momentum and evaluate category fit and partnership potential.' },
      { title: 'For Public & Industry Partners', body: 'Understand cross-border live and cultural IP trends and support structured Korea-to-Global and Global-to-Korea opportunity review.' }
    ]
  },
  trust: {
    eyebrow: 'Trust Notes',
    title: 'Decision support, not guarantees.',
    notes: [
      'Tide Bridge Intelligence supports early-stage commercial decision-making. It does not guarantee ticket sales, revenue, artist availability, government approval, or deal execution.',
      'Partner verification is based on submitted company information, track record, references, and internal review. It is not a government certification or legal guarantee.',
      'Comparable deal benchmarks should use anonymized or permissioned references and range-based estimates rather than confidential third-party deal data.'
    ]
  }
};

export const intelligenceDictionaries: Record<Locale, IntelligenceCopy> = {
  en: english,
  ko: {
    ...english,
    hero: {
      ...english.hero,
      support: 'Tide Bridge Intelligence는 IP의 현재 가치와 성장 가능성, 시장 수요, 프로모터 신뢰도, 딜 리스크를 구조화해 더 안전하고 합리적인 크로스보더 IP 의사결정을 지원합니다.'
    },
    architecture: {
      ...english.architecture,
      title: '라이브 & 문화 IP 인텔리전스와 검증 기반 B2B 인프라',
      body: 'Intelligence Layer는 기존 Live OS 운영 워크플로, Verified Network, Launchpad형 시장 진입 지원을 하나의 의사결정 구조로 연결합니다.'
    },
    modules: {
      ...english.modules,
      title: '접근, 오퍼, 딜 검토 이전의 의사결정 레이어.',
      body: '대시보드는 시장, 파트너, 상업 조건 신호를 구조화하지만 정확한 가치 산정이나 결과 보장을 주장하지 않습니다.'
    },
    subscribe: {
      ...english.subscribe,
      title: 'Why partners subscribe to Tide Bridge Intelligence',
      body: '구독 접근은 자본, 권리, 비공개 IP 자료가 노출되기 전에 더 나은 판단을 돕기 위해 설계됩니다.'
    }
  },
  ja: {
    ...english,
    hero: {
      ...english.hero,
      support: 'Tide Bridge Intelligenceは、IPの現在価値シグナル、成長可能性、市場需要、プロモーター信頼度、ディールリスクを構造化し、クロスボーダーIPの意思決定を支援します。'
    },
    architecture: {
      ...english.architecture,
      title: 'ライブ&カルチュラルIPインテリジェンスと検証型B2Bインフラ',
      body: 'Intelligence Layerは、Live OS、Verified Network、Launchpad型の市場参入支援を接続する判断レイヤーです。'
    }
  },
  zh: {
    ...english,
    hero: {
      ...english.hero,
      support: 'Tide Bridge Intelligence 结构化 IP 当前价值信号、增长潜力、市场需求、主办方可信度和交易风险，支持更稳健的跨境 IP 决策。'
    },
    architecture: {
      ...english.architecture,
      title: '现场及文化 IP 情报 + 验证型 B2B 基础设施',
      body: 'Intelligence Layer 将 Live OS、Verified Network 与 Launchpad 式市场进入支持连接为一个决策层。'
    }
  }
};

export const intelligenceCategories = categoryPoints;
