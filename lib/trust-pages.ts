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
      title: 'K-content 수출.\n국제 문화교류.\n민간 B2B 인프라.',
      body: '검증된 해외 파트너와 한국 콘텐츠 IP를 더 신뢰도 있게 연결합니다.',
      notice: '정부 인증, 공식 파트너십, 승인 또는 지정을 주장하지 않습니다.\n이 페이지는 산업 정렬 방향과 향후 협력 목표를 설명합니다.',
      sections: [
        ['Aligned ecosystem', 'K-content 수출.\n국제 문화교류.\n현지 파트너 검증.\n투명한 정산 구조.'],
        ['Future collaboration targets', 'KOCCA, KOFICE, KOTRA, Korean Cultural Centers, 지자체 문화교류 조직, 민간 자문 그룹과의 협력 가능성을 검토합니다.'],
        ['Operating principle', '공식 인증처럼 보이는 표현을 피합니다.\n검증 가능한 파트너 데이터와 구조화된 기회 검토에 집중합니다.']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: '비공개 접근.\n검증된 파트너.\n신뢰 기반 운영.',
      body: '비공개 검토형 접근 구조입니다.\n회사 프로필, 실행 이력, 레퍼런스, 시장 커버리지, 정산 신뢰도를 검토합니다.',
      notice: 'Verified badge는 Tide Bridge 내부 운영 배지입니다.\n정부 또는 공공기관 인증이 아닙니다.',
      sections: [
        ['1. Application', '회사, 담당자, 운영 국가, 도시, 과거 프로젝트를 접수합니다.'],
        ['2. Company profile review', '법인 프로필, 시장 포지션, 운영 범위를 검토합니다.'],
        ['3. Track record check', '콘서트, 팬미팅, 페스티벌, 공연장 운영, 브랜드 협력 이력을 확인합니다.'],
        ['4. Reference check', 'IP 홀더, 공연장, 협력사, 현지 업계 레퍼런스를 확인할 수 있습니다.'],
        ['5. Internal approval', 'Private IP Access와 structured opportunity review 범위를 내부 검토합니다.'],
        ['6. Verified badge', '승인된 파트너에게 내부 배지와 제한된 비공개 접근 권한을 부여합니다.']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '국제 라이브 IP 운영에 맞춘 자문 구조.',
      body: '확정된 자문단처럼 표현하지 않습니다.\nMVP 단계에서는 핵심 자문 영역만 정의합니다.',
      notice: '특정 인물, 기관, 공공 파트너의 참여 확정을 의미하지 않습니다.',
      sections: [
        ['Entertainment law', '권리, 라이선스, 출연, 계약, 지역별 규제 이슈.'],
        ['International settlement/tax', '국가 간 정산, 원천세, 송금, 회계, 수익 배분 구조.'],
        ['Touring production', '투어 제작, 기술 라이더, 현장 운영, 공연장 적합성, 제작 리스크.'],
        ['Public cultural exchange', '국제 문화교류, 공공 행사, 한국문화원, 문화기관 협력 가능성.'],
        ['Promoter verification', '현지 실행 이력, 지급 신뢰도, 레퍼런스, 시장 적합성.']
      ]
    }
  },
  en: {
    publicSector: {
      eyebrow: 'Public & Industry Alignment',
      title: 'A private B2B live IP infrastructure aligned with Korea’s K-content export and cultural exchange ecosystem.',
      body: 'Tide Bridge Live OS is designed to help Korean entertainment IP connect with qualified overseas promoters, venues, brands, and investors through a trusted private B2B workflow.',
      notice: 'Tide Bridge does not claim formal public approval, designation, or partnership. This page describes alignment direction and future collaboration targets only.',
      sections: [
        ['Aligned ecosystem', 'The platform is oriented around K-content export, international cultural exchange, local promoter verification, touring reliability, and clearer settlement workflows.'],
        ['Future collaboration targets', 'Potential collaboration targets include KOCCA, KOFICE, KOTRA, Korean Cultural Centers, local cultural exchange offices, and private industry advisors.'],
        ['Operating principle', 'We avoid language that could imply formal public approval and focus on verifiable partner data, structured intake, and private opportunity review.']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: 'A partner verification process for global promoters and Korean IP holders.',
      body: 'Tide Bridge uses private reviewed access. Company profiles, track records, references, market coverage, and settlement reliability are reviewed before access.',
      notice: 'The verified badge is an internal Tide Bridge operating badge. It is not a public-sector credential.',
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
      title: 'K-content輸出。\n国際文化交流。\n民間B2B。\nインフラ。',
      body: '検証済み海外パートナー。\n韓国コンテンツIP。\nより信頼性高く接続します。',
      notice: '政府認証、公式推薦、公式承認、公式指定は主張しません。\n産業整合性と今後の連携目標を説明します。',
      sections: [
        ['Aligned ecosystem', 'K-content輸出。\n国際文化交流。\n現地パートナー検証。\n透明な精算構造。'],
        ['Future collaboration targets', 'KOCCA、KOFICE、KOTRA、Korean Cultural Centers。\n地域文化交流組織、民間アドバイザーも検討します。'],
        ['Operating principle', '公式認証に見える表現を避けます。\n検証可能なデータと構造化レビューに集中します。']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: '非公開アクセス。\n検証済み。\nパートナー信頼。',
      body: '非公開レビュー型のアクセス構造です。\n会社プロフィール、実績、リファレンス、精算信頼性を確認します。',
      notice: 'Verified badgeはTide Bridge内部の運営バッジです。\n政府または公共機関の認証ではありません。',
      sections: [
        ['1. Application', '会社、担当者、運営国、都市、過去プロジェクト。'],
        ['2. Company profile review', '法人プロフィール、市場ポジション、運営範囲。'],
        ['3. Track record check', 'コンサート、フェス、会場運営、ブランド連携実績。'],
        ['4. Reference check', 'IPホルダー、会場、協力会社、現地業界リファレンス。'],
        ['5. Internal approval', 'Private IP Accessとstructured opportunity reviewの範囲を内部レビューします。'],
        ['6. Verified badge', '内部バッジ。\n限定的な非公開アクセス。']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '国際ライブIP。\n運営アドバイザリー。',
      body: '確定済み組織とは表現しません。\nMVPでは主要領域のみを定義します。',
      notice: '特定の個人、機関、公共パートナーの参加確定を意味しません。',
      sections: [
        ['Entertainment law', '権利、ライセンス、出演、契約、地域別規制。'],
        ['International settlement/tax', '国際精算、源泉税、送金、会計、収益分配構造。'],
        ['Touring production', 'ツアー制作、技術ライダー、現場運営、会場適合性、制作リスク。'],
        ['Public cultural exchange', '国際文化交流、公的イベント、韓国文化院、文化機関連携。'],
        ['Promoter verification', '現地実績、支払い信頼性、リファレンス、市場適合性。']
      ]
    }
  },
  zh: {
    publicSector: {
      eyebrow: 'Public & Industry Alignment',
      title: 'K-content 出口。\n国际文化交流。\n私密 B2B 基础设施。',
      body: '以更可信的方式连接已验证海外伙伴与韩国内容 IP。',
      notice: '不声称政府认证、官方背书、官方批准、官方指定或官方合作关系。\n本页仅说明行业协同方向与未来合作目标。',
      sections: [
        ['Aligned ecosystem', 'K-content 出口。\n国际文化交流。\n本地伙伴验证。\n更清晰的结算结构。'],
        ['Future collaboration targets', '未来可能探索 KOCCA、KOFICE、KOTRA、Korean Cultural Centers、地方文化交流机构和行业顾问的合作机会。'],
        ['Operating principle', '避免使用可能暗示官方认证的措辞。\n聚焦可验证伙伴数据与结构化机会审核。']
      ],
      cta: 'View Verified Network'
    },
    verifiedNetwork: {
      eyebrow: 'Verified Global Promoter Network',
      title: '非公开访问。\n已验证伙伴。\n基于信任的运营。',
      body: '采用非公开审核访问结构。\n会审核公司资料、过往记录、推荐证明、市场覆盖和结算可靠性。',
      notice: 'Verified badge 是 Tide Bridge 内部运营徽章。\n不代表政府或公共机构认证。',
      sections: [
        ['1. Application', '收集公司、联系人、运营国家、城市、过往项目。'],
        ['2. Company profile review', '审核公司资料、市场定位和运营范围。'],
        ['3. Track record check', '核查演唱会、见面会、音乐节、场馆运营和品牌合作经验。'],
        ['4. Reference check', '必要时查看 IP 持有方、场馆、供应商或本地行业推荐。'],
        ['5. Internal approval', '内部审核 Private IP Access 与 structured opportunity review 范围。'],
        ['6. Verified badge', '获批伙伴获得内部徽章和有限非公开访问权限。']
      ],
      cta: 'Apply as Promoter'
    },
    advisoryStructure: {
      eyebrow: 'Advisory Structure',
      title: '国际现场 IP 运营顾问结构。',
      body: '不暗示顾问已确认。\nMVP 阶段仅定义关键领域。',
      notice: '不表示任何个人、机构或公共伙伴已确认参与。',
      sections: [
        ['Entertainment law', '权利、授权、演出、合同和地区监管。'],
        ['International settlement/tax', '跨境结算、预提税、汇款、会计和收益分配。'],
        ['Touring production', '巡演制作、技术 rider、现场运营、场馆适配和制作风险。'],
        ['Public cultural exchange', '国际文化交流、公共活动、韩国文化中心和文化机构合作。'],
        ['Promoter verification', '本地执行记录、付款可靠性、推荐和市场匹配度。']
      ]
    }
  }
};
