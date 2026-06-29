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
  ko: { guarantee: '상업 기준 검토', resale: '현지 수익 구조 검토', co_promotion: '공동 운영 검토', sponsorship: '브랜드 협력 검토' },
  en: { guarantee: 'Commercial Baseline Review', resale: 'Local Revenue Structure Review', co_promotion: 'Co-Operation Review', sponsorship: 'Brand Partnership Review' },
  ja: { guarantee: '商業基準レビュー', resale: '現地収益構造レビュー', co_promotion: '共同運営レビュー', sponsorship: 'ブランド連携レビュー' },
  zh: { guarantee: '商业基准审核', resale: '本地收益结构审核', co_promotion: '联合运营审核', sponsorship: '品牌合作审核' }
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
    applicationPlaceholders: { company: '검토 대상 법인 또는 운영 주체명', contactName: '주요 파트너 검토 담당자', email: 'name@company.com', country: '주요 운영 국가', city: '커버 가능한 도시 / 시장', website: 'https://...', pastProjects: '회사 프로필.\n시장 커버리지.\n과거 라이브 프로젝트.\n관심 IP 카테고리.' },
    applicationHelper: '검증에 필요한 회사 정보를 입력하세요.',
    submitApplication: 'Submit Application',
    loading: 'Submitting...',
    saving: 'Saving...',
    applicationSuccess: '신청이 저장되었습니다. 상태: 검토 대기.',
    applicationMock: '프리뷰용 mock 신청이 저장되었습니다.',
    applicationError: '제출에 실패했습니다. 다시 시도해주세요.',
    applicationValidation: { company: '회사명을 입력해주세요.', contactName: '담당자 이름을 입력해주세요.', email: '유효한 업무 이메일을 입력해주세요.', country: '국가를 입력해주세요.', city: '주요 시장을 입력해주세요.' },
    demandLabels: { name: '이름', email: '이메일', country: '국가', city: '도시 / 시장', artistPreference: 'IP / 아티스트 관심 분야', ticketRange: '시장 관심 범위' },
    demandPlaceholders: { name: '이름', email: 'you@example.com', country: '수요 신호가 있는 국가', city: '수요 신호가 있는 도시', artistPreference: '아티스트, 그룹, 배우, 라이브 포맷' },
    vip: '프리미엄 경험 수요가 있습니다.',
    consent: '시장 수요 인텔리전스 활용에 동의합니다.',
    submitDemand: 'Submit Market Interest',
    demandSuccess: '시장 수요 신호가 저장되었습니다.',
    demandMock: '프리뷰용 mock 시장 수요 신호가 저장되었습니다.',
    demandError: '시장 수요 신호 저장에 실패했습니다.',
    demandValidation: { name: '이름을 입력해주세요.', email: '유효한 이메일을 입력해주세요.', country: '국가를 입력해주세요.', city: '도시를 입력해주세요.', artistPreference: 'IP 또는 아티스트 관심 분야를 입력해주세요.', consent: '시장 수요 데이터 활용 동의가 필요합니다.' },
    offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
    offerPlaceholders: { company: '검토를 요청하는 회사', contactEmail: 'deal lead email', city: '타깃 도시 / 시장', venue: '공연장 또는 현지 운영 범위', dateWindow: '예: 2027년 5-6월', notes: '시장 커버리지.\n실행 역량.\n수요 신호.\n파트너 신뢰도.' },
    capacityHelper: '현실적인 판매 가능 규모를 입력하세요.',
    submitOffer: 'Request Review',
    offerSuccess: '검토 요청이 제출되었습니다. 상태: submitted.',
    offerMock: '프리뷰용 mock 검토 요청이 저장되었습니다.',
    offerError: '검토 요청 제출에 실패했습니다.',
    offerValidation: { ipPackage: 'IP 패키지를 선택해주세요.', company: '회사명을 입력해주세요.', contactEmail: '유효한 담당자 이메일을 입력해주세요.', city: '도시를 입력해주세요.', venue: '공연장 또는 현지 운영 가능성을 입력해주세요.', capacity: '판매 가능 규모는 100명 이상이어야 합니다.', dateWindow: '희망 일정을 입력해주세요.', guaranteeAmount: '상업 기준 금액은 0보다 커야 합니다.' }
  },
  en: {
    applicationLabels: { company: 'Company / Organization', contactName: 'Contact Name', email: 'Work Email', partnerType: 'Partner Type', country: 'Country', city: 'Primary Market', website: 'Company Profile / Website', pastProjects: 'Company Track Record and Live Projects' },
    applicationPlaceholders: { company: 'Legal entity or operating company', contactName: 'Primary verification contact', email: 'name@company.com', country: 'Primary operating country', city: 'Markets you can cover', website: 'https://...', pastProjects: 'Share company profile, market coverage, past live projects, and Korean entertainment IP interests.' },
    applicationHelper: 'Use the entity that should be reviewed for partner verification and local operating capacity.',
    submitApplication: 'Submit Application',
    loading: 'Submitting...',
    saving: 'Saving...',
    applicationSuccess: 'Application saved. Status: pending review.',
    applicationMock: 'Mock application captured for preview review.',
    applicationError: 'Submission failed. Please try again.',
    applicationValidation: { company: 'Company is required.', contactName: 'Contact name is required.', email: 'A valid work email is required.', country: 'Country is required.', city: 'Primary market is required.' },
    demandLabels: { name: 'Name', email: 'Email', country: 'Country', city: 'City / Market', artistPreference: 'IP / Artist Interest', ticketRange: 'Market Interest Range' },
    demandPlaceholders: { name: 'Your name', email: 'you@example.com', country: 'Country with observed demand', city: 'City with observed demand', artistPreference: 'Artist, group, actor, or live format' },
    vip: 'There is premium fan experience or VIP readiness interest.',
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
  applicationPlaceholders: { ...common.en.applicationPlaceholders, pastProjects: '会社プロフィール。\n市場カバレッジ。\n過去のライブ実績。\n関心IPカテゴリー。' },
  applicationHelper: '検証に必要な会社情報を入力してください。',
  submitApplication: 'Submit Application',
  applicationSuccess: '申請が保存されました。ステータス: 審査待ち。',
  applicationMock: 'プレビュー用のmock申請が保存されました。',
  demandLabels: { name: '名前', email: 'メール', country: '国', city: '都市 / 市場', artistPreference: 'IP / アーティスト関心', ticketRange: '市場関心レンジ' },
  demandPlaceholders: { name: '名前', email: 'you@example.com', country: '需要シグナルのある国', city: '需要シグナルのある都市', artistPreference: 'アーティスト、グループ、俳優、ライブ形式' },
  vip: 'プレミアム体験の需要があります。',
  consent: '市場需要インテリジェンスに利用します。',
  submitDemand: 'Submit Market Interest',
  demandSuccess: '市場需要シグナルが保存されました。',
  offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
  offerPlaceholders: { ...common.en.offerPlaceholders, notes: '市場カバレッジ。\n実行力。\n需要シグナル。\nパートナー信頼性。' },
  submitOffer: 'Request Review'
};

