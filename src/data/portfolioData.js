const BASE_URL = import.meta.env.BASE_URL;
export const profile = {
  name: "Jagan Mohan Indheti",

  shortName: "JAGAN MOHAN",

  role: "Machine Learning Engineer",

  secondaryRole: "AI Software Developer",

  tagline:
    "I build practical AI-powered software solutions that turn ideas, data and technology into useful products.",

  location: "India",

  email: "indhetijaganmohan08@gmail.com",

  github:
    "https://github.com/indhetijaganmohan08-creator",

  linkedin:
    "https://www.linkedin.com/in/jaganmohanindheti/",

  resume: `${BASE_URL}resume.pdf`,
};


export const skills = [
  {
    name: "Python",
    level: 92,
  },

  {
    name: "Machine Learning",
    level: 88,
  },

  {
    name: "Computer Vision",
    level: 86,
  },

  {
    name: "Flutter",
    level: 84,
  },

  {
    name: "Firebase",
    level: 82,
  },

  {
    name: "React",
    level: 80,
  },

  {
    name: "JavaScript",
    level: 82,
  },

  {
    name: "Git & GitHub",
    level: 82,
  },
];


export const technologies = [
  "Python",
  "Machine Learning",
  "Computer Vision",
  "OpenCV",
  "React",
  "Vite",
  "Flutter",
  "Firebase",
  "JavaScript",
  "Git",
  "GitHub",
  "REST APIs",
];


export const experiences = [
  {
    period: "Sep 2025 — Aug 2026",

    title: "Machine Learning Developer",

    company: "Vijay Software Solutions",

    description:
      "Worked on practical machine-learning software, computer-vision workflows and application development, translating technical requirements into usable solutions.",

    points: [
      "Developed machine-learning and computer-vision functionality.",

      "Worked with Python-based development and model integration.",

      "Built and improved software features around real-world requirements.",

      "Collaborated on implementation, testing and debugging.",
    ],
  },
];


export const projects = [
  {
    id: "face-attendance",

    title: "Face Attendance System",

    type: "Computer Vision",

    description:
      "An AI-powered attendance system that verifies a person by comparing facial feature vectors from a registered database with the live camera face. A two-blink liveness verification step is performed before attendance is confirmed, helping protect against simple photo-based spoofing.",

    technologies: [
      "Python",
      "OpenCV",
      "FaceNet",
      "Computer Vision",
      "NumPy",
    ],

    images: [
     `${BASE_URL}projects/face-attendance/hero.jpg`,
     `${BASE_URL}projects/face-attendance/recognition.jpg`,
     `${BASE_URL}projects/face-attendance/blink-detection.jpg`,
     `${BASE_URL}projects/face-attendance/attendance-marked.jpg`,
    ],

    features: [
      "Real-time face detection",
      "Facial feature vector extraction",
      "Database-based vector matching",
      "Live camera face verification",
      "Two-blink liveness verification",
      "Anti-spoofing verification",
      "Automatic attendance marking",
      "Attendance record management",
    ],

    github:
      "https://github.com/indhetijaganmohan08-creator",
  },


  {
    id: "hot-topic-trends",

    title: "Tracking Hot Topic Trends",

    type: "AI / Data Analytics",

    description:
      "A data-analysis and trend-tracking solution designed to identify emerging topics, analyse keywords and present changing trends through visual analytics.",

    technologies: [
      "Python",
      "NLP",
      "Data Processing",
      "Analytics",
    ],

    images: [
      `${BASE_URL}projects/hot-topic-trends/hot-topic-trends-showcase.png`,
      `${BASE_URL}projects/hot-topic-trends/hot-topic-trends-1.png`,
      `${BASE_URL}projects/hot-topic-trends/hot-topic-trends-2.png`,
      `${BASE_URL}projects/hot-topic-trends/hot-topic-trends-3.png`,
      `${BASE_URL}projects/hot-topic-trends/hot-topic-trends-4.png`,
    ],

    features: [
      "Topic discovery",
      "Keyword extraction",
      "NLP-based analysis",
      "Trend comparison",
      "Topic classification",
      "Visual analytics",
    ],

    github:
      "https://github.com/indhetijaganmohan08-creator",
  },


  {
    id: "medbuddy",

    title: "MedBuddy",

    type: "Healthcare Mobile Application",

    description:
      "A Flutter healthcare mobility application designed to connect users with hospital and transport assistance through booking, payment and trip-tracking workflows.",

    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps",
      "Razorpay",
    ],

    images: [
      `${BASE_URL}projects/medbuddy/medbuddy-showcase.png`,
      `${BASE_URL}projects/medbuddy/medbuddy-1.png`,
      `${BASE_URL}projects/medbuddy/medbuddy-2.png`,
      `${BASE_URL}projects/medbuddy/medbuddy-3.png`,
      `${BASE_URL}projects/medbuddy/medbuddy-4.png`,
    ],

    features: [
      "Phone authentication",
      "Hospital selection",
      "Doctor selection",
      "Booking workflow",
      "Payment integration",
      "Google Maps integration",
      "Trip tracking",
      "Firebase backend",
    ],

    github:
      "https://github.com/indhetijaganmohan08-creator",
  },
];


export const services = [
  {
    number: "01",

    title: "Machine Learning",

    description:
      "Designing and integrating practical machine-learning solutions for real-world applications.",
  },

  {
    number: "02",

    title: "Computer Vision",

    description:
      "Building image and video-based solutions for recognition, verification and automation.",
  },

  {
    number: "03",

    title: "AI Software Development",

    description:
      "Turning AI concepts into usable software products and application features.",
  },

  {
    number: "04",

    title: "Full-Stack Application Development",

    description:
      "Developing modern web and mobile applications with reliable backend services.",
  },
];


export const education = {
  degree:
    "Bachelor of Technology (B.Tech) Computer Science and Engineering",

  field:
    "Artificial Intelligence and Data Science",

  institution:
    "Eluru College of Engineering and Technology, JNTUK University, India",

  period: "2021-2025",
};