import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A responsive analytics dashboard with dynamic charts, dark mode, and real-time data.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1551281044-8b59a0a6f0b0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, animated personal portfolio with a 3D hero section.',
    tags: ['Vite', 'Spline', 'Framer Motion'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'E-commerce UI Kit',
    description: 'Reusable components for storefronts including product cards and carts.',
    tags: ['Design System', 'React', 'Storybook'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 text-slate-400">A selection of recent work and experiments.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-emerald-400/40"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs text-slate-100 ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    View <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300 ring-1 ring-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
