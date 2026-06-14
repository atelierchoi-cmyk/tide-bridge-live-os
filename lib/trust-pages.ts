import type { Locale } from '@/lib/i18n';

type TrustPage = {
  eyebrow: string;
  title: string;
  body: string;
  notice: string;
  sections: string[][];
  cta?: string;
};

export const trustNav: Record<Locale, { label: string; publicSector: string; verifiedNetwork: string; advisoryBoard: string }> = {
  ko: {
    label: '신뢰',
    publicSector: '공공 연계',
    verifiedNetwork: '검증 네트워크',
    advisoryBoard: '자문 체계'
  },
  en: {
    label: 'Trust',
    publicSector: 'Public Sector',
    verifiedNetwork: 'Verified Network',
    advisoryBoard: 'Advisory Board'
  },
  ja: {
    label: '信頼',
    publicSector: '公共連携',
    verifiedNetwork: '検証ネットワーク',
    advisoryBoard: 'アドバイザリー'
  },
  zh: {
    label: '信任',
    publicSector: '公共协同',
    verifiedNetwork: '验证网络',
    advisoryBoard: '顾问体系'
  }
};

export const trustPages: Record<Locale, { publicSector: TrustPage; verifiedNetwork: TrustPage; advisoryBoard: TrustPage }> = {
  ko: {
    publicSector: {
      eyebrow: '공공 연계 방향',
      title: 'K-content 수출과 국제 문화교류 생태계에 맞춘 민간 B2B 라이브 IP 플랫폼.',
      body: 'Tide Bridge Live OS는 한국 엔터테인먼트 IP가 해외 프로모터, 공연장, 브랜드, 투자자와 더 신뢰 있게 연결되도록 설계된 비공개 B2B 운영 플랫폼입니다.',
      notice: '현재 Tide Bridge는 정부 인증, 공식 보증, 공식 파트너십을 주장하지 않습니다. 이 페이지는 향후 협력 목표와 정렬 방향을 설명합니다.',
      sections: [
        ['정렬하는 생태계', 'K-content 수출, 국제 문화교류, 현지 프로모터 검증, 투어링 실행 신뢰도, 투명한 정산 구조를 중심에 둡니다.'],
        ['향후 협력 타깃', 'KOCCA, KOFICE, KOTRA, Korean Cultural Centers, 지자체 문화교류 조직, 민간 산업 자문단과의 협력 가능성을 단계적으로 검토합니다.'],
        ['운영 원칙', '공식 인증처럼 보일 수 있는 표현은 사용하지 않고, 민간 플랫폼으로서 검증 가능한 파트너 데이터와 딜 운영 체계를 강화합니다.']
      ],
      cta: '검증 네트워크 보기'
    },
    verifiedNetwork: {
      eyebrow: '검증 파트너 프로세스',
      title: '글로벌 프로모터와 한국 IP 홀더가 안심할 수 있는 파트너 검증 흐름.',
      body: 'Verified Partner Process는 신청서 접수부터 내부 승인과 배지 부여까지 파트너의 실행 역량과 신뢰도를 단계적으로 확인합니다.',
      notice: 'Verified badge는 Tide Bridge 내부 운영 배지이며, 정부 또는 공공기관 인증을 의미하지 않습니다.',
      sections: [
        ['1. Application', '회사, 담당자, 운영 국가, 도시, 과거 프로젝트, 웹사이트 또는 프로필을 접수합니다.'],
        ['2. Company profile review', '법인/브랜드 프로필, 시장 포지션, 담당자 역할, 운영 범위를 검토합니다.'],
        ['3. Track record check', '콘서트, 팬미팅, 페스티벌, 공연장 운영, 스폰서십 실행 이력을 확인합니다.'],
        ['4. Reference check', '필요한 경우 IP 홀더, 공연장, 협력사, 현지 업계 레퍼런스를 확인합니다.'],
        ['5. Internal approval', 'Tide Bridge 내부 검토를 거쳐 카탈로그 접근과 딜룸 진입 범위를 결정합니다.'],
        ['6. Verified badge', '승인된 파트너에게 내부 verified badge와 제한된 비공개 접근 권한을 부여합니다.']
      ],
      cta: '파트너 신청'
    },
    advisoryBoard: {
      eyebrow: '자문 체계',
      title: '국제 라이브 IP 딜에 필요한 전문 자문 카테고리.',
      body: 'Tide Bridge는 정식 자문단을 단계적으로 구성하며, 초기 MVP에서는 필요한 자문 영역과 협업 후보군을 명확히 정의합니다.',
      notice: '이 페이지는 향후 자문 범주를 설명하며 특정 인물, 기관, 공공 파트너의 참여 확정을 의미하지 않습니다.',
      sections: [
        ['Entertainment law', '권리, 라이선스, 출연, 계약, 지역별 규제 이슈를 검토할 수 있는 법률 자문 영역입니다.'],
        ['International settlement/tax', '국가 간 정산, 원천세, 송금, 회계 처리, 수익 분배 구조를 다룹니다.'],
        ['Touring production', '투어 제작, 기술 라이더, 현장 운영, 공연장 적합성, 제작 리스크를 검토합니다.'],
        ['Public cultural exchange', '국제 문화교류, 공공 행사, 한국문화원 및 문화기관 협력 가능성을 검토합니다.'],
        ['Promoter verification', '현지 프로모터 실행 이력, 지급 신뢰도, 레퍼런스, 시장 적합성을 검토합니다.']
      ]
    }
  },
  en: {
    publicSector: {
      eyebrow: 'Public Sector Alignment',
      title: 'A private B2B live IP platform aligned with Korea’s K-content export and cultural exchange ecosystem.',
      body: 'Tide Bridge Live OS is designed to help Korean entertainment IP connect with qualified overseas promoters, venues, brands, and investors through a more trusted private B2B workflow.',
      notice: 'Tide Bridge does not claim government certification, endorsement, or official partnership. This page describes alignment and future collaboration targets only.',
      sections: [
        ['Aligned ecosystem', 'The platform is oriented around K-content export, international cultural exchange, local promoter verification, touring reliability, and clearer settlement workflows.'],
        ['Future collaboration targets', 'Potential collaboration targets include KOCCA, KOFICE, KOTRA, Korean Cultural Centers, local cultural exchange offices, and private industry advisors.'],
        ['Operating principle', 'We avoid language that could imply official certification and focus on verifiable partner data, structured intake, and private deal operations.']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Partner Process',
      title: 'A partner verification flow for global promoters and Korean IP holders.',
      body: 'The Verified Partner Process checks execution capability and business reliability from application intake through internal approval and badge assignment.',
      notice: 'The verified badge is an internal Tide Bridge operating badge. It is not a government or public-sector certification.',
      sections: [
        ['1. Application', 'Collect company, contact, operating country, city, project history, website, or profile.'],
        ['2. Company profile review', 'Review legal or trade profile, market position, team role, and operating scope.'],
        ['3. Track record check', 'Check concerts, fan meetings, festivals, venue operations, sponsorships, and other live project history.'],
        ['4. Reference check', 'When needed, review references from IP holders, venues, vendors, or local industry contacts.'],
        ['5. Internal approval', 'Tide Bridge reviews catalog access and deal room eligibility internally.'],
        ['6. Verified badge', 'Approved partners receive an internal verified badge and limited private access.']
      ],
      cta: 'Apply as Partner'
    },
    advisoryBoard: {
      eyebrow: 'Advisory Board Framework',
      title: 'Specialist advisory categories for international live IP deals.',
      body: 'Tide Bridge will build its advisory bench over time. The MVP defines the advisory categories required for credible cross-border live IP operations.',
      notice: 'This page describes future advisory categories. It does not confirm participation by any person, institution, or public partner.',
      sections: [
        ['Entertainment law', 'Rights, licensing, appearances, contracts, and territory-specific regulatory issues.'],
        ['International settlement/tax', 'Cross-border settlement, withholding tax, remittance, accounting, and revenue share structures.'],
        ['Touring production', 'Tour production, technical riders, site operations, venue fit, and production risk.'],
        ['Public cultural exchange', 'International cultural exchange, public events, Korean Cultural Centers, and cultural institution collaboration.'],
        ['Promoter verification', 'Local promoter track record, payment reliability, references, and market fit.']
      ]
    }
  },
  ja: {
    publicSector: {
      eyebrow: '公共連携の方向性',
      title: '韓国K-content輸出と国際文化交流エコシステムに沿った民間B2BライブIPプラットフォーム。',
      body: 'Tide Bridge Live OSは、韓国エンタメIPを海外プロモーター、会場、ブランド、投資家へより信頼性高く接続するための非公開B2B運営基盤です。',
      notice: 'Tide Bridgeは政府認証、公式推薦、公式パートナーシップを主張しません。このページは今後の連携目標と方向性のみを説明します。',
      sections: [
        ['連携するエコシステム', 'K-content輸出、国際文化交流、現地プロモーター検証、ツアー実行信頼性、透明な精算構造を重視します。'],
        ['今後の協力候補', 'KOCCA、KOFICE、KOTRA、Korean Cultural Centers、地域の文化交流組織、民間産業アドバイザーとの協力可能性を検討します。'],
        ['運営原則', '公式認証と誤解される表現を避け、検証可能なパートナーデータと非公開ディール運営を強化します。']
      ],
      cta: '検証ネットワークを見る'
    },
    verifiedNetwork: {
      eyebrow: '検証パートナープロセス',
      title: 'グローバルプロモーターと韓国IPホルダーのためのパートナー検証フロー。',
      body: '申請から内部承認、バッジ付与まで、実行力と事業信頼性を段階的に確認します。',
      notice: 'Verified badgeはTide Bridge内部の運営バッジであり、政府または公共機関の認証ではありません。',
      sections: [
        ['1. Application', '会社、担当者、運営国、都市、過去プロジェクト、Webサイトまたはプロフィールを受け付けます。'],
        ['2. Company profile review', '法人/ブランドプロフィール、市場ポジション、担当者の役割、運営範囲を確認します。'],
        ['3. Track record check', 'コンサート、ファンミーティング、フェス、会場運営、スポンサー実績を確認します。'],
        ['4. Reference check', '必要に応じてIPホルダー、会場、協力会社、現地業界のレファレンスを確認します。'],
        ['5. Internal approval', 'Tide Bridge内部でカタログアクセスとディールルーム対象範囲を判断します。'],
        ['6. Verified badge', '承認済みパートナーに内部verified badgeと限定的な非公開アクセスを付与します。']
      ],
      cta: 'パートナー申請'
    },
    advisoryBoard: {
      eyebrow: 'アドバイザリー体制',
      title: '国際ライブIPディールに必要な専門アドバイザリー領域。',
      body: 'Tide Bridgeは段階的にアドバイザリー体制を構築します。MVPでは必要な専門領域を明確にします。',
      notice: 'このページは将来のアドバイザリー領域を説明するもので、特定の個人、機関、公共パートナーの参加確定を意味しません。',
      sections: [
        ['Entertainment law', '権利、ライセンス、出演、契約、地域別規制を扱います。'],
        ['International settlement/tax', '国際精算、源泉税、送金、会計、収益分配構造を扱います。'],
        ['Touring production', 'ツアー制作、技術ライダー、現場運営、会場適合性、制作リスクを確認します。'],
        ['Public cultural exchange', '国際文化交流、公的イベント、韓国文化院、文化機関連携を検討します。'],
        ['Promoter verification', '現地プロモーターの実績、支払い信頼性、レファレンス、市場適合性を確認します。']
      ]
    }
  },
  zh: {
    publicSector: {
      eyebrow: '公共协同方向',
      title: '与韩国 K-content 出口和国际文化交流生态相匹配的私密 B2B 现场 IP 平台。',
      body: 'Tide Bridge Live OS 旨在帮助韩国娱乐 IP 通过更可信的私密 B2B 流程连接海外主办方、场馆、品牌和投资方。',
      notice: 'Tide Bridge 不声称拥有政府认证、官方背书或官方合作关系。本页仅说明协同方向和未来合作目标。',
      sections: [
        ['协同生态', '平台关注 K-content 出口、国际文化交流、本地主办方验证、巡演执行可信度和更清晰的结算流程。'],
        ['未来合作目标', '未来可能探索 KOCCA、KOFICE、KOTRA、Korean Cultural Centers、地方文化交流机构和行业顾问的合作机会。'],
        ['运营原则', '避免使用可能暗示官方认证的措辞，重点建设可验证的伙伴数据、结构化录入和私密交易运营。']
      ],
      cta: '查看验证网络'
    },
    verifiedNetwork: {
      eyebrow: '验证伙伴流程',
      title: '面向全球主办方和韩国 IP 持有方的伙伴验证流程。',
      body: 'Verified Partner Process 从申请、内部审批到徽章授予，分阶段确认执行能力和商业可信度。',
      notice: 'Verified badge 是 Tide Bridge 内部运营徽章，不代表政府或公共机构认证。',
      sections: [
        ['1. Application', '收集公司、联系人、运营国家、城市、项目历史、网站或资料。'],
        ['2. Company profile review', '审核公司/品牌资料、市场定位、团队角色和运营范围。'],
        ['3. Track record check', '核查演唱会、粉丝见面会、音乐节、场馆运营、赞助等现场项目经验。'],
        ['4. Reference check', '必要时查看 IP 持有方、场馆、供应商或本地行业联系人推荐。'],
        ['5. Internal approval', 'Tide Bridge 内部评估目录访问和交易室权限。'],
        ['6. Verified badge', '获批伙伴获得内部 verified badge 和有限私密访问权限。']
      ],
      cta: '申请成为伙伴'
    },
    advisoryBoard: {
      eyebrow: '顾问体系',
      title: '国际现场 IP 交易所需的专业顾问类别。',
      body: 'Tide Bridge 将逐步建立顾问资源。MVP 阶段先定义跨境现场 IP 运营所需的关键顾问类别。',
      notice: '本页说明未来顾问类别，并不表示任何个人、机构或公共伙伴已确认参与。',
      sections: [
        ['Entertainment law', '权利、授权、演出、合同和地区监管问题。'],
        ['International settlement/tax', '跨境结算、预提税、汇款、会计和收益分配结构。'],
        ['Touring production', '巡演制作、技术 rider、现场运营、场馆适配和制作风险。'],
        ['Public cultural exchange', '国际文化交流、公共活动、韩国文化中心和文化机构合作。'],
        ['Promoter verification', '本地主办方执行记录、付款可靠性、推荐和市场匹配度。']
      ]
    }
  }
};
