import Image from "next/image";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  buttonLabel: string;
  className?: string;
};

export function ProjectCard({
  number,
  title,
  category,
  description,
  highlight,
  technologies,
  image,
  projectUrl,
  buttonLabel,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} ${className}`}
      tabIndex={0}
      aria-label={`${title}: ${description}`}
    >
      {/* Agora existe apenas uma face: os detalhes aparecem suavemente. */}
      <div className={styles.surface}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            // O Vinext serve estes arquivos locais diretamente.
            // Isso evita passar pelo otimizador de imagens do Next.
            unoptimized
            sizes="(max-width: 640px) 100vw, 864px"
            className={styles.image}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true" />
        )}

        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.labels}>
              <p className={styles.number}>{number}</p>
              <p className={styles.category}>{category}</p>
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.highlight}>{highlight}</p>
          </div>

          <div className={styles.details}>
            <p className={styles.description}>{description}</p>

            <ul className={styles.technologies}>
              {technologies.map((technology) => (
                <li key={technology} className={styles.technology}>
                  {technology}
                </li>
              ))}
            </ul>

            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {buttonLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
