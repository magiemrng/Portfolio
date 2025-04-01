import type { Project } from "@/types/project";

export const projects = [
  {
    id: "File-Share",
    name: "File Share",
    gitURL: "https://github.com/SAIKUMAR039/FileShare",
    liveURL: "https://file-shar-e.vercel.app/",
    description: "File Share is a web application that allows users to share files with others. Users can upload files and share them with a unique link.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "React", "Node.js"],
    image: "/projects/file-share.png",
    year: "2024",
    features: [
      "File upload and sharing",
      "Unique shareable links",
      "Real-time updates",
      "Secure file storage",
      "User authentication"
    ]
  },
  {
    id: "Benege-AI-Chat",
    name: "Benege AI Chat",
    gitURL: "https://github.com/SAIKUMAR039/Benege-AI-Chat",
    liveURL: "https://benege-ai-chat.vercel.app/",
    description: "Benege AI Chat is a chat application that uses AI to help users with their questions. The application provides intelligent responses to user queries.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "React", "Node.js"],
    image: "/projects/benege-ai-chat.png",
    year: "2024",
    features: [
      "AI-powered chat interface",
      "Context-aware responses",
      "Chat history",
      "User authentication",
      "Real-time updates"
    ]
  },
  {
    id: "Student-Utils",
    name: "Student Utils",
    gitURL: "https://github.com/SAIKUMAR039/Student-Utils",
    liveURL: "https://student-utils.vercel.app/",
    description: "Student Utils is a web application that provides various tools and utilities for students. It includes features like a calculator, note-taking, and more.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    image: "/projects/student-utils.png",
    year: "2024",
    features: [
      "Calculator",
      "Note-taking",
      "Task management",
      "Study timer",
      "Resource sharing"
    ]
  },
  {
    id: "Portfolio-UI",
    name: "Portfolio UI",
    gitURL: "https://github.com/SAIKUMAR039/Portfolio-UI",
    liveURL: "https://portfolio-ui-sai.vercel.app/",
    description: "Portfolio UI is a modern and responsive portfolio website template. It features a clean design and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    image: "/projects/portfolio-ui.png",
    year: "2024",
    features: [
      "Responsive design",
      "Dark mode",
      "Smooth animations",
      "Project showcase",
      "Contact form"
    ]
  },
  {
    id: "Smart-Emergency-Alert-System",
    name: "Smart Emergency Alert System Using Air Tags",
    gitURL: "https://github.com/SAIKUMAR039/Smart-Emergency-Alert-System-Using-Air-Tags",
    liveURL: "https://smart-emergency-alert-system.vercel.app/",
    description: "A smart emergency alert system that uses air tags to track and alert users in case of emergencies. The system provides real-time location updates.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "Air Tags API"],
    image: "/projects/emergency-alert.png",
    year: "2024",
    features: [
      "Real-time tracking",
      "Emergency alerts",
      "Location sharing",
      "User notifications",
      "Emergency contacts"
    ]
  },
  {
    id: "ToDo-List",
    name: "ToDo List",
    gitURL: "https://github.com/SAIKUMAR039/ToDo-List",
    liveURL: "https://todo-list-sai.vercel.app/",
    description: "A simple and efficient todo list application that helps users manage their tasks. Features include task creation, completion, and deletion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    image: "/projects/todo-list.png",
    year: "2024",
    features: [
      "Task creation",
      "Task completion",
      "Task deletion",
      "Task categories",
      "Local storage"
    ]
  },
  {
    id: "Weather",
    name: "Weather",
    gitURL: "https://github.com/SAIKUMAR039/Weather",
    liveURL: "https://weather-sai.vercel.app/",
    description: "A weather application that provides real-time weather information for any location. Users can search for locations and view detailed weather data.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Weather API"],
    image: "/projects/weather.png",
    year: "2024",
    features: [
      "Location search",
      "Real-time weather",
      "Weather forecast",
      "Temperature units",
      "Weather maps"
    ]
  },
  {
    id: "Bitcoin-Price-Prediction",
    name: "Bitcoin Price Prediction",
    gitURL: "https://github.com/SAIKUMAR039/Bitcoin-Price-Prediction",
    liveURL: "https://bitcoin-price-prediction.vercel.app/",
    description: "A machine learning application that predicts Bitcoin prices based on historical data. The application uses various algorithms for accurate predictions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Python", "TensorFlow"],
    image: "/projects/bitcoin-prediction.png",
    year: "2024",
    features: [
      "Price prediction",
      "Historical data",
      "Data visualization",
      "Multiple algorithms",
      "Real-time updates"
    ]
  },
  {
    id: "Imagine",
    name: "Imagine",
    gitURL: "https://github.com/SAIKUMAR039/Imagine",
    liveURL: "https://imagine-sai.vercel.app/",
    description: "Imagine is an AI-powered image generation application. Users can create unique images based on text descriptions using advanced AI models.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "OpenAI", "DALL-E"],
    image: "/projects/imagine.png",
    year: "2024",
    features: [
      "Text-to-image generation",
      "Image variations",
      "Image editing",
      "Gallery view",
      "Download options"
    ]
  }
] as const;