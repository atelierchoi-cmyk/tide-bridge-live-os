import { VerifiedNetworkPage } from '@/components/TrustPages';
import { type Locale } from '@/lib/i18n';

export default function Page({ params }: { params: { locale: Locale } }) {
  return <VerifiedNetworkPage locale={params.locale} />;
}
