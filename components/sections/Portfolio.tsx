import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Featured work"
      description="Most of my production work lives in private repositories under NDA. Below a snap of the open-source projects I have developed."
      className="bg-[var(--color-bg-elevated)]"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/portfolio-page"
          prefetch={false}
          className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
        >
          View all projects &rarr;
        </Link>
      </div>
    </Section>
  );
}
