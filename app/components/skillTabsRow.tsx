import "../css/marquee.css";

function SkillTab({
    title,
    key,
    isActive,
    updateActive
}: {
    title: string,
    key: string,
    isActive: boolean,
    updateActive: Function
}) {
    const handleClick = () => updateActive(title);
    const textStyle = isActive ? "text-white" : "text-[#9153E3]";

    const contentClasses = isActive
        ? "bg-(image:--gradient-main) text-white"
        : "bg-background group-hover:bg-gradient-to-r group-hover:from-[#9153E3]/20 group-hover:to-blue-500/20";

    return (
        <li
            className="group w-[180px] flex-shrink-0 cursor-pointer bg-(image:--gradient-main) p-px rounded-lg transition active:scale-95 select-none list-none"
            onClick={handleClick}
            key={key}
        >
            <div className={`rounded-lg p-2 h-full transition-colors duration-300 flex items-center justify-center ${contentClasses}`}>
                <h4 className={`text-xl font-medium text-center transition-colors duration-300 ${textStyle}`}>
                    {title}
                </h4>
            </div>
        </li>
    );
}

type SkillTabsRowProps = {
    skills: string[];
    updateActive: Function;
    active: string;
    toRight?: boolean;
}

export default function SkillTabsRow({
    skills,
    updateActive,
    active,
    toRight=false
}: SkillTabsRowProps)
{
    const skillItems = skills.map((v, i) => SkillTab({
        title: v, key: "skills-1-" + i, updateActive, isActive: v == active }));
    const skillItems2 = skills.map((v, i) => SkillTab({
        title: v, key: "skills-2-" + i, updateActive, isActive: v == active }));
    const animation = toRight ? "marquee-to-right" : "marquee-to-left";

    return (
        <div className="marquee-container w-full overflow-hidden flex select-none gap-2 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
            <div className={`flex flex-row gap-2 ${animation}`}>
                <ul className={`flex flex-row gap-2`}>{skillItems}</ul>
                <ul className={`flex flex-row gap-2`} aria-hidden="true">{skillItems2}</ul>
            </div>
        </div>
    )
}
