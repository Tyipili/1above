'use client';
import { useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login(){
  const r = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  function submit(e){
    e.preventDefault();
    const ok = login(email, password);
    if (ok){ r.replace("/admin/dashboard"); } else { setErr("Invalid credentials"); }
  }
  return (
    <div className="container py-16 max-w-md">
      <h1 className="text-3xl font-bold">Admin Login</h1>
      {err ? <div className="mt-3 text-red-600">{err}</div> : null}
      <form onSubmit={submit} className="mt-6 grid gap-4">
        <div>
          <label className="label">Email</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-fit">Login</button>
      </form>
    </div>
  );
}
