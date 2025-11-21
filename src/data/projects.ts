// Project data - single source of truth
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  longDescription?: string;
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: "threeweigh",
    title: "ThreeWeigh",
    description:
      "A modern weight tracker and intermittent fasting app built with Rails 8. Features real-time updates, progress visualization, and comprehensive fasting management.",
    longDescription:
      "ThreeWeigh is a comprehensive health tracking application that combines weight monitoring with intermittent fasting management. Built with Ruby on Rails 8 and Hotwire, it provides real-time updates through WebSockets, allowing users to see their progress instantly. The app features interactive charts powered by Chart.js, multiple fasting protocols (16:8, 18:6, 24h, etc.), and a responsive design that works seamlessly across devices.",
    tags: [
      "Ruby on Rails 8",
      "Hotwire",
      "PostgreSQL",
      "Chart.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/heyjosephme/ThreeWeigh",
    featured: true,
    challenges: [
      "Implementing real-time fasting timers with WebSocket connections",
      "Creating responsive chart visualizations for weight trends",
      "Managing complex fasting state transitions",
      "Optimizing database queries for historical data analysis",
    ],
    learnings: [
      "Advanced Hotwire techniques for real-time UI updates",
      "Chart.js integration with dynamic data",
      "Rails 8 authentication and authorization patterns",
      "Mobile-first responsive design principles",
    ],
  },
  {
    id: "yenkit",
    title: "YenKit",
    description:
      "Financial calculators and tools designed specifically for life in Japan. Helps expats with tax calculations, savings planning, and Japanese financial systems.",
    longDescription:
      "YenKit addresses the unique financial challenges faced by foreigners living in Japan. The application provides essential calculators for Japanese tax systems, pension calculations, and savings planning. Built with React Router and TypeScript, it offers a clean, intuitive interface that makes complex Japanese financial concepts accessible to international residents.",
    tags: ["React Router", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/heyjosephme/YenKit",
    featured: true,
    challenges: [
      "Understanding complex Japanese tax and pension systems",
      "Creating accurate financial calculation algorithms",
      "Designing user-friendly interfaces for complex data",
      "Supporting multiple currencies and exchange rates",
    ],
    learnings: [
      "Japanese financial system regulations and requirements",
      "Advanced TypeScript for complex calculations",
      "React Router v6 patterns and best practices",
      "Internationalization for Japanese/English users",
    ],
  },
  {
    id: "keio-course",
    title: "Keio Course Manager",
    description:
      "A distance learning management tool for Keio University. Streamlines course organization and academic planning for students.",
    longDescription:
      "Developed to address the challenges of distance learning at Keio University, this tool helps students organize their coursework, track assignments, and manage their academic schedule. Built with Next.js and TypeScript, it provides a modern, responsive interface that works well for both desktop and mobile learning environments.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/heyjosephme/keio-course",
    featured: true,
    challenges: [
      "Integrating with existing university systems and requirements",
      "Creating intuitive course organization interfaces",
      "Managing complex academic scheduling logic",
      "Ensuring accessibility for diverse student needs",
    ],
    learnings: [
      "Next.js App Router and server components",
      "Educational software design principles",
      "Japanese university system requirements",
      "Responsive design for educational contexts",
    ],
  },
  {
    id: "pocketledger",
    title: "PocketLedger",
    description:
      "Personal finance and bookkeeping application for managing expenses, income tracking, and financial planning with a clean, intuitive interface.",
    longDescription:
      "PocketLedger simplifies personal financial management with an intuitive interface for tracking expenses, managing income, and planning budgets. Built with Ruby on Rails and enhanced with Stimulus for interactive features, it provides essential tools for individuals and freelancers to maintain control over their finances.",
    tags: ["Ruby on Rails", "PostgreSQL", "Stimulus", "CSS"],
    githubUrl: "https://github.com/heyjosephme/PocketLedger",
    featured: false,
    challenges: [
      "Designing secure financial data handling",
      "Creating intuitive expense categorization",
      "Implementing budget tracking and alerts",
      "Ensuring data accuracy and consistency",
    ],
    learnings: [
      "Financial software security best practices",
      "Stimulus for enhanced user interactions",
      "Database design for financial applications",
      "User experience design for financial tools",
    ],
  },
];
