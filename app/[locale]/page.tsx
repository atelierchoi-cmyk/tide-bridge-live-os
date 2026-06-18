import type { Metadata } from 'next';
import { BrandHomePage } from '@/components/BrandHomePage';
import type { Locale } from '@/lib/i18n';

const metadataByLocale: Record<Locale, Metadata> = {
  ko: {
    title: 'Tide Bridge | 글로벌 라이브 & 컬처 IP 컴퍼니',
    description: '한국 콘텐츠와 글로벌 라이브 IP를 하나의 브릿지로 연결합니다.'
  },
  en: {
    title: 'Tide Bridge | Global Live & Cultural IP Company',
    description: 'Korean content, global live IP, and one cross-border bridge.'
  },
  ja: {
    title: 'Tide Bridge | グローバルライブ & カルチャーIPカンパニー',
    description: '韓国コンテンツとグローバルライブIPをひとつのブリッジでつなぎます。'
  },
  zh: {
    title: 'Tide Bridge | 全球现场娱乐及文化 IP 公司',
    description: '连接韩国内容与全球现场娱乐 IP，构建跨境桥梁。'
  }
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  return <BrandHomePage locale={params.locale} />;
}
