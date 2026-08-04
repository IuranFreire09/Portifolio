// Importa a lista de tecnologias.
import { skills } from "@/data/skills";
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";
import { LogoLoop } from "@/components/react-bits/LogoLoop";
import { SkillFlipCard } from "@/components/technologies/SkillFlipCard";

type SkillsProps = {
  content: typeof pt.skills;
};

export function Skills({ content }: SkillsProps) {
  return (
    <section id="habilidades" className="px-5 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {content.introduction}
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-[1.9rem] font-bold leading-tight tracking-tight sm:text-5xl">
            {content.title}
          </h2>

          <p className="max-w-md text-slate-400">{content.description}</p>
        </div>

        {/* Faixa contínua com as tecnologias já cadastradas em data/skills.ts */}
        <div className="mt-12">
          <LogoLoop
            items={skills.map((skill) => skill.name)}
            duration={30}
            ariaLabel={content.description}
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {/* 
  index representa a posição de cada cartão.
  Ele permite aumentar levemente o atraso de cada animação.
*/}
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.08}>
              <SkillFlipCard
                name={skill.name}
                category={content.categories[skill.category]}
              />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
