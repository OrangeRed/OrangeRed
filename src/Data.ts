// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Dmitriy Kagno Software Engineer"
export const SITE_DESCRIPTION = "Dmitriy Kagno is a software engineer"

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
  src: "/Dmitriy_Kagno_Avatar.png",
  alt: "Dmitriy Kagno Avatar",
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

export const projects = [
  {
    title: "Image OCR Translator",
    url: "https://github.com/OrangeRed/image-ocr-translator",
    description: [
      "Allows users to extract words from images using OCR technology.",
      "Uses Google Translate API to serve translations of extracted words.",
      "React web application with Nodejs backend to handle server calls.",
      "Front end designed using React Material UI and styled-components.",
    ],
  },
  {
    title: "Twenty Four",
    url: "https://github.com/OrangeRed/TwentyFour",
    description: [
      "Enables users to endlessly practice arithmetic with random number generation.",
      "Uses backtracking to ensure solutions are straightforward and open-ended.",
      "Built to be accessible on almost any device, computer or mobile.",
      "Simple Javascript and CSS application hosted on Github.",
    ],
  },
]
