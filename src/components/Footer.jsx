export default function Footer(){
  return (
    <footer id="contact" className="relative bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-zinc-200 font-medium">Atmos Lab</h4>
            <p className="mt-2 text-sm">Immersive audio for cinema, streaming, and interactive mediums.</p>
          </div>
          <div>
            <h4 className="text-zinc-200 font-medium">Contact</h4>
            <p className="mt-2 text-sm">hello@atmoslab.studio</p>
            <p className="text-sm">+1 (000) 000‑0000</p>
          </div>
          <div>
            <h4 className="text-zinc-200 font-medium">Visit</h4>
            <p className="mt-2 text-sm">By appointment • Los Angeles, CA</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Atmos Lab. All rights reserved.</div>
      </div>
    </footer>
  )
}
