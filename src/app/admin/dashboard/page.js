"use client";
import Link from "next/link";
import { requireAuth } from "@/lib/auth";

export default function Dashboard(){
  requireAuth();
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Admin</h1>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Link href="/admin/products" className="card p-6 hover:shadow">Products</Link>
        <Link href="/admin/coa" className="card p-6 hover:shadow">COAs</Link>
        <Link href="/admin/assets" className="card p-6 hover:shadow">Assets</Link>
      </div>
    </div>
  );
}
