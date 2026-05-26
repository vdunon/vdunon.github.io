export type SkillCategory = "Web" | "Programming" | "Databases" | "DevOps" | "OS" | "Tools";

export type SkillData = {
    tags: readonly string[];
    description: string;
}

export const skillCategorySubtitle = "Discover what I've learned to use throughout my journey";

export const skillCategories: Record<SkillCategory, SkillData> = {
    "Web": {
        tags: [
            "TypeScript", "JavaScript", "EJS", "Node.js",
            "Express.js", "HTML", "CSS", "Figma", "PHP"
        ],
        description: "I specialize in website and API creation, handling everything from responsive UI design to backend development using frameworks like Express.js."
    },
    "Programming": {
        tags: [
            "Python", "C", "PHP", "Luau", "PyGame"
        ],
        description: "I have strong core programming fundamentals, allowing me to build efficient algorithms, logic systems, and full-stack software from scratch."
    },
    "Databases": {
        tags: [
            "MySQL", "MariaDB", "MongoDB", "PostgreSQL", "Supabase"
        ],
        description: "I am comfortable architecting both relational and non-relational database layers, including schema design, data persistence, and secure query management."
    },
    "DevOps": {
        tags: [
            "Docker", "Git", "GitHub", "GitHub Actions"
        ],
        description: "I practice clean version control, agile project tracking, and set up basic automation systems through continuous integration (CI/CD) pipelines."
    },
    "OS": {
        tags: [
            "Linux", "UNIX", "Windows"
        ],
        description: "I am familiar with unix-like system distributions, using shell environments, terminal commands, and managing local development systems."
    },
    "Tools": {
        tags: [
            "Bash", "Figma", "Discord.js", "Office Pack", "GitHub Projects"
        ],
        description: "I leverage automated scripting alongside specific libraries and creative tools to develop rich standalone apps, interactive media, and custom bot integrations."
    },
} as const;
