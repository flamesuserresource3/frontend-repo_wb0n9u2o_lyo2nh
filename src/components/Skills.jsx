import React from 'react';
import { Code, Layers } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
  },
  {
    title: 'UI/UX',
    icon: Layers,
    items: ['Design Systems', 'Accessibility', 'Framer Motion', 'Prototyping'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
          <p className="mt-2 text-slate-400">Tools and technologies I use to craft great experiences.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition hover:border-emerald-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-emerald-500/15 p-2 text-emerald-400 ring-1 ring-emerald-400/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
