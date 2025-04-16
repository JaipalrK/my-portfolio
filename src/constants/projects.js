import spicykitchen_logo from '../assets/images/Projects/spicykitchen_logo.jfif';
import jrk_logo from '../assets/images/Projects/jrk_logo.avif'
import uber_logo from '../assets/images/Projects/uber_logo.png';

import {
    SiApachekafka,
    SiApachemaven,
    SiCss3,
    SiGooglefonts,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiPostgresql,
    SiSpringboot,
    SiSpringsecurity,
} from "react-icons/all";

export const PROJECTS = [
  {
    id: "project-200",
    title: "Spicy Kitchen - Cloud Kitchen Platform",
    // github: "https://github.com/Sudhanva-Nadiger/E-Hippo",
    // link: "https://e-hippo.vercel.app/",
    image: spicykitchen_logo,
    content:
      "Single-page cloud kitchen website with featured menu and login form! Built with HTML, CSS, and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "Html"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "Css"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      }
    ],
  },
  {
    id: "project-201",
    title: "JRK.AI – Tech Consulting & AI Solutions Site",
    // github: "https://github.com/Sudhanva-Nadiger/uncover",
    // link: "https://un-cover.vercel.app/",
    image: jrk_logo,
    content:
      "JRK.AI is a professional landing page website built for a tech consulting firm specializing in AI, cloud, and product engineering. The design focuses on modern UI/UX, animated elements, and clear communication of services and brand identity.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "Html"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "Css"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-3",
        icon: SiGooglefonts,
        name: "Googlefonts"
      }
    ],
  },
  {
    id: "project-100",
    title: "Uber - Ride Sharing Platform (Backend)",
    // github: "https://github.com/Sudhanva-Nadiger/blood-bank-management",
    // link: "https://sbn-bloodbank.onrender.com/",
    image: uber_logo,
    content:
      "This is a Spring Boot-based backend application designed to simulate key functionalities of a ride-sharing platform (like Uber). It leverages modern microservice and security practices using Spring Security, Spring Data JPA, Kafka, and Spring Cloud Gateway to build a scalable and secure backend system.",
    stack: [
      {
        id: "icon-1",
        icon: SiJava,
        name: "Java"
      },
      {
        id: "icon-2",
        icon: SiSpringboot,
        name: "Springboot"
      },
      {
        id: "icon-3",
        icon: SiSpringsecurity,
        name: "Springsecurity"
      },
      {
        id: "icon-4",
        icon: SiApachekafka,
        name: "Kafka"
      },
      {
        id: "icon-5",
        icon: SiApachemaven,
        name: "Maven"
      },
      {
        id: "icon-6",
        icon: SiPostgresql,
        name: "Postgresql"
      },
    ],
  }
]