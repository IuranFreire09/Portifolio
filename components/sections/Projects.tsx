// Importa os dados técnicos dos projetos.
import { projects } from "@/data/projects";
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";

type ProjectsProps = {
  content: typeof pt.projects;
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section
      id="projetos"
      className="border-t border-white/10 bg-slate-900/50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {content.introduction}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {content.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            // Usa a chave do projeto para encontrar sua tradução.
            const projectContent = content.items[project.key];

            return (
              <Reveal
                key={project.id}
                delay={index * 0.1}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 transition hover:-translate-y-1 hover:border-cyan-400/50">
                  {/* Área que receberá uma imagem futuramente */}
                  <div className="flex aspect-video items-end bg-gradient-to-br from-cyan-400/20 via-slate-900 to-slate-950 p-6">
                    <div>
                      <p className="text-sm text-cyan-400">
                        Project {String(project.id).padStart(2, "0")}
                      </p>

                      <p className="mt-2 text-xl font-semibold">
                        {projectContent.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-medium text-cyan-400">
                      {projectContent.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold transition group-hover:text-cyan-400">
                      {projectContent.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {projectContent.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
