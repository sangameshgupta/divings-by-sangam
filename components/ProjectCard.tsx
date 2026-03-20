import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Wrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group relative flex ${featured ? "flex-col md:flex-row" : "flex-col"} bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:ring-1 hover:ring-primary/20`}
    >
      {/* Image Area */}
      <div className={`${featured ? "md:w-1/2 aspect-auto min-h-[300px]" : "aspect-video w-full"} bg-surface-container-highest relative overflow-hidden`}>
        {project.image ? (
          project.image.startsWith("/") && !featured ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={80}
                height={80}
                className="drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className={`${featured && project.image.startsWith("/") ? "object-contain p-4" : "object-cover mix-blend-overlay"} grayscale group-hover:grayscale-0 transition-all duration-500`}
            />
          )
        ) : null}
        <div className="absolute inset-0 monolith-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
        {/* Category Tag */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2">
            {featured && (
              <span className="font-label text-[10px] tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-md px-3 py-1 rounded-sm text-on-primary">
                Featured
              </span>
            )}
            <span className="font-label text-[10px] tracking-[0.2em] uppercase bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-sm border border-outline-variant/20 text-on-surface">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${featured ? "md:w-1/2 p-10 md:p-14" : "p-8 md:p-10"} flex flex-col flex-grow`}>
        <h3 className={`${featured ? "text-4xl md:text-5xl" : "text-3xl"} font-bold font-headline mb-4 group-hover:text-primary transition-colors`}>
          {project.title}
        </h3>
        <p className={`text-on-surface/60 ${featured ? "text-xl" : "text-lg"} leading-relaxed mb-10 font-body`}>
          {project.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-label text-xs tracking-[0.2em] uppercase text-primary font-bold">
            {project.cta || "View Project"}
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
