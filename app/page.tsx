import Hero from "./sections/hero"
import CardsArea from "./sections/cards_area";
import Card from "./components/card";
import Interested from "./sections/interested";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CardsArea
        title="About me"
        subtitle="Since the age of 12 years old, i’m passionated by new technologies. That’s why I started to learn coding by myself. Now I use what i learned into my school Epitech !"
        id="about"
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
      <CardsArea
        title="Skills"
        subtitle="Discover what I've learned to use throughout my journey"
      >
        <Card
          title="Programming"
          img="/icons/strategic.svg"
          imgAlt="Strategic icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>Python</li>
            <li>C</li>
            <li>PHP</li>
            <li>Luau</li>
          </ul>
        </Card>
        <Card
          title="Web"
          img="/icons/learn.svg"
          imgAlt="Learn icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Embedded JS (EJS)</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
          </ul>
        </Card>
        <Card
          title="Databases"
          img="/icons/settings.svg"
          imgAlt="Logic icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>MongoDB</li>
          </ul>
        </Card>
        <Card
          title="OS"
          img="/icons/settings.svg"
          imgAlt="Logic icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>Windows</li>
            <li>Linux</li>
            <li>UNIX</li>
          </ul>
        </Card>
        <Card
          title="Tools"
          img="/icons/settings.svg"
          imgAlt="Logic icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>Bash</li>
            <li>CSFML</li>
            <li>Figma</li>
            <li>Discord.Js</li>
          </ul>
        </Card>
        <Card
          title="DevOps"
          img="/icons/settings.svg"
          imgAlt="Logic icon"
          imgHeight={40}
          imgWidth={40}
        >
          <ul className="list-disc ml-4 text-gray-700">
            <li>Git/Github</li>
            <li>Github Actions (CI/CD)</li>
            <li>Github Projects</li>
          </ul>
        </Card>
      </CardsArea>
      <Interested/>
    </main>
  );
}
