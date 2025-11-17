import { SurroundSound, Waves, PanelTopOpen, Headphones, SlidersHorizontal } from "lucide-react";

const items = [
  { icon: SurroundSound, title: "Dolby Atmos Mixing", desc: "Theatrical, home entertainment, and streaming deliverables with precision translation across playback systems." },
  { icon: Headphones, title: "Binaural & Spatial", desc: "Head‑tracked spatial audio and binaural rendering for AR/VR and mobile platforms." },
  { icon: PanelTopOpen, title: "Studio Design", desc: "Room modeling, loudspeaker layout, and calibration for immersive production and post." },
  { icon: SlidersHorizontal, title: "Restoration & Mastering", desc: "Dialogue editing, noise reduction, and immersive masters for distribution." },
  { icon: Waves, title: "Sound R&D", desc: "Perceptual studies, rendering pipelines, and authoring tools for 3D audio." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Capabilities</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">High‑end post production with a research‑driven approach. Our pipeline unites creative storytelling and rigorous engineering.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 hover:border-emerald-400/30 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/70 ring-1 ring-white/10 group-hover:ring-emerald-400/40">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
