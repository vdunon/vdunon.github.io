'use client';
import { useState } from "react";
import SectionTitle from "../components/sectionTitle";
import SkillTabsRow from "../components/skillTabsRow";
import { SkillCategory, skillCategorySubtitle } from "../data/skills";
import SkillsDisplay from "../components/skillDisplay";

export default function SkillsSection() {
    const [currentCategory, setCategory] = useState<SkillCategory>("Web");
    const subtitle = skillCategorySubtitle;

    return (
        <section>
            <div>
                <SectionTitle title={"Skills"}/>
                <h3 className="text-gray-600 mb-10 mt-5 text-center">{subtitle}</h3>
            </div>
            <div className="flex flex-col gap-y-2">
                <SkillTabsRow
                    skills={["Web", "Programming", "Databases", "DevOps", "OS", "Tools"]}
                    updateActive={setCategory}
                    active={currentCategory}
                />
                <SkillTabsRow
                    skills={["DevOps", "OS", "Tools", "Web", "Programming", "Databases"]}
                    toRight={true}
                    updateActive={setCategory}
                    active={currentCategory}
                />
            </div>
            <SkillsDisplay activeCategory={currentCategory}/>
        </section>
    )
}