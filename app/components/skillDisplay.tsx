import { skillCategories, SkillCategory } from "../data/skills";

interface SkillsDisplayProps {
    activeCategory: SkillCategory;
}

export default function SkillsDisplay({ activeCategory }: SkillsDisplayProps) {
    const { tags, description } = skillCategories[activeCategory];

    return (
        <div className="min-h-70 mt-12 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto px-4 select-none">
            <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start gap-4">
                {tags.map((tag, index) => (
                    <div
                        key={`${activeCategory}-${tag}-${index}`}
                        className="bg-white text-[#564ce6] font-semibold text-base px-6 py-3 rounded shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-default hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="w-full md:w-1/2 max-w-md pt-2">
                <p className="text-xl text-zinc-700 font-bold leading-relaxed text-center md:text-left transition-all duration-300">
                    {activeCategory}
                </p>
                <p className="text-lg text-zinc-700 font-bold leading-relaxed text-center md:text-left transition-all duration-300">
                    {description}
                </p>
            </div>
        </div>
    );
}