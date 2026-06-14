import { LocalizedApply } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function ApplyPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedApply dict={getDictionary(params.locale)} />;
}
