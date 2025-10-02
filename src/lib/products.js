import { store } from "./store";

let seeded = false;
function ensureSeed(){
  if (seeded) return;
  if (typeof window !== "undefined"){ seeded = true; }
}

export function listProducts(){
  ensureSeed();
  const rows = store.get("products", [
    { id: "p1", slug:"elevate-vape", name:"Elevate Vape", category:"vape", description:"Balanced flavour-forward vape.", thcMin:80, thcMax:90, cbdMin:0, cbdMax:2, imageUrl:"/placeholders/product-placeholder.jpg" },
    { id: "p2", slug:"peak-concentrate", name:"Peak Concentrate", category:"concentrate", description:"Potent concentrate for enthusiasts.", thcMin:70, thcMax:85, cbdMin:0, cbdMax:1, imageUrl:"/placeholders/product-placeholder.jpg" },
    { id: "p3", slug:"rise-preroll", name:"Rise Pre-rolls", category:"preroll", description:"Convenient and consistent pre-rolls.", thcMin:20, thcMax:28, cbdMin:0, cbdMax:1, imageUrl:"/placeholders/product-placeholder.jpg" }
  ]);
  return rows;
}

export function getProductBySlug(slug){
  return listProducts().find(p=>p.slug===slug);
}

export function addProduct(p){
  const rows = listProducts();
  const id = `p${Date.now()}`;
  rows.push({ id, ...p });
  store.set("products", rows);
}
