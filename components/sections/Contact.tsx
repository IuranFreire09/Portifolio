// Importa o formato dos textos traduzidos.
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";

type ContactProps = {
  content: typeof pt.contact;
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-5 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {content.introduction}
              </p>

              <h2 className="mt-4 text-[1.9rem] font-bold leading-tight tracking-tight sm:text-5xl">
                {content.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                {content.description}
              </p>
            </div>

            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:Iuranhumberto99@gmail.com"
                    className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/50 sm:p-5"
                  >
                    <span>
                      <span className="block text-sm text-slate-500">
                        {content.email}
                      </span>

                      <span className="mt-1 block break-all text-sm font-medium text-slate-200 sm:text-base">
                        Iuranhumberto99@gmail.com
                      </span>
                    </span>

                    <span aria-hidden="true" className="text-cyan-400">
                      →
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/iuran-freire-a23092204"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/50 sm:p-5"
                  >
                    <span>
                      <span className="block text-sm text-slate-500">
                        {content.linkedin}
                      </span>

                      <span className="mt-1 block font-medium text-slate-200">
                        Iuran Freire
                      </span>
                    </span>

                    <span aria-hidden="true" className="text-cyan-400">
                      ↗
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+5592985923140"
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/50 sm:p-5"
                  >
                    <span>
                      <span className="block text-sm text-slate-500">
                        {content.phone}
                      </span>

                      <span className="mt-1 block font-medium text-slate-200">
                        (92) 98592-3140
                      </span>
                    </span>

                    <span aria-hidden="true" className="text-cyan-400">
                      →
                    </span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