common.zh = {
  ...common.en,
  applicationLabels: { company: '公司 / 组织', contactName: '联系人姓名', email: '工作邮箱', partnerType: '伙伴类型', country: '国家', city: '主要市场', website: '公司资料 / 网站', pastProjects: '公司履历及现场项目' },
  applicationPlaceholders: { ...common.en.applicationPlaceholders, pastProjects: '公司资料。\n市场覆盖。\n过往现场项目。\n关注的 IP 类别。' },
  applicationHelper: '请填写验证所需的公司信息。',
  submitApplication: 'Submit Application',
  applicationSuccess: '申请已保存。状态：待审核。',
  applicationMock: '预览用 mock 申请已保存。',
  demandLabels: { name: '姓名', email: '邮箱', country: '国家', city: '城市 / 市场', artistPreference: 'IP / 艺人兴趣', ticketRange: '市场兴趣区间' },
  demandPlaceholders: { name: '姓名', email: 'you@example.com', country: '有需求信号的国家', city: '有需求信号的城市', artistPreference: '艺人、组合、演员或现场形式' },
  vip: '存在高端体验需求。',
  consent: '同意用于市场需求情报。',
  submitDemand: 'Submit Market Interest',
  demandSuccess: '市场需求信号已保存。',
  offerLabels: { ipPackage: 'IP Package', company: 'Promoter Company', contactEmail: 'Contact Email', city: 'City / Market', venue: 'Venue / Local Capacity', capacity: 'Sellable Capacity', dateWindow: 'Date Window', guaranteeAmount: 'Commercial Baseline', currency: 'Currency', dealMode: 'Review Model', notes: 'Market Rationale / Notes' },
  offerPlaceholders: { ...common.en.offerPlaceholders, notes: '市场覆盖。\n执行能力。\n需求信号。\n伙伴可信度。' },
  submitOffer: 'Request Review'
};

