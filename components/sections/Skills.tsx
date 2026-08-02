// Importa a lista de tecnologias.
import { skills } from "@/data/skills";
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";

type SkillsProps = {
  content: typeof pt.skills;
};

export function Skills({ content }: SkillsProps) {
  return (
    <section id="habilidades" className="px-6 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {content.introduction}
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h2>

          <p className="max-w-md text-slate-400">{content.description}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* 
  index representa a posição de cada cartão.
  Ele permite aumentar levemente o atraso de cada animação.
*/}
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50">
                <p className="text-sm text-cyan-400">
                  {content.categories[skill.category]}
                </p>

                <h3 className="mt-3 text-xl font-semibold transition group-hover:text-cyan-400">
                  {skill.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
