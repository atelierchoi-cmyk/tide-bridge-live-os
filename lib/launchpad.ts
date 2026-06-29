import type { Locale } from '@/lib/i18n';

type LaunchpadCopy = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  audience: {
    title: string;
    body: string;
    cards: string[][];
  };
  services: {
    title: string;
    body: string;
    cards: string[][];
  };
  connection: {
    title: string;
    body: string;
    flow: string[];
  };
  agencies: {
    title: string;
    body: string;
    bullets: string[];
  };
  partners: {
    title: string;
    body: string;
    bullets: string[];
  };
  note: {
    title: string;
    body: string;
  };
};

const sharedLaunchpad: LaunchpadCopy = {
  hero: {
    eyebrow: 'TIDE BRIDGE LAUNCHPAD',
    title: 'North America Market Entry for Emerging Korean IP.',
    body: 'A private market-entry program for emerging Korean IP — combining creative partners, local promotion, live showcases, and market intelligence.',
    primary: 'Request Launchpad Review',
    secondary: 'Discuss Market Entry Pilot'
  },
  audience: {
    title: 'For emerging Korean IP with global potential.',
    body: 'Built for projects that need proof before scale — not only established K-pop tours.',
    cards: [
      ['Rookie K-pop and music groups', 'Early-stage music IP preparing for overseas response testing.'],
      ['Actor and celebrity fan-event IP', 'Fan meetings, appearances, and audience-development formats.'],
      ['K-band, K-hiphop, and crossover IP', 'Genre-led projects that need local validation.'],
      ['Webtoon, animation, and character IP', 'Story IP extending into events, showcases, and fan experiences.'],
      ['Cultural, exhibition, and immersive IP', 'Korean cultural formats with US market potential.']
    ]
  },
  services: {
    title: 'What Launchpad provides.',
    body: 'A pre-label and pre-tour support layer, scoped case by case with IP owners and partners.',
    cards: [
      ['Market Entry Strategy', 'US market fit, audience mapping, territory priority, and demand signal review.'],
      ['Creative Bridge', 'Songwriter, producer, demo, feature, remix, and song-camp coordination.'],
      ['Promotion Test', 'Digital seeding, community activation, niche media, creator outreach, and response tracking.'],
      ['Live Showcase', 'Key-city showcase planning with venue, promoter, brand, media, and partner coordination.'],
      ['Readiness Report', 'A concise market-readiness report with demand, partner, brand, and next-step signals.']
    ]
  },
  connection: {
    title: 'From intelligence to market execution.',
    body: 'Live OS clarifies value, demand, and partner credibility. Launchpad turns that intelligence into a controlled pilot.',
    flow: [
      'IP Value & Market Signals',
      'Partner / Promoter Review',
      'Launchpad Pilot Design',
      'Promotion & Showcase Execution',
      'Readiness Report',
      'Next-stage Tour / Label / Brand Strategy'
    ]
  },
  agencies: {
    title: 'Validate before full-scale expansion.',
    body: 'For agencies and IP owners, Launchpad reduces market-entry risk before major touring, label, or brand spend.',
    bullets: [
      'Validate US market potential',
      'Test songs, concepts, and audience response',
      'Access creative and promotional partners',
      'Run controlled showcase pilots',
      'Receive structured readiness reporting'
    ]
  },
  partners: {
    title: 'A verified path into emerging Korean IP.',
    body: 'For local and creative partners, Launchpad creates a reviewed B2B channel into selected Korean content opportunities.',
    bullets: [
      'Songwriters and producers',
      'Local promoters and venues',
      'PR and digital marketing partners',
      'Brands and cultural partners',
      'Community and media partners'
    ]
  },
  note: {
    title: 'Market-entry support with reviewed scope.',
    body: 'Launchpad does not promise commercial success, charts, ticket sales, label deals, or investment outcomes. Scope, rights participation, and terms are reviewed case by case.'
  }
};

