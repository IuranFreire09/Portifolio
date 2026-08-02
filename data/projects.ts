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
  },
  {
    id: 3,
    key: "productionDashboard",
    technologies: ["Power BI", "Excel", "DAX"],
    featured: false,
  },
];