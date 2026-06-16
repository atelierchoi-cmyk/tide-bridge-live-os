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
    body: 'Tide Bridge Launchpad helps emerging Korean content IP test, enter, and grow in North America through creative partnerships, local promotion, live showcases, and market intelligence.',
    primary: 'Request Launchpad Review',
    secondary: 'Discuss Market Entry Pilot'
  },
  audience: {
    title: 'For rookie and emerging Korean content IP.',
    body: 'Launchpad is built for emerging live and cultural IP with North America potential, not only established K-pop touring projects.',
    cards: [
      ['Rookie K-pop and music groups', 'Early-stage music IP preparing for overseas response testing.'],
      ['Actor and celebrity fan-event IP', 'Fan meetings, special appearances, and audience-development formats.'],
      ['K-band, K-hiphop, and crossover music IP', 'Genre-driven projects that need local creative and promotion validation.'],
      ['Webtoon, animation, and character-based live IP', 'Story and character IP that can extend into events, showcases, and fan experiences.'],
      ['Cultural, exhibition, and immersive IP', 'Korean cultural formats with US market and partner potential.']
    ]
  },
  services: {
    title: 'What Launchpad provides.',
    body: 'A label-services support layer for pre-label and pre-tour validation, scoped case by case with IP owners and partners.',
    cards: [
      ['Market Entry Strategy', 'US market fit review, target audience mapping, territory prioritization, and fan or market signal review.'],
      ['Creative Bridge', 'Songwriter and producer matching, song camp coordination, demo sourcing, and feature or remix opportunity review.'],
      ['Promotion Test', 'Digital seeding, community activation, niche media or creator outreach, and early audience response tracking.'],
      ['Live Showcase', 'LA, NY, or key-city showcase planning with venue, local partner, promoter, brand, and media invite coordination.'],
      ['Readiness Report', 'US Market Readiness Report with fan demand signals, promoter interest notes, brand fit notes, and recommended next steps.']
    ]
  },
  connection: {
    title: 'From intelligence to market execution.',
    body: 'Live OS structures IP value, market demand, and partner credibility. Launchpad turns that intelligence into a controlled market-entry pilot for emerging Korean content IP.',
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
    title: 'Reduce market-entry risk before full-scale expansion.',
    body: 'For agencies and IP owners, Launchpad supports early North America validation before major touring, label, or brand spend.',
    bullets: [
      'Validate US market potential before major spend',
      'Test songs, concepts, and audience response',
      'Access creative and promotional partners',
      'Run controlled live showcase pilots',
      'Receive structured readiness reporting'
    ]
  },
  partners: {
    title: 'Connect with emerging Korean IP through a verified B2B channel.',
    body: 'For creative and local partners, Launchpad creates a reviewed path into emerging Korean content opportunities.',
    bullets: [
      'Songwriters and producers',
      'Local promoters and venues',
      'PR and digital marketing partners',
      'Brands and cultural partners',
      'Community and media partners'
    ]
  },
  note: {
    title: 'Market-entry support, not a guaranteed outcome.',
    body: 'Tide Bridge Launchpad is a market-entry and label-services support layer. It does not guarantee commercial success, chart performance, ticket sales, label deals, or investment outcomes. Project scope, rights participation, and commercial terms are reviewed case by case with the IP owner and relevant partners.'
  }
};

export const launchpadPages: Record<Locale, LaunchpadCopy> = {
  ko: {
    ...sharedLaunchpad,
    hero: {
      ...sharedLaunchpad.hero,
      body: 'Tide Bridge Launchpad는 신인 및 성장 단계의 한국 콘텐츠 IP가 북미 시장에서 반응을 검증하고, 현지 프로모션, 크리에이티브 협업, 라이브 쇼케이스, 시장 리포트를 통해 다음 단계로 확장할 수 있도록 지원하는 시장 진입 프로그램입니다.'
    },
    audience: {
      ...sharedLaunchpad.audience,
      body: 'Launchpad는 이미 검증된 대형 K-pop 투어뿐 아니라 북미 가능성을 테스트해야 하는 신인 및 성장 단계의 라이브, 문화 IP를 위한 프로그램입니다.'
    },
    services: {
      ...sharedLaunchpad.services,
      body: 'IP 오너 및 파트너와 프로젝트별 범위를 검토하는 pre-label / pre-tour 검증용 label-services support layer입니다.'
    },
    agencies: {
      ...sharedLaunchpad.agencies,
      body: '에이전시와 IP 오너가 대규모 투어, 레이블, 브랜드 투자 전에 북미 시장 가능성을 더 낮은 리스크로 검증할 수 있도록 지원합니다.'
    }
  },
  en: sharedLaunchpad,
  ja: sharedLaunchpad,
  zh: sharedLaunchpad
};
