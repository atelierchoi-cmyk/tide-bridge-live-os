import { LocalizedAbout } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedAbout dict={getDictionary(params.locale)} />;
}
