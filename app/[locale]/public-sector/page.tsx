import { PublicSectorPage } from '@/components/TrustPages';
import type { Locale } from '@/lib/i18n';

export default function PublicSectorRoute({ params }: { params: { locale: Locale } }) {
  return <PublicSectorPage locale={params.locale} />;
}
