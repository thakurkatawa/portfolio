export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "grid grid-cols-3 gap-4 mt-4",
    titleClassName: "justify-center text-xl font-bold mb-2",
    img: "",
    spareImg: "",
    techIcons: [
      { name: "Java", icon: "/java.svg" },
      { name: "Python", icon: "/python.svg" },
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "React", icon: "/react.svg" },
      { name: "Bootstrap", icon: "/bootstrap.svg" },
      { name: "Tailwind", icon: "/tailwind.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Next.js", icon: "/next.svg" },
    ],
    iconClassName: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16",
  },

  {
    id: 2,
    title: "Connect with me, Anytime ✨",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start items-start pt-4 absolute top-0 left-0 m-4",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    //img: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=HackStyx&theme=2077",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning ideas into code, and code into innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a Research Paper Recommendation System",
    description: "The Core Insight",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[60%] w-[80%] transform scale-140",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/cs.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Plant Disease Detection",
    des: "An AI-powered plant disease detection system that uses a Hybrid CNN and Vision Transformer model to identify plant diseases and estimate disease severity from leaf images.",
    img: "/plant.png",
    iconLists: [
      "/html.svg",
      
      "/tensor.png",
      "/javascript.svg",
      "/python.svg",
      "/css.svg",
      "/flask1.svg",
      
    ],
    link: "https://github.com/thakurkatawa/Plant_Disease_recognition_using_ML",
  },
  {
    id: 2,
    title: "Real-Time Video Calling Platform",
    des: "A real-time video conferencing platform Using MERN that enables users to connect through video calls with a responsive and interactive communication experience.",
    img: "/vcall.png",
    iconLists: [
      "/react.svg",
      "/mongodb.svg",
      "/javascript.svg",
      "/html.svg",
      "/css.svg",
      "/tailwind.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/thakurkatawa/Real-time-videoconferencing-platform",
  },
  {
    id: 3,
    title: "AI Research Paper Discovery System",
    des: "An AI-powered platform that helps users discover and retrieve relevant research papers using semantic search, SBERT embeddings, and FAISS-based similarity matching.",
    img: "/paper.png",
    iconLists: [
      "/sbert.png",
      "/html.svg",
      "/css.svg",
      "/faiss.png",
      "/javascript.svg",
      "/react.svg",
      "/tailwind.svg",
    ],
    link: "https://github.com/thakurkatawa/AI-Research-Paper-Discovery",
  },
{
  id: 4,
  title: "My Portfolio",
  des: "A modern personal portfolio website showcasing my skills, projects, experience, and contact information with a responsive and interactive design.",
  img: "/portfolio.png",
  iconLists: ["/react.svg", "/vite2.png", "/tailwind.svg", "/javascript.svg"],
  link: "YOUR_GITHUB_REPOSITORY_LINK",
},
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/thakurkatawa"
  },
  {
    id: 2,
    img: "/email.svg", // Change this to your email icon
    link: "mailto:thakurkatawa@gmail.com" // Change this to your email address
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/thakur-katawa-0833a0246/"
  },
];

