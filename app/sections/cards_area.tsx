import { ReactNode } from "react";
import SectionTitle from "../components/section_title";

interface CardsAreaParams {
    children: ReactNode;
    title: string;
    subtitle: string;
    id?: string;
    colsClass?: string;
    padding?: boolean;
}

export default function CardsArea({
    children,
    title,
    subtitle,
    id,
    padding = true,
    colsClass = "sm:grid-cols-3"
}: CardsAreaParams)
{
    return (
        <section id={id} className={padding ? "pt-10" : ""}>
            <SectionTitle title={title}/>
            <h3 className="text-gray-600 mb-10 mt-5 text-center">{subtitle}</h3>
            <div className={`grid ${colsClass} gap-5 sm:gap-15`}>
                {children}
            </div>
        </section>
    )
}