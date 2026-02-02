import { Heading } from "lucide-react";
import { desc } from "motion/react-client";

export const NAVLINKS=[
  {id :0, url:'/' ,label : 'Home'},
  {id :1, url:'/services' ,label : 'Services'},
  {id :2, url:'/work' ,label : 'Work'},
  {id :3, url:'/pricing' ,label : 'Pricing'},
  {id :4, url:'/blog' ,label : 'Blog'},
  {id :5, url:'/contact' ,label : 'Contact'},
];

export const Plans = [
  {
    title: "Website Development",
    subtitle: "High-converting websites",
    description: "Perfect for businesses that need a modern website.",
    price: "249",
    features: [
      "Strategy & discovery session",
      "UI/UX design (custom)",
      "Up to 6–8 pages",
      "Next.js / Framer development",
      "SEO-friendly structure",
      "Mobile-optimized & fast loading",
      "Deployment & analytics setup",
      "48-hour response time",
    ],
  },
  {
    title: "Mobile App Development",
    subtitle: "iOS + Android apps",
    description: "Best for startups & businesses building scalable mobile applications.",
    price: "699",
    features: [
      "Product strategy & roadmap",
      "UI/UX design for mobile",
      "iOS + Android (React Native / Flutter)",
      "Secure API integration",
      "Authentication & database setup",
      "Performance optimization",
      "App store deployment support",
      "Post-launch support",
    ],
  },
  {
    title: "Website + Mobile App",
    subtitle: "Complete digital ecosystem",
    description: "For businesses that want a complete web + app solution with shared logic.",
    price: "1199",
    features: [
      "Full product strategy & architecture",
      "Website + iOS + Android app",
      "Unified design system",
      "Backend & API development",
      "Admin dashboard",
      "Scalable cloud deployment",
      "Analytics & monitoring",
      "Priority support",
    ],
  },
];

export const reviews = [
  {
    ratings : 5,
    imgUrl : '/images/u1.jpg',
    name: "Sanjay Mehta",
    role: "Director, Key Decisions Realty",
    text: "SEO, design, and performance were executed brilliantly. Investor confidence improved significantly.",
  },
  {
    ratings : 5,
    imgUrl : '/images/u2.jpg',
    name: "Neelam Gupta",
    role: "CMO, GSF India",
    text: "Professional, modern, and delivered ahead of schedule. Exactly what a VC brand needs.",
  },
  {
    ratings : 5,
    imgUrl : '/images/u3.jpg',
    name: "Anirudh Singh",
    role: "Co-Founder, Third Align",
    text: "Enterprise-ready execution. Messaging clarity and UI polish helped us close high-value clients.",
  },
  {
    ratings : 5,
    imgUrl : '/images/u4.jpg',
    name: "Rahul Verma",
    role: "Founder, TechNova",
    text: "Amazing UI and fast delivery. Highly recommended for startups.",
  },
];

