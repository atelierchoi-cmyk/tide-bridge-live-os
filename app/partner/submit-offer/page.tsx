import { OfferForm } from '@/components/OfferForm';
import { Section } from '@/components/Section';
import { getDictionary } from '@/lib/i18n';

export default function SubmitOfferPage() {
  const dict = getDictionary('ko');

  return (
    <Section eyebrow="Offer Management" title="Submit a structured opportunity." body="Include market, venue, sellable capacity, timing, commercial baseline, credibility, and rationale.">
      <OfferForm copy={dict.forms.offer} />
    </Section>
  );
}
