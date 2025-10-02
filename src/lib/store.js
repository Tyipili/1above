// Simple localStorage backed store. Works in the browser for class demos.
export const store = {
  get(key, fallback){
    if (typeof window === "undefined") return fallback;
    try{ return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }catch{ return fallback }
  },
  set(key, value){
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  }
};
