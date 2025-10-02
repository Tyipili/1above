'use client';
import { store } from "./store";

const seed = { email: "istvan.szekely@gmail.com", password: "@Tyipu813@" };

export function login(email, password){
  if (email === seed.email && password === seed.password){
    sessionStorage.setItem("admin_session", "1");
    return true;
  }
  return false;
}

export function requireAuth(){
  if (typeof window === "undefined") return;
  const ok = sessionStorage.getItem("admin_session") === "1";
  if (!ok) window.location.href = "/admin";
}
