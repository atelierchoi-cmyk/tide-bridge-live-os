import { IntelligencePage } from '@/components/IntelligencePage';
import type { Locale } from '@/lib/i18n';

export default function LocalizedIntelligenceRoute({ params }: { params: { locale: Locale } }) {
  return <IntelligencePage locale={params.locale} />;
}
