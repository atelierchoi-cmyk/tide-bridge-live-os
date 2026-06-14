import Link from 'next/link';
import { Section } from '@/components/Section';

export default function LoginPage() {
  return (
    <Section eyebrow="Partner Login" title="Private access for approved partners." body="Supabase Auth should be connected in the next development pass. For MVP review, use the preview links below.">
      <div className="card flex flex-col gap-4 p-6 sm:flex-row">
        <Link className="btn-primary text-center" href="/partner">Preview Partner Portal</Link>
        <Link className="btn-secondary text-center" href="/admin">Preview Admin Console</Link>
      </div>
    </Section>
  );
}
