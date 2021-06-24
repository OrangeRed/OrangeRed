import { FaGithub, FaLinkedinIn, FaPencilAlt, FaCode, FaBookmark } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

export const socialLinks = [
  {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OrangeRed"
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/dmitriy-kagno/"
  },
  {
    title: "Email",
    icon: MdEmail,
    url: "mailto:Kagno.Dmitriy@gmail.com"
  },
  {
    title: "Resume",
    icon: IoMdDocument,
    url: "http://DmitriyKagno.me/images/Resume_Dmitriy_Kagno.docx"
  }
]

export const about = {
  title: "Dmitriy Kagno",
  image: {
      source: './images/profile.jpg',
      description: 'avatar'
  },
  description: [
    'Always curious and constantly learning.',
    'Love science, technology and the cutting edge.',
    'Passionate about problem solving and automating tasks.',
    'Currently working on side projects and solving coding challenges.',
    'During my free time you can find me immersing in and learning Japanese.'
  ]
}

export const interests = [
  {
    icon: FaPencilAlt,
    description: 'iOS, Android and Web App Design'
  },
  {
    icon: FaCode,
    description: 'Software Development and Lifecycle'
  },
  {
    icon: FaBookmark,
    description: 'Agile and Project Management'
  }
]

export const projects = [
  {
    title: "Image OCR Translator",
    url: "https://github.com/OrangeRed/image-ocr-translator",
    description: [
      'test 1',
      'test 2',
      'test 3'
    ]
  },
  {
    title: "Twenty Four Game",
    url: "https://github.com/OrangeRed/TwentyFour",
    description: [
      'test 1',
      'test 2',
      'test 3',
      'test 4',
      'test 5'
    ]
  },
]

