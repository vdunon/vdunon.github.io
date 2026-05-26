import "../css/marquee.css";

function SkillTab({ title, key }: {title: string, key:string}) {
    return (
        <li className="transition active:scale-95 inline-block w-[180px] flex-shrink-0 cursor-pointer bg-(image:--gradient-main) p-px rounded-lg" key={key}>
            <div className="hover:bg-(image:--gradient-main) text-[#9153E3] hover:text-white bg-background rounded-lg p-2 h-full">
                <h4 className="flex flex-col text-xl text-center">{title}</h4>
            </div>
        </li>
    )
}
export default function SkillTabsRow({skills, toRight=false}:
    {skills: string[], toRight?: boolean})
{
    const skillItems = skills.map((v, i) => SkillTab({ title: v, key: "skills-1-" + i}));
    const skillItems2 = skills.map((v, i) => SkillTab({ title: v, key: "skills-2-" + i}));
    const animation = toRight ? "marquee-to-right" : "marquee-to-left";

    return (
        <div className="marquee-container w-full overflow-hidden flex select-none gap-2">
            <div className={`flex flex-row gap-2 ${animation}`}>
                <ul className={`flex flex-row gap-2`}>{skillItems}</ul>
                <ul className={`flex flex-row gap-2`} aria-hidden="true">{skillItems2}</ul>
            </div>
        </div>
    )
}
