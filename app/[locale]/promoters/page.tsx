import { LocalizedPromoters } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function PromotersPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedPromoters dict={getDictionary(params.locale)} locale={params.locale} />;
}
