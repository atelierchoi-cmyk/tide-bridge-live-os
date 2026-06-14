import { IPCard } from '@/components/IPCard';
import { Section } from '@/components/Section';
import { ipPackages } from '@/lib/data';

export default function PartnerCatalogPage() {
  return (
    <Section eyebrow="Private IP Catalog" title="Approved partner catalog.">
      <div className="grid gap-5 md:grid-cols-2">
        {ipPackages.map((item) => <IPCard key={item.id} item={item} privateMode />)}
      </div>
    </Section>
  );
}
