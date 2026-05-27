import Hero from "./sections/hero"
import CardsArea from "./sections/cardsArea";
import Card from "./components/card";
import Interested from "./sections/interested";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";
import { aboutMeValues } from "./data/about";

export default function Home() {
  return (
    <main style={{ marginTop: -70 }}>
      <Hero/>
      <CardsArea
        title="About me"
        subtitle="Since the age of 12 years old, i’m passionated by new technologies. That’s why I started to learn coding by myself. Now I use what i learned into my school Epitech !"
        id="about"
        padding={false}
      >
        {aboutMeValues.map((v, i) => Card({ key: "about-key-" + i,...v}))}
      </CardsArea>
      <Projects/>
      <SkillsSection/>
      <Interested/>
    </main>
  );
}
