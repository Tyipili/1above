'use client';
import { requireAuth } from "@/lib/auth";

export default function Assets(){
  requireAuth();
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Assets</h1>
      <p className="mt-2 text-zinc-600">Use external image URLs or place files under /public/uploads and paste their paths in products or COAs.</p>
    </div>
  );
}
