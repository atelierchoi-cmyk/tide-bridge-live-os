import { LocalizedCatalog } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function PublicCatalogPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedCatalog dict={getDictionary(params.locale)} locale={params.locale} />;
}