const sharedNav = {
  platform: 'Platform',
  promoters: 'For Promoters',
  agencies: 'For Agencies',
  catalog: 'IP Catalog',
  demand: 'Fan Demand',
  verified: 'Verified Network',
  publicAlignment: 'Public Alignment',
  login: 'Private Access',
  apply: 'Apply'
};

const sharedHeroCopy = {
  eyebrow: 'PRIVATE B2B LIVE & CULTURAL IP INFRASTRUCTURE',
  title: 'Private access. Verified partners. Smarter cross-border IP decisions.',
  body: 'Tide Bridge Live OS structures live and cultural IP opportunities through controlled access, market intelligence, partner review, and deal readiness.',
  primary: 'Request Private Access',
  secondary: 'Explore Platform',
  actions: [
    { label: 'Request Private Access', path: 'apply', variant: 'primary' },
    { label: 'Explore Platform', path: 'platform', variant: 'secondary' },
    { label: 'Submit Market Interest', path: 'fan-demand', variant: 'secondary' },
    { label: 'Apply as Promoter', path: 'promoters', variant: 'secondary' }
  ],
  cards: [
    ['Private IP Access', 'Controlled review of live and cultural IP formats.'],
    ['Partner Review', 'Company profile, territory coverage, references, and settlement reliability.'],
    ['Market Intelligence', 'Demand and territory signals used for early-stage opportunity review.']
  ]
};

