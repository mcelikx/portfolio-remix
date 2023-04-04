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
    date: `Jun 2022 - Present`,
    dateRange: [new Date(2021, 6, 1)],
    description: `
      <p>
        Luxury segment dress rental and sales platform
      </p>
    `,
    highlights: [
      `Multi-language, multi-currency, multi-website support`,
      `Reservation system`,
      `Vendor integration`,
      `SEO improvements`,
    ],
    image: `/images/testimonials/dcey.jpeg`,
    tags: [     
      "React",
      "React Native",
      "PWA Studio (Adobe Commerce)",
      "GraphQL",
      "TailwindCSS",
    ],
    title: `Frontend & Mobile Developer`
  },
  {
    company: "Prestige Arts",
    companyUrl: "https://prestigearts.joladev.com/",
    date: `Dec 2021 - Jun 2022`,
    dateRange: [new Date(2021, 12, 1), new Date(2022, 6, 15)],
    description: `
      <p>
        B2B platform for customizing and ordering painting
      </p>
    `,
    // <p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>
    highlights: [
      `Pixel perfect design`,
    ],
    image: `/images/testimonials/prestigearts.jpeg`,
    tags: [
      "React",
      "PWA Studio (Adobe Commerce)",
      "GraphQL",
      "TailwindCSS",
    ],
    title: `Frontend Developer`
  },
  {
    company: "My Gym Assistant",
    companyUrl: "https://mygymassistant.com",
    date: `Jun 2020 - Dec 2021`,
    dateRange: [new Date("June 2020"), new Date("December 2021")],
    description: `<p>
      SaaS Platform for Fitness and Health Centers
    </p>`,
    highlights: [
      `Business Development`,
      `Employee, member and reservation management panel`,
      `Interactive fitness app`,
      `IOT Products`,
    ],
    image: `/images/testimonials/mygymassistant-favicon.jpeg`,
    tags: [
    ],
    title: `Co-Founder`
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
    title: `mcelik`,
    url: `mailto:mcelik@mygymassistant.com`
  },
  // {
  //   icon: `/images/svg/phone.svg`,
  //   title: `(415) 722-7481`,
  //   url: `tel:+14157227481`
  // },
  {
    icon: `/images/svg/github.svg`,
    title: `mcelikx`,
    url: `https://github.com/mcelikx`
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `mcelikx`,
    url: `https://www.linkedin.com/in/mcelikx`
  },
  {
    icon: `/images/svg/twitter.svg`,
    title: `@mcelik_x`,
    url: `https://twitter.com/mcelik_x`
  }
];
