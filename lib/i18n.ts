export const locales = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

const interestRanges = ['USD 50-80', 'USD 80-120', 'USD 120-180', 'USD 180+'];
const metrics = (items: string[][]) => items.map(([label, value, delta]) => ({ label, value, delta }));

const options = {
  ko: { promoter: '검증 대상 현지 프로모터', agency: '에이전시 / IP 홀더', venue: '공연장 파트너', brand: '브랜드 / 문화 파트너', investor: '투자자 / 공동 운영 파트너' },
  en: { promoter: 'Verified Local Promoter', agency: 'Agency / IP Holder', venue: 'Venue Partner', brand: 'Brand / Cultural Partner', investor: 'Investor / Co-Operator' },
  ja: { promoter: '検証対象の現地プロモーター', agency: 'エージェンシー / IPホルダー', venue: '会場パートナー', brand: 'ブランド / 文化パートナー', investor: '投資家 / 共同運営パートナー' },
  zh: { promoter: '待验证本地主办方', agency: '经纪公司 / IP 持有方', venue: '场馆伙伴', brand: '品牌 / 文化伙伴', investor: '投资方 / 联合运营伙伴' }
};

const reviewModels = {
  ko: { guarantee: '상업 기준 검토', resale: '현지 판매 구조 검토', co_promotion: '공동 운영 검토', sponsorship: '브랜드 협력 검토' },
  en: { guarantee: 'Commercial Baseline Review', resale: 'Local Sales Review', co_promotion: 'Co-Operation Review', sponsorship: 'Brand Partnership Review' },
  ja: { guarantee: '商業基準レビュー', resale: '現地販売構造レビュー', co_promotion: '共同運営レビュー', sponsorship: 'ブランド連携レビュー' },
  zh: { guarantee: '商业基准审核', resale: '本地销售结构审核', co_promotion: '联合运营审核', sponsorship: '品牌合作审核' }
};

function forms(locale: Locale, copy: any) {
  return {
    application: { labels: copy.applicationLabels, placeholders: copy.applicationPlaceholders, helper: copy.applicationHelper, submit: copy.submitApplication, loading: copy.loading, success: copy.applicationSuccess, mockSuccess: copy.applicationMock, error: copy.applicationError, validation: copy.applicationValidation, options: options[locale] },
    demand: { labels: copy.demandLabels, placeholders: copy.demandPlaceholders, vip: copy.vip, consent: copy.consent, submit: copy.submitDemand, loading: copy.saving, success: copy.demandSuccess, mockSuccess: copy.demandMock, error: copy.demandError, validation: copy.demandValidation, ticketRanges: interestRanges },
    offer: { labels: copy.offerLabels, placeholders: copy.offerPlaceholders, capacityHelper: copy.capacityHelper, submit: copy.submitOffer, loading: copy.loading, success: copy.offerSuccess, mockSuccess: copy.offerMock, error: copy.offerError, validation: copy.offerValidation, dealModes: reviewModels[locale] }
  };
}

