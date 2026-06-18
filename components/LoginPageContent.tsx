import Link from 'next/link';
import { Section } from '@/components/Section';

const copy = {
  ko: {
    eyebrow: 'Private Access',
    title: '검증된 파트너.\n비공개 인프라 접근.',
    body: '정식 인증은 다음 단계에서 연결됩니다.\nMVP에서는 파트너 워크플로와 운영 콘솔을 프리뷰합니다.',
    partner: 'Partner Portal Preview',
    admin: 'Admin Console Preview'
  },
  en: {
    eyebrow: 'Private Access',
    title: 'Confidential infrastructure access for verified partners.',
    body: 'Authentication will be connected in the next development pass. For MVP review, use the preview links below to inspect private partner workflows and operating controls.',
    partner: 'Preview Partner Portal',
    admin: 'Preview Admin Console'
  },
  ja: {
    eyebrow: 'Private Access',
    title: '検証済みパートナー。\n非公開インフラアクセス。',
    body: '認証は次の段階で接続します。\nMVPではパートナーワークフローと運営コンソールをプレビューします。',
    partner: 'Partner Portal Preview',
    admin: 'Admin Console Preview'
  },
  zh: {
    eyebrow: 'Private Access',
    title: '已验证伙伴。\n非公开基础设施访问。',
    body: '认证将在下一阶段接入。\nMVP 可预览伙伴工作流和运营控制台。',
    partner: 'Partner Portal Preview',
    admin: 'Admin Console Preview'
  }
};

export function LoginPageContent({ locale = 'ko' }: { locale?: keyof typeof copy }) {
  const dict = copy[locale] ?? copy.ko;

  return (
    <Section eyebrow={dict.eyebrow} title={dict.title} body={dict.body}>
      <div className="card flex flex-col gap-4 p-6 sm:flex-row">
        <Link className="btn-primary text-center" href="/partner">{dict.partner}</Link>
        <Link className="btn-secondary text-center" href="/admin">{dict.admin}</Link>
      </div>
    </Section>
  );
}
