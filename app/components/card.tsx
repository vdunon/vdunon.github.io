import Image from "next/image"
import React, { ReactNode } from "react";

interface CardParams {
    title: string;
    description?: string;
    children?: ReactNode;
    img: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
}

export default function Card({
    title,
    description,
    children,
    img,
    imgAlt,
    imgWidth,
    imgHeight
}: CardParams)
{
    return (
        <div className="bg-(image:--gradient-main) p-px rounded-lg">
            <div className="bg-background rounded-lg p-2 h-1/1">
                <div className="flex flex-row">
                    <Image
                        src={img}
                        alt={imgAlt}
                        width={imgWidth}
                        height={imgHeight}
                    />
                    <h4 className="flex flex-col justify-center text-xl pl-4">{title}</h4>
                </div>
                <div>
                    {
                    (description)
                        && <p className="text-gray-700">{description}</p>
                    }
                    { children }
                </div>
            </div>
        </div>
    )
}
