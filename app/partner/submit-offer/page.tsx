import { OfferForm } from '@/components/OfferForm';
import { Section } from '@/components/Section';

export default function SubmitOfferPage() {
  return (
    <Section eyebrow="Submit Offer" title="Create a structured market offer." body="A strong offer should include city, venue, capacity, date window, guarantee amount, deal mode, and market rationale.">
      <OfferForm />
    </Section>
  );
}
