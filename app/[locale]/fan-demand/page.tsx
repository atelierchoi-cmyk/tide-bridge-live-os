import { LocalizedFanDemand } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function FanDemandPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedFanDemand dict={getDictionary(params.locale)} />;
}
