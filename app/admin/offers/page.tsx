import { Section } from '@/components/Section';
import { PipelineTable } from '@/components/PipelineTable';

export default function OffersPage() {
  return (
    <Section eyebrow="Admin" title="Offer Pipeline" body="Track submitted offers from local promoters and move qualified deals into review, counter-offer, contracting, and settlement.">
      <PipelineTable />
    </Section>
  );
}
