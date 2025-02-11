import { About } from "./components/main/About";
import { Contact } from "./components/main/Contact";
import { Hero } from "./components/main/Hero";
import { Portfolio } from "./components/main/Experience";
import { Projects } from "./components/main/Projects";
import { Skills } from "./components/main/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
      <Contact />
    </main>
  );
}
