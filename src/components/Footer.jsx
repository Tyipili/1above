export default function Footer(){
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div>ALL RIGHTS RESERVED</div>
          <div>COPYRIGHT © 2025 1 ABOVE</div>
        </div>
        <div className="flex items-center gap-4">
          <a aria-label="Instagram" href="https://www.instagram.com/1abovecanada" target="_blank" rel="noopener" className="hover:opacity-70">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 9zm5.5-2.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>
          </a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
