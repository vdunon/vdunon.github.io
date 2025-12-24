import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface SocialParams {
    social: "Github" | "LinkedIn" | "Email";
    link: string;
    onClick?: MouseEventHandler;
}

export default function Social({
    social,
    link,
    onClick
}: Readonly<SocialParams>) {
    const styles = "block cursor-pointer border border-gray-600 p-1 rounded-md font-medium transition-all hover:translate-y-1";
    let src: string = "";

    if (social == "Github")
        src = "/logos/github.svg";
    else if (social == "LinkedIn")
        src = "/logos/linkedin.svg";
    else if (social == "Email")
        src = "/icons/mail.svg";
    return (
        <a
            onClick={onClick}
            className={`${styles}`}
            href={link}
            target="blank"
        >
            <Image
                className=""
                src={src}
                alt="Social media logo"
                width={25}
                height={25}>
            </Image>
        </a>
    );
}