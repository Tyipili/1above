import Papa from "papaparse";
export function parseCsv(file){
  return new Promise((resolve, reject)=>{
    Papa.parse(file, { header: true, skipEmptyLines: true, complete: (r)=>resolve(r.data), error: reject });
  });
}
