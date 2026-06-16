import { LaunchpadPage } from '@/components/LaunchpadPage';
import type { Locale } from '@/lib/i18n';

export default function Page({ params }: { params: { locale: Locale } }) {
  return <LaunchpadPage locale={params.locale} />;
}
