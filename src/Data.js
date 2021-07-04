import {
  FaGithub,
  FaLinkedinIn,
  FaPencilAlt,
  FaCode,
  FaBookmark,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

export const socialLinks = [
  {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OrangeRed",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/dmitriy-kagno/",
  },
  {
    title: "Email",
    icon: MdEmail,
    url: "mailto:Kagno.Dmitriy@gmail.com",
  },
  {
    title: "Resume",
    icon: IoMdDocument,
    url: "http://DmitriyKagno.me/images/Resume_Dmitriy_Kagno.pdf",
  },
];

export const about = {
  title: "Dmitriy Kagno",
  image: {
    source: "./images/profile.png",
    description: "profile",
  },
  description: [
    "Born and raised in NYC.",
    "Padi certified open water scuba diver.",
    "Love science, technology and the cutting edge.",
    "Always curious and constantly exploring new domains.",
    "Passionate about problem solving and automating tasks.",
    "Currently working on side projects and solving coding challenges.",
    "During my free time you can find me immersing in and learning Japanese.",
  ],
};

export const interests = [
  {
    icon: FaPencilAlt,
    description: "iOS, Android and Web App Design",
  },
  {
    icon: FaCode,
    description: "Software Development and Lifecycle",
  },
  {
    icon: FaBookmark,
    description: "Agile and Project Management",
  },
];

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
];
