import Link from "next/link";
import Image from "next/image";
import { listProducts } from "@/lib/products";

export default function ProductGrid({ category = "all" }){
  const items = listProducts().filter(p => category === "all" ? true : p.category === category);
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => (
          <Link key={p.id} href={`/product/${p.slug}`} className="card overflow-hidden hover:shadow-md">
            <Image src={p.imageUrl} alt={p.name} width={800} height={600} className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-zinc-600 capitalize">{p.category}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
