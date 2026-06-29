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
    body: 'Value signals, growth potential, market fit, and offer-range context before a proposal is made.',
    points: ['Current value signal', 'Growth potential', 'Audience momentum', 'Territory fit', 'Benchmark reference', 'Estimated offer range']
  },
  {
    title: 'Market Demand Signals',
    body: 'Early demand indicators by market, city, audience, and comparable event activity.',
    points: ['Demand signal', 'Market heat', 'Audience interest', 'Promoter interest', 'Comparable activity', 'Venue fit']
  },
  {
    title: 'Territory Opportunity Map',
    body: 'A market view of Korea-to-Global and Global-to-Korea opportunities.',
    points: ['Korean IP overseas', 'Global touring IP into Korea', 'Exhibitions into Korea', 'Performance IP into Korea', 'Brand-culture opportunities']
  },
  {
    title: 'Promoter Trust Score',
    body: 'A reviewed trust layer before private IP access or offer consideration.',
    points: ['Verified profile', 'Track record', 'Settlement reliability', 'Venue access', 'Marketing capacity', 'Reference status']
  },
  {
    title: 'Deal Readiness Report',
    body: 'A structured view of market, partner, commercial, and execution readiness.',
    points: ['Opportunity summary', 'Demand signals', 'Territory priority', 'Capacity range', 'Price benchmark', 'Risk notes', 'Next step']
  },
  {
    title: 'Comparable Deal Benchmark',
    body: 'Range-based references for similar IP, territories, venues, and commercial structures.',
    points: ['Anonymized reference', 'Comparable market', 'Similar IP category', 'Venue size', 'Ticket range', 'Range estimate']
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
    title: 'Value the IP. Verify the partner. Structure the opportunity.',
    body: 'Tide Bridge Intelligence turns IP value, market demand, partner credibility, and deal readiness into a private B2B decision layer.',
    support: 'Built for cross-border live and cultural IP decisions — before rights, capital, or private materials are exposed.'
  },
  architecture: {
    eyebrow: 'Product Architecture',
    title: 'The intelligence layer of Live OS.',
    body: 'A focused decision layer connected to Live OS, Verified Network, and Launchpad execution.',
    items: [
      { title: 'Live OS', body: 'Private infrastructure for cross-border live and cultural IP.' },
      { title: 'Intelligence', body: 'Value signals, demand, territory review, benchmarks, and readiness.' },
      { title: 'Verified Network', body: 'Partner verification, references, settlement reliability, and execution history.' },
      { title: 'Launchpad', body: 'Market-entry support for selected emerging Korean content IP.' }
    ]
  },
  modules: {
    eyebrow: 'Intelligence Modules',
    title: 'Decision support before access, offers, and execution.',
    body: 'The dashboard structures fragmented market and partner signals without claiming exact valuation or assured outcomes.',
    items: moduleItems
  },
  subscribe: {
    eyebrow: 'Subscription Value',
    title: 'Why partners subscribe',
    body: 'Subscription access is built around better decisions before commitment.',
    audiences: [
      { title: 'For Promoters', body: 'Review private IP opportunities, value signals, territory potential, capacity range, and offer context before entering a deal.' },
      { title: 'For IP Owners', body: 'Review promoter credibility, compare offer quality, protect private materials, and reduce operational or settlement risk.' },
      { title: 'For Brands, Investors, and Industry Partners', body: 'Track live and cultural IP momentum, category fit, market readiness, and verified execution partners.' }
    ]
  },
  tiers: {
    eyebrow: 'Access Tiers',
    title: 'Private access levels, not a public checkout flow.',
    body: 'Access is reviewed by profile, use case, market role, and partner readiness.',
    items: [
      { title: 'Verified Partner Access', points: ['Private opportunity previews', 'Market demand signals', 'Basic IP value indicators', 'Market interest submission'] },
      { title: 'Professional Intelligence', points: ['IP value intelligence', 'Territory opportunity map', 'Comparable benchmarks', 'Deal readiness preview'] },
      { title: 'IP Owner / Agency Intelligence', points: ['Verified promoter profiles', 'Promoter trust score', 'Offer comparison', 'Risk review notes'] },
      { title: 'Enterprise / Advisory', points: ['Custom market reports', 'Cross-border strategy', 'Partner sourcing', 'Deal structuring support', 'Launchpad integration'] }
    ],
    ctas: ['Request Private Access', 'Request Intelligence Preview', 'Apply as Verified Partner', 'Discuss Enterprise Access']
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: 'Built for cross-border IP decisions.',
    items: [
      { title: 'For Promoters', body: 'Identify which IP is worth pursuing and what offer context is credible.' },
      { title: 'For IP Owners', body: 'Understand partner reliability, market demand, and execution risk before granting access.' },
      { title: 'For Brands & Investors', body: 'Evaluate momentum, category fit, and partnership potential across live and cultural IP.' },
      { title: 'For Public & Industry Partners', body: 'Review Korea-to-Global and Global-to-Korea opportunities with structured market context.' }
    ]
  },
  trust: {
    eyebrow: 'Trust Notes',
    title: 'Decision support with clear scope.',
    notes: [
      'Tide Bridge Intelligence supports early-stage commercial review. It does not promise ticket sales, revenue, artist availability, approvals, or deal execution.',
      'Partner verification is based on submitted information, track record, references, and internal review. It is not a public credential or legal assurance.',
      'Comparable benchmarks should use anonymized or permissioned references and range-based estimates, not confidential third-party deal data.'
    ]
  }
};

