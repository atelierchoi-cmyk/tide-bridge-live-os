import { LocalizedSubmitOffer } from '@/components/LocalizedPublicPages';
import { getDictionary, type Locale } from '@/lib/i18n';

export default function SubmitOfferPage({ params }: { params: { locale: Locale } }) {
  return <LocalizedSubmitOffer dict={getDictionary(params.locale)} />;
}
