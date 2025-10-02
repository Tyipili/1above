import { getProductBySlug } from "@/lib/products";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const p = getProductBySlug(params.slug);
  return { title: `${p?.name ?? "Product"} | 1 Above` };
}

export default function ProductDetail({ params }) {
  const p = getProductBySlug(params.slug);
  if (!p) return <div className="container py-12">Product not found.</div>;
  return (
    <div className="container py-12 grid md:grid-cols-2 gap-8">
      <div className="card overflow-hidden">
        <Image src={p.imageUrl} alt={p.name} width={1200} height={800} className="w-full h-auto"/>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <p className="mt-4 text-zinc-700">{p.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="card p-4">
            <div className="text-sm text-zinc-500">THC</div>
            <div className="font-semibold">{p.thcMin}% to {p.thcMax}%</div>
          </div>
          <div className="card p-4">
            <div className="text-sm text-zinc-500">CBD</div>
            <div className="font-semibold">{p.cbdMin}% to {p.cbdMax}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
