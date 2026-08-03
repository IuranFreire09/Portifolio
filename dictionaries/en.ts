import type { pt } from "./pt";

export const en: typeof pt = {
  // Textos do cabeçalho em inglês
  header: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    navigationLabel: "Main navigation",
    languageLabel: "Select language",
  },

  hero: {
    introduction: "Hello, I am",
    firstName: "Iuran",
    lastName: "Freire",
    role: "Developer and Data Analyst",
    description:
      "I transform data and industrial needs into clear, efficient digital solutions that support decision-making.",
    projectsButton: "View projects",
    contactButton: "Get in touch",
  },

  about: {
    introduction: "About me",
    title: "Technology connected to the industrial environment",
    firstParagraph:
      "I am a Systems Analysis and Development student with a technical background in Industrial Automation and an interest in data analysis, Business Intelligence, and process improvement.",
    secondParagraph:
      "I develop dashboards and digital solutions using Power BI, Excel, and web technologies. My goal is to transform operational information into clear analysis that supports decisions and increases process efficiency.",

    cards: [
      {
        title: "Education",
        description: "Systems Development and Industrial Automation",
      },
      {
        title: "Specialty",
        description: "Data and Business Intelligence",
      },
      {
        title: "Goal",
        description: "Improve processes through technology",
      },
    ],
  },

  skills: {
    introduction: "Skills",
    title: "Tools that transform data into solutions",
    description:
      "Technologies used to create dashboards, analysis, and applications for industrial environments.",

    categories: {
      businessIntelligence: "Business Intelligence",
      dataAnalysis: "Data Analysis",
      database: "Database",
      webDevelopment: "Web Development",
      frontend: "Front-end",
      backend: "Back-end",
    },
  },

  projects: {
    introduction: "Projects",
    title: "Solutions created for real-world problems",
    description:
      "Projects that combine development, data, and industrial knowledge.",
    viewDashboard: "Open dashboard",
    projectLabel: "Project",
    carouselLabel: "Projects carousel",
    previousProject: "Previous project",
    nextProject: "Next project",

    items: {
      qualitySystem: {
        title: "Quality Management System",
        category: "Full Stack Development",
        description:
          "Web application for digitizing IQC and OQC inspections, managing sampling plans, traceability, and report generation.",
        highlight: "IQC and OQC inspections",
      },

      inventoryDashboard: {
        title: "Inventory Management",
        category: "Business Intelligence",
        description:
          "Dashboard for monitoring non-conforming materials, financial impact, inventory movements, and monthly cost variation.",
        highlight: "Financial and operational control",
      },

      productionDashboard: {
        title: "Production and Quality Performance",
        category: "Data Analysis",
        description:
          "Dashboard for tracking production, defects, yield, fail rate, and the main issues identified for each model.",
        highlight: "Yield and defect monitoring",
      },
    },
  },

  contact: {
    introduction: "Contact",
    title: "Let’s transform an idea into a solution",
    description:
      "I am open to opportunities, collaborations, and projects involving development, data, and process improvement.",
    email: "Email",
    linkedin: "LinkedIn",
    phone: "Phone",
  },

  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },

  metadata: {
  title: "Iuran Freire | Portfolio",
  description:
    "Iuran Freire’s professional portfolio featuring development, Business Intelligence, and data analysis projects.",
},
};
