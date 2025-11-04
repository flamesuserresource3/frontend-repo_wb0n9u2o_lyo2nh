import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/15 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to Opportunities
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          A modern frontend developer crafting clean, responsive, and delightful digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-slate-200 transition hover:text-white hover:ring-1 hover:ring-white/20"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-slate-200 transition hover:text-white hover:ring-1 hover:ring-white/20"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