const common = {
  ko: {
    applicationLabels: { company: '회사 / 조직', contactName: '담당자 이름', email: '업무 이메일', partnerType: '파트너 유형', country: '국가', city: '주요 시장', website: '회사 프로필 / 웹사이트', pastProjects: '회사 이력 및 라이브 프로젝트' },
    applicationPlaceholders: { company: '검토 대상 법인 또는 운영 주체명', contactName: '주요 파트너 검토 담당자', email: 'name@company.com', country: '주요 운영 국가', city: '커버 가능한 도시 / 시장', website: 'https://...', pastProjects: '회사 프로필, 시장 커버리지, 과거 라이브 프로젝트, 관심 있는 라이브·문화 IP 분야를 적어주세요.' },
    applicationHelper: '파트너 검증과 현지 운영 역량 검토에 사용할 회사 정보를 입력하세요.',
    submitApplication: 'Submit Application',
    loading: 'Submitting...',
    saving: 'Saving...',
    applicationSuccess: '신청이 저장되었습니다. 상태: 검토 대기.',
    applicationMock: '프리뷰용 mock 신청이 저장되었습니다.',
    applicationError: '제출에 실패했습니다. 다시 시도해주세요.',
    applicationValidation: { company: '회사명을 입력해주세요.', contactName: '담당자 이름을 입력해주세요.', email: '유효한 업무 이메일을 입력해주세요.', country: '국가를 입력해주세요.', city: '주요 시장을 입력해주세요.' },
    demandLabels: { name: '이름', email: '이메일', country: '국가', city: '도시 / 시장', artistPreference: 'IP / 카테고리 관심 분야', ticketRange: '시장 관심 범위' },
    demandPlaceholders: { name: '이름', email: 'you@example.com', country: '수요가 확인되는 국가', city: '수요가 확인되는 도시', artistPreference: 'K-POP, 배우 팬 이벤트, 전시, 공연, 문화 포맷 등' },
    vip: '프리미엄 관객 경험 또는 VIP 수요 신호가 있습니다.',
    consent: 'Tide Bridge가 이 정보를 시장 수요 인텔리전스와 초기 기회 검토에 활용하는 데 동의합니다.',
    submitDemand: 'Submit Market Interest',
    demandSuccess: '시장 수요 신호가 저장되었습니다.',
    demandMock: '프리뷰용 mock 시장 수요 신호가 저장되었습니다.',
    demandError: '시장 수요 신호 저장에 실패했습니다.',
    demandValidation: { name: '이름을 입력해주세요.', email: '유효한 이메일을 입력해주세요.', country: '국가를 입력해주세요.', city: '도시를 입력해주세요.', artistPreference: 'IP 또는 아티스트 관심 분야를 입력해주세요.', consent: '시장 수요 데이터 활용 동의가 필요합니다.' },
    offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
    offerPlaceholders: { company: '검토를 요청하는 회사', contactEmail: 'deal lead email', city: '타깃 도시 / 시장', venue: '공연장명 또는 현지 운영 가능성', dateWindow: '예: 2027년 5-6월', notes: '시장 커버리지, 현지 실행 역량, 수요 신호, 브랜드 협력 가능성, 파트너 신뢰도 근거를 요약하세요.' },
    capacityHelper: '최대 수용 인원이 아니라 현실적인 판매 가능 규모를 입력하세요.',
    submitOffer: 'Request Review',
    offerSuccess: '검토 요청이 제출되었습니다. 상태: submitted.',
    offerMock: '프리뷰용 mock 검토 요청이 저장되었습니다.',
    offerError: '검토 요청 제출에 실패했습니다.',
    offerValidation: { ipPackage: 'IP 패키지를 선택해주세요.', company: '회사명을 입력해주세요.', contactEmail: '유효한 담당자 이메일을 입력해주세요.', city: '도시를 입력해주세요.', venue: '공연장 또는 현지 운영 가능성을 입력해주세요.', capacity: '판매 가능 규모는 100명 이상이어야 합니다.', dateWindow: '희망 일정을 입력해주세요.', guaranteeAmount: '상업 기준 금액은 0보다 커야 합니다.' }
  },
  en: {
    applicationLabels: { company: 'Company / Organization', contactName: 'Contact Name', email: 'Work Email', partnerType: 'Partner Type', country: 'Country', city: 'Primary Market', website: 'Company Profile / Website', pastProjects: 'Company Track Record and Live Projects' },
    applicationPlaceholders: { company: 'Legal entity or operating company', contactName: 'Primary verification contact', email: 'name@company.com', country: 'Primary operating country', city: 'Markets you can cover', website: 'https://...', pastProjects: 'Share company profile, market coverage, past live projects, and live or cultural IP interests.' },
    applicationHelper: 'Use the entity that should be reviewed for partner verification and local operating capacity.',
    submitApplication: 'Submit Application',
    loading: 'Submitting...',
    saving: 'Saving...',
    applicationSuccess: 'Application saved. Status: pending review.',
    applicationMock: 'Mock application captured for preview review.',
    applicationError: 'Submission failed. Please try again.',
    applicationValidation: { company: 'Company is required.', contactName: 'Contact name is required.', email: 'A valid work email is required.', country: 'Country is required.', city: 'Primary market is required.' },
    demandLabels: { name: 'Name', email: 'Email', country: 'Country', city: 'City / Market', artistPreference: 'IP / Category Interest', ticketRange: 'Market Interest Range' },
    demandPlaceholders: { name: 'Your name', email: 'you@example.com', country: 'Country with observed demand', city: 'City with observed demand', artistPreference: 'K-pop, actor events, exhibitions, performance IP, or cultural formats' },
    vip: 'There is premium audience or VIP readiness interest.',
    consent: 'I agree that Tide Bridge may use this signal for market demand intelligence and early opportunity review.',
    submitDemand: 'Submit Market Interest',
    demandSuccess: 'Market demand signal saved.',
    demandMock: 'Mock market demand signal captured for preview review.',
    demandError: 'Market demand signal could not be saved.',
    demandValidation: { name: 'Name is required.', email: 'A valid email is required.', country: 'Country is required.', city: 'City is required.', artistPreference: 'IP or artist interest is required.', consent: 'Consent is required to submit market demand data.' },
    offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
    offerPlaceholders: { company: 'Company requesting review', contactEmail: 'deal lead email', city: 'Target city / market', venue: 'Venue name or local operating capacity', dateWindow: 'e.g. May-June 2027', notes: 'Summarize market coverage, local execution capacity, demand signals, brand partnership potential, and partner credibility.' },
    capacityHelper: 'Use realistic sellable capacity, not only maximum venue capacity.',
    submitOffer: 'Request Review',
    offerSuccess: 'Review request submitted. Status: submitted.',
    offerMock: 'Mock review request captured for preview review.',
    offerError: 'Review request could not be submitted.',
    offerValidation: { ipPackage: 'Select an IP package.', company: 'Company is required.', contactEmail: 'A valid contact email is required.', city: 'City is required.', venue: 'Venue or local capacity is required.', capacity: 'Sellable capacity must be at least 100.', dateWindow: 'Date window is required.', guaranteeAmount: 'Commercial baseline must be greater than 0.' }
  },
  ja: {},
  zh: {}
};

