import { motion } from 'framer-motion';

const topics = [
  {
    tag: 'Spatial Psychoacoustics',
    title: 'Localization and Externalization in Binaural Rendering',
    summary: 'Investigating HRTF individualization, head tracking latency, and spectral cues for accurate elevation and externalization.'
  },
  {
    tag: 'Immersive Mixing',
    title: 'Dialogue Intelligibility in Object‑Based Workflows',
    summary: 'Measuring the trade‑offs between upmixing, bed/object allocation, and dynamic metadata for theatrical mixes.'
  },
  {
    tag: 'Rendering Pipelines',
    title: 'Hybrid Channel/Object Authoring for Atmos and MPEG‑H',
    summary: 'Tooling and best practices for transparent fold‑downs across cinema, home, and headphones.'
  },
  {
    tag: 'Perception',
    title: 'Perceptual Metrics for Spatial Density',
    summary: 'Defining mix metrics that correlate with envelopment, spaciousness, and listener preference.'
  }
];

export default function Research() {
  return (
    <section id="research" className="relative bg-zinc-980 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <header className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Research</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">We publish, prototype, and collaborate with universities and studios to advance spatial audio. Selected topics:</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm"
            >
              <span className="text-xs tracking-widest uppercase text-emerald-300/90">{t.tag}</span>
              <h3 className="mt-2 text-lg font-medium">{t.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{t.summary}</p>
              <div className="mt-4">
                <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Collaborate →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
