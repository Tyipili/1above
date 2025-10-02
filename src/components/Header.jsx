"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight">1 ABOVE</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/products">Products</Link>
          <Link href="/products/vapes">Vapes</Link>
          <Link href="/products/concentrates">Concentrates</Link>
          <Link href="/products/pre-rolls">Pre-rolls</Link>
          <Link href="/stockists">Stockists</Link>
          <Link href="/coa" className="font-semibold">Find your COA</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 grid gap-2">
            {[
              ["/products","Products"],
              ["/products/vapes","Vapes"],
              ["/products/concentrates","Concentrates"],
              ["/products/pre-rolls","Pre-rolls"],
              ["/stockists","Stockists"],
              ["/coa","Find your COA"],
              ["/contact","Contact"],
            ].map(([href,label])=> <Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}
