'use client';
import { useEffect, useRef, useState } from "react";
import Button from "./button";

export interface BubblesConfig {
    maxWidth?: number;
    minWidth?: number;
    maxDuration?: number;
    minDuration?: number;
    maxBubbles?: number;
    gameActivated?: boolean;
    duration?: number;
    setGameStatus: Function;
}

interface BubblesAreaProps {
    config?: BubblesConfig;
}

export default function BubblesArea({ config }: BubblesAreaProps) {
    const finalConfig = {
        maxWidth: 50,
        minWidth: 20,
        maxDuration: 55,
        minDuration: 15,
        maxBubbles: 28,
        duration: 30,
        gameActivated: false,
        ...config
    } as const;

    const [isPermanentlyDisabled, setIsPermanentlyDisabled] = useState<boolean>(false);
    const isGameActive = isPermanentlyDisabled ? false : finalConfig.gameActivated;
    const areaRef = useRef<HTMLDivElement>(null);
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeleft] = useState<number>(finalConfig.duration);
    const [hasClickedAnyBubble, setHasClickedAnyBubble] = useState<boolean>(false);

    const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

    const handleExit = () => {
        config?.setGameStatus(false);
        setScore(0);
        setHasClickedAnyBubble(false);
        setTimeleft(finalConfig.duration);
    };

    const handlePermanentDisable = () => {
        setIsPermanentlyDisabled(true);
        handleExit();
    };

    useEffect(() => {
        if (!hasClickedAnyBubble || timeLeft <= 0 || !isGameActive) return;

        const timer = setInterval(() => {
            setTimeleft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [hasClickedAnyBubble, timeLeft, isGameActive]);

    useEffect(() => {
        if (hasClickedAnyBubble && timeLeft === 0) {
            handleExit();
        }
    }, [timeLeft, hasClickedAnyBubble]);

    useEffect(() => {
        const container = areaRef.current;
        if (!container) return;

        let isEffectAlive = true;
        const activeBubbles: { element: HTMLSpanElement; animation: Animation }[] = [];

        const maxBubbles = finalConfig.maxBubbles;
        const columns = Math.ceil(Math.sqrt(maxBubbles * (window.innerWidth / window.innerHeight)));
        const rows = Math.ceil(maxBubbles / columns);

        const createBubble = (index?: number) => {
            if (!container || !isEffectAlive) return;

            const element = document.createElement("span");
            element.className = "absolute rounded-full border border-purple-500/20 bg-gradient-to-br from-[#9153E3]/10 to-blue-500/5 shadow-[inset_0_4px_12px_rgba(255,255,255,0.15),0_4px_10px_rgba(0,0,0,0.02)] backdrop-blur-[0.5px] transition-property[width,height,opacity] duration-300";

            const size = randomValue(finalConfig.minWidth, finalConfig.maxWidth);
            const duration = randomValue(finalConfig.minDuration, finalConfig.maxDuration) * 1000;
            const isGoingLeft = Math.random() > 0.5;

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.left = "0px";

            let startX = isGoingLeft ? 110 : -15;
            let startY = randomValue(5, 90);

            if (index !== undefined) {
                const col = index % columns;
                const row = Math.floor(index / columns);
                const jitterX = (Math.random() - 0.5) * 12;
                const jitterY = (Math.random() - 0.5) * 12;
                startX = (col / columns) * 100 + jitterX;
                startY = (row / rows) * 85 + 5 + jitterY;
            }

            element.style.top = `${startY}%`;
            container.appendChild(element);

            const endX = isGoingLeft ? -15 : 110;
            const totalXDistance = endX - startX;

            const keyframes = [
                { transform: `translate3d(${startX}vw, 0, 0)` },
                { transform: `translate3d(${startX + totalXDistance * 0.25}vw, ${randomValue(-8, 12)}vh, 0)` },
                { transform: `translate3d(${startX + totalXDistance * 0.5}vw, ${randomValue(-15, 20)}vh, 0)` },
                { transform: `translate3d(${startX + totalXDistance * 0.75}vw, ${randomValue(-5, 15)}vh, 0)` },
                { transform: `translate3d(${endX}vw, ${randomValue(-10, 10)}vh, 0)` }
            ];

            const animation = element.animate(keyframes, {
                duration: index !== undefined ? duration * (Math.abs(totalXDistance) / 125) : duration,
                easing: "ease-in-out",
                fill: "forwards"
            });

            const bubbleData = { element, animation };
            activeBubbles.push(bubbleData);

            animation.onfinish = () => destroyBubble(bubbleData);

            if (isGameActive) {
                element.style.pointerEvents = "auto";
                element.style.cursor = hasClickedAnyBubble ? "pointer" : "default";

                element.addEventListener("click", () => {
                    if (element.style.opacity === "0") return;

                    animation.pause();
                    element.style.width = "0px";
                    element.style.height = "0px";
                    element.style.opacity = "0";

                    const durationInSeconds = duration / 1000;
                    let points = 1;
                    if (durationInSeconds < 20 || size < 25) points = 5;
                    else if (durationInSeconds < 25 || size < 35) points = 3;
                    setScore((prev) => prev + points);

                    if (!hasClickedAnyBubble) {
                        setHasClickedAnyBubble(true);
                        container.querySelectorAll("span").forEach((el) => {
                            (el as HTMLElement).style.cursor = "pointer";
                        });
                    }
                    setTimeout(() => destroyBubble(bubbleData), 300);
                });
            }
        };

        const destroyBubble = (bubble: { element: HTMLSpanElement; animation: Animation }) => {
            bubble.element.remove();
            const index = activeBubbles.indexOf(bubble);
            if (index > -1) activeBubbles.splice(index, 1);
            if (isEffectAlive) {
                createBubble();
            }
        };

        for (let i = 0; i < maxBubbles; i++) {
            createBubble(i);
        }

        return () => {
            isEffectAlive = false;
            activeBubbles.forEach((b) => {
                b.animation.cancel();
                b.element.remove();
            });
        };
    }, [finalConfig.maxBubbles, isGameActive, hasClickedAnyBubble]);

    useEffect(() => {
        window.addEventListener("keydown", (ev) => {
            if (score > 0 && ev.key == "Escape")
                handleExit();
        })
    }
)

    return (
        <div
            ref={areaRef}
            className={`fixed inset-0 w-full h-full overflow-hidden z-100 transition-colors duration-300 ${
                hasClickedAnyBubble ? "bg-white/60 backdrop-blur-sm pointer-events-auto" : "pointer-events-none"
            }`}
        >
            <style>{`.bubble-bg { pointer-events: ${isGameActive ? "auto" : "none"}; }`}</style>
            {hasClickedAnyBubble && (
                <>
                    <div className="absolute left-4 top-4 pointer-events-auto flex flex-col gap-2">
                        <Button onClick={handleExit}>Exit</Button>
                        <Button variant="secondary" onClick={handlePermanentDisable}>
                            Disable Minigame
                        </Button>
                    </div>
                    <div className="absolute right-4 top-4 px-4 py-2 bg-(image:--gradient-main) text-white font-bold rounded-lg shadow-md z-50 pointer-events-auto">
                        <p className="m-0">Score: {score}</p>
                    </div>
                    <div className="absolute right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] font-bold text-2xl text-gray-800 rounded-lg z-50 pointer-events-none">
                        <p className="m-0 text-center select-none">
                            Explode bubbles!
                            <br/>
                            Time left: {timeLeft}s
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}