common.ja = {
  ...common.en,
  applicationLabels: { company: '会社 / 組織', contactName: '担当者名', email: '業務メール', partnerType: 'パートナー種別', country: '国', city: '主要市場', website: '会社プロフィール / Webサイト', pastProjects: '会社実績とライブプロジェクト' },
  applicationHelper: 'パートナー検証と現地運営能力の確認に使用する会社情報を入力してください。',
  submitApplication: 'Submit Application',
  applicationSuccess: '申請が保存されました。ステータス: 審査待ち。',
  applicationMock: 'プレビュー用のmock申請が保存されました。',
  demandLabels: { name: '名前', email: 'メール', country: '国', city: '都市 / 市場', artistPreference: 'IP / カテゴリー関心', ticketRange: '市場関心レンジ' },
  demandPlaceholders: { name: '名前', email: 'you@example.com', country: '需要が確認される国', city: '需要が確認される都市', artistPreference: 'K-POP、俳優イベント、展示、舞台、文化フォーマットなど' },
  vip: 'プレミアム観客体験またはVIP需要シグナルがあります。',
  consent: 'Tide Bridgeがこの情報を市場需要インテリジェンスと初期機会レビューに利用することに同意します。',
  submitDemand: 'Submit Market Interest',
  demandSuccess: '市場需要シグナルが保存されました。',
  offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
  submitOffer: 'Request Review'
};

