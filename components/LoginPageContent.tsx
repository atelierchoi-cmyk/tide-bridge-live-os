import Link from 'next/link';
import { Section } from '@/components/Section';

const copy = {
  ko: {
    eyebrow: '파트너 로그인',
    title: '승인된 파트너를 위한 비공개 접근.',
    body: 'Supabase Auth는 다음 개발 단계에서 연결합니다. MVP 검토용으로 아래 프리뷰 링크를 사용할 수 있습니다.',
    partner: '파트너 포털 프리뷰',
    admin: '관리자 콘솔 프리뷰'
  },
  en: {
    eyebrow: 'Partner Login',
    title: 'Private access for approved partners.',
    body: 'Supabase Auth should be connected in the next development pass. For MVP review, use the preview links below.',
    partner: 'Preview Partner Portal',
    admin: 'Preview Admin Console'
  },
  ja: {
    eyebrow: 'パートナーログイン',
    title: '承認済みパートナー向けの非公開アクセス。',
    body: 'Supabase Authは次の開発段階で接続します。MVP確認には以下のプレビューリンクを使用できます。',
    partner: 'パートナーポータルをプレビュー',
    admin: '管理コンソールをプレビュー'
  },
  zh: {
    eyebrow: '伙伴登录',
    title: '面向获批伙伴的私密访问。',
    body: 'Supabase Auth 将在下一阶段接入。MVP 审阅可使用以下预览链接。',
    partner: '预览伙伴门户',
    admin: '预览管理控制台'
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
