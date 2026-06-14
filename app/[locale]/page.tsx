import { LocalizedHome } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return <LocalizedHome dict={dict} locale={params.locale} />;
}
