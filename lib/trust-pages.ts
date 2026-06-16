import type { Locale } from '@/lib/i18n';

type TrustPage = {
  eyebrow: string;
  title: string;
  body: string;
  notice: string;
  sections: string[][];
  cta?: string;
};

export const trustNav: Record<Locale, { label: string; publicAlignment: string; verifiedNetwork: string; advisoryStructure: string }> = {
  ko: {
    label: 'Trust',
    publicAlignment: 'Public Alignment',
    verifiedNetwork: 'Verified Network',
    advisoryStructure: 'Advisory Structure'
  },
  en: {
    label: 'Trust',
    publicAlignment: 'Public Alignment',
    verifiedNetwork: 'Verified Network',
    advisoryStructure: 'Advisory Structure'
  },
  ja: {
    label: 'Trust',
    publicAlignment: 'Public Alignment',
    verifiedNetwork: 'Verified Network',
    advisoryStructure: 'Advisory Structure'
  },
  zh: {
    label: 'Trust',
    publicAlignment: 'Public Alignment',
    verifiedNetwork: 'Verified Network',
    advisoryStructure: 'Advisory Structure'
  }
};

export const trustPages: Record<Locale, { publicSector: TrustPage; verifiedNetwork: TrustPage; advisoryStructure: TrustPage }> = {
  ko: {
    publicSector: {
      eyebrow: 'Public & Industry Alignment',
      title: 'K-content 수출과 국제 문화교류 생태계에 맞춘 민간 B2B 라이브 IP 인프라.',
      body: 'Tide Bridge Live OS는 한국 엔터테인먼트 IP가 검증된 해외 프로모터, 공연장, 브랜드, 투자자와 더 신뢰도 있게 연결되도록 설계된 비공개 B2B 운영 인프라입니다.',
      notice: 'Tide Bridge는 정부 인증, 공식 보증, 공식 파트너십, 승인 또는 지정을 주장하지 않습니다. 이 페이지는 향후 협력 목표와 산업 정렬 방향을 설명합니다.',
      sections: [
        ['Aligned ecosystem', 'K-content 수출, 국제 문화교류, 현지 프로모터 검증, 투어링 실행 신뢰도, 투명한 정산 구조를 중심에 둡니다.'],
        ['Future collaboration targets', 'KOCCA, KOFICE, KOTRA, Korean Cultural Centers, 지자체 문화교류 조직, 민간 산업 자문 그룹과의 협력 가능성을 단계적으로 검토합니다.'],
        ['Operating principle', '공식 인증처럼 보일 수 있는 표현은 사용하지 않고, 검증 가능한 파트너 데이터와 구조화된 기회 검토 체계를 강화합니다.']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: '한국 IP 홀더와 글로벌 프로모터가 안심할 수 있는 파트너 검증 프로세스.',
      body: 'Tide Bridge is not an open marketplace. Access is reviewed through company profiles, track records, references, market coverage, and settlement reliability.',
      notice: 'Verified badge는 Tide Bridge 내부 운영 배지이며, 정부 또는 공공기관 인증을 의미하지 않습니다.',
      sections: [
        ['1. Application', '회사, 담당자, 운영 국가, 도시, 과거 프로젝트, 웹사이트 또는 회사 프로필을 접수합니다.'],
        ['2. Company profile review', '법인 또는 브랜드 프로필, 시장 포지션, 담당자 역할, 운영 범위를 검토합니다.'],
        ['3. Track record check', '콘서트, 팬미팅, 페스티벌, 공연장 운영, 브랜드 협력 등 라이브 프로젝트 실행 이력을 확인합니다.'],
        ['4. Reference check', '필요한 경우 IP 홀더, 공연장, 협력사, 현지 업계 레퍼런스를 확인합니다.'],
        ['5. Internal approval', 'Tide Bridge 내부 검토를 거쳐 Private IP Access와 structured opportunity review 범위를 결정합니다.'],
        ['6. Verified badge', '승인된 파트너에게 내부 verified badge와 제한된 비공개 접근 권한을 부여합니다.']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '국제 라이브 IP 운영에 필요한 전문 자문 카테고리.',
      body: 'Tide Bridge는 실제 자문 참여가 확정된 것처럼 표현하지 않고, 초기 MVP에서 필요한 자문 영역과 향후 협업 후보군을 명확히 정의합니다.',
      notice: '이 페이지는 향후 자문 범주를 설명하며 특정 인물, 기관, 공공 파트너의 참여 확정을 의미하지 않습니다.',
      sections: [
        ['Entertainment law', '권리, 라이선스, 출연, 계약, 지역별 규제 이슈를 검토할 수 있는 법률 자문 영역입니다.'],
        ['International settlement/tax', '국가 간 정산, 원천세, 송금, 회계 처리, 수익 배분 구조를 다룹니다.'],
        ['Touring production', '투어 제작, 기술 라이더, 현장 운영, 공연장 적합성, 제작 리스크를 검토합니다.'],
        ['Public cultural exchange', '국제 문화교류, 공공 행사, 한국문화원 및 문화기관 협력 가능성을 검토합니다.'],
        ['Promoter verification', '현지 프로모터 실행 이력, 지급 신뢰도, 레퍼런스, 시장 적합성을 검토합니다.']
      ]
    }
  },
  en: {
    publicSector: {
      eyebrow: 'Public & Industry Alignment',
      title: 'A private B2B live IP infrastructure aligned with Korea’s K-content export and cultural exchange ecosystem.',
      body: 'Tide Bridge Live OS is designed to help Korean entertainment IP connect with qualified overseas promoters, venues, brands, and investors through a trusted private B2B workflow.',
      notice: 'Tide Bridge does not claim official government certification, endorsement, approval, designation, or partnership. This page describes alignment direction and future collaboration targets only.',
      sections: [
        ['Aligned ecosystem', 'The platform is oriented around K-content export, international cultural exchange, local promoter verification, touring reliability, and clearer settlement workflows.'],
        ['Future collaboration targets', 'Potential collaboration targets include KOCCA, KOFICE, KOTRA, Korean Cultural Centers, local cultural exchange offices, and private industry advisors.'],
        ['Operating principle', 'We avoid language that could imply official certification and focus on verifiable partner data, structured intake, and private opportunity review.']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: 'A partner verification process for global promoters and Korean IP holders.',
      body: 'Tide Bridge is not an open marketplace. Access is reviewed through company profiles, track records, references, market coverage, and settlement reliability.',
      notice: 'The verified badge is an internal Tide Bridge operating badge. It is not a government or public-sector certification.',
      sections: [
        ['1. Application', 'Collect company, contact, operating country, city, project history, website, or company profile.'],
        ['2. Company profile review', 'Review legal or trade profile, market position, team role, and operating scope.'],
        ['3. Track record check', 'Check concerts, fan meetings, festivals, venue operations, brand partnerships, and other live project history.'],
        ['4. Reference check', 'When needed, review references from IP holders, venues, vendors, or local industry contacts.'],
        ['5. Internal approval', 'Tide Bridge reviews Private IP Access and structured opportunity review eligibility internally.'],
        ['6. Verified badge', 'Approved partners receive an internal verified badge and limited private access.']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: 'Specialist advisory categories for international live IP operations.',
      body: 'Tide Bridge will build its advisory structure over time. The MVP defines the categories required for credible cross-border live IP review without implying confirmed advisors.',
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
      eyebrow: 'Public & Industry Alignment',
      title: '韓国K-content輸出と国際文化交流エコシステムに沿った民間B2BライブIPインフラ。',
      body: 'Tide Bridge Live OSは、韓国エンタメIPを検証済みの海外プロモーター、会場、ブランド、投資家へ信頼性高く接続するための非公開B2B運営基盤です。',
      notice: 'Tide Bridgeは政府認証、公式推薦、公式承認、公式指定、公式パートナーシップを主張しません。このページは今後の連携目標と産業整合性のみを説明します。',
      sections: [
        ['Aligned ecosystem', 'K-content輸出、国際文化交流、現地プロモーター検証、ツアー実行信頼性、透明な精算構造を重視します。'],
        ['Future collaboration targets', 'KOCCA、KOFICE、KOTRA、Korean Cultural Centers、地域の文化交流組織、民間産業アドバイザーとの協力可能性を検討します。'],
        ['Operating principle', '公式認証と誤解される表現を避け、検証可能なパートナーデータと構造化された機会レビューを強化します。']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: 'グローバルプロモーターと韓国IPホルダーのためのパートナー検証プロセス。',
      body: 'Tide Bridge is not an open marketplace. Access is reviewed through company profiles, track records, references, market coverage, and settlement reliability.',
      notice: 'Verified badgeはTide Bridge内部の運営バッジであり、政府または公共機関の認証ではありません。',
      sections: [
        ['1. Application', '会社、担当者、運営国、都市、過去プロジェクト、Webサイトまたは会社プロフィールを受け付けます。'],
        ['2. Company profile review', '法人またはブランドプロフィール、市場ポジション、担当者の役割、運営範囲を確認します。'],
        ['3. Track record check', 'コンサート、ファンミーティング、フェス、会場運営、ブランド連携などの実績を確認します。'],
        ['4. Reference check', '必要に応じてIPホルダー、会場、協力会社、現地業界のリファレンスを確認します。'],
        ['5. Internal approval', 'Tide Bridge内部でPrivate IP Accessとstructured opportunity reviewの対象範囲を判断します。'],
        ['6. Verified badge', '承認済みパートナーに内部verified badgeと限定的な非公開アクセスを付与します。']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '国際ライブIP運営に必要な専門アドバイザリー領域。',
      body: 'Tide Bridgeは段階的にアドバイザリー構造を構築します。MVPでは、確定済みアドバイザーを示唆せず、必要な専門領域を定義します。',
      notice: 'このページは将来のアドバイザリー領域を説明するもので、特定の個人、機関、公共パートナーの参加確定を意味しません。',
      sections: [
        ['Entertainment law', '権利、ライセンス、出演、契約、地域別規制を扱います。'],
        ['International settlement/tax', '国際精算、源泉税、送金、会計、収益分配構造を扱います。'],
        ['Touring production', 'ツアー制作、技術ライダー、現場運営、会場適合性、制作リスクを確認します。'],
        ['Public cultural exchange', '国際文化交流、公的イベント、韓国文化院、文化機関連携を検討します。'],
        ['Promoter verification', '現地プロモーターの実績、支払い信頼性、リファレンス、市場適合性を確認します。']
      ]
    }
  },
  zh: {
    publicSector: {
      eyebrow: 'Public & Industry Alignment',
      title: '与韩国 K-content 出口和国际文化交流生态相匹配的私密 B2B 现场 IP 基础设施。',
      body: 'Tide Bridge Live OS 旨在帮助韩国娱乐 IP 通过更可信的私密 B2B 流程连接已验证海外主办方、场馆、品牌和投资方。',
      notice: 'Tide Bridge 不声称拥有政府认证、官方背书、官方批准、官方指定或官方合作关系。本页仅说明行业协同方向和未来合作目标。',
      sections: [
        ['Aligned ecosystem', '平台关注 K-content 出口、国际文化交流、本地主办方验证、巡演执行可信度和更清晰的结算流程。'],
        ['Future collaboration targets', '未来可能探索 KOCCA、KOFICE、KOTRA、Korean Cultural Centers、地方文化交流机构和行业顾问的合作机会。'],
        ['Operating principle', '避免使用可能暗示官方认证的措辞，重点建设可验证的伙伴数据、结构化录入和私密机会审核。']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: '面向全球主办方和韩国 IP 持有方的伙伴验证流程。',
      body: 'Tide Bridge is not an open marketplace. Access is reviewed through company profiles, track records, references, market coverage, and settlement reliability.',
      notice: 'Verified badge 是 Tide Bridge 内部运营徽章，不代表政府或公共机构认证。',
      sections: [
        ['1. Application', '收集公司、联系人、运营国家、城市、项目历史、网站或公司资料。'],
        ['2. Company profile review', '审核公司或品牌资料、市场定位、团队角色和运营范围。'],
        ['3. Track record check', '核查演唱会、粉丝见面会、音乐节、场馆运营、品牌合作等现场项目经验。'],
        ['4. Reference check', '必要时查看 IP 持有方、场馆、供应商或本地行业联系人推荐。'],
        ['5. Internal approval', 'Tide Bridge 内部评估 Private IP Access 和 structured opportunity review 权限。'],
        ['6. Verified badge', '获批伙伴获得内部 verified badge 和有限私密访问权限。']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '国际现场 IP 运营所需的专业顾问类别。',
      body: 'Tide Bridge 将逐步建立顾问结构。MVP 阶段先定义跨境现场 IP 审核所需的关键类别，并避免暗示顾问已确认。',
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
