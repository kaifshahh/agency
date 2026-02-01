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