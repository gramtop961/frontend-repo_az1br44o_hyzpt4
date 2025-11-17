import { MonitorSpeaker, LayoutGrid, Cable, Ruler, Settings } from "lucide-react";

export default function Studios() {
  const specs = [
    { icon: MonitorSpeaker, label: '7.1.4 Mix Room', value: 'Cinema-calibrated, Meyer Sound' },
    { icon: LayoutGrid, label: 'Layouts', value: '9.1.6, 7.1.4, 5.1.4, 2.0 reference' },
    { icon: Cable, label: 'I/O & Routing', value: 'MADI/AVB, 128ch bed/object' },
    { icon: Ruler, label: 'Calibration', value: 'REW + SPQ, ITU-R BS.2051' },
    { icon: Settings, label: 'Workstations', value: 'Pro Tools, Nuendo, Reaper' },
  ];

  return (
    <section id="studios" className="relative bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Studios</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">Purpose‑built rooms designed for repeatable translation from cinema to headphones.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/60 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">{label}</p>
                <p className="text-base text-zinc-100">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
