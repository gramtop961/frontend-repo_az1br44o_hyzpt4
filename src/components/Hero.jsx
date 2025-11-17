import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 text-zinc-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs tracking-widest text-emerald-200/90 uppercase">
            Dolby Atmos • Immersive Cinema • Spatial Audio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Precision sound for a three‑dimensional world.
          </h1>
          <p className="mt-6 text-zinc-300/90 text-lg">
            We design, mix, and research immersive audio experiences for film, streaming, games, and next‑gen venues — engineered for Atmos and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-black px-6 py-3 text-sm font-semibold transition-colors">Start a project</a>
            <a href="#research" className="rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm text-zinc-100">Explore research</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
