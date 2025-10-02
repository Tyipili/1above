"use client";
import { useEffect, useState } from "react";

export default function AgeGateModal(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    if (typeof window === "undefined") return;
    const ok = document.cookie.split("; ").find(c=>c.startsWith("age_verified="));
    if (!ok) setShow(true);
  },[]);
  function verify(){
    const d = new Date();
    d.setDate(d.getDate() + 1);
    document.cookie = `age_verified=true; expires=${d.toUTCString()}; path=/`;
    setShow(false);
  }
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl p-6 text-center">
        <h2 className="text-3xl font-extrabold">1 ABOVE</h2>
        <p className="mt-6 text-lg">We need to see some ID.</p>
        <div className="mt-6 grid gap-3">
          <button className="btn btn-ghost" onClick={()=>location.href="https://www.canada.ca/en/health-canada.html"}>I am under 19</button>
          <button className="btn btn-primary" onClick={verify}>I am 19+</button>
        </div>
        <div className="mt-6 text-xs text-zinc-500">© 2025 1 Above</div>
      </div>
    </div>
  );
}
