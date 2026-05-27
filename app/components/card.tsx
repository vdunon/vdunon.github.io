import Image from "next/image"
import React, { ReactNode } from "react";

interface CardParams {
    title: string;
    key?: string;
    description?: string;
    children?: ReactNode;
    img: string;
    imgAlt: string;
    imgWidth?: number;
    imgHeight?: number;
}

export default function Card({
    title,
    key = '',
    description,
    children,
    img,
    imgAlt,
    imgWidth = 40,
    imgHeight = 40
}: CardParams)
{
    return (
        <div
            className="relative overflow-hidden bg-background p-0.5 rounded-lg shadow-sm hover:scale-102 hover:shadow-md transition duration-300 group"
            key={key}
        >
            <div className="absolute inset-0 w-full h-full bg-(image:--gradient-main) left-0 -translate-x-[99%] group-hover:translate-0 transition-transform pointer-events-none z-0 duration-500" />
            <div className="relative z-10 bg-background rounded-lg p-2 md:p-4 h-full md:flex md:flex-row md:justify-start transition-colors duration-500 delay-200">
                <div className="flex flex-row">
                    <Image
                        src={img}
                        alt={imgAlt}
                        width={imgWidth}
                        height={imgHeight}
                    />
                    <h4 className="flex flex-col text-nowrap justify-center text-xl pl-4">{title}</h4>
                </div>
                <div className="mt-1 md:mt-0 md:ml-10 md:self-center">
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
