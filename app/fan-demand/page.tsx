import { FanDemandForm } from '@/components/FanDemandForm';
import { Section } from '@/components/Section';

export default function FanDemandPage() {
  return (
    <Section
      eyebrow="Fan Demand"
      title="Bring K-POP live to your city."
      body="This public demand page collects city, artist, ticket range, and VIP interest signals. The data helps validate markets before a promoter submits a final offer."
    >
      <FanDemandForm />
    </Section>
  );
}