export const intelligenceDictionaries: Record<Locale, IntelligenceCopy> = {
  en: english,
  ko: {
    ...english,
    hero: {
      ...english.hero,
      title: 'IP 가치.\n파트너 신뢰도.\n더 정교한 기회 판단.',
      body: '시장 수요와 딜 준비도를 함께 구조화합니다.',
      support: '비공개 접근 전,\n권리와 자료 노출 전,\n더 신중하게 판단합니다.'
    },
    architecture: {
      ...english.architecture,
      title: 'Live OS의 인텔리전스 레이어.',
      body: 'Live OS.\nVerified Network.\nLaunchpad 실행 구조를 하나의 판단 레이어로 연결합니다.'
    },
    modules: {
      ...english.modules,
      title: '접근, 오퍼, 실행 이전의 판단 지원.',
      body: '시장과 파트너 신호를 구조화합니다.\n정확한 가치 산정이나 결과 확약은 주장하지 않습니다.'
    },
    subscribe: {
      ...english.subscribe,
      title: 'Why partners subscribe',
      body: '권리, 자본, 비공개 자료가 노출되기 전.\n더 나은 판단을 돕는 접근 구조입니다.'
    },
    trust: {
      ...english.trust,
      notes: [
        '초기 상업 검토를 지원합니다.\n티켓 판매, 수익, 아티스트 가능 여부, 승인, 딜 실행을 약속하지 않습니다.',
        '파트너 검증은 제출 정보, 이력, 레퍼런스, 내부 검토를 기반으로 합니다.\n정부 인증이나 법적 효력이 아닙니다.',
        '벤치마크는 익명화 또는 허가된 범위 기반 참고 자료를 사용합니다.\n제3자 기밀 딜 데이터를 노출하지 않습니다.'
      ]
    }
  },
  ja: {
    ...english,
    hero: {
      ...english.hero,
      title: 'IP価値。\nパートナー。\n信頼性。\n機会判断。',
      body: '市場需要。\nディール準備度。\n構造化します。',
      support: '非公開アクセスの前に。\n権利や資料を出す前に。\nより慎重に判断します。'
    },
    architecture: {
      ...english.architecture,
      title: 'Live OS。\nインテリジェンス。\nレイヤー。',
      body: 'Live OS。\nVerified Network。\nLaunchpad支援。\nひとつの判断レイヤー。'
    },
    modules: {
      ...english.modules,
      body: '市場とパートナーのシグナルを構造化します。\n正確な評価額や成果確約は主張しません。'
    },
    trust: {
      ...english.trust,
      notes: [
        '初期商業レビューを支援します。\nチケット販売や収益を約束しません。',
        '提出情報、実績、リファレンスを確認します。\n政府認証や法的効力ではありません。',
        'ベンチマークは範囲参照です。\n第三者の機密情報は扱いません。'
      ]
    }
  },
  zh: {
    ...english,
    hero: {
      ...english.hero,
      title: 'IP 价值。\n伙伴可信度。\n机会判断。',
      body: '结构化市场需求与交易准备度。',
      support: '非公开访问之前。\n权利与资料开放之前。\n先做更稳健的判断。'
    },
    architecture: {
      ...english.architecture,
      title: 'Live OS。\n情报层。',
      body: 'Live OS。\nVerified Network。\nLaunchpad 支持连接为一个判断层。'
    },
    modules: {
      ...english.modules,
      body: '结构化市场与伙伴信号。\n不声称精确估值或结果承诺。'
    },
    trust: {
      ...english.trust,
      notes: [
        '支持早期商业审核。\n不承诺票房、收入、艺人档期、批准或交易执行。',
        '伙伴验证基于提交信息、履历、推荐和内部审核。\n不是政府认证或法律效力。',
        '基准参考使用匿名化或获准范围资料。\n不暴露第三方机密交易数据。'
      ]
    }
  }
};

export const intelligenceCategories = categoryPoints;
