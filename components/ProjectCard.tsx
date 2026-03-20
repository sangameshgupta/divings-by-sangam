import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:ring-1 hover:ring-primary/20"
    >
      {/* Image Area */}
      <div className="aspect-video w-full bg-surface-container-highest relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : null}
        <div className="absolute inset-0 monolith-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
        {/* Category Tag */}
        <div className="absolute top-6 left-6 z-10">
          <span className="font-label text-[10px] tracking-[0.2em] uppercase bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-sm border border-outline-variant/20 text-on-surface">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-on-surface/60 text-lg leading-relaxed mb-10 font-body">
          {project.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-label text-xs tracking-[0.2em] uppercase text-primary font-bold">
            View Project
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </span>
          <div className="flex items-center gap-3">
            {project.icons.map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-on-surface/30 text-lg"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
