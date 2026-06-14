import { IPCard } from '@/components/IPCard';
import { Section } from '@/components/Section';
import { ipPackages } from '@/lib/data';

export default function PublicCatalogPage() {
  return (
    <Section
      eyebrow="IP Catalog Preview"
      title="Selected live IP formats for global markets."
      body="Full details are available only to approved partners. Public preview keeps sensitive artist and deal materials controlled."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {ipPackages.map((item) => <IPCard key={item.id} item={item} />)}
      </div>
    </Section>
  );
}
