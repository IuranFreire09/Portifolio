"use client";

// Link permite navegar sem recarregar a página inteira.
import Link from "next/link";

// usePathname informa qual endereço está aberto no momento.
import { usePathname } from "next/navigation";

// "as const" faz o TypeScript entender que só existem "pt" e "en".
const languages = ["pt", "en"] as const;

type LanguageSwitcherProps = {
  label: string;
};

export function LanguageSwitcher({ label }: LanguageSwitcherProps) {
  // Exemplo de valor: "/pt" ou "/en".
  const pathname = usePathname();

  // Separa o endereço pelas barras e obtém o idioma.
  // "/pt".split("/") resulta em ["", "pt"].
  const currentLanguage = pathname.split("/")[1];

  return (
    <div
      aria-label={label}
      className="flex items-center rounded-full border border-white/10 p-1"
    >
      {/* Cria um botão para cada idioma da lista */}
      {languages.map((language) => {
        // Verifica se este é o idioma atualmente selecionado.
        const isActive = currentLanguage === language;

        return (
          <Link
            key={language}
            href={`/${language}`}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
              // Altera as cores do botão ativo.
              isActive
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {language}
          </Link>
        );
      })}
    </div>
  );
}
