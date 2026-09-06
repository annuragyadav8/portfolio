export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Software Tool';
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  challenge: string;
  solution: string;
  github: string;
  demo: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  techUsed: string[];
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools & Practices';
  proficiency: number; // 0 to 100
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
  score: string;
  coursework: string[];
}

export const personalInfo = {
  name: "Anurag Yadav",
  title: "Software Engineer",
  subtitle: "Full Stack .NET Developer",
  shortIntro: "I design and build high-performance, scalable web applications. Specializing in secure .NET Core backends, modern React frontends, and optimized database solutions.",
  email: "annuragyadav8@gmail.com",
  phone: "+91-8169268178",
  location: "Mumbai, Maharashtra, India",
  github: "https://github.com/annuragyadav8",
  linkedin: "https://linkedin.com",
};

export const skillsData: Skill[] = [
  // Backend
  { name: "C#", category: "Backend", proficiency: 92 },
  { name: "ASP.NET Core", category: "Backend", proficiency: 90 },
  { name: "ASP.NET MVC", category: "Backend", proficiency: 88 },
  { name: "ASP.NET Web API", category: "Backend", proficiency: 90 },
  { name: "REST APIs", category: "Backend", proficiency: 92 },
  { name: "OOP", category: "Backend", proficiency: 95 },
  
  // Frontend
  { name: "React", category: "Frontend", proficiency: 85 },
  { name: "JavaScript", category: "Frontend", proficiency: 88 },
  { name: "TypeScript", category: "Frontend", proficiency: 80 },
  { name: "HTML5 & CSS3", category: "Frontend", proficiency: 95 },
  
  // Database
  { name: "SQL Server", category: "Database", proficiency: 90 },
  { name: "Stored Procedures", category: "Database", proficiency: 88 },
  { name: "T-SQL / Queries", category: "Database", proficiency: 87 },
  
  // Tools & Practices
  { name: "Git & GitHub", category: "Tools & Practices", proficiency: 90 },
  { name: "SOLID Principles", category: "Tools & Practices", proficiency: 92 },
  { name: "Clean Architecture", category: "Tools & Practices", proficiency: 88 }
];

export const experiencesData: Experience[] = [
  {
    company: "Shyft X",
    role: "Software Engineer",
    duration: "May 2025 - Present",
    achievements: [
      "Developed and integrated custom PowerPoint controls using Office Add-ins, enabling users to perform time-consuming operations (e.g., inserting templates, slides, or content blocks) with a single click, saving several minutes per task.",
      "Automated standard slide templates injections and corporate branding application to enforce design consistency across presentations.",
      "Engineered automated one-click chart and diagram generation systems based on predefined layouts and user datasets.",
      "Programmed robust validation features to verify presentation structure and verify the presence of required slides and templates.",
      "Implemented consistent style-matching algorithms to apply typography, colors, and layout formats across multi-slide decks dynamically."
    ],
    techUsed: ["Office Add-ins", "Office.js", "C#", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  }
];

export const projectsData: Project[] = [
  {
    id: "tailorpro",
    title: "Tailoring Management System (TailorPro)",
    category: "Full Stack",
    description: "A web-based system that simplifies daily operations for tailors, allowing shop owners to efficiently manage customer profiles, track orders, and handle billing.",
    image: "tailorpro",
    techStack: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework Core", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Consolidates customer information, employee details, and order tracking into a single unified dashboard.",
      "Track order status in real-time from receipt to stitching and delivery.",
      "Built-in billing system to generate invoices, log payments, and print structured receipts."
    ],
    challenge: "Managing dynamic measurements and order customization options for varying client requirements without bloating the database schema.",
    solution: "Implemented a semi-structured JSON column structure in SQL Server to store individual client customization options dynamically, coupled with an EF Core repository wrapper to query them efficiently.",
    github: "https://github.com/annuragyadav8/TailorPro",
    demo: "https://github.com/annuragyadav8/TailorPro"
  },
  {
    id: "employeedashboard",
    title: "Employee Management System",
    category: "Backend",
    description: "An enterprise-grade employee dashboard implementing MVC architecture to manage staff profiles, SQL Server schemas, and secure database operations.",
    image: "employeedashboard",
    techStack: ["C#", "ASP.NET Core MVC", "SQL Server", "Stored Procedures", "SOLID Principles", "OOP"],
    features: [
      "Implements strict Model-View-Controller (MVC) architecture to ensure scalability and ease of maintenance.",
      "Encapsulates complex business rules using advanced Object-Oriented Programming (OOP) principles.",
      "Leverages SQL Server stored procedures and query indexing for highly efficient and secure CRUD operations."
    ],
    challenge: "Slow execution times and resource lockouts when running heavy quarterly reports across thousands of employee records.",
    solution: "Designed optimized SQL Stored Procedures utilizing custom indexes, CTEs, and query hint settings to reduce database server CPU load by 35%.",
    github: "https://github.com/annuragyadav8/EmployeeManagementSystem",
    demo: "https://github.com/annuragyadav8/EmployeeManagementSystem"
  },
  {
    id: "officeaddin",
    title: "Office PowerPoint Automation Add-in",
    category: "Software Tool",
    description: "A custom PowerPoint Add-in automating corporate branding, template injections, and chart generation workflows.",
    image: "officeaddin",
    techStack: ["Office Add-ins", "Office.js", "C#", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    features: [
      "One-click automated chart or diagram generation based on custom datasets.",
      "Automatic injection of standard corporate slide templates and brand styling rules.",
      "Built-in presentation structure checker to validate slides against corporate compliance guidelines."
    ],
    challenge: "Ensuring smooth PowerPoint rendering and slide generation without locking the main thread or causing application freezes.",
    solution: "Implemented asynchronous Office JavaScript API calls combined with Web Workers to handle heavy JSON slide parsing tasks in the background.",
    github: "https://github.com/annuragyadav8",
    demo: "https://github.com/annuragyadav8"
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology (B.Sc IT)",
    university: "Mumbai University",
    duration: "June 2021 - March 2024",
    score: "CGPA: 7/10",
    coursework: ["C#", "Java", "ASP.NET", "SQL Server Database", "Object Oriented Programming", "Data Structures & Algorithms", "Computer Networks", "Operating Systems"]
  }
];
