'use client';
import Hero from "./sections/hero"
import CardsArea from "./sections/cardsArea";
import Card from "./components/card";
import Interested from "./sections/interested";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";
import { aboutMeTitle, aboutMeValues } from "./data/about";
import BubblesArea from "./components/bubbleArea";
import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import { useState } from "react";

function Main() {
  return (
      <main style={{ marginTop: -70 }}>
        <Hero/>
        <CardsArea
          {...aboutMeTitle}
          id="about"
          padding={false}
        >
          {aboutMeValues.map((v, i) => Card({ key: "about-key-" + i,...v}))}
        </CardsArea>
        <Projects/>
        <SkillsSection/>
        <Interested/>
      </main>
  )
}
function BlurIfGameActivated(Component: React.JSX.Element, gameActivated: boolean) {
  return (
    <div className={gameActivated ? "blur-md" : ""}>
      {Component}
    </div>
  )
}

export default function Home() {
  const [gameActivated, setGameStatus] = useState<boolean>(false);

  return (
    <>
      <BubblesArea config={{ setGameStatus: setGameStatus, gameActivated: true }}/>
      {BlurIfGameActivated(Navbar(), gameActivated)}
      {BlurIfGameActivated(Main(), gameActivated)}
      {BlurIfGameActivated(Footer(), gameActivated)}
    </>
  );
}
