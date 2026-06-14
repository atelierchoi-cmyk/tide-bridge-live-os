import { OfferForm } from '@/components/OfferForm';
import { Section } from '@/components/Section';
import { getDictionary } from '@/lib/i18n';

export default function SubmitOfferPage() {
  const dict = getDictionary('ko');

  return (
    <Section eyebrow="Submit Offer" title="Create a structured market offer." body="A strong offer should include city, venue, capacity, date window, guarantee amount, deal mode, and market rationale.">
      <OfferForm copy={dict.forms.offer} />
    </Section>
  );
}
