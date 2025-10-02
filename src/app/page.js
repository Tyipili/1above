import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container py-16 sm:py-24">
          <p className="uppercase tracking-[0.2em] text-sm text-zinc-600">Meticulously made for</p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold">An Elevated Experience</h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-700">
            1 Above delivers top-quality, innovative products with a focus on flavour and potency. Built on advanced extraction, tested hardware, and custom formulations, our products provide a cannabis experience like no other.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/products" className="btn btn-primary">Explore Products</Link>
            <Link href="/coa" className="btn btn-ghost">Find Your COA</Link>
          </div>
        </div>
      </section>

      <section className="container grid sm:grid-cols-3 gap-6 pb-20">
        {[
          { href: "/products/vapes", title: "Vapes" },
          { href: "/products/concentrates", title: "Concentrates" },
          { href: "/products/pre-rolls", title: "Pre-rolls" },
        ].map((c) => (
          <a key={c.href} href={c.href} className="card p-6 hover:shadow-md">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="text-sm text-zinc-600 mt-2">Explore the {c.title.toLowerCase()} lineup.</p>
          </a>
        ))}
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="container grid sm:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-2xl font-bold">Find Your COA</h3>
            <p className="mt-2 text-zinc-700">Search by lot number to view your Certificate of Analysis PDF.</p>
            <a href="/coa" className="btn btn-primary mt-4">Search COA</a>
          </div>
          <div className="card p-6">
            <h3 className="text-2xl font-bold">Stockists</h3>
            <p className="mt-2 text-zinc-700">Buy 1 Above products through Ontario Cannabis Store partners.</p>
            <a target="_blank" rel="noopener" href="https://ocs.ca/search?product=9071553806644&load_view=load&q=1above&sort_by=search_products" className="btn btn-primary mt-4">Open OCS Search</a>
          </div>
        </div>
      </section>
    </div>
  );
}
