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
    id: "bumplink",
    title: "Bumplink",
    description:
      "A bilateral contact exchange app using QR codes and real-time coordination. Meet someone, scan, approve, take a selfie together, save the contact.",
    longDescription:
      "Bumplink reimagines how people exchange contact information by making it bilateral, visual, and memorable. When two users meet, one generates a QR code containing their contact preset. After scanning, both users see a preview and must approve the exchange before continuing. The app then opens the camera for a selfie together, creating a memorable association with the new contact. Built with React Native (Expo) for cross-platform mobile and Rails 8 API with Action Cable for real-time WebSocket coordination.",
    tags: [
      "React Native",
      "Expo",
      "Rails 8 API",
      "Action Cable",
      "WebSockets",
      "TypeScript",
    ],
    featured: true,
    challenges: [
      "Real-time bilateral coordination via WebSockets between two mobile devices",
      "QR code generation with embedded contact preset data",
      "Managing exchange session lifecycle with 10-minute expiration",
      "Camera integration for shared selfies during the exchange flow",
      "Cross-platform mobile development (iOS & Android) with Expo",
      "Secure session management with token-based API authentication",
    ],
    learnings: [
      "React Native with Expo Router file-based navigation",
      "Rails 8 Solid stack (solid_cache, solid_queue, solid_cable)",
      "Action Cable for real-time WebSocket communication from mobile clients",
      "QR code bilateral exchange patterns and UX flows",
      "Mobile camera and image handling with expo-camera and expo-image-picker",
      "Cross-platform mobile development targeting iOS and Android",
      "Stateful session management with real-time coordination",
    ],
  },
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
    liveUrl: "https://threeweigh.heyjoseph.me",
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
    id: "keio-tsushin",
    title: "Keio Tsushin",
    description:
      "A full-featured credit management system for Keio University distance learning students. Features course planning, deadline tracking, and graduation progress dashboards built with Rails 8 and Phlex.",
    longDescription:
      "Keio Tsushin (慶應通信) is a comprehensive course and credit management application for Keio University's distance learning program. Students can plan courses on a Kanban-style board, track progress toward 124 credit graduation requirements, manage report/exam deadlines via a monthly calendar, and monitor category-based credit breakdowns (必修, 選択, 外国語, 体育). The app features Rails 8 native authentication, user profiles with major selection and graduation planning, Japanese language support throughout, and 17 courses across Economics, Law, and Literature majors. Built entirely with Phlex components (no ERB), the Solid stack for production infrastructure, and deployed via Kamal to a custom domain.",
    tags: [
      "Ruby on Rails 8",
      "Phlex",
      "Hotwire",
      "Tailwind CSS 4",
      "Kamal",
      "Authentication",
    ],
    githubUrl: "https://github.com/heyjosephme/keio-tsushin",
    liveUrl: "https://keiotsushin.heyjoseph.me",
    featured: true,
    challenges: [
      "Building a complete view layer with Phlex components (zero ERB)",
      "Implementing Rails 8 native authentication with session management",
      "Designing hybrid data models (YAML catalog + database enrollments)",
      "Creating Kanban-style course planning with status transitions",
      "Calculating complex credit requirements across multiple categories",
    ],
    learnings: [
      "Phlex component architecture for type-safe Ruby views",
      "Rails 8 native authentication patterns (replacing Devise)",
      "Kamal deployment with Docker and SQLite persistence",
      "Japanese i18n for education-specific terminology",
      "Building domain-specific tools for university systems",
      "Hybrid static (YAML) and dynamic (DB) data modeling",
    ],
  },
  {
    id: "days-at-work",
    title: "Days at Work--",
    description:
      "An elegant countdown application to track time until leaving a job, featuring business day calculations, Japanese holiday integration, and philosophical reflections on freedom.",
    longDescription:
      "Days at Work-- is a sophisticated countdown application that helps users track time until their exit date with precision and meaning. Beyond simple day counting, it calculates business days by excluding weekends, Japanese public holidays, and custom off-days. The app includes milestone celebrations at 25%, 50%, and 75% progress, an animated progress bar, and a thoughtful '/freedom' page exploring what freedom truly means beyond just leaving a job. Built with modern web technologies, it demonstrates advanced date calculations, state management, and delightful micro-animations.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "date-fns",
    ],
    githubUrl: "https://github.com/heyjosephme/daysAtWork--",
    liveUrl: "https://days-at-work-minus-minus.heyjoseph.me/",
    featured: true,
    challenges: [
      "Implementing accurate business day calculations with Japanese holidays",
      "Creating smooth real-time countdown animations",
      "Managing complex date state with localStorage persistence",
      "Designing milestone celebration UX without being intrusive",
      "Balancing technical precision with philosophical depth",
    ],
    learnings: [
      "Next.js 16 App Router with Turbopack",
      "Advanced date-fns and dayjs usage for complex calculations",
      "Motion library for declarative animations",
      "Custom React hooks for countdown logic",
      "Integration with date-holidays library for localization",
      "OKLCH color system in Tailwind CSS",
      "Philosophical product design and meaningful user experiences",
    ],
  },
  {
    id: "is-react-dead",
    title: "Is React Dead?",
    description:
      "A satirical single-purpose site answering the internet's favorite recurring question with the appropriate nuance: No. Features real-time stats from npm and GitHub APIs.",
    longDescription:
      "Every few months, someone asks 'Is React dead?' despite it powering millions of websites. This site exists to answer with appropriate nuance: No. The stats page fetches real-time data from npm downloads and GitHub (stars, forks, issues) to prove React is very much alive. Built with Astro for static generation and Tailwind CSS for styling, the site ironically uses no React at all—just pure HTML, CSS, and minimal JavaScript. Inspired by isrubydead.com and israilsdead.com, it captures the deadpan humor needed to respond to technology 'obituary' takes.",
    tags: ["Astro 5", "Tailwind CSS 4", "API Integration", "Satire"],
    githubUrl: "https://github.com/heyjosephme/isReactDead",
    liveUrl: "https://isReactDead.com",
    featured: false,
    challenges: [
      "Fetching real-time data from npm and GitHub APIs at build time",
      "Creating a bold, minimalist design with maximum impact",
      "Deploying static site with dynamic data on Cloudflare Pages",
      "Capturing deadpan humor through design and copy",
    ],
    learnings: [
      "Astro's server-side rendering for API data fetching",
      "Cloudflare Pages deployment for Astro projects",
      "Satirical product design and minimalist UX",
      "Building single-purpose sites with clear messaging",
    ],
  },
];