export const services = [
  {
   id : 1,
    title: "Web Development",
    icon: "/images/webd.png",
    heading: "High-performance, conversion-focused websites built with modern frameworks",
    desc: [
      "Custom UI/UX design",
      "Next.js / React development",
      "SEO-friendly structure",
      "Mobile-optimized & responsive",]
  },
  {
   id : 2,
    title: "App Development (iOS & Android)",
     icon: "/images/app-development.png",
      heading: "Scalable mobile applications designed for speed, usability, and growth.",
    desc: [ "iOS & Android apps",
      "React Native / Flutter",
      "Secure API integration",
      "App store deployment",
     ], 
  },
  {
   id : 3,
    title: "Custom Software Development",
     icon: "/images/customdev.png",
      heading: "Tailored software solutions designed to automate and scale your business.",
    desc: [ 
      "Custom dashboards & tools",
      "Workflow automation",
      "Backend & API development",
      "Scalable architecture",
     ],
  },
  {
   id : 4,
    title: "Lead Generation Systems",
     icon: "/images/user-engagement.png",
      heading: "AI-powered lead generation systems that attract and qualify customers automatically.",
    desc: [ "Automated lead capture",
      "Lead qualification & scoring",
      "CRM integration",
      "Analytics & reporting",
    ],
  },
  {
   id : 5,
    title: "Custom AI Chatbots", 
     icon: "/images/chat-bot.png",
      heading: "Intelligent chatbots that engage visitors and convert leads 24/7.",
    desc: [ "Website & WhatsApp bots",
      "Lead qualification",
      "Customer support automation",
      "Multi-language support",], 
  },
  {
   id : 6,
    title: "Business Automation",
     icon: "/images/automated-process.png",
      heading: "End-to-end automation solutions that reduce manual work and improve efficiency.",
    desc: [
      "CRM & workflow automation",
      "AI-powered process optimization",
      "Tool & API integrations",
      "Real-time monitoring",
     ],
  },
];



    export const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        images: ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg", "/images/p4.jpg"],
        description: "A modern e-commerce platform with real-time inventory management.",
        liveLink: "https://example.com",
        stats: {
          weeks: "8",
          staff: "4",
          year: "2024",
        },
        overview:
          "We built a fully scalable e-commerce platform designed to handle high traffic and complex inventory management. The system integrates seamless payment gateways and real-time tracking.",
        highlights: [
          "Custom shopping cart experience",
          "Real-time inventory syncing",
          "Integrated Stripe & PayPal payments",
          "Admin dashboard for analytics",
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
        services: ["Web Development", "UI/UX Design", "SEO Optimization"],
        results: [
          "40% increase in checkout conversion",
          "2x faster page load speeds",
          "10k+ monthly active users within 3 months",
        ],
      },
      {
        id: 2,
        title: "FinTech Dashboard",
        category: "SaaS Product",
        images: ["/images/p2.jpg", "/images/p3.jpg", "/images/p4.jpg", "/images/p5.jpg"],
        description: "A comprehensive dashboard for tracking financial assets and investments.",
        liveLink: "https://example.com",
        stats: {
          weeks: "12",
          staff: "6",
          year: "2023",
        },
        overview:
          "This FinTech dashboard allows users to visualize their investments, track expenses, and forecast future savings using AI-driven analytics.",
        highlights: [
          "Interactive data visualization charts",
          "Bank-grade security standards",
          "Automated financial reporting",
          "Multi-currency support",
        ],
        techStack: ["React", "Redux", "Node.js", "PostgreSQL", "Recharts"],
        services: ["SaaS Development", "Backend Architecture", "Security Audits"],
        results: [
          "Processed $5M+ in transactions securely",
          "Reduced reporting time by 60%",
          "Adopted by 500+ businesses",
        ],
      },
      {
        id: 3,
        title: "Healthcare App",
        category: "Mobile App",
        images: ["/images/p3.jpg", "/images/p4.jpg", "/images/p5.jpg", "/images/p6.jpg"],
        description: "A patient-doctor appointment scheduling application.",
        liveLink: "https://example.com",
        stats: {
          weeks: "10",
          staff: "5",
          year: "2024",
        },
        overview:
          "The Healthcare App simplifies the process of booking appointments, managing medical records, and conducting video consultations with doctors.",
        highlights: [
          "Instant appointment booking",
          "Secure video consultation features",
          "Digital prescription management",
          "Push notifications for reminders",
        ],
        techStack: ["React Native", "Firebase", "WebRTC", "Express.js"],
        services: ["Mobile App Development", "API Integration", "compliance checking"],
        results: [
          "50k+ downloads on App Store",
          "Reduced no-show rates by 30%",
          "4.8/5 average user rating",
        ],
      },
      {
        id: 4,
        title: "Real Estate Portal",
        category: "Web Application",
        images: ["/images/p4.jpg", "/images/p5.jpg", "/images/p6.jpg", "/images/p1.jpg"],
        description: "An immersive real estate listings platform with virtual tours.",
        liveLink: "https://example.com",
        stats: {
          weeks: "14",
          staff: "7",
          year: "2023",
        },
        overview:
          "Our Real Estate Portal offers high-res image galleries, 360-degree virtual tours, and advanced filtering to help users find their dream homes effortlessly.",
        highlights: [
          "360-degree virtual property tours",
          "Advanced map-based search",
          "Direct messaging with agents",
          "Mortgage calculator integration",
        ],
        techStack: ["Vue.js", "Nuxt.js", "Leaflet Maps", "Supabase"],
        services: ["Web Portal Development", "Interactive Maps", "Content Management"],
        results: [
          "300% increase in user engagement time",
          "Sold 200+ properties in first quarter",
          "Partnered with top 10 agencies",
        ],
      },
      {
        id: 5,
        title: "Fitness Tracker",
        category: "Mobile App",
        images: ["/images/p5.jpg", "/images/p6.jpg", "/images/p1.jpg", "/images/p2.jpg"],
        description: "A detailed fitness tracking app with social sharing features.",
        liveLink: "https://example.com",
        stats: {
          weeks: "9",
          staff: "3",
          year: "2024",
        },
        overview:
          "Track workouts, monitor diet, and challenge friends. This app makes fitness social and fun, integrating with major wearables for seamless data sync.",
        highlights: [
          "Wearable device integration",
          "Social challenges and leaderboards",
          "Custom workout plans",
          "Calorie tracking database",
        ],
        techStack: ["Flutter", "Dart", "GraphQL", "AWS Amplify"],
        services: ["Cross-Platform Dev", "Wearable Integration", "Gamification"],
        results: [
          "1M+ daily active users",
          "Featured in 'App of the Day'",
          "High retention rate of 45%",
        ],
      },
      {
        id: 6,
        title: "Travel Booking",
        category: "Web Application",
        images: ["/images/p6.jpg", "/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg"],
        description: "All-in-one travel booking for flights, hotels, and tours.",
        liveLink: "https://example.com",
        stats: {
          weeks: "16",
          staff: "8",
          year: "2023",
        },
        overview:
          "Users can plan entire trips including flights, hotels, and local experiences. The platform uses AI to suggest personalized itineraries.",
        highlights: [
          "AI-powered trip itinerary generator",
          "Multi-vendor booking system",
          "Dynamic pricing engine",
          "User reviews and travel guides",
        ],
        techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
        services: ["Full Stack Development", "AI Implementation", "Payment Systems"],
        results: [
          "Generated $2M revenue in year one",
          "User satisfaction score of 92%",
          "Expanded to 50+ countries",
        ],
      },
    ];