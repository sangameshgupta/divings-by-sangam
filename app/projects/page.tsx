import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of focused experiments in automation, visualization, and developer experience.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      {/* ─── Editorial Header ─── */}
      <section className="mb-24 pt-16">
        <span className="animate-fade-up stagger-1 font-label text-secondary uppercase tracking-[0.2em] text-[11px] mb-4 block">
          Selected Works
        </span>
        <h1 className="animate-fade-up stagger-2 text-5xl md:text-7xl font-black tracking-[-0.04em] font-headline mb-8 text-on-surface max-w-4xl">
          The Architectural{" "}
          <span className="text-primary">Monolith</span> of Digital Tools.
        </h1>
        <p className="animate-fade-up stagger-3 text-on-surface/60 text-lg md:text-xl leading-relaxed max-w-2xl font-body">
          A collection of focused experiments in automation, visualization, and
          developer experience. Each project is a carving of intent into the
          obsidian void.
        </p>
      </section>

      {/* ─── Featured Project ─── */}
      {projects.filter((p) => p.featured).map((project) => (
        <div key={project.slug} className="animate-fade-up stagger-4 mb-12">
          <ProjectCard project={project} featured />
        </div>
      ))}

      {/* ─── Projects Grid ─── */}
      <div className="animate-fade-up stagger-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.filter((p) => !p.featured).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* ─── CTA Footer ─── */}
      <section className="mt-40 border-t border-outline-variant/10 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h4 className="text-3xl font-bold font-headline mb-2 text-on-surface">
              Have a project in mind?
            </h4>
            <p className="text-on-surface/50 font-body">
              Let&apos;s build something technically profound.
            </p>
          </div>
          <Link
            href="/collaborate"
            className="bg-primary-container text-on-primary-container font-label uppercase tracking-[0.2em] text-xs font-bold py-4 px-10 rounded-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/10"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
