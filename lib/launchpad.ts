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
    title: 'North America market entry for selected Korean content IP.',
    body: 'A private market-entry program combining creative partners, local promotion, showcase testing, and market intelligence.',
    primary: 'Request Launchpad Review',
    secondary: 'Discuss Market Entry Pilot'
  },
  audience: {
    title: 'For emerging Korean IP with global potential.',
    body: 'Built for projects that need market signal before scale, including but not limited to K-pop.',
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
    title: 'Market-entry support, not assured outcomes.',
    body: 'Launchpad does not assure commercial success, charts, label deals, investment outcomes, or market adoption. Scope, rights participation, and terms are reviewed case by case.'
  }
};

export const launchpadPages: Record<Locale, LaunchpadCopy> = {
  ko: {
    ...sharedLaunchpad,
    hero: {
      ...sharedLaunchpad.hero,
      body: '선별된 한국 콘텐츠 IP를 위한\n비공개 북미 시장 진입 프로그램.\n\n크리에이티브 파트너, 현지 프로모션,\n쇼케이스, 시장 인텔리전스를 연결합니다.'
    },
    audience: {
      ...sharedLaunchpad.audience,
      body: '확장 전 시장 반응을 확인해야 하는 성장 단계 IP를 위한 구조입니다.'
    },
    services: {
      ...sharedLaunchpad.services,
      body: 'IP 오너와 파트너별로 범위를 검토하는 pre-label / pre-tour 지원 레이어입니다.'
    },
    agencies: {
      ...sharedLaunchpad.agencies,
      body: '대규모 투어, 레이블, 브랜드 투자 전 북미 시장성을 낮은 리스크로 검증합니다.'
    }
  },
  en: sharedLaunchpad,
  ja: sharedLaunchpad,
  zh: sharedLaunchpad
};
