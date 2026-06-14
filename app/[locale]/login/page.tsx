import { LoginPageContent } from '@/components/LoginPageContent';
import { type Locale } from '@/lib/i18n';

export default function LoginPage({ params }: { params: { locale: Locale } }) {
  return <LoginPageContent locale={params.locale} />;
}
