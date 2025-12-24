import Button from "../components/button";
import SectionTitle from "../components/section_title";
import Social from "../components/social";

export default function Interested()
{
    return (
        <section className="pt-10">
            <SectionTitle title="Interested ?"/>
            <SectionTitle title="Contact Me :"/>
            <div className="flex gap-5">
                <Social social="Github" link="https://github.com/Nostlix/"/>
                <Social social="LinkedIn" link="https://www.linkedin.com/in/valentin-dunon/"/>
                <Social social="Email" link="mailto:vdunon91@gmail.com"/>
            </div>
            <SectionTitle title="My Resume :"/>
            <Button variant="secondary">Upload CV</Button>
        </section>
    )
}