const englishPages = {
  footer: { description: 'Private B2B live and cultural IP infrastructure for controlled access, verified partners, offer management, and market intelligence.', platform: 'Infrastructure', operate: 'Review Layer', promoters: 'For Promoters', agencies: 'For Agencies', partner: 'Partner Portal', admin: 'Admin Console', pnl: 'Deal Readiness', demand: 'Market Demand' },
  home: { connectEyebrow: 'Infrastructure Layer', connectTitle: 'One private layer for IP access, intelligence, and verified execution.', connectBody: 'Tide Bridge connects IP owners, promoters, brands, and industry partners through controlled access and structured opportunity review.', connectItems: ['Private IP Access', 'Verified Partner Network', 'Offer Management', 'Market Intelligence', 'Structured Opportunity Review', 'Deal Readiness'], metricsEyebrow: 'MVP Control Metrics', metricsTitle: 'Built for verified access and opportunity review.', metrics: metrics([['Partner Review', '64', '+18 under review'], ['Market Signals', '8,420', 'Top market: Bangkok'], ['Offers in Review', '23', '5 active reviews'], ['Opportunity Value', '$1.84M', 'Commercial baseline']]) },
  about: { eyebrow: 'Platform Overview', title: 'Private infrastructure for cross-border live and cultural IP opportunities.', body: 'Tide Bridge focuses on verified partners, controlled IP access, structured offers, market signals, and deal readiness review.', cards: [['Private IP Access', 'Live and cultural IP formats are organized for confidential partner review.'], ['Verified Partner Network', 'Partners are reviewed by profile, track record, references, market coverage, and settlement reliability.'], ['Structured Opportunity Review', 'Each opportunity moves through verification, offer intake, commercial assumptions, and readiness assessment.']] },
  platform: { eyebrow: 'Platform', title: 'A structured operating layer for cross-border IP opportunities.', body: 'Tide Bridge supports private B2B workflows for verified promoters, agencies, and partners evaluating live and cultural IP opportunities.', modules: [['Partner Verification', 'Company profile, track record, references, market coverage, and settlement reliability.'], ['Private IP Access', 'Controlled access to selected Korean content, live, and cultural IP packages.'], ['Offer Management', 'Structured review of city, venue, capacity, timing, and commercial baseline.'], ['Market Intelligence', 'Market signals are interpreted as demand intelligence, not confirmed show requests.'], ['Deal Readiness', 'Commercial assumptions and operational capacity are reviewed before deeper negotiation.'], ['Public & Industry Alignment', 'Aligned with Korea’s K-content export and international cultural exchange ecosystem without claiming formal public approval.']] },
  promoters: { eyebrow: 'For Promoters', title: 'Verified access for promoters with proven local capacity.', body: 'Tide Bridge uses private reviewed access. Promoter access is reviewed through company profiles, track records, references, market coverage, and settlement reliability.', cards: [['What you can submit', 'City, venue, sellable capacity, date window, commercial baseline, local rationale, and demand signals.'], ['What you can review', 'Selected IP formats and market fit materials available only through approved private access.'], ['Verification criteria', 'Company profile, execution history, references, territory coverage, and settlement reliability.'], ['Next step', 'Apply for reviewed access before submitting a structured opportunity.']], cta: 'Request Private Access' },
  agencies: { eyebrow: 'For Agencies', title: 'Review global live opportunities without public IP exposure.', body: 'Tide Bridge helps Korean agencies compare credible promoter interest, market demand, partner verification, and early-stage opportunity readiness.', cards: [['Partner Credibility', 'Review promoter capacity through company profiles, references, and execution history.'], ['Private IP Access', 'Keep artist and package materials controlled until partner access is approved.'], ['Offer Comparison', 'Compare structured opportunity signals across markets before committing resources.'], ['Market Demand', 'Use demand intelligence to prioritize cities and formats for further review.']], cta: 'Request Review' },
  catalog: { eyebrow: 'Private IP Catalog', title: 'Selected live IP formats available for structured review.', body: 'The public catalog is a controlled preview. Detailed artist, commercial, and operating materials are available only to approved partners.', capacity: 'Capacity Signal', base: 'Commercial Baseline', request: 'Request Review', viewDetails: 'Review Details' },
  apply: { eyebrow: 'Request Private Access', title: 'Apply for reviewed partner access.', body: 'Applicants should share company profile, market coverage, past live projects, and Korean entertainment IP interests for partner verification.' },
  fanDemand: { eyebrow: 'Market Demand Intelligence', title: 'Submit market interest signals for live and cultural IP.', body: 'Fan and market input helps identify demand patterns. It is not a vote, booking request, or promise that a show will be presented.' },
  submitOffer: { eyebrow: 'Offer Management', title: 'Submit a structured opportunity for review.', body: 'A strong review request includes city, venue or local capacity, sellable capacity, date window, commercial baseline, partner credibility, and market rationale.' }
};

