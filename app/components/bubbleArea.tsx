'use client';
import { useEffect, useRef, useState } from "react";

export interface BubblesConfig {
    maxWidth?: number; // px
    minWidth?: number; // px
    maxDuration?: number; // secondes
    minDuration?: number; // secondes
    maxBubbles?: number;
    gameActivated?: boolean;
}

interface BubblesAreaProps {
    config?: BubblesConfig;
}

const bubbleStyle: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(145, 83, 227, 0.15), rgba(59, 130, 246, 0.1))",
    border: "1px solid rgba(145, 83, 227, 0.25)",
    boxShadow: "inset 0 4px 12px rgba(255, 255, 255, 0.2), 0 4px 10px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)",
    mixBlendMode: "difference"
};

export default function BubblesArea({ config }: BubblesAreaProps) {
    const finalConfig = {
        maxWidth: 50,
        minWidth: 20,
        maxDuration: 55,
        minDuration: 15,
        maxBubbles: 20,
        gameActivated: false,
        ...config
    };

    const areaRef = useRef<HTMLDivElement>(null);
    const [score, setScore] = useState<number>(0);
    const [hasClickedAnyBubble, setHasClickedAnyBubble] = useState<boolean>(false);

    const randomValue = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    useEffect(() => {
        const container = areaRef.current;
        if (!container) return;

        const activeBubbles: { element: HTMLSpanElement; animation: Animation }[] = [];

        const createBubble = (isInitial = false) => {
            if (!container) return;

            const element = document.createElement("span");

            const size = randomValue(finalConfig.minWidth, finalConfig.maxWidth);
            const duration = randomValue(finalConfig.minDuration, finalConfig.maxDuration) * 1000; // ms
            const direction = Math.random() > 0.5 ? "left" : "right";

            const startX = isInitial ? randomValue(0, 90) : -10;

            Object.assign(element.style, bubbleStyle);
            element.style.position = "absolute";
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.borderRadius = "50%";
            element.style.top = `${randomValue(5, 95)}%`;
            element.style.cursor = finalConfig.gameActivated && hasClickedAnyBubble ? "pointer" : "default";

            container.appendChild(element);

            const keyframes = [
                {
                    [direction]: `${startX}vw`,
                    transform: `translate(${direction === "left" ? "-100%" : "100%"}, 0)`
                },
                { transform: `translateY(${randomValue(-5, 5)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-15, 15)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-10, 10)}vh)` },
                { transform: `translateY(${randomValue(-5, 5)}vh)` },
                {
                    [direction]: `110vw`,
                    transform: `translate(${direction === "left" ? "-100%" : "100%"}, ${randomValue(-10, 15)}vh)`
                }
            ];

            const animation = element.animate(keyframes, {
                duration: duration,
                easing: "ease-in-out",
                fill: "forwards"
            });

            const bubbleData = { element, animation };
            activeBubbles.push(bubbleData);

            animation.onfinish = () => {
                destroyBubble(bubbleData);
            };

            if (finalConfig.gameActivated) {
                element.addEventListener("click", () => {
                    animation.pause();

                    element.style.transition = "all 0.5s ease";
                    element.style.width = "0px";
                    element.style.height = "0px";
                    element.style.opacity = "0";

                    const durationInSeconds = duration / 1000;
                    let points = 1;
                    if (durationInSeconds < 20 || size < 25) points = 5;
                    else if (durationInSeconds < 25 || size < 35) points = 3;
                    else if (durationInSeconds < 35 || size < 40) points = 2;

                    setScore((prev) => prev + points);

                    if (!hasClickedAnyBubble) {
                        setHasClickedAnyBubble(true);
                        container.querySelectorAll(".bubble-bg").forEach((el) => {
                            (el as HTMLElement).style.cursor = "pointer";
                        });
                    }

                    setTimeout(() => {
                        destroyBubble(bubbleData);
                    }, 500);
                });
            }
        };

        const destroyBubble = (bubble: { element: HTMLSpanElement; animation: Animation }) => {
            bubble.element.remove();
            const index = activeBubbles.indexOf(bubble);
            if (index > -1) activeBubbles.splice(index, 1);

            createBubble(false);
        };

        for (let i = 0; i < finalConfig.maxBubbles; i++) {
            createBubble(true);
        }

        return () => {
            activeBubbles.forEach((b) => b.element.remove());
        };
    }, [finalConfig.maxBubbles, finalConfig.gameActivated, hasClickedAnyBubble]);

    return (
        <div
            ref={areaRef}
            id="bubble-bg"
            className="absolute inset-0 h-full overflow-hidden pointer-events-none z-0 -ml-[var(--main-x-padding)]"
        >
            <style>{`
                .bubble-bg {
                    pointer-events: ${finalConfig.gameActivated ? "auto" : "none"};
                }
            `}</style>
            {finalConfig.gameActivated && (
                <div
                    id="bubble-game-score"
                    className="absolute right-4 top-4 px-4 py-2 bg-white text-slate-900 font-bold rounded-lg shadow-md z-50 select-none pointer-events-auto"
                >
                    <p className="m-0">Score: {score}</p>
                </div>
            )}
        </div>
    );
}
