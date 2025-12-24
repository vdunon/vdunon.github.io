import { ReactNode } from "react";
import SectionTitle from "../components/section_title";

interface CardsAreaParams {
    children: ReactNode;
    title: string;
    subtitle: string;
}

export default function CardsArea({
    children,
    title,
    subtitle
}: CardsAreaParams)
{
    return (
        <section className="pt-10">
            <SectionTitle title={title}/>
            <h3 className="text-gray-600 pb-10 pt-5 text-center">{subtitle}</h3>
            <div className="grid grid-cols-3 gap-15">
                {children}
            </div>
        </section>
    )
}