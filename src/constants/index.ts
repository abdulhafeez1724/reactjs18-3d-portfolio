import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  python,
  django,
  restfullapi,
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  docker,
  starbucks,
  codematics,
  mobify,
  carrent,
  taxiapp,

} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Restfull API Creator",
    icon: restfullapi,
  },
];

const technologies: TTechnology[] = [

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Restfull API",
    icon: restfullapi,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer - Internship",
    companyName: "Codmatics. inc",
    icon: codematics,
    iconBg: "#383E56",
    date: "Sept  2021 - Nov 2021",
    points: [
      "At Codematics, I mastered the essentials of web development, diving deep into HTML, CSS, and JavaScript, while building dynamic web apps with Python Django in just 3 months.",
      "My internship at Codematics was a launchpad into the world of programming, where I gained hands-on experience with core technologies like HTML, CSS, JS, and Python Django.",
      "In just 3 months at Codematics, I went from zero to confidently developing websites and applications using HTML, CSS, JavaScript, and Python Django.",
    ],
  },

  {
    title: "Full Stack Developer",
    companyName: "M3hive",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2022 - Sept 2023",
    points: [
      "Experienced Python Django & React Developer | Full-Stack | RESTful APIs Experienced Python Django and React Developer with expertise in full-stack development, RESTful APIs, testing, and Agile methodologies.",
      "Python, Django, React, and database management. Proficient in version control and delivering high-quality web applications. Looking for opportunities to contribute and collaborate",
    ],
  },
  {
    title: "Python Django Developer",
    companyName: "Mobify",
    icon: mobify,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Working as a backend developer at Mobify, I am responsible for building and maintaining complex, high-performance systems using Python Django and GraphQL",
      "My expertise lies in creating robust and scalable RESTful APIs tailored for Android applications and game development platforms", 
      "By focusing on efficient database management, secure API endpoints, and seamless integration, I ensure that the applications can handle high volumes of traffic while delivering optimal user experiences. My role also involves close collaboration with front-end teams and developers, ensuring that backend logic and API functionalities align perfectly with the overall system architecture, providing a solid foundation for future growth and innovation.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "ABDUL HAFEEZ is best in thinking and solving complex problem in backend .",
    name: "Shanyar Khan",
    designation: "Site Project",
    company: "Freelance",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE8KQRV4_2plA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709843764543?e=1730332800&v=beta&t=-BNPOM8m5gKfOiplDH_tD1cNum-2g4nmWxyxAyAwTdI",
  },
];

const projects: TProject[] = [
  {
    name: "Ecommerce Store",
    description:
      "A modern online store built in HTML, CSS, and JavaScript and backend using Python Django.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/abdulhafeez1724/Online-market-place-in-django",
  },
  {
    name: "Real-Time Taxi App",
    description:
      "ride-sharing application that incorporates a React frontend with a Django backend in a Docker container The focus of this course is the real-time communication between client and server.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Django Channels",
        color: "yellow-text-gradient",
      },
      {
        name: "Redis ",
        color: "white-text-gradient",
      },
      {
        name: "WebSockets  ",
        color: "blue-text-gradient",
      },
    ],
    image: taxiapp,
    sourceCodeLink: "https://github.com/abdulhafeez1724/taxi-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
