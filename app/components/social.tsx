import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import { SocialLogosSrc, Social } from "../data/social";

type SocialParams = {
    social: Social;
    link: string;
    onClick?: MouseEventHandler;
}

export default function SocialClickable({
    social,
    link,
    onClick
}: Readonly<SocialParams>) {
    const styles = "block cursor-pointer border border-gray-600 p-1 rounded-md font-medium transition-all hover:translate-y-1";
    let src: string = SocialLogosSrc[social];

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