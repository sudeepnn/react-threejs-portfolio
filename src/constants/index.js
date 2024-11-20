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
  atom,
  comp,
  java,
  mysql,
  snapspace,
  chatangel,
  parking
} from "../assets";



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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Traveller",
    icon: creator,
  },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Java",
    icon: java,
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
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "UST",
    icon: comp,
    iconBg: "white",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "UST",
    icon: comp,
    iconBg: "white",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining backend services and APIs using Node.js and Express.js, ensuring efficient data flow and robust application performance.",
      "Designing and implementing RESTful APIs for seamless communication between the frontend and backend systems.",
      "Ensuring optimal database management by integrating Node.js applications with databases like MongoDB, MySQL, or PostgreSQL.",
      
    ],
  },
  {
    title: "Spring Boot Developer",
    company_name: "UST",
    icon: comp,
    iconBg: "white",
    date: "September 2024 - Present",
    points: [
      "Developing and Maintaining RESTful APIs: Create and manage RESTful services and endpoints using Spring Boot, supporting both front-end and mobile applications.",
      "Building Scalable Microservices: Design and develop microservices architecture, utilizing Spring Boot to ensure seamless communication between services.",
      "Database Integration: Work with databases like MySQL, PostgreSQL, and MongoDB using Spring Data JPA or Spring Data MongoDB, focusing on efficient data handling and transactions.",
      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Flexi-work",
    description:
      "Web-based platform that helps a large companys to manage workspaces, parking slots, events, and employee feedback more efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: parking,
    source_code_link: "https://github.com/sudeepnn/Flexi-Work",
  },
  {
    name: "Snapspace",
    description:
      "Andriod mobile application that enables  students, faculty, and staff to reserve and manage event spaces on campus.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "andriod studio",
        color: "pink-text-gradient",
      },
    ],
    image: snapspace,
    source_code_link: "https://github.com/sudeepnn/venuebooking",
  },
  {
    name: "Chat Angle",
    description:
      "A Web application offers users the ability to create anonymous chat rooms, facilitating private and unrestricted conversations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: chatangel,
    source_code_link: "https://sudeepnn.github.io/chat_angel/",
  },
];

export { services, technologies, experiences, testimonials, projects };