const koreanPages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '비공개 IP 접근.\n검증된 파트너.\n시장 인텔리전스를 연결하는 B2B 인프라입니다.' },
  home: { ...englishPages.home, connectEyebrow: '인프라 레이어', connectTitle: '비공개 접근.\n검증된 파트너.\n구조화된 IP 판단.', connectBody: '시장 수요와 파트너 신뢰도를 함께 검토합니다.\n글로벌 라이브·컬처 IP 기회를 더 정교하게 판단합니다.' },
  about: { ...englishPages.about, eyebrow: '플랫폼 개요', title: '라이브·컬처 IP 기회를 구조화하는 비공개 인프라.', body: '비공개 접근.\n검증된 파트너.\n시장 신호와 딜 준비도.' },
  platform: { ...englishPages.platform, eyebrow: 'Platform', title: '크로스보더 IP 기회를 구조화하는 운영 레이어.', body: '한국 콘텐츠의 해외 진출.\n글로벌 라이브 IP의 한국 유치.\n하나의 B2B 워크플로로 연결합니다.' },
  promoters: { ...englishPages.promoters, eyebrow: 'For Promoters', title: '검증된 현지 운영자의 비공개 접근.', body: '비공개 검토 구조입니다.\n회사 이력, 시장 커버리지, 정산 신뢰도를 검토합니다.' },
  agencies: { ...englishPages.agencies, eyebrow: 'For Agencies', title: '공개 시장 노출 없이 글로벌 기회를 검토합니다.', body: '프로모터 신뢰도.\n시장 수요.\n오퍼 품질.\n실행 리스크를 함께 비교합니다.' },
  catalog: { ...englishPages.catalog, body: '통제된 프리뷰입니다.\n상세 아티스트, 상업 조건, 운영 자료는 승인된 파트너에게만 제공됩니다.' },
  apply: { ...englishPages.apply, body: '회사 프로필.\n시장 커버리지.\n과거 라이브 프로젝트.\n관심 IP 카테고리를 공유해주세요.' },
  fanDemand: { ...englishPages.fanDemand, title: '시장 관심 신호를 제출하세요.', body: '시장 입력은 수요 패턴을 보는 신호입니다.\n투표, 섭외 요청, 공연 확정 약속이 아닙니다.' },
  submitOffer: { ...englishPages.submitOffer, body: '도시, 공연장, 판매 가능 규모.\n일정, 상업 기준, 파트너 신뢰도.\n시장 근거를 함께 제출하세요.' }
};

const japanesePages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '非公開アクセス。\n検証済みパートナー。\n市場インテリジェンスをつなぐB2Bインフラです。' },
  home: { ...englishPages.home, connectEyebrow: 'インフラレイヤー', connectTitle: '非公開アクセス。\n検証済み。\nパートナー信頼。\nIP判断。', connectBody: '市場シグナル。\nパートナー信頼性。\nライブ・カルチャーIP。\n慎重に見極めます。' },
  about: { ...englishPages.about, eyebrow: 'プラットフォーム概要', title: 'ライブ・カルチャーIP機会を構造化する非公開インフラ。', body: '非公開アクセス。\n検証済みパートナー。\n市場シグナルとディール準備度。' },
  platform: { ...englishPages.platform, title: 'クロスボーダーIP。\n構造化レイヤー。', body: '韓国コンテンツの海外展開。\nグローバル・ライブIPの韓国展開。\nひとつのB2Bワークフローでつなぎます。' },
  promoters: { ...englishPages.promoters, title: '検証済み。\nローカル運営者。\n非公開アクセス。', body: '非公開レビュー型の構造です。\n会社実績、市場カバレッジ、精算信頼性を確認します。' },
  agencies: { ...englishPages.agencies, title: 'グローバル機会。\n非公開レビュー。', body: 'プロモーター信頼性。\n市場需要。\nオファー品質。\n実行リスクを比較します。' },
  catalog: { ...englishPages.catalog, body: '管理されたプレビューです。\n詳細資料は\n承認済みパートナーにのみ開示されます。' },
  apply: { ...englishPages.apply, body: '会社プロフィール。\n市場カバレッジ。\n過去のライブ実績。\n関心IPカテゴリーを共有してください。' },
  fanDemand: { ...englishPages.fanDemand, title: '市場シグナル。\n提出してください。', body: '市場入力は需要パターンを見るシグナルです。\n投票や出演依頼ではありません。\n開催約束でもありません。' },
  submitOffer: { ...englishPages.submitOffer, body: '都市、会場、販売可能規模。\n日程、商業基準、パートナー信頼性。\n市場根拠を添えて提出してください。' }
};

