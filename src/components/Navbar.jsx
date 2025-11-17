import { Menu, X, Waves, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Studios", href: "#studios" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Research", href: "#research" },
    { label: "Work", href: "#work" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <a href="#home" className="flex items-center gap-2 text-zinc-100">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10">
              <Waves className="h-5 w-5 text-emerald-300" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-200">Atmos Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-100 hover:border-emerald-400/40 hover:text-white transition"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/70 md:hidden">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-zinc-100 hover:border-emerald-400/40"
              >
                Start a project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
