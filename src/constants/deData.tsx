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
    { link: "Dienste", hash: "#services" , icon: <SquareCode /> },
    { link: "Projekte", hash: "#projects" , icon: <FolderOpenDot /> }
    // { link: "Pricing", hash: "#pricing" , icon: <BadgeEuro /> },
];

export const cta = "Anstellen"

export const sectionTitles = [
    "Über 15 Jahre Erfahrung in der Full-Stack Entwicklung",
    "Wertschöpfung am",
    "Referenz auf Qualität",
    "Letzte Projekte",
]

export const services = [
    {
        title: 'Frontend',
        description: "Erstellung von Webanwendungen, die nicht nur funktional, sondern auch optisch ansprechend sind. Ich sorge dafür, dass Ihre Webanwendungen nicht nur Ihre geschäftlichen Anforderungen erfüllen, sondern auch Ihre Nutzer in Staunen versetzen.",
        icons: [
            { name: "Angular", logo: angular},
            { name: "React", logo: react},
            { name: "TypeScript", logo: typescript},
            { name: "JavaScript", logo: javascript}
        ]
    },
    {
        title: 'Backend',
        description: "Entwicklung leistungsstarker, skalierbarer und blitzschneller Serverlösungen, die Ihre Webanwendungen wie ein Uhrwerk laufen lassen und Ihnen den Wettbewerbsvorteil verschaffen, den Sie in der digitalen Landschaft benötigen.",
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
        description: "Weiterentwicklung des Internetbankings. Umsetzung Stories im Frontend sowie im Backend. Integration von Avaloq Komponenten.",
        technologies: ['Kotlin', 'Angular'],
    },
    {
        image: werbas,
        name: 'Werbas Holzgerlingen',
        period: 'July 2022 - Present',
        description: "Realisierung einer SAAS Applikation für Werkstattsoftware. Designed für Hochverfügbarkeit  und Skalierbarkeit auf Azure.",
        technologies: ['Angular', 'C#', 'Azure'],
    },
    {
        image: baloise,
        name: 'Basloise Versicherungen',
        period: 'July 2022 - Present',
        description: "Erneuerung des Cost Calculators für die Preisberechnung der Nutzung der internen Cloud Computing Platform",
        technologies: ['Kotlin', 'Angular'],
    },
    {
        image: zkb,
        name: 'Zürcher Kantonalbank',
        period: 'July 2022 - Present',
        description: "Erneuerung des Onboarding Prozesses für Privat- und Geschäftskunden. Design und Implementation Auto Identification.",
        technologies: ['Kotlin', 'Angular', 'Camunda'],
    },
    {
        image: zkb,
        name: 'Zürcher Kantonalbank',
        period: 'July 2022 - Present',
        description: "Design und Realisierung einer SPA-Portal Lösung zur Abwicklung von Kundenaufträgen.",
        technologies: ['Angular', '.NET/C#'],
    },
];

export const stats = [
    { label: "Kunden", value: 10 },
    { label: "Teams", value: 8 },
    { label: "Erfolgreiche Projekte", value: 21 },
];

export const price = {
    text: "",
    value: 0,
}

export const footerText = "Unterstützung von Unternehmen bei der Entwicklung anspruchsvoller und skalierbarer Softwareprodukte"

export const emailContact ={
    subject: "Kontakt von Codery website",
    text: "Hallo, Herr Manhart \n Ich würde gerne mehr über Ihre Dienstleistungen erfahren."
}
