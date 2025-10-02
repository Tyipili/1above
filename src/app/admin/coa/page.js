"use client";
import { requireAuth } from "@/lib/auth";
import { useState } from "react";
import { addCOA, listCOA, importCOACsv } from "@/lib/coa";

export default function AdminCOA(){
  requireAuth();
  const [lotNumber, setLot] = useState("");
  const [productName, setProductName] = useState("");
  const [labName, setLab] = useState("");
  const [testDate, setTest] = useState("");
  const [pdfUrl, setPdf] = useState("");
  const [rows, setRows] = useState(listCOA());
  function add(e){
    e.preventDefault();
    addCOA({ lotNumber, productName, labName, testDate, pdfUrl });
    setRows(listCOA());
  }
  async function onCsv(e){
    const file = e.target.files?.[0];
    if (!file) return;
    const { imported } = await importCOACsv(file);
    setRows(listCOA());
    alert(`Imported ${imported} rows`);
  }
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">COAs</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <form onSubmit={add} className="card p-6 grid gap-3">
          <div>
            <label className="label">Lot Number</label>
            <input className="input" value={lotNumber} onChange={e=>setLot(e.target.value)} />
          </div>
          <div>
            <label className="label">Product Name</label>
            <input className="input" value={productName} onChange={e=>setProductName(e.target.value)} />
          </div>
          <div>
            <label className="label">Lab Name</label>
            <input className="input" value={labName} onChange={e=>setLab(e.target.value)} />
          </div>
          <div>
            <label className="label">Test Date</label>
            <input className="input" value={testDate} onChange={e=>setTest(e.target.value)} placeholder="YYYY-MM-DD" />
          </div>
          <div>
            <label className="label">PDF URL</label>
            <input className="input" value={pdfUrl} onChange={e=>setPdf(e.target.value)} placeholder="/uploads/coa.pdf or https://..." />
          </div>
          <button className="btn btn-primary w-fit mt-2">Add COA</button>
        </form>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Bulk Import</h2>
            <a className="text-sm underline" href="#">CSV headers: lotNumber,productName,labName,testDate,pdfUrl</a>
          </div>
          <input type="file" accept=".csv" className="mt-4" onChange={onCsv} />
          <h2 className="text-xl font-semibold mt-8">Existing</h2>
          <div className="mt-3 grid gap-2 max-h-80 overflow-auto">
            {rows.map(r=> (
              <div key={r.id} className="border rounded-lg p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{r.lotNumber}</div>
                  <div className="text-xs text-zinc-600">{r.productName}</div>
                </div>
                <a href={r.pdfUrl} className="text-sm underline" target="_blank">PDF</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
