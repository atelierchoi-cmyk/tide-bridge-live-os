import { OfferForm } from '@/components/OfferForm';
import { DealReadinessReportPreview } from '@/components/ProductDemos';
import { Section } from '@/components/Section';
import { getDictionary } from '@/lib/i18n';

export default function SubmitOfferPage() {
  const dict = getDictionary('ko');

  return (
    <>
      <Section eyebrow={dict.submitOffer.eyebrow} title={dict.submitOffer.title} body={dict.submitOffer.body}>
        <OfferForm copy={dict.forms.offer} />
      </Section>
      <DealReadinessReportPreview />
    </>
  );
}
