// Importa o formato dos textos da seção.
import type { pt } from "@/dictionaries/pt";
import { Reveal } from "@/components/animations/Reveal";
import styles from "./About.module.css";

// Define as propriedades obrigatórias do componente.
type AboutProps = {
  content: typeof pt.about;
};

export function About({ content }: AboutProps) {
  return (
    <section
      id="sobre"
      className={styles.section}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <Reveal className={styles.introduction}>
          <div>
          {/* Texto recebido do dicionário atual */}
          <p className={styles.eyebrow}>
            {content.introduction}
          </p>

          <h2 className={styles.title}>
            {content.title}
          </h2>
          </div>

          {/* Painel abstrato que representa tecnologia conectando áreas. */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.orbit} />
            <span className={`${styles.node} ${styles.nodeOne}`} />
            <span className={`${styles.node} ${styles.nodeTwo}`} />
            <span className={`${styles.node} ${styles.nodeThree}`} />
            <strong className={styles.initials}>IF</strong>
          </div>
        </Reveal>

        <Reveal className={styles.story} delay={0.12}>
          <p className={styles.lead}>
            {content.firstParagraph}
          </p>

          <p className={styles.paragraph}>
            {content.secondParagraph}
          </p>

          <div className={styles.cards}>
            {/* Cria os três cartões a partir do dicionário */}
            {content.cards.map((card, index) => (
              <article
                key={card.title}
                className={styles.card}
              >
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong className={styles.cardTitle}>{card.title}</strong>

                <p className={styles.cardDescription}>
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
