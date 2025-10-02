"use client";
import { requireAuth } from "@/lib/auth";
import { listProducts, addProduct } from "@/lib/products";
import { useState } from "react";

export default function AdminProducts(){
  requireAuth();
  const [rows, setRows] = useState(listProducts());
  const [form, setForm] = useState({ name:"", slug:"", category:"vape", description:"", thcMin:"", thcMax:"", cbdMin:"", cbdMax:"", imageUrl:"/placeholders/product-placeholder.jpg"});
  function submit(e){
    e.preventDefault();
    addProduct({ ...form, thcMin:Number(form.thcMin||0), thcMax:Number(form.thcMax||0), cbdMin:Number(form.cbdMin||0), cbdMax:Number(form.cbdMax||0) });
    setRows(listProducts());
  }
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Products</h1>
      <form onSubmit={submit} className="card p-6 grid sm:grid-cols-2 gap-4 mt-6">
        {Object.entries({ name:"Name", slug:"Slug", category:"Category", description:"Description", thcMin:"THC Min", thcMax:"THC Max", cbdMin:"CBD Min", cbdMax:"CBD Max", imageUrl:"Image URL" }).map(([k,label])=> (
          <div key={k} className={k==="description"?"sm:col-span-2":""}>
            <label className="label">{label}</label>
            {k==="category" ? (
              <select className="input" value={form[k]} onChange={e=>setForm(s=>({...s,[k]:e.target.value}))}>
                <option value="vape">vape</option>
                <option value="concentrate">concentrate</option>
                <option value="preroll">preroll</option>
              </select>
            ) : (
              k==="description" ? (
                <textarea className="input h-24" value={form[k]} onChange={e=>setForm(s=>({...s,[k]:e.target.value}))} />
              ) : (
                <input className="input" value={form[k]} onChange={e=>setForm(s=>({...s,[k]:e.target.value}))} />
              )
            )}
          </div>
        ))}
        <button className="btn btn-primary w-fit">Add Product</button>
      </form>
      <div className="grid mt-8 gap-3">
        {rows.map(r=> (<div key={r.id} className="card p-4 flex items-center justify-between"><div><div className="font-medium">{r.name}</div><div className="text-xs text-zinc-600">{r.category} • /product/{r.slug}</div></div><a href={`/product/${r.slug}`} className="text-sm underline">View</a></div>))}
      </div>
    </div>
  );
}
