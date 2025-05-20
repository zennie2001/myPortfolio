// src/data/projectData.js
import food from "../assets/food1.png"
import job from "../assets/job2.png"
import ecommerce from "../assets/ecommerce.png"
import quote from "../assets/quote.jpg"
import snippet from "../assets/snippet.jpg"

const projectData = [
 {
    url: ecommerce,
    title: "Forever Choice - E-Commerce Platform",
    description: "A full-featured online shopping platform with user authentication, cart, and checkouts.",
    tools: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["User authentication", "Product catalog with search and filters", "Shopping cart" , "Order history and tracking"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/zennie2001/E-commerce",
    live: "https://e-commerce-frontend-drab-nine.vercel.app",
  },
  {
    url: job,
    title: "Job Finding Web Application",
    description: "A modern job portal where employers can post jobs and job seekers can search and apply with ease — built for efficient and secure hiring.",
    tools: ["Node.js", "Express", "React", "MongoDB", "JWT"],
    features: ["User Authentication", "Role-based Dashboards","Job Search & Filters", "Apply to Jobs", "Responsive Design"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/zennie2001/CodsoftProject/tree/main/Task2",
    live: "https://codsoft-p-client.vercel.app",
  },
  {
    url: snippet,
    title: "SnippetBoard",
    description: "A streamlined code snippet manager designed for developers to save, organize, and access reusable code across multiple languages.",
    tools: ["Next.js", "TypeScript", "Prisma"],
    features: ["Create, edit, and delete snippets easily", " Organize snippets by tags, language, or category", "One-click copy to clipboard"],
    tags: ["Next.js"],
    github: "https://github.com/zennie2001/CodeSnippet",
    live: "https://code-snippet-ku18sdx93-zennie2001s-projects.vercel.app",
  },
  {
    url: food,
    title: "DishDiscovery - Food Recipe Dashboard",
    description: "Discover recipes for any dish with a simple search. Get step-by-step instructions, ingredients, and cooking tips — all in one place.",
    tools: ["React", "TailwindCSS", "frontend"],
    features: ["Dish Search", "Detailed Recipes", "Recipe Images", "Filter by Category"],
    tags: ["React", "API"],
    github: "https://github.com/zennie2001/Food-Recipe",
    live: "https://chipper-croquembouche-897206.netlify.app/",
  },
  {
    url: quote,
    title: "ThoughtDrop - Random Quote Generator",
    description: "Find your daily spark of inspiration with this elegant web app that delivers a thoughtfully curated Quote of the Day—right after you log in. ",
    tools: ["Node.js", "MongoDB", "React",  ],
    features: ["User Authentication", "Quote of the Day", "Get New Quote", "Author Display"],
    tags: ["Full Stack", "React", "Node.js", "MongoDB", "API"],
    github: "https://github.com/zennie2001/RndomQuoteGenerator",
    live: "https://rndom-quote-frontend.vercel.app/quote",
  },
];

export default projectData;
