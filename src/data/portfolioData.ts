export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend' | 'Frontend';
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

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const personalInfo = {
  name: "Anurag Yadav",
  title: "Software Engineer",
  subtitle: "Full Stack .NET Developer",
  shortIntro: "I design and build high-performance, scalable web applications. Specializing in secure .NET Core backends, modern React frontends, and optimized database solutions.",
  email: "annuragyadav8@gmail.com",
  phone: "+91 8169268178",
  location: "Thane, Maharashtra, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const skillsData: Skill[] = [
  // Backend
  { name: "C#", category: "Backend", proficiency: 92 },
  { name: "ASP.NET Core", category: "Backend", proficiency: 90 },
  { name: ".NET Web API", category: "Backend", proficiency: 90 },
  { name: "Entity Framework Core", category: "Backend", proficiency: 88 },
  { name: "REST APIs", category: "Backend", proficiency: 92 },
  { name: "OOP", category: "Backend", proficiency: 95 },
  
  // Frontend
  { name: "React", category: "Frontend", proficiency: 85 },
  { name: "TypeScript", category: "Frontend", proficiency: 80 },
  { name: "JavaScript", category: "Frontend", proficiency: 88 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 90 },
  { name: "HTML5 & CSS3", category: "Frontend", proficiency: 95 },
  
  // Database
  { name: "SQL Server", category: "Database", proficiency: 87 },
  { name: "T-SQL / Queries", category: "Database", proficiency: 85 },
  { name: "Redis Cache", category: "Database", proficiency: 75 },
  
  // Tools & Practices
  { name: "Git & GitHub", category: "Tools & Practices", proficiency: 90 },
  { name: "SOLID Principles", category: "Tools & Practices", proficiency: 92 },
  { name: "Clean Architecture", category: "Tools & Practices", proficiency: 88 },
  { name: "Docker", category: "Tools & Practices", proficiency: 78 },
  { name: "CI/CD Pipelines", category: "Tools & Practices", proficiency: 75 }
];

export const experiencesData: Experience[] = [
  {
    company: "Cognizant Technology Solutions",
    role: "Software Engineer (.NET Full Stack Developer)",
    duration: "Dec 2024 - Present",
    achievements: [
      "Designed and developed highly scalable microservices using ASP.NET Core Web API, improving transaction speed and API response times by 25%.",
      "Successfully migrated a legacy ASP.NET Web Forms ERP portal to a modern decoupled stack using React, TypeScript, and .NET 8 Web APIs.",
      "Optimized query efficiency and indexing structures in SQL Server, reducing reporting data retrieval latency by 30%.",
      "Championed the adoption of clean architecture, dependency injection, and SOLID design patterns across the core product, lowering code duplication and post-release bugs by 18%."
    ],
    techUsed: ["C#", "ASP.NET Core", "React", "TypeScript", "SQL Server", "EF Core", "Tailwind CSS"]
  },
  {
    company: "AcroTrend Solutions",
    role: "Associate Software Engineer",
    duration: "Feb 2024 - Dec 2024",
    achievements: [
      "Built and integrated secure RESTful APIs with various third-party services including payment getaways and customer management dashboards.",
      "Engineered responsive user dashboards and interactive data visualizations in React, improving client analytics access speeds.",
      "Partnered with QA teams to write unit tests using xUnit and integration tests, boosting code coverage from 60% to 85%."
    ],
    techUsed: ["C#", ".NET Core API", "React", "JavaScript", "SQL Server", "Git", "CSS3"]
  }
];

export const projectsData: Project[] = [
  {
    id: "mediconnect",
    title: "MediConnect - Enterprise Healthcare Portal",
    category: "Full Stack",
    description: "An end-to-end medical scheduling and record management system enabling doctors and patients to securely schedule appointments, review logs, and manage prescriptions.",
    image: "mediconnect",
    techStack: ["ASP.NET Core Web API", "React", "SQL Server", "Entity Framework Core", "SignalR", "Tailwind CSS"],
    features: [
      "Secure authentication utilizing JSON Web Tokens (JWT) and claims-based role authorization.",
      "Real-time patient check-in alerts and doctor availability calendars synchronized via SignalR.",
      "HIPAA-compliant structured database structure with encryption on sensitive medical documents."
    ],
    challenge: "High concurrency and race conditions when multiple patients tried to book the same doctor's appointment slot simultaneously.",
    solution: "Implemented EF Core Optimistic Concurrency tokens, coupled with a Redis-based reservation lease. When a slot is clicked, it is booked as 'Pending' in Redis for 5 minutes, allowing checkout to proceed smoothly without database contention.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: "finflow",
    title: "FinFlow - Microservices Budgeting Platform",
    category: "Backend",
    description: "An event-driven financial management tool aggregating multi-account expenses, tracking budgets, and generating predictive metrics using background services.",
    image: "finflow",
    techStack: [".NET 8 Core API", "RabbitMQ", "SQL Server", "React", "Docker", "Chart.js", "Tailwind CSS"],
    features: [
      "Distributed architecture utilizing independent microservices with event orchestration.",
      "Asynchronous message delivery and queue processing backed by RabbitMQ.",
      "Full analytics page showcasing monthly transaction summaries via interactive charts."
    ],
    challenge: "Ensuring database consistency and transactional integrity across distinct accounts and ledger microservices without locking resources indefinitely.",
    solution: "Deployed the Saga Pattern using MassTransit. When a transaction starts, it triggers sequential state validations. If any service fails, MassTransit executes automatic compensating actions to revert previous commits and keep databases in a consistent state.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: "devsync",
    title: "DevSync - Collaborative Scrum Board",
    category: "Full Stack",
    description: "A developer-first real-time workspace featuring project boards, sprint planners, burndown analytics, and live team code sharing inspired by modern workflow tools.",
    image: "devsync",
    techStack: ["ASP.NET Core API", "C#", "React", "TypeScript", "SQL Server", "SignalR", "Framer Motion", "Tailwind CSS"],
    features: [
      "Intuitive drag-and-drop task boards instantly synced for all members using WebSockets.",
      "Custom markdown editor with instant formatting and code compilation outputs.",
      "Beautiful Linear-inspired dark mode UI with interactive stats and indicators."
    ],
    challenge: "Sync issues and connection dropouts causing data state mismatch when users worked on erratic mobile networks.",
    solution: "Designed an optimistic updates interface on the React client side and integrated an offline synchronization queue using IndexedDB. Operations are queued locally and automatically retried when SignalR detects a successful reconnection.",
    github: "https://github.com",
    demo: "https://github.com"
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    date: "Issued Jun 2025 · Expires Jun 2028",
    credentialId: "AZ-204-ANURAG",
    link: "https://microsoft.com"
  },
  {
    name: "ASP.NET Core MVC & Web API Full Stack Bootcamp",
    issuer: "Microsoft Tech Academy",
    date: "Issued Aug 2024",
    credentialId: "CERT-NET-FULLSTACK-992",
    link: "https://udemy.com"
  },
  {
    name: "React & TypeScript Enterprise Applications Guide",
    issuer: "Academind Academic",
    date: "Issued Apr 2024",
    credentialId: "CERT-REACT-TS-8841",
    link: "https://udemy.com"
  }
];
