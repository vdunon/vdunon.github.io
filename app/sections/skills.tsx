import SectionTitle from "../components/sectionTitle";
import SkillTabsRow from "../components/skillTabsRow";

export default function SkillsSection() {
    const subtitle = "Discover what I've learned to use throughout my journey";

    return (
        <section>
            <SectionTitle title={"Skills"}/>
            <h3 className="text-gray-600 mb-10 mt-5 text-center">{subtitle}</h3>
            <SkillTabsRow/>
        </section>
    )
}