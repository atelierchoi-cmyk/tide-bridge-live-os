import { LocalizedHome } from '@/components/LocalizedPublicPages';
import { defaultLocale, getDictionary } from '@/lib/i18n';

export default function LiveOsPage() {
  const dict = getDictionary(defaultLocale);
  return <LocalizedHome dict={dict} locale={defaultLocale} />;
}
