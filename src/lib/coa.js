import { store } from "./store";
import { parseCsv } from "./csv";

export function listCOA(){
  return store.get("coas", []);
}

export function addCOA(row){
  const cur = listCOA();
  const id = `c${Date.now()}`;
  cur.push({ id, ...row });
  store.set("coas", cur);
}

export function searchCOA(lot){
  const q = (lot || "").trim().toLowerCase();
  return listCOA().filter(r => r.lotNumber?.toLowerCase().includes(q));
}

export async function importCOACsv(file){
  const rows = await parseCsv(file);
  let imported = 0;
  rows.forEach(r=>{ if (r.lotNumber){ addCOA(r); imported++; } });
  return { imported };
}
