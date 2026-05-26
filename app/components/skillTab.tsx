export default function SkillTab({ title }: {title: string}) {
    return (
        <li>
            <div className="bg-(image:--gradient-main) p-px rounded-lg">
                <div className="bg-background rounded-lg p-2 h-1/1">
                    <div className="flex flex-row">
                        <h4 className="flex flex-col justify-center text-xl pl-4">{title}</h4>
                    </div>
                </div>
            </div>
        </li>
    )
}
