import Image from "next/image";
import Button from "../components/button";
import SectionTitle from "../components/section_title";
import Social from "../components/social";

export default function Interested()
{
    return (
        <section className="pt-10">
            <SectionTitle title="Interested ?"/>
            <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex sm:flex-col justify-evenly gap-5 w-max ml-[50%] translate-x-[-50%]">
                    <div className="w-max">
                        <SectionTitle title="Contact Me :" centered={false} size={3}/>
                        <div className="flex gap-5">
                            <Social social="Github" link="https://github.com/vdunon/"/>
                            <Social social="LinkedIn" link="https://www.linkedin.com/in/valentin-dunon/"/>
                            <Social social="Email" link="mailto:vdunon91@gmail.com"/>
                        </div>
                    </div>
                    <div className="w-max">
                        <SectionTitle title="My Resume :" centered={false} size={3}/>
                        <div className="w-max">
                            <Button
                            variant="secondary"
                            href="/documents/CV_assistant_chef_de_projet_it_Valentin_DUNON.pdf"
                            download={true}
                            >
                            Upload CV
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Image
                    className="right-5 top-5"
                    src="/images/footer_image.svg"
                    alt="A man working"
                    width={759}
                    height={512}
                    />
                </div>
            </div>
        </section>
    )
}