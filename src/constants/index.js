import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK = "https://docs.google.com/document/d/1i_USkZyBm9Hmlol9UjwavaW0UHiAzNQ4/edit?usp=drive_link&ouid=100785526010575586039&rtpof=true&sd=true";
export const REPO_LINK = "https://github.com/JaipalrK";

export const CONTENT = {
    navs: [
        {
            link: "#skills",
            title: "Skills & Experience",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },
        // {
        //     link: "#openSrc",
        //     title: "Open Source",
        // },
        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "JAIPAL",
        LastName: "REDDY",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Developer based in USA. UI/UX Designer.",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2023",
    },
};

export const ABOUT_ME = {
    name: "JAIPAL REDDY K",
    tagLine: "Insanely ambitious coder | SDE-1 | Open source contributor",
    intro: CONTENT.hero.hero_content.text
};
