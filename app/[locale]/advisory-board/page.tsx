import { AdvisoryStructurePage } from '@/components/TrustPages';
import type { Locale } from '@/lib/i18n';

export default function AdvisoryBoardRoute({ params }: { params: { locale: Locale } }) {
  return <AdvisoryStructurePage locale={params.locale} />;
}
