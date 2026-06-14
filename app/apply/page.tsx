import { ApplicationForm } from '@/components/ApplicationForm';
import { Section } from '@/components/Section';

export default function ApplyPage() {
  return (
    <Section
      eyebrow="Partner Application"
      title="Apply for private partner access."
      body="Use this form for local promoter, venue, agency, brand, or investor access. Approved partners can review private IP packages and submit structured offers."
    >
      <ApplicationForm />
    </Section>
  );
}
