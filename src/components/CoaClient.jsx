'use client';
import { useState } from "react";
import { searchCOA } from "@/lib/coa";

export default function CoaClient(){
const [lot, setLot] = useState("");
const [results, setResults] = useState([]);
function onSearch(e){
e.preventDefault();
setResults(searchCOA(lot));
}
return (
<div className="container py-12">
<h1 className="text-3xl font-bold">Find Your COA</h1>
<form onSubmit={onSearch} className="mt-6 max-w-xl">
<label className="label">Lot Number</label>
<input value={lot} onChange={(e)=>setLot(e.target.value)} placeholder="Enter lot number" className="input"/>
<button className="btn btn-primary mt-4">Search</button>
</form>
<div className="mt-8 grid gap-4">
{results.length === 0 ? <p className="text-zinc-600">No results yet.</p> : null}
{results.map(r=> (
<div key={r.id} className="card p-4">
<div className="font-semibold">Lot {r.lotNumber}</div>
<div className="text-sm text-zinc-600">{r.productName}</div>
<div className="text-sm text-zinc-600">Lab: {r.labName} • Test date: {r.testDate}</div>
<a href={r.pdfUrl} target="_blank" rel="noopener" className="btn btn-ghost mt-3">Open PDF</a>
</div>
))}
</div>
</div>
);
}
