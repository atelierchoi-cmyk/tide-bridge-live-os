import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CompanyLandingPage } from '@/components/CompanyLandingPage';
import { isLocale, type Locale } from '@/lib/i18n';

const metadataByLocale: Record<Locale, Metadata> = {
  ko: {
    title: 'Tide Bridge | 크로스보더 라이브·컬처 IP 인프라',
    description: '한국 콘텐츠와 글로벌 라이브·컬처 IP를 연결하는 비공개 B2B 인프라.'
  },
  en: {
    title: 'Tide Bridge | Global Live & Cultural IP Infrastructure',
    description: 'A private B2B layer connecting Korean content, global live opportunities, verified partners, and market intelligence.'
  },
  ja: {
    title: 'Tide Bridge | クロスボーダー ライブ・カルチャーIPインフラ',
    description: '韓国コンテンツとグローバルなライブ・カルチャーIPをつなぐ非公開B2Bインフラ。'
  },
  zh: {
    title: 'Tide Bridge | 跨境现场娱乐及文化 IP 基础设施',
    description: '连接韩国内容、全球现场娱乐机会、已验证伙伴与市场情报的非公开 B2B 层。'
  }
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  return metadataByLocale[params.locale];
}

export default function LocalizedCompanyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();

  return <CompanyLandingPage locale={params.locale} />;
}