common.zh = {
  ...common.en,
  applicationLabels: { company: '公司 / 组织', contactName: '联系人姓名', email: '工作邮箱', partnerType: '伙伴类型', country: '国家', city: '主要市场', website: '公司资料 / 网站', pastProjects: '公司履历及现场项目' },
  applicationHelper: '请填写用于伙伴验证与本地运营能力审核的公司信息。',
  submitApplication: 'Submit Application',
  applicationSuccess: '申请已保存。状态：待审核。',
  applicationMock: '预览用 mock 申请已保存。',
  demandLabels: { name: '姓名', email: '邮箱', country: '国家', city: '城市 / 市场', artistPreference: 'IP / 类别兴趣', ticketRange: '市场兴趣区间' },
  demandPlaceholders: { name: '姓名', email: 'you@example.com', country: '观察到需求的国家', city: '观察到需求的城市', artistPreference: 'K-POP、演员活动、展览或文化形式' },
  vip: '存在高端观众体验或 VIP 需求信号。',
  consent: '我同意 Tide Bridge 将该信息用于市场需求情报和早期机会审核。',
  submitDemand: 'Submit Market Interest',
  demandSuccess: '市场需求信号已保存。',
  offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
  submitOffer: 'Request Review'
};

const sharedNav = {
  platform: 'Platform',
  promoters: 'For Promoters',
  agencies: 'For IP Owners',
  catalog: 'IP Catalog',
  demand: 'Market Signals',
  verified: 'Verified Network',
  publicAlignment: 'Public Alignment',
  login: 'Login',
  apply: 'Request Access'
};

const sharedHeroCopy = {
  eyebrow: 'PRIVATE B2B LIVE & CULTURAL IP INFRASTRUCTURE',
  title: 'Connecting Korean content and global live opportunities.',
  body: 'Tide Bridge structures cross-border live and cultural IP opportunities through verified partners, private IP access, offer management, and market intelligence.',
  primary: 'Request Access',
  secondary: 'Explore Platform',
  actions: [
    { label: 'Request Access', path: 'apply', variant: 'primary' },
    { label: 'Explore Platform', path: 'platform', variant: 'secondary' },
    { label: 'View Intelligence', path: 'intelligence', variant: 'secondary' },
    { label: 'Submit Market Interest', path: 'fan-demand', variant: 'secondary' }
  ],
  cards: [
    ['Platform', 'Private IP access and structured offer workflow for reviewed partners.'],
    ['Intelligence', 'IP value, market demand, partner trust, and deal-readiness signals.'],
    ['Network', 'Verified partner and trust layer for controlled cross-border execution.']
  ]
};

