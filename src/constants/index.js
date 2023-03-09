import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import  vue  from '../assets/tech/vue.png'
import  searchMovie  from '../assets/SearchFilm.jpeg'
import  iaCoherece  from '../assets/inteligenciaAr.jpeg'
import  testReact  from '../assets/testReact.jpeg'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vue",
    icon: vue,
  }
];

const experiences = [
  {
    title: "Freelancer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Selling web applications to local sites for more practice.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front end developer",
    company_name: "Inclusion",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using SAPUI5 and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Talk with the client to implement project improvements."
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "CoderHouse",
    icon: javascript,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Coordinate meetings with the team for the development of the class.",
      "Teach more than 100 people the technological trends both from the front and the back.",
      "Correct final challenge for course approval.",
      "Constant training to improve pedagogical and soft skills",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Search Movie",
    description:
      "A movie search engine that shows the movie by title, year and poster also avoids doing the same search twice, it is searched automatically when typing      ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: searchMovie,
    source_code_link: "https://github.com/crcristian97/React-Test-Vite",
  },
  {
    name: "Artificial Intelligence",
    description:
      "Landing Page that uses artificial intelligence to detect language and translate the text into English",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: iaCoherece,
    source_code_link: "https://github.com/crcristian97/Cohere-ai",
  },
  {
    name: "Trip Guide",
    description:
      "Landing page with a call to the api every 15 seconds, depending on the data that the api brings, certain things are shown, using the necessary hooks.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: testReact,
    source_code_link: "https://github.com/crcristian97/Test-React",
  },
];

export { services, technologies, experiences, testimonials, projects };
