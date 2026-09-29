import { Server, Terminal, Database, Workflow } from "@boxicons/react";

export const profileData = {
  name: "Alex Pratama",
  role: "Junior Fullstack & Backend Developer",
  badge: "Available for Junior / Entry-Level Roles & Freelance",
  summary:
    "Passionate about building reliable web applications and clean APIs using Go, Laravel, ReactJS, and MySQL. Focused on writing readable code, practical relational database schemas, and structured fullstack solutions.",
  location: "Jakarta / Remote Friendly",
  techStackSummary: ["Go", "Laravel", "React", "MySQL"],
  degree: "B.Comp.Sc",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", // Ganti dengan path foto lokal Anda
  email: "firhansmdzky@gmail.com",
};

export const projectsData = [
  {
    id: 1,
    title: "HRIS & Employee Portal",
    category: "Fullstack App • Laravel + ReactJS + MySQL",
    description:
      "Employee data management system featuring an employee directory, daily attendance tracking, leave requests submission & approval workflow, and basic salary slip generator.",
    highlights: [
      "Normalized MySQL schema with relational integrity and foreign keys",
      "RESTful API backend powered by Laravel Eloquent ORM",
      "Responsive Tailwind CSS UI with interactive React state management",
    ],
    tech: ["Laravel", "ReactJS", "MySQL", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Modern Personal & Tech Blog",
    category: "Web Platform • Go / Node + ReactJS + MySQL",
    description:
      "Lightweight Markdown-based publishing platform with reader-friendly article pages, category tagging, full-text search functionality, and admin CRUD for creating and scheduling posts.",
    highlights: [
      "High-performance RESTful API routing with lightweight Go routines",
      "Safe Markdown parser integration with syntax highlight renderer",
      "Clean relational database storage with optimized post categories",
    ],
    tech: ["Go (Golang)", "ExpressJS", "ReactJS", "MySQL"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];

export const skillsData = [
  {
    category: "Backend Dev",
    icon: Server,
    skills: [
      {
        name: "Go (Golang)",
        desc: "Gin framework, Goroutines, clean RESTful APIs, net/http standard library.",
      },
      {
        name: "PHP & Laravel",
        desc: "MVC architecture, Eloquent ORM, database migrations, middleware.",
      },
      {
        name: "Node.js",
        desc: "ExpressJS framework, REST API creation, JWT authentication.",
      },
    ],
  },
  {
    category: "Frontend Dev",
    icon: Terminal,
    skills: [
      {
        name: "ReactJS",
        desc: "Functional components, React Hooks (useState, useEffect), Axios.",
      },
      {
        name: "JavaScript (ES6+)",
        desc: "Modern syntax, Async/Await, Fetch API, DOM manipulation.",
      },
      {
        name: "HTML5 & CSS3",
        desc: "Tailwind CSS utility framework, Flexbox, Grid, mobile responsiveness.",
      },
    ],
  },
  {
    category: "Database & Data",
    icon: Database,
    skills: [
      {
        name: "MySQL 8.0",
        desc: "Relational schema design, Primary & Foreign keys, B-Tree index optimization.",
      },
      {
        name: "SQL Queries & CRUD",
        desc: "Complex JOIN statements, aggregation functions, transactions.",
      },
      {
        name: "Data Modeling",
        desc: "ERD drafting, 1NF to 3NF normalization, data integrity checks.",
      },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Workflow,
    skills: [
      {
        name: "Git & GitHub",
        desc: "Feature branching, clear commit messages, pull requests, merge conflict resolution.",
      },
      {
        name: "Postman",
        desc: "API endpoint testing, header configuration, request collection workflows.",
      },
      {
        name: "Environment",
        desc: "VS Code, Linux/Bash terminal commands, npm, composer environment tools.",
      },
    ],
  },
];

export const certificatesData = [
  {
    id: "DC-FS-89241",
    title: "Fullstack Web Development Bootcamp",
    issuer: "Dicoding Academy / Binar",
    year: "2024",
    description:
      "Comprehensive bootcamp covering Laravel, ReactJS, RESTful API architecture, MySQL relational database modeling, and team capstone application delivery.",
    verifyUrl: "#",
  },
  {
    id: "UC-GO-44109",
    title: "Building Microservices & REST APIs with Go",
    issuer: "Udemy / Coursera",
    year: "2023",
    description:
      "In-depth curriculum on Go syntax fundamentals, Goroutines concurrency, standard HTTP library, Gin web framework, SQL driver integration, and unit tests.",
    verifyUrl: "#",
  },
  {
    id: "HR-SQL-77312",
    title: "Relational Database Design & SQL Essentials",
    issuer: "Oracle Academy / HackerRank",
    year: "2023",
    description:
      "Database normalization (1NF-3NF), ERD schema modeling, complex inner and outer joins, indexing strategies, and transactional ACID compliance integrity.",
    verifyUrl: "#",
  },
];
