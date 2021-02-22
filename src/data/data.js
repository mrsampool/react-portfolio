import React from "react";

//Tech Icons
import adobeLogo from './techIcons/adobe.png';
import aiLogo from './techIcons/ai.png';
import atomLogo from './techIcons/atom.png';
import cssLogo from './techIcons/css.png';
import githubLogo from './techIcons/github.png';
import htmlLogo from './techIcons/html.png';
import jsLogo from './techIcons/js.png';
import prLogo from './techIcons/pr.png';
import psLogo from './techIcons/ps.png';
import reactLogo from './techIcons/react.png';
import wpLogo from './techIcons/wordpress.png';
import reactRouterLogo from './techIcons/reactRouter.svg';
import jestLogo from './techIcons/jest.png';
import mochaLogo from './techIcons/mocha.png';
import sassLogo from './techIcons/sass.png';
import bootstrapLogo from './techIcons/bootstrap.png';
import avadaLogo from './techIcons/avada.png';
import webstormLogo from './techIcons/webstorm.png';
import vscodeLogo from './techIcons/vscode.png';

//Project Images
//GWE
import gweLogo from './projImgs/gwe/GWElogo.png';
import gweDesktop from './projImgs/gwe/screens/gweDesktop.png'
import gweMobile from './projImgs/gwe/screens/gweMobile.png';

import lvrLogo from './projImgs/lvr/lvrLogo.png';
import lvrDesktop from './projImgs/lvr/screens/lvrDesktop.png'
import lvrMobile from './projImgs/lvr/screens/lvrMobile.png';

import txrLogo from './projImgs/txr/txrLogo.png';
import txrDesktop from './projImgs/txr/screens/txrDesktop.png';
import txrMobile from './projImgs/txr/screens/txrMobile.png';

import btLogo from './projImgs/bt/btLogo.png';
import btDesktop from './projImgs/bt/screens/btDesktop.png';
import {icons} from "../components/icons/icons";

export const tech = {
    react: {
        name: 'React.js',
        icon: reactLogo
    },
    reactRouter: {
        name: 'React Router',
        icon: reactRouterLogo
    },
    js: {
        name: 'JavaScript',
        icon: jsLogo,
    },
    jest: {
        name: 'Jest',
        icon: jestLogo
    },
    mocha: {
        name: 'Mocha',
        icon: mochaLogo
    },
    sass: {
        name: 'SASS',
        icon: sassLogo
    },
    bootstrap: {
        name: 'Bootstrap 4',
        icon: bootstrapLogo
    },
    css: {
        name: 'CSS3',
        icon: cssLogo
    },
    html: {
        name: 'HTML5',
        icon: htmlLogo
    },
    gitHub: {
        name: 'GitHub',
        icon: githubLogo
    },
    wordPress: {
        name: 'WordPress',
        icon: wpLogo
    },
    avada: {
        name: 'Avada',
        icon: avadaLogo
    },
    photoshop: {
        name: 'Adobe Photoshop',
        icon: psLogo
    },
    premiere: {
        name: 'Adobe Premiere',
        icon: prLogo
    },
    illustrator: {
        name: 'Adobe Illustrator',
        icon: aiLogo
    },
    webstorm: {
        name: 'Webstorm',
        icon: webstormLogo
    },
    vscode: {
        name: 'VS Code',
        icon: vscodeLogo
    }
}

export const projects = {
    gwe: {
        title: 'The Global Warming Express',
        subtitle: 'Online Learning App',
        logo: gweLogo,
        descr: [
            `Educational web app developed for the non-profit organization The Global Warming Express, an organization which educates children ages 9-12 about the impacts of global warming and related topics.`,
            `The app features educational material used in the organization's curriculum which users can read from cover to cover. These materials include audio narration as well as the visual pages and include optional spanish translations.`,
            `The app is on track to launch as an aspect of the science and social studies curriculum in several public schools throughout New Mexico in 2021.`
        ],
        tech:[
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
            tech.photoshop
        ],
        screenshots:{
            desktop: gweDesktop,
            mobile: gweMobile
        },
        demo: 'https://gwe-olp.netlify.app/#/',
        code: 'https://github.com/mrsampool/gwe'
    },
    lvr: {
        title: 'L & V Rentals',
        subtitle: 'Real Estate Listing App',
        logo: lvrLogo,
        descr: [
            `Web app showcasing the current rental properties from Texas-based real estate firm 'L&V Renatals'.`,
            `The app features filters for price, unit size, and property types, as well as a listing of all properties currently offered by the firm.`,
            `Each listing contains photos of the property, an interactive map via the Google Maps API, and key details about the property's units.`,
            `As well as all web development work, I also designed the company's branding from scratch and shot all property photos.`
        ],
        tech:[
            tech.react,
            tech.js,
            tech.css,
            tech.html,
            tech.gitHub
        ],
        screenshots:{
            desktop: lvrDesktop,
            mobile: lvrMobile
        },
        app: 'https://www.landvrentals.com/',
        code: 'https://github.com/mrsampool/lvrentals'
    },
    txr:{
        title: 'TX Ranch RV Resort',
        subtitle: 'Brochure Site',
        logo: txrLogo,
        descr: [
            `Brochure site showcasing the attractions of the Dallas/Fort-Worth-area RV-resort.`,
            `The site features photos of the resort, a resort map, a list of amenities, and pricing details. The site also features a list of attractions in the Dallas/Fort-Worth-area including nearby professional sports arenas, museums, etc.`,
            `As well as all web development, I also developed the resort's branding from scratch, and designed a slew of promotional marketing materials ranging from the resort map and navigation signage to the billboard announcing the resort on Texas' highway US-67.`
        ],
        tech:[
            tech.wordPress,
            tech.avada,
            tech.illustrator
        ],
        screenshots:{
            desktop: txrDesktop,
            mobile: txrMobile
        },
        site: 'https://txranchresort.com/',
    },
    bt:{
        title: 'BetaTron Electronics',
        subtitle: 'Brochure Site',
        logo: btLogo,
        descr: [
            `Brochure site showcasing the abilites and services of the Electronics manufacturer.`,
            `The site features photography of the company's manufacturing plant as well as information on the different types of manufacturing that the company specializes in, and a list of their certifications.`,
            `As well as the web development work, I also produced a promotional video for the company which is displayed on the website's homepage.`
        ],
        tech: [
            tech.html,
            tech.css,
            tech.premiere
        ],
        screenshots: {
            desktop: btDesktop
        },
        site: 'http://www.betatronelectronics.com/'
    }
}

export const connect = [
    {
        svg: icons.email,
        link: 'mailto:sambpool@gmail.com',
        name: 'email'
    }
]