const englishPages = {
  footer: { description: 'Private B2B live and cultural IP infrastructure connecting Korean content, verified partners, private IP access, offer management, and market intelligence.', platform: 'Infrastructure', operate: 'Review Layer', promoters: 'For Promoters', agencies: 'For IP Owners', partner: 'Partner Portal', admin: 'Admin Console', pnl: 'Deal Readiness', demand: 'Market Signals' },
  home: { connectEyebrow: 'Infrastructure Layer', connectTitle: 'One private layer for IP access, intelligence, and verified execution.', connectBody: 'Tide Bridge connects IP owners, promoters, brands, and industry partners through controlled access and structured opportunity review.', connectItems: ['Platform', 'Intelligence', 'Verified Network', 'Launchpad', 'Use Cases', 'Structured Opportunity Review'], metricsEyebrow: 'MVP Control Metrics', metricsTitle: 'Built for verified access and opportunity review.', metrics: metrics([['Partner Verification', '64', '+18 under review'], ['Market Signals', '8,420', 'Top market: Bangkok'], ['Offers in Review', '23', '5 active reviews'], ['Opportunity Value', '$1.84M', 'Commercial baseline']]) },
  about: { eyebrow: 'Platform Overview', title: 'Private infrastructure for cross-border live and cultural IP opportunities.', body: 'Tide Bridge brings partner verification, private IP access, structured offers, market intelligence, and readiness review into one controlled B2B layer.', cards: [['Private IP Access', 'Selected live and cultural IP formats are organized for confidential partner review.'], ['Verified Partner Network', 'Partners are reviewed by company profile, track record, references, market coverage, and settlement reliability.'], ['Structured Opportunity Review', 'Each opportunity moves through verification, offer intake, commercial assumptions, and readiness assessment.']] },
  platform: { eyebrow: 'Platform', title: 'A private operating system for cross-border IP opportunities.', body: 'Live OS brings access, intelligence, offer intake, and readiness review into one B2B workflow.', modules: [['Private IP Access', 'Controlled access to selected Korean content categories, including K-POP, actor events, exhibitions, and performance IP.'], ['Offer Workflow', 'Structured intake for market, venue, sellable capacity, timing, commercial baseline, and rationale.'], ['Readiness Review', 'Partner credibility, demand signals, commercial assumptions, and execution capacity reviewed before deeper access.'], ['Market Intelligence', 'Market input is interpreted as demand intelligence, not a public request system.'], ['Network Layer', 'Verified partner context connects promoters, IP owners, brands, and industry partners.'], ['Public & Industry Alignment', 'Aligned with Korea’s K-content export and international cultural exchange ecosystem without claiming official endorsement.']] },
  promoters: { eyebrow: 'For Promoters', title: 'Verified access for serious local operators.', body: 'Review selected IP, market fit, and offer context through a private B2B process.', cards: [['What you can submit', 'Market, venue, sellable capacity, timing, commercial baseline, credibility, and rationale.'], ['What you can review', 'Selected IP formats and market-fit context available through approved private access.'], ['Verification criteria', 'Company profile, execution history, references, territory coverage, and settlement reliability.'], ['Next step', 'Apply for reviewed access before submitting a structured opportunity.']], cta: 'Request Access' },
  agencies: { eyebrow: 'For IP Owners', title: 'Review global opportunities without open-market exposure.', body: 'Compare promoter credibility, market demand, offer quality, and execution risk before granting access.', cards: [['Partner Credibility', 'Review partner capacity through company profiles, references, and execution history.'], ['Private IP Access', 'Keep artist, format, and commercial materials controlled until partner access is approved.'], ['Offer Comparison', 'Compare structured opportunity signals across markets before committing resources.'], ['Market Intelligence', 'Use demand and readiness signals to prioritize cities, partners, and formats.']], cta: 'Request Review' },
  catalog: { eyebrow: 'Private IP Catalog', title: 'Selected IP formats for structured review.', body: 'The catalog is a controlled preview. Detailed artist, commercial, and operating materials are available only to approved partners.', capacity: 'Capacity Signal', base: 'Commercial Baseline', request: 'Request Access', viewDetails: 'Review Details' },
  apply: { eyebrow: 'Request Access', title: 'Apply for reviewed partner access.', body: 'Share your profile, market coverage, live projects, and IP interests for private access review.' },
  fanDemand: { eyebrow: 'Market Signals', title: 'Submit market interest signals.', body: 'Market input helps identify demand patterns. It is not a vote, booking request, or guarantee of a show.' },
  submitOffer: { eyebrow: 'Offer Management', title: 'Submit a structured opportunity.', body: 'Include market, venue, sellable capacity, timing, commercial baseline, credibility, and rationale.' }
};