export const launchpadPages: Record<Locale, LaunchpadCopy> = {
  ko: {
    ...sharedLaunchpad,
    hero: {
      ...sharedLaunchpad.hero,
      title: '북미 시장 진입.\n작게 검증하고,\n정교하게 확장합니다.',
      body: '성장 단계 한국 IP의 비공개 실행 프로그램입니다.\n크리에이티브 파트너, 현지 프로모션, 쇼케이스, 시장 인텔리전스를 연결합니다.'
    },
    audience: {
      ...sharedLaunchpad.audience,
      title: '글로벌 가능성이 있는 한국 IP 구조.',
      body: '대형 투어 이전.\n시장 반응을 먼저 검증합니다.'
    },
    services: {
      ...sharedLaunchpad.services,
      title: 'Launchpad가 제공하는 실행 레이어.',
      body: 'IP 오너와 파트너별로 범위를 정합니다.\npre-label / pre-tour 단계에 맞춰 설계합니다.'
    },
    connection: {
      ...sharedLaunchpad.connection,
      title: '인텔리전스에서 실행으로.',
      body: 'Live OS는 가치, 수요, 파트너 신뢰도를 정리합니다.\nLaunchpad는 이를 통제된 파일럿으로 전환합니다.'
    },
    agencies: {
      ...sharedLaunchpad.agencies,
      title: '전면 확장 전 시장성을 검토합니다.',
      body: '대규모 투어, 레이블, 브랜드 투자 전.\n북미 시장 신호를 먼저 확인합니다.'
    },
    note: {
      ...sharedLaunchpad.note,
      body: 'Launchpad는 상업적 성공, 차트, 티켓 판매, 레이블 딜, 투자 결과를 약속하지 않습니다.\n범위와 조건은 케이스별로 검토합니다.'
    }
  },
  en: sharedLaunchpad,
  ja: {
    ...sharedLaunchpad,
    hero: {
      ...sharedLaunchpad.hero,
      title: '北米市場参入。\n小さく検証。\n精度高く拡張。',
      body: '成長段階の韓国IP。\n非公開実行プログラムです。\nクリエイティブ。\n現地プロモーション。\nショーケースと市場情報を接続。'
    },
    audience: {
      ...sharedLaunchpad.audience,
      title: 'グローバル可能性。\n韓国IP。',
      body: '大型ツアーの前に。\n市場反応を先に検証します。'
    },
    services: {
      ...sharedLaunchpad.services,
      title: 'Launchpad。\n実行レイヤー。',
      body: 'IPオーナーとパートナーごとに設計します。\npre-label段階。\npre-tour段階に合わせます。'
    },
    connection: {
      ...sharedLaunchpad.connection,
      title: 'インテリジェンス。\n実行へ。',
      body: 'Live OSは価値、需要、信頼性を整理。\nLaunchpadは管理されたパイロットへ。'
    },
    agencies: {
      ...sharedLaunchpad.agencies,
      title: '本格展開の前に\n市場性を確認します。',
      body: '大型ツアー、レーベル、ブランド投資の前に。\n北米市場シグナルを確認します。'
    },
    note: {
      ...sharedLaunchpad.note,
      body: 'Launchpadは商業的成功、チャート、チケット販売、レーベル契約、投資結果を約束しません。\n範囲と条件はケースごとにレビューします。'
    }
  },
  zh: {
    ...sharedLaunchpad,
    hero: {
      ...sharedLaunchpad.hero,
      title: '北美市场进入。\n先小规模验证，\n再精细化扩展。',
      body: '成长阶段韩国 IP 的非公开执行项目。\n连接创意伙伴、本地推广、展示活动与市场情报。'
    },
    audience: {
      ...sharedLaunchpad.audience,
      title: '具备全球潜力的韩国 IP。',
      body: '在大型巡演之前。\n先验证市场反应。'
    },
    services: {
      ...sharedLaunchpad.services,
      title: 'Launchpad 提供的执行层。',
      body: '按 IP 持有方与伙伴逐案设计范围。\n适配 pre-label / pre-tour 阶段。'
    },
    connection: {
      ...sharedLaunchpad.connection,
      title: '从情报到执行。',
      body: 'Live OS 梳理价值、需求与伙伴可信度。\nLaunchpad 将其转化为受控试点。'
    },
    agencies: {
      ...sharedLaunchpad.agencies,
      title: '全面扩展前，先确认市场性。',
      body: '在大型巡演、厂牌、品牌投入之前。\n先查看北美市场信号。'
    },
    note: {
      ...sharedLaunchpad.note,
      body: 'Launchpad 不承诺商业成功、榜单、票房、厂牌合作或投资结果。\n范围与条件按个案审核。'
    }
  }
};
