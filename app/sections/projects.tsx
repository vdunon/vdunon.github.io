import SectionTitle from "../components/section_title";
import Image from "next/image";
import Social from "../components/social";

export default function Projects()
{
    return (
        <section className="relative -mx-[5dvw] bg-transparent-main my-10 py-10">
            <SectionTitle title="Projects"/>
            <div className="grid sm:grid-cols-2 px-10 gap-5">
                <div>
                    <SectionTitle title="Social Media - Outfit"/>
                    <p>
                        A social network dedicated to clothing and fashion where users can see and rate their friends' outfits to get inspiration for their next look.
                        <br/>
                        <br/>
                        Key features include login, infinite scroll, photo upload, ratings, photo galleries, profiles, fully responsive, and a follow system.
                    </p>
                    <div className="flex gap-5 mt-5">
                        <Social social="Github" link="https://github.com/vdunon/"/>
                        <Social social="LinkedIn" link="https://www.linkedin.com/in/valentin-dunon"/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                        className="right-5 top-5 rounded-lg"
                        src="/images/projects/outfit-1.png"
                        alt="Preview of the outfit project"
                        width={1920}
                        height={1080}
                        />
                    </div>
                </div>
            </div>
            <span className="absolute right-3 bottom-1.5">1/1</span>
        </section>
    )
}