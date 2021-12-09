import timeTaggerLogo from "./projImgs/tt/TimeTagger-banner.png";
import ttDesktop from "./projImgs/tt/screens/ttDesktop.png";
import gweLogo from "./projImgs/gwe/GWElogo.png";
import gweDesktop from "./projImgs/gwe/screens/gweDesktop.png";
import gweMobile from "./projImgs/gwe/screens/gweMobile.png";
import lvrLogo from "./projImgs/lvr/lvrLogo.png";
import lvrDesktop from "./projImgs/lvr/screens/lvrDesktop.png";
import lvrMobile from "./projImgs/lvr/screens/lvrMobile.png";
import txrLogo from "./projImgs/txr/txrLogo.png";
import txrDesktop from "./projImgs/txr/screens/txrDesktop.png";
import txrMobile from "./projImgs/txr/screens/txrMobile.png";
import {tech} from "./tech";

export const projects = {
  tt: {
    title: "TimeTagger",
    subtitle: "Fullstack Web App",
    logo: timeTaggerLogo,
    descr: [
      `TimeTagger is a full-stack web app which lets users clock their working time with tags keep track of time spent on different tasks, projects, or clients.`,
      `The app features a ReactJS frontend, a NodeJS backend, and a PostgreSQL database. User account creation and login are implemented with PassportJS.`,
      `The majority of this app was built from scratch in 2 days, with additional features added intermittently.`,
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
    },
    demo: "https://mysterious-plateau-64771.herokuapp.com/",
    code: "https://github.com/mrsampool/time-tagger",
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