const koreanPages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '한국 콘텐츠와 글로벌 라이브 기회를 검증, 접근, 오퍼, 인텔리전스 흐름으로 구조화하는 비공개 B2B 인프라입니다.' },
  home: { ...englishPages.home, connectEyebrow: '인프라 레이어', connectTitle: 'IP 접근, 인텔리전스, 검증 실행을 연결하는 비공개 레이어.', connectBody: 'Tide Bridge는 IP 오너, 프로모터, 브랜드, 산업 파트너를 통제된 접근과 구조화된 기회 검토로 연결합니다.' },
  about: { ...englishPages.about, eyebrow: '플랫폼 개요', title: '라이브·문화 IP의 크로스보더 기회를 위한 비공개 인프라.', body: '파트너 검증, 비공개 IP 접근, 구조화된 오퍼, 시장 인텔리전스, 준비도 검토를 하나의 B2B 레이어로 연결합니다.' },
  platform: { ...englishPages.platform, eyebrow: 'Platform', title: '크로스보더 IP 기회를 위한 비공개 운영 체계.', body: 'Live OS는 접근, 인텔리전스, 오퍼 접수, 준비도 검토를 하나의 B2B 워크플로로 연결합니다.' },
  promoters: { ...englishPages.promoters, eyebrow: 'For Promoters', title: '진지한 현지 운영자를 위한 검증 기반 접근.', body: '선별된 IP, 시장 적합성, 오퍼 맥락을 비공개 B2B 프로세스로 검토합니다.' },
  agencies: { ...englishPages.agencies, eyebrow: 'For IP Owners', title: 'IP를 공개 노출하지 않고 글로벌 기회를 검토하세요.', body: '접근 권한 부여 전 프로모터 신뢰도, 시장 수요, 오퍼 품질, 실행 리스크를 비교합니다.' },
  catalog: { ...englishPages.catalog, body: '카탈로그는 통제된 프리뷰입니다. 상세 아티스트, 상업 조건, 운영 자료는 승인된 파트너에게만 제공됩니다.' },
  apply: { ...englishPages.apply, body: '비공개 접근 검토를 위해 회사 프로필, 시장 커버리지, 라이브 프로젝트, 관심 IP 분야를 공유해주세요.' },
  fanDemand: { ...englishPages.fanDemand, body: '시장 입력은 수요 패턴을 파악하기 위한 신호입니다. 투표, 섭외 요청, 공연 보장이 아닙니다.' },
  submitOffer: { ...englishPages.submitOffer, body: '시장, 공연장, 판매 가능 규모, 일정, 상업 기준, 신뢰도, 제안 근거를 포함해주세요.' }
};

const japanesePages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '韓国コンテンツとグローバルなライブ機会を検証、アクセス、オファー、インテリジェンスの流れで構造化する非公開B2Bインフラです。' },
  home: { ...englishPages.home, connectEyebrow: 'インフラレイヤー', connectTitle: 'IPアクセス、インテリジェンス、検証済み実行をつなぐ非公開レイヤー。', connectBody: 'Tide BridgeはIPオーナー、プロモーター、ブランド、産業パートナーを管理されたアクセスと構造化レビューでつなぎます。' },
  about: { ...englishPages.about, eyebrow: 'プラットフォーム概要', title: 'ライブ・カルチャーIPのクロスボーダー機会に向けた非公開インフラ。', body: 'パートナー検証、非公開IPアクセス、構造化オファー、市場インテリジェンス、準備度レビューをひとつのB2Bレイヤーに統合します。' },
  platform: { ...englishPages.platform, title: 'クロスボーダーIP機会のための非公開オペレーティングシステム。', body: 'Live OSはアクセス、インテリジェンス、オファー受付、準備度レビューをひとつのB2Bワークフローにまとめます。' },
  promoters: { ...englishPages.promoters, title: '本格的な現地オペレーター向けの検証済みアクセス。', body: '選定IP、市場適合性、オファー文脈を非公開B2Bプロセスでレビューします。' },
  agencies: { ...englishPages.agencies, title: '公開露出なしにグローバル機会をレビュー。', body: 'アクセス付与前に、プロモーター信頼性、市場需要、オファー品質、実行リスクを比較します。' },
  catalog: { ...englishPages.catalog, body: '公開カタログは管理されたプレビューです。詳細なアーティスト、商業条件、運営資料は承認済みパートナーにのみ提供されます。' },
  apply: { ...englishPages.apply, body: '非公開アクセスレビューのため、会社プロフィール、市場カバレッジ、ライブ実績、関心IP領域を共有してください。' },
  fanDemand: { ...englishPages.fanDemand, body: '市場入力は需要パターンを把握するためのシグナルです。投票、出演依頼、開催保証ではありません。' },
  submitOffer: { ...englishPages.submitOffer, body: '都市、会場または現地運営力、販売可能規模、日程、商業基準、パートナー信頼性、市場根拠を含めてください。' }
};

