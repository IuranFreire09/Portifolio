// Componentes reutilizáveis responsáveis pelas animações.
import { AnimatedLink } from "@/components/animations/AnimatedLink";
import { FadeIn } from "@/components/animations/FadeIn";
import DotField from "@/components/react-bits/DotField";
import { GradientText } from "@/components/react-bits/GradientText";
import { SpecularLink } from "@/components/react-bits/SpecularLink";

import type { pt } from "@/dictionaries/pt";

type HeroProps = {
  content: typeof pt.hero;
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* O contêiner ocupa toda a área do Hero */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={67}
          glowRadius={160}
        />
      </div>

      {/* Mantém o conteúdo acima do fundo animado */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        {/* Cada FadeIn controla o momento de entrada do elemento */}
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {content.introduction}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {content.firstName}{" "}
            <GradientText animationSpeed={7}>
              {content.lastName}
            </GradientText>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="mt-6 text-2xl font-medium text-slate-300 sm:text-3xl">
            {content.role}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {content.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10 flex flex-wrap gap-4">
          <SpecularLink
            href="#projetos"
            className="px-6 py-3 font-semibold"
          >
            {content.projectsButton}
          </SpecularLink>

          <AnimatedLink
            href="#contato"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            {content.contactButton}
          </AnimatedLink>
        </FadeIn>
      </div>
    </section>
  );
}
