// Identificadores internos dos projetos.
// Eles conectam os dados técnicos às traduções.
export type ProjectKey =
  | "qualitySystem"
  | "inventoryDashboard"
  | "productionDashboard";

export type Project = {
  id: number;
  key: ProjectKey;
  technologies: string[];
  featured: boolean;
  image?: string;
  projectUrl?: string;
};

// Aqui permanecem apenas informações que não precisam de tradução.
export const projects: Project[] = [
  {
    id: 1,
    key: "qualitySystem",
    technologies: [
      "Vue 3",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Pinia",
    ],
    featured: true,
  },
  {
    id: 2,
    key: "inventoryDashboard",
    technologies: ["Power BI", "Excel", "Power Query"],
    featured: false,
    image: "/projects/dashboard-estoque.png",
    projectUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMzI5MGEzMDYtNTI4My00NDRjLWFhYTMtZGZjNDc0NjIzMGI2IiwidCI6IjE5NjNjNWNlLWZjYjUtNDE0Zi1hNWJlLTM4MjM3NTgwMjg0YSIsImMiOjN9",
  },
  {
    id: 3,
    key: "productionDashboard",
    technologies: ["Power BI", "Excel", "DAX"],
    featured: false,
    image: "/projects/dashboard-performance-producao.png",
    projectUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiY2EyZjllM2QtNDE5Yi00NDhiLTk3MzMtZTI1YjA1ZThmMTVjIiwidCI6IjE5NjNjNWNlLWZjYjUtNDE0Zi1hNWJlLTM4MjM3NTgwMjg0YSIsImMiOjN9",
  },
];
