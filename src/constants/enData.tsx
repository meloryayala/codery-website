import {BadgeEuro, FolderOpenDot, SquareCode} from "lucide-react";
import vontobel from "/public/images/vontobel.jpg";
import werbas from "/public/images/werbas.jpg";
import baloise from "/public/images/baloise.jpg";
import angular from "/public/images/angular.svg";
import react from "/public/images/react.svg";
import typescript from "/public/images/typescript.svg";
import javascript from "/public/images/javascript.svg";
import kotlin from "/public/images/kotlin.svg";
import dotnet from "/public/images/dotnet.svg";
import database from "/public/images/database.svg";
import cypress from "/public/images/cypress.svg";
import zkb from "/public/images/zkb.png";


export const menuLinks = [
    { link: "Services", hash: "#services" , icon: <SquareCode /> },
    { link: "Projects", hash: "#projects" , icon: <FolderOpenDot /> }
    // { link: "Pricing", hash: "#pricing" , icon: <BadgeEuro /> },
];

export const cta = "Hire"

export const sectionTitles = [
    "Over 15 years of full stack development",
    "Adding Value On",
    "Reference Of Quality",
    "Latest projects",
]

export const services = [
    {
        title: 'Frontend',
        description: "Creating web applications that aren't just functional but also visually striking. I'll ensure your web applications not only meet your business needs but also leave your users in awe of the experience.",
        icons: [
            { name: "Angular", logo: angular},
            { name: "React", logo: react},
            { name: "TypeScript", logo: typescript},
            { name: "JavaScript", logo: javascript}
        ]
    },
    {
        title: 'Backend',
        description: "Building powerful, scalable, and lightning-fast server solutions that make your web applications perform like clockwork, giving you the competitive edge you need in the digital landscape.",
        icons: [
            { name: "Java/Kotlin", logo: kotlin},
            { name: "C#/.NET", logo: dotnet},
            { name: "Databases", logo: database},
            { name: "Test", logo: cypress}
        ]
    }
];

export const companies= [
    {
        image: vontobel,
        name: 'Bank Vontobel',
        period: 'July 2022 - Present',
        description: "Further development of internet banking. Implementation of stories in the frontend and backend. Integration of Avaloq components.",
        technologies: ['Kotlin', 'Angular'],
    },
    {
        image: werbas,
        name: 'Werbas Holzgerlingen',
        period: 'July 2022 - Present',
        description: "Realization of a SAAS application for workshop software. Designed for high availability and scalability on Azure.",
        technologies: ['Angular', 'C#', 'Azure'],
    },
    {
        image: baloise,
        name: 'Basloise Versicherungen',
        period: 'July 2022 - Present',
        description: "Renewal of the cost calculator for calculating the price of using the internal cloud computing platform.",
        technologies: ['Kotlin', 'Angular'],
    },
    {
        image: zkb,
        name: 'Zürcher Kantonalbank',
        period: 'July 2022 - Present',
        description: "Renewal of the onboarding process for private and business customers. Design and implementation of auto identification.",
        technologies: ['Kotlin', 'Angular', 'Camunda'],
    },
    {
        image: zkb,
        name: 'Zürcher Kantonalbank',
        period: 'July 2022 - Present',
        description: "Design and implementation of a SPA portal solution for processing customer orders.",
        technologies: ['Angular', '.NET/C#'],
    },
];

export const stats = [
    { label: "Clients", value: 10 },
    { label: "Teams", value: 8 },
    { label: "Successfull projects", value: 21 },
];

export const price = {
    text: "",
    value: 0,
}

export const footerText = "Helping business to build sophisticated and scalable software products"

export const emailContact ={
    subject: "Kontakt von Codery website",
    text: "Hallo, Herr Manhart \n I would like to know more about your services."
}
