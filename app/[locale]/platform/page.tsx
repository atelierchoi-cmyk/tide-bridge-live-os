import { LocalizedPlatform } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function PlatformPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedPlatform dict={getDictionary(params.locale)} />;
}
