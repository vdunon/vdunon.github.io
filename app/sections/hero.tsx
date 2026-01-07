import Image from "next/image";
import Button from "../components/button";
import Social from "../components/social";
import "../css/hero.css";

export default function Hero()
{
    return (
        <header className="hero">
            <div className="h-1/1 flex flex-row hero-cols">
                <div className="flex flex-col justify-center">
                    <div className="">
                        <h1 className="title">Valentin DUNON</h1>
                        <h2 className="subtitle">Epitech Student</h2>
                    </div>
                    <h3 className="text-[1.5em] py-10">
                        A future expert involved inside new technologies industry.
                    </h3>
                    <div className="grid grid-cols-2 gap-5 py-4 w-max">
                        <Button variant="primary" href="#about">Discover Me</Button>
                        <Button
                        variant="tertiary"
                        href="/documents/CV_assistant_chef_de_projet_it_Valentin_DUNON.pdf"
                        download={true}
                        >
                        Upload CV
                        </Button>
                    </div>
                    <div className="flex gap-5">
                        <Social social="Github" link="https://github.com/vdunon/"/>
                        <Social social="LinkedIn" link="https://www.linkedin.com/in/valentin-dunon/"/>
                        <Social social="Email" link="mailto:vdunon91@gmail.com"/>
                    </div>
                </div>
                <div className="hidden md:flex content-center">
                    <Image
                        className="-ml-5 max-h-6/10 self-center"
                        src="/images/hero_image.svg"
                        alt="A man sitting near a desk"
                        width={3000}
                        height={3000}
                        sizes="100%"
                        priority
                    />
                </div>
            </div>
            <Image
                className="absolute -z-1 top-[50dvh] -translate-y-1/2 opacity-3"
                src="/icons/logo_portfolio.png"
                alt="Logo"
                width={512}
                height={512}
                sizes="100%"
                priority
            />
            <a
            href="#about"
            className="block absolute top-[100dvhh] left-1/2 ml-[-12.5px]
            mb-10 self-center animate-bounce bg-(image:--gradient-main) p-px rounded-[100%]">
                <div className="bg-background p-1 rounded-[100%]">
                    <Image
                        className="bg-(--gradient-main)"
                        src="/icons/arrow.svg"
                        alt="Scroll down button"
                        width={25}
                        height={25}
                        sizes="100%"
                        priority
                    />
                </div>
            </a>
        </header>
    )
}