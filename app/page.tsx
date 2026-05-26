import Hero from "./sections/hero"
import CardsArea from "./sections/cardsArea";
import Card from "./components/card";
import Interested from "./sections/interested";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";

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
        <Card
          title="Strategic"
          description="Instead of simply completing my tasks, I find smart ways to save time later. I’m always documenting."
          img="/icons/strategic.svg"
          imgAlt="Strategic icon"
          imgHeight={40}
          imgWidth={40}
        />
        <Card
          title="Self-Taught"
          description="I love to discover new things by myself even when it is not linked to my school. By making formations, for example."
          img="/icons/learn.svg"
          imgAlt="Learn icon"
          imgHeight={40}
          imgWidth={40}
        />
        <Card
          title="Logic"
          description="Always looking for problems to solve, whether in chess or in code ! I have a good code debugging logic."
          img="/icons/settings.svg"
          imgAlt="Logic icon"
          imgHeight={40}
          imgWidth={40}
        />
      </CardsArea>
      <Projects/>
      <SkillsSection/>
      <Interested/>
    </main>
  );
}
