import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "M A Ravishankar",
  initials: "MARS",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:(
    <>
    I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2+ years of hands-on experience, I have industrial knowledge of technologies such as React,js, Node,js, MongoDB, GraphQL, REST API etc to build scalable full stack apllications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "https://rav3-s.github.io/portfolio/",
  contact: {
    email: "ravishankar.ma34@gmail.com",
    tel: "+91847117176",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rav3-S",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ma-ravishankar/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Govt. Model Engineering College, Thrikkakara",
      degree: "B.Tech in Computer Science Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "IBS Software",
      link: "https://www.ibsplc.com/",
      badges: [],
      title: "Full Stack Developer",
      start: "2022",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Developed and maintained internal developer applications, providing bug fixes and technical support for clients,
            enhancing system stability by 25%
            </li>
            <li>
            Led UI design and implementation for client dashboards, improving user experience
            </li>
            <li>
            Collaborated with cross-functional teams to integrate new authentication mechanisms for a seamless SSO
            experience between internal developer applications
            </li>
            <li>
            Wrote comprehensive unit tests for all code to ensure high test coverage, maintain code quality, and minimize bugs
            in production
            </li>
            <li>
            Successfully migrated legacy systems, including Vault and Jenkins, to GitHub Actions, reducing deployment time
            by 20%
            </li>
            <li>
            Fixed 200+ security vulnerabilities and integrated a vulnerability tracking system, improving security visibility
            across development pipelines
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "GraphQL",
    "C++",
    "MongoDB",
  ],
  projects: [
    {
      title: "Expense GQL",
      techStack: [
        "TypeScript",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "GraphQL",
      ],
      description: ["A full-stack expense management web application using GraphQL APIs, resulting in optimized data fetching and enhanced user experience. Integrated data visualization using charts to present real-time financial insights for users"],
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Rav3.me",
      techStack: ["React.js", "Tailwind", "Framer Motion"],
      description:["My personal website/portfolio. Built with React and framer motion for showcasing my ablities. Features responsive design with animations for a smooth and modern user experience."],
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;