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
    title: "My journey, point by point",
    summary:
      "A journey built across data, automation, and development — always connecting real problems to practical solutions.",
    journey: [
      {
        label: "The beginning",
        title: "Data taking shape",
        description:
          "My journey began by creating Power BI dashboards, transforming information into clearer, more useful analysis.",
      },
      {
        label: "The expansion",
        title: "New tools, new possibilities",
        description:
          "I expanded my knowledge of Python, Excel, SQL, and web development to organize information, improve traceability, and reduce manual tasks.",
      },
      {
        label: "Today",
        title: "A developer in constant evolution",
        description:
          "I am a junior developer and a Systems Analysis and Development student interested in software, data, and process automation.",
      },
    ],
    closing:
      "I like to understand the problem before building the solution. I am curious, dedicated, and committed to learning and creating projects that deliver real results.",
  },

  skills: {
    introduction: "Skills",
    title: "Tools that transform data into solutions",
    description:
      "Technologies used to create dashboards, analysis, and applications for industrial environments.",
    orbitHint: "Select a technology to bring it to the center of the galaxy.",

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
    viewRepository: "View code on GitHub",
    projectLabel: "Project",
    carouselLabel: "Projects carousel",
    previousProject: "Previous project",
    nextProject: "Next project",

    items: {
      qualitySystem: {
        title: "Quality Management System",
        category: "Full Stack Development",
        description:
          "Full-stack application for managing quality plans and inspections, digitizing IQC and OQC records, tracking indicators, and generating reports.",
        highlight: "Quality plans and inspections",
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

      barcodeCam: {
        title: "BarcodeCam — Barcode Reader",
        category: "Automation and Computer Vision",
        description:
          "Python application that uses a camera to recognize S/N and MAC barcodes, validate readings, store them in SQLite, and export records to Excel.",
        highlight: "Automated camera-based reading",
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
    github: "GitHub",
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
