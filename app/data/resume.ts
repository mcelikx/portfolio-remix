export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  date: string;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
  image?: string;
  tags: string[];
  title: string;
}

export const experience: Experience[] = [
  {
    company: "DCEY",
    companyUrl: "https://www.davetcokelbisemyok.com/",
    date: `Dec 2021 - Present`,
    dateRange: [new Date(2021, 12, 1)],
    description: `
      <p>
      Dress Sales and Rental platform
      </p>
    `,
    highlights: [
      `Prototyped and delivered a Remix + TailwindCSS application for external partners`,
      `Adoption of TypeScript in our React Native application`,
      `Dockerized the development workflow and tooling`,
      `... And we're just getting started!`
    ],
    image: `/images/testimonials/dcey.jpeg`,
    tags: [      "GraphQL",
    "NextJS",
    "React",
    "TailwindCSS",
    "TypeScript"],
    title: `Staff Engineer`
  },
  {
    company: "Prestige Arts",
    companyUrl: "https://prestigearts.joladev.com/",
    date: `Apr 2021 - Aug 2022`,
    dateRange: [new Date(2021, 4, 1), new Date(2022, 7, 15)],
    description: `
      <p>
      Visual Configurator and E-Commerce platform
      </p>
    `,
    // <p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>
    highlights: [
      `0% - 80% Containerized stack and development workflow`,
      `Introduced GraphQL and strongly types across services`,
      `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
      `Survey Framework, CSS Style Guide, Monorepo, Unit/E2E Testing, and more`
    ],
    image: `/images/testimonials/prestigearts.jpeg`,
    tags: [
      "GraphQL",
      "NextJS",
      "React",
      "TailwindCSS",
      "TypeScript"
    ],
    title: `Principal Engineer`
  },
  {
    company: "My Gym Assistant",
    companyUrl: "https://mygymassistant.com",
    date: `Feb 2016 - Apr 2021`,
    dateRange: [new Date("February 2016"), new Date("April 2021")],
    description: `<p>
      SaaS platform for Fitness and Health centers.
    </p>`,
    highlights: [
      `Content Management System; Pitched, prototyped, and delivered`,
      `Progressive Web App (PWA); Pitched, prototyped, and delivered`,
      `Lerna Monorepo; Pitched, prototyped, and delivered`,
      `CSS Overhaul; Pitched, prototyped, and delivered`,
      `Apollo Migration, Redux Migration, Checkout Overhaul, and many more...`
    ],
    image: `/images/testimonials/mygymassistant-favicon.jpeg`,
    tags: [
    ],
    title: `Staff Engineer`
  },
];

export interface Social {
  icon: string;
  title: string;
  url: string;
}

export const social: Social[] = [
  {
    icon: `/images/svg/envelope.svg`,
    title: `matthew.scholta`,
    url: `mailto:matthew.scholta@gmail.com`
  },
  // {
  //   icon: `/images/svg/phone.svg`,
  //   title: `(415) 722-7481`,
  //   url: `tel:+14157227481`
  // },
  {
    icon: `/images/svg/github.svg`,
    title: `visormatt`,
    url: `https://github.com/visormatt`
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `/in/MatthewScholta`,
    url: `https://www.linkedin.com/in/MatthewScholta`
  },
  {
    icon: `/images/svg/twitter.svg`,
    title: `@visormatt`,
    url: `https://twitter.com/visormatt`
  }
];
