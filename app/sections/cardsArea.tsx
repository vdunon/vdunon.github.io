import { ReactNode } from "react";
import SectionTitle from "../components/sectionTitle";

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
}: CardsAreaParams)
{
    return (
        <section id={id} className={padding ? "pt-10" : ""}>
            <SectionTitle title={title}/>
            <h3 className="text-gray-600 mb-10 mt-5 text-center">{subtitle}</h3>
            <div className={`grid gap-2`}>
                {children}
            </div>
        </section>
    )
}