import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-2 text-slate-400">A quick snapshot of who I am and how I work.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-medium">Background</h3>
            <p className="mt-3 text-slate-300">
              I’m a frontend-focused developer with an eye for detail and passion for creating
              intuitive interfaces. I love building products that feel fast, accessible, and
              delightful to use.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-medium">What I Value</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <li>Clean, maintainable code</li>
              <li>Thoughtful motion and micro-interactions</li>
              <li>Accessible, inclusive design</li>
              <li>Continuous learning and iteration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
