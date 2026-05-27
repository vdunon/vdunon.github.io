interface IAboutMeValue {
    title: string;
    description: string;
    img: string;
    imgAlt: string;
};

export const aboutMeValues: IAboutMeValue[] = [
    {
        title: "Strategic",
        description: "Instead of simply completing my tasks, I find smart ways to save time later. I’m always documenting.",
        img: "/icons/strategic.svg",
        imgAlt: "Strategic icon"
    },
    {
        title: "Self-Taught",
        description: "I love to discover new things by myself even when it is not linked to my school. By making formations, for example.",
        img: "/icons/learn.svg",
        imgAlt: "Learn icon"
    },
    {
        title: "Logic",
        description: "Always looking for problems to solve, whether in chess or in code ! I have a good code debugging logic.",
        img: "/icons/settings.svg",
        imgAlt: "Logic icon"
    }
] as const;
