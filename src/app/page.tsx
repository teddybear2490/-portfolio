import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import {
  About,
  Experience,
  Skills,
  Credentials,
  Contact,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="brand" href="#home">
          SEC / OPS<span className="accent">.</span>
        </a>
        <span>운영 현장의 관점으로 설계하는 보안 엔지니어링.</span>
        <a href="#home">맨 위로 ↑</a>
      </footer>
    </>
  );
}
