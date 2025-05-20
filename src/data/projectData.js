// src/data/projectData.js
import food from "../assets/food1.png"
import job from "../assets/job1.webp"
import ecommerce from "../assets/ecommerce.png"
import quote from "../assets/quote.jpg"
import snippet from "../assets/snippet.jpg"

const projectData = [
 {
    url: ecommerce,
    title: "Title 1",
    description: "Image 1 Description",
    tools: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Token Auth", "Dashboard", "Secure Routes"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/E-commerce",
    live: "https://e-commerce-frontend-drab-nine.vercel.app",
  },
  {
    url: job,
    title: "Title 1",
    description: "Image 1 Description",
    tools: ["Node.js", "Express", "React", "MongoDB", "JWT"],
    features: ["Token Auth", "Dashboard", "Secure Routes"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/CodsoftProject/tree/main/Task2",
    live: "https://codsoft-p-client.vercel.app",
  },
  {
    url: snippet,
    title: "Title 1",
    description: "Image 1 Description",
    tools: ["Next.js", "TypeScript", "Prisma"],
    features: ["Token Auth", "Dashboard", "Secure Routes"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/CodeSnippet",
    live: "https://code-snippet-ku18sdx93-zennie2001s-projects.vercel.app",
  },
  {
    url: food,
    title: "Title 1",
    description: "Image 1 Description",
    tools: ["React", "TailwindCSS", "frontend"],
    features: ["Token Auth", "Dashboard", "Secure Routes"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/Food-Recipe",
    live: "https://chipper-croquembouche-897206.netlify.app/",
  },
  {
    url: quote,
    title: "Title 1",
    description: "Image 1 Description",
    tools: ["Node.js", "MongoDB", "React",  ],
    features: ["Token Auth", "Dashboard", "Secure Routes"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/RndomQuoteGenerator",
    live: "https://rndom-quote-frontend.vercel.app/quote",
  },
];

export default projectData;