const chinesePages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '面向韩国内容与全球现场机会的私密 B2B 基础设施，结构化验证、访问、报价和市场情报。' },
  home: { ...englishPages.home, connectEyebrow: '基础设施层', connectTitle: '连接 IP 访问、情报和验证执行的私密层。', connectBody: 'Tide Bridge 通过受控访问和结构化机会审核连接 IP 持有方、主办方、品牌和行业伙伴。' },
  about: { ...englishPages.about, eyebrow: '平台概览', title: '面向跨境现场与文化 IP 机会的私密基础设施。', body: '将伙伴验证、私密 IP 访问、结构化报价、市场情报和准备度审核整合为一个 B2B 层。' },
  platform: { ...englishPages.platform, title: '面向跨境 IP 机会的私密运营系统。', body: 'Live OS 将访问、情报、报价录入和准备度审核整合为一个 B2B 工作流。' },
  promoters: { ...englishPages.promoters, title: '面向严肃本地运营方的验证访问。', body: '通过私密 B2B 流程审核精选 IP、市场匹配和报价背景。' },
  agencies: { ...englishPages.agencies, title: '无需公开曝光即可审核全球机会。', body: '在授予访问前比较主办方可信度、市场需求、报价质量和执行风险。' },
  catalog: { ...englishPages.catalog, body: '公开目录是受控预览。详细艺人、商业和运营资料仅向获批伙伴开放。' },
  apply: { ...englishPages.apply, body: '请提交公司资料、市场覆盖、现场项目经验和 IP 兴趣，用于私密访问审核。' },
  fanDemand: { ...englishPages.fanDemand, body: '市场输入用于识别需求模式。这不是投票、预约或演出保证。' },
  submitOffer: { ...englishPages.submitOffer, body: '请包含城市、场馆或本地执行能力、可销售容量、档期、商业基准、伙伴可信度和市场依据。' }
};

export const dictionaries: Record<Locale, any> = {
  ko: { localeName: '한국어', shortName: 'KO', metadata: { title: 'Tide Bridge Live OS', description: '한국 콘텐츠와 글로벌 라이브 기회를 연결하는 비공개 B2B 라이브·문화 IP 인프라.' }, nav: sharedNav, hero: { ...sharedHeroCopy, supportingBody: 'Tide Bridge는 한국 콘텐츠 IP의 해외 진출과 해외 라이브·전시·공연 IP의 한국 유치를 위한 판단·검증·실행 레이어입니다.' }, ...koreanPages, forms: forms('ko', common.ko) },
  en: { localeName: 'English', shortName: 'EN', metadata: { title: 'Tide Bridge Live OS', description: 'Private B2B live and cultural IP infrastructure connecting Korean content and global opportunities.' }, nav: sharedNav, hero: sharedHeroCopy, ...englishPages, forms: forms('en', common.en) },
  ja: { localeName: '日本語', shortName: 'JA', metadata: { title: 'Tide Bridge Live OS', description: '韓国コンテンツとグローバル機会をつなぐ非公開B2Bライブ・カルチャーIPインフラ。' }, nav: sharedNav, hero: sharedHeroCopy, ...japanesePages, forms: forms('ja', common.ja) },
  zh: { localeName: '中文', shortName: 'ZH', metadata: { title: 'Tide Bridge Live OS', description: '连接韩国内容与全球机会的私密 B2B 现场与文化 IP 基础设施。' }, nav: sharedNav, hero: sharedHeroCopy, ...chinesePages, forms: forms('zh', common.zh) }
};
