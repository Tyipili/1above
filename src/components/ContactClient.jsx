'use client';
import { useState } from "react";

export default function ContactClient(){
const [state, setState] = useState({ name: "", email: "", message: "" });
const [sent, setSent] = useState(false);
async function submit(e){
e.preventDefault();
try{
await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(state) });
setSent(true);
setState({ name:"", email:"", message:"" });
}catch{}
}
return (
<div className="container py-12 max-w-2xl">
<h1 className="text-3xl font-bold">Contact</h1>
{sent ? <div className="mt-4 rounded-xl bg-green-50 p-4">Thanks. We received your message.</div> : null}
<form onSubmit={submit} className="mt-6 grid gap-4">
<div>
<label className="label">Name</label>
<input className="input" value={state.name} onChange={e=>setState(s=>({...s, name:e.target.value}))} />
</div>
<div>
<label className="label">Email</label>
<input className="input" type="email" value={state.email} onChange={e=>setState(s=>({...s, email:e.target.value}))} />
</div>
<div>
<label className="label">Message</label>
<textarea className="input h-32" value={state.message} onChange={e=>setState(s=>({...s, message:e.target.value}))} />
</div>
<button className="btn btn-primary w-fit">Send</button>
</form>
</div>
);
}
