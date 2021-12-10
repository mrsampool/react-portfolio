// Data
import {tech} from "./tech";

// Images
import timeTaggerLogo from "./projImgs/tt/TimeTagger-banner.png";
import ttDesktop from "./projImgs/tt/screens/ttDesktop.png";
import ttMobile from "./projImgs/tt/screens/ttMobile.png"
import gweLogo from "./projImgs/gwe/GWElogo.png";
import gweDesktop from "./projImgs/gwe/screens/gweDesktop.png";
import gweMobile from "./projImgs/gwe/screens/gweMobile.png";
import lvrLogo from "./projImgs/lvr/lvrLogo.png";
import lvrDesktop from "./projImgs/lvr/screens/lvrDesktop.png";
import lvrMobile from "./projImgs/lvr/screens/lvrMobile.png";
import txrLogo from "./projImgs/txr/txrLogo.png";
import txrDesktop from "./projImgs/txr/screens/txrDesktop.png";
import txrMobile from "./projImgs/txr/screens/txrMobile.png";
import asqDesktop from "./projImgs/asq/screens/asqDesktop.png";
import asqMobile from "./projImgs/asq/screens/asqMobile.png";
import asqLogo from "./projImgs/asq/asqLogo.png";

export const projects = {
  tt: {
    title: "TimeTagger",
    subtitle: "Fullstack Web App",
    logo: timeTaggerLogo,
    descr: [
      `TimeTagger is a full-stack web app which lets users clock their working time with tags keep track of time spent on different tasks, projects, or clients. I built this app from scratch by myself, originally during a 2-day MVP project, adding additional functionality intermittently since then.`,
      `The app features a ReactJS frontend, a NodeJS backend, and a PostgreSQL database. User authentication is implemented with PassportJS.`,
    ],
    tech: [
      tech.react,
      tech.reactRouter,
      tech.node,
      tech.express,
      tech.postgres,
      tech.passport,
      tech.jest,
      tech.js,
      tech.css,
      tech.html,
    ],
    screenshots: {
      desktop: ttDesktop,
      mobile: ttMobile
    },
    demo: "https://mysterious-plateau-64771.herokuapp.com/",
    code: "https://github.com/mrsampool/time-tagger",
  },
  asc: {
    title: "Ascent Squad",
    subtitle: "Mock E-Commerce Site",
    logo: asqLogo,
    logoBG: '##DCF763',
    descr: [
      `Mock e-commerce app frontend built with two other developers harnessing an existing API for the product data. As the most experienced with CSS, I led the global style decisions for the app, and provided the other two developers with guidance on styles for their UI elements.`,
      'The app achieved lighthouse scores in the 90s by optimizing our code and implementing a data caching algorithm to eliminate errors caused by the inconsistent 3rd-party API.',
      'The app was developed in a true Test-Driven workflow using Jest & React-Testing-Library. On completion the app had 87% test coverage.',
    ],
    tech: [
      tech.react,
      tech.reactRouter,
      tech.jest,
      tech.node,
      tech.express,
      tech.js,
      tech.css,
      tech.html,
    ],
    screenshots: {
      desktop: asqDesktop,
      mobile: asqMobile,
    },
    demo: "http://204.236.152.139/",
    code: "https://github.com/mrsampool/projCatwalk",
  },
  gwe: {
    title: "The Global Warming Express",
    subtitle: "Online Learning App (In Development)",
    logo: gweLogo,
    descr: [
      `Educational web app developed for the non-profit organization The Global Warming Express, an organization which educates children ages 9-12 about the impacts of global warming and related topics.`,
      `The app features educational material used in the organization's curriculum which users can read from cover to cover. These materials include audio narration as well as the visual pages and include optional spanish translations.`,
      `The app is on track to launch as an aspect of the science and social studies curriculum in several public schools throughout New Mexico in 2021.`,
    ],
    tech: [
      tech.react,
      tech.reactRouter,
      tech.jest,
      tech.mocha,
      tech.sass,
      tech.bootstrap,
      tech.js,
      tech.css,
      tech.html,
      tech.premiere,
      tech.photoshop,
    ],
    screenshots: {
      desktop: gweDesktop,
      mobile: gweMobile,
    },
    demo: "https://gwe-olp.netlify.app/#/",
    code: "https://github.com/mrsampool/gwe",
  },
  lvr: {
    title: "L & V Rentals",
    subtitle: "Real Estate Listing App",
    logo: lvrLogo,
    descr: [
      `Web app showcasing the current rental properties from Texas-based real estate firm 'L&V Renatals'.`,
      `The app features filters for price, unit size, and property types, as well as a listing of all properties currently offered by the firm.`,
      `Each listing contains photos of the property, an interactive map via the Google Maps API, and key details about the property's units.`,
      `As well as all web development work, I also designed the company's branding from scratch and shot all property photos.`,
    ],
    tech: [tech.react, tech.js, tech.css, tech.html, tech.gitHub],
    screenshots: {
      desktop: lvrDesktop,
      mobile: lvrMobile,
    },
    app: "https://www.landvrentals.com/",
    code: "https://github.com/mrsampool/lvrentals",
  },
  txr: {
    title: "TX Ranch RV Resort",
    subtitle: "Brochure Site",
    logo: txrLogo,
    descr: [
      `Brochure site showcasing the attractions of the Dallas/Fort-Worth-area RV-resort.`,
      `The site features photos of the resort, a resort map, a list of amenities, and pricing details. The site also features a list of attractions in the Dallas/Fort-Worth-area including nearby professional sports arenas, museums, etc.`,
      `As well as all web development, I also developed the resort's branding from scratch, and designed a slew of promotional marketing materials ranging from the resort map and navigation signage to the billboard announcing the resort on Texas' highway US-67.`,
    ],
    tech: [tech.wordPress, tech.avada, tech.illustrator],
    screenshots: {
      desktop: txrDesktop,
      mobile: txrMobile,
    },
    site: "https://txranchresort.com/",
  },
  /*
  bt: {
    title: "BetaTron Electronics",
    subtitle: "Brochure Site",
    logo: btLogo,
    descr: [
      `Brochure site showcasing the abilites and services of the Electronics manufacturer.`,
      `The site features photography of the company's manufacturing plant as well as information on the different types of manufacturing that the company specializes in, and a list of their certifications.`,
      `As well as the web development work, I also produced a promotional video for the company which is displayed on the website's homepage.`,
    ],
    tech: [tech.html, tech.css, tech.premiere],
    screenshots: {
      desktop: btDesktop,
    },
    site: "http://www.betatronelectronics.com/",
  },
   */
};