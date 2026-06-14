import { LocalizedAgencies } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function AgenciesPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedAgencies dict={getDictionary(params.locale)} locale={params.locale} />;
}