const chinesePages = {
  ...englishPages,
  footer: { ...englishPages.footer, description: '非公开访问。\n已验证伙伴。\n连接市场情报的 B2B 基础设施。' },
  home: { ...englishPages.home, connectEyebrow: '基础设施层', connectTitle: '非公开访问。\n已验证伙伴。\n更清晰的跨境 IP 判断。', connectBody: '结构化市场信号与伙伴可信度。\n更稳健地判断现场与文化 IP 机会。' },
  about: { ...englishPages.about, eyebrow: '平台概览', title: '结构化现场与文化 IP 机会的私密基础设施。', body: '非公开访问。\n已验证伙伴。\n市场信号与交易准备度。' },
  platform: { ...englishPages.platform, title: '结构化跨境 IP 机会的运营层。', body: '韩国内容的海外拓展。\n全球现场 IP 的韩国落地。\n通过一个 B2B 工作流连接。' },
  promoters: { ...englishPages.promoters, title: '已验证本地运营方。\n非公开访问。', body: '采用非公开审核结构。\n审核公司履历、市场覆盖和结算可靠性。' },
  agencies: { ...englishPages.agencies, title: '私密审核全球机会。', body: '主办方可信度。\n市场需求。\n报价质量。\n执行风险一并比较。' },
  catalog: { ...englishPages.catalog, body: '受控预览。\n详细艺人、商业和运营资料仅向获批伙伴开放。' },
  apply: { ...englishPages.apply, body: '请提交公司资料。\n市场覆盖。\n过往现场项目。\n关注的 IP 类别。' },
  fanDemand: { ...englishPages.fanDemand, title: '提交市场兴趣信号。', body: '市场输入用于识别需求模式。\n不是投票、艺人预约或演出承诺。' },
  submitOffer: { ...englishPages.submitOffer, body: '请提交城市、场馆、可销售容量。\n档期、商业基准、伙伴可信度。\n以及市场依据。' }
};

export const dictionaries: Record<Locale, any> = {
  ko: { localeName: '한국어', shortName: 'KO', metadata: { title: 'Tide Bridge Live OS', description: '라이브·컬처 IP 기회를 구조화하는 비공개 B2B 인프라.' }, nav: sharedNav, hero: { ...sharedHeroCopy, supportingBody: '비공개 IP 접근.\n검증된 파트너.\n구조화된 IP 판단.' }, ...koreanPages, forms: forms('ko', common.ko) },
  en: { localeName: 'English', shortName: 'EN', metadata: { title: 'Tide Bridge Live OS', description: 'Private B2B infrastructure for live and cultural IP opportunities.' }, nav: sharedNav, hero: sharedHeroCopy, ...englishPages, forms: forms('en', common.en) },
  ja: { localeName: '日本語', shortName: 'JA', metadata: { title: 'Tide Bridge Live OS', description: 'ライブ・カルチャーIP機会を構造化する非公開B2Bインフラ。' }, nav: sharedNav, hero: { ...sharedHeroCopy, supportingBody: '非公開アクセス。\n検証済みパートナー。\nより精度の高いクロスボーダーIP判断。' }, ...japanesePages, forms: forms('ja', common.ja) },
  zh: { localeName: '中文', shortName: 'ZH', metadata: { title: 'Tide Bridge Live OS', description: '结构化现场与文化 IP 机会的私密 B2B 基础设施。' }, nav: sharedNav, hero: { ...sharedHeroCopy, supportingBody: '非公开访问。\n已验证伙伴。\n更清晰的跨境 IP 判断。' }, ...chinesePages, forms: forms('zh', common.zh) }
};
