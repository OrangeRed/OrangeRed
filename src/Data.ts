export const SITE_TITLE = "Dmitriy Kagno Software Engineer"
export const SITE_DESCRIPTION = "Dmitriy Kagno is a software engineer"

// Icons from https://icon-sets.iconify.design/
export const SOCIAL_LINKS = [
  {
    title: "Github",
    icon: "fa:github",
    url: "https://github.com/OrangeRed",
  },
  {
    title: "LinkedIn",
    icon: "fa-brands:linkedin-in",
    url: "https://www.linkedin.com/in/dmitriy-kagno/",
  },
  {
    title: "Resume",
    icon: "fa:file",
    url: "http://DmitriyKagno.me/Resume_Dmitriy_Kagno.pdf",
  },
]

export const AVATAR = {
  src: "/me/Dmitriy_Kagno_Avatar.png",
}

export const ABOUT_ME = {
  title: "Hi! I'm Dmitriy",
  description: [
    "🌎 I am based in NYC",
    "💻 I currently work for @EcogyEnergy",
    "🧪 I love science, technology and trying new things",
    "🇯🇵 I am learning Japanese in my free time through immersion",
    "🇦 I use Arch by the way.",
  ],
  currentJob: {
    name: "EcogyEnergy",
    url: "https://EcogyEnergy.com",
  },
}

export const TOOL_BOX = [
  {
    title: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    title: "React",
    icon: "/icons/react.svg",
  },
  {
    title: "TailwindCSS",
    icon: "/icons/tailwindcss.svg",
  },
  {
    title: "Javascript",
    icon: "./icons/javascript.svg",
  },
  {
    // https://astro.build/press/
    title: "Astro",
    icon: "/icons/astro-dark.svg",
  },
  {
    title: "Arch Linux",
    icon: "/icons/archlinux-256.svg",
  },
  {
    title: "Next.js",
    icon: "/icons/nextjs.png",
  },
  {
    title: "Node.js",
    icon: "/icons/nodejs.svg",
  },

  {
    title: "AWS",
    icon: "/icons/amazon-aws.svg",
  },
]

export const PROJECTS = [
  {
    title: "Image OCR Translator",
    githubUrl: "https://github.com/OrangeRed/image-ocr-translator",
    description:
      "Allows users to extract words from images using OCR technology.",
    tags: [
      //
      "React",
      "Material UI",
      "Node.js",
    ],
    // tags: [
    //   "Allows users to extract words from images using OCR technology.",
    //   "Uses Google Translate API to serve translations of extracted words.",
    //   "React web application with Nodejs backend to handle server calls.",
    //   "Front end designed using React Material UI and styled-components.",
    // ],
  },
  {
    title: "Twenty Four",
    githubUrl: "https://github.com/OrangeRed/TwentyFour",
    liveUrl: "https://orangered.github.io/TwentyFour/",
    description: "Endlessly practice arithmetic with random number generation.",
    tags: [
      //
      "Javascript",
      "Accessibility",
    ],
    // tags: [
    //   "Enables users to endlessly practice arithmetic with random number generation.",
    //   "Uses backtracking to ensure solutions are straightforward and open-ended.",
    //   "Built to be accessible on almost any device, computer or mobile.",
    //   "Simple Javascript and CSS application hosted on Github.",
    // ],
  },
]
