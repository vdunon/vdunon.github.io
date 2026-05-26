import SkillTab from "./skillTab"

export default function SkillTabsRow()
{
    const skillCategories = [
        "Web", "Programming", "Databases", "DevOps", "OS", "Tools"
    ] as const;
    let skillItems = skillCategories.map((v) => SkillTab({ title: v }));

    return (
        <ul>{skillItems}</ul>
    )
}
