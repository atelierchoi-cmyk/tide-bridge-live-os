import { IPCard } from '@/components/IPCard';
import { Section } from '@/components/Section';
import { ipPackages } from '@/lib/data';

export default function AdminIPPage() {
  return (
    <Section eyebrow="Admin" title="IP Management">
      <div className="grid gap-5 md:grid-cols-2">
        {ipPackages.map((item) => <IPCard key={item.id} item={item} privateMode />)}
      </div>
    </Section>
  );
}
