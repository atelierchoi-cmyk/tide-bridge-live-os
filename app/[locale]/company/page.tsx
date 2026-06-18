import { redirect } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

export default function LocalizedCompanyPage({ params }: { params: { locale: Locale } }) {
  redirect(`/${params.locale}`);
}
