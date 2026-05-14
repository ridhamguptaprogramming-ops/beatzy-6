'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(40%_40%_at_10%_10%,rgba(0,255,255,0.18),transparent_50%)]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-cyan-200/80">Feel The Future Of Music</p>
            <h1 className="mt-2 text-5xl font-semibold leading-tight">
              Beatzy
              <span className="text-cyan-300"> AI Meets Music</span>
            </h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Create your sound. Stream, generate, sell beats, and build communities—powered by AI.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:block rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-glow"
          >
            <p className="text-sm text-white/60">MVP preview</p>
            <div className="mt-2 h-3 w-44 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-2/3 bg-cyan-400/60 animate-[shimmer_2s_infinite_linear]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Stream', desc: 'Trending, playlists, likes, comments.' },
            { title: 'Create AI', desc: 'Generate beats, vocals, artwork.' },
            { title: 'Sell Beats', desc: 'Licensing + instant payouts.' }
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

