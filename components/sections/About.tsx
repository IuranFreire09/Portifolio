// Importa o formato dos textos da seção.
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";

// Define as propriedades obrigatórias do componente.
type AboutProps = {
  content: typeof pt.about;
};

export function About({ content }: AboutProps) {
  return (
    <section
      id="sobre"
      className="border-t border-white/10 bg-slate-900/50 px-6 py-24"
    >
      <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          {/* Texto recebido do dicionário atual */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {content.introduction}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-300">
            {content.firstParagraph}
          </p>

          <p className="mt-6 leading-7 text-slate-400">
            {content.secondParagraph}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {/* Cria os três cartões a partir do dicionário */}
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5"
              >
                <strong className="text-cyan-400">{card.title}</strong>

                <p className="mt-2 text-sm text-slate-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}