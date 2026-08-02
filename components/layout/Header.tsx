// Importa o seletor de idiomas.
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { pt } from "@/dictionaries/pt";

type HeaderProps = {
  content: typeof pt.header;
};

export function Header({ content }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav
        aria-label={content.navigationLabel}
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
      >
        {/* Identidade do portfólio */}
        <a href="#inicio" className="flex items-center gap-3 font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
            IF
          </span>

          <span className="hidden sm:inline">Iuran Freire</span>
        </a>

        {/* Links principais — ocultos em telas pequenas */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#sobre"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {content.about}
          </a>

          <a
            href="#habilidades"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {content.skills}
          </a>

          <a
            href="#projetos"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {content.projects}
          </a>
        </div>

        {/* Ações localizadas no lado direito do cabeçalho */}
        <div className="flex items-center gap-3">
          {/* Envia a descrição traduzida para o seletor */}
          <LanguageSwitcher label={content.languageLabel} />

          <a
            href="#contato"
            className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400 sm:inline-block"
          >
            {content.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
