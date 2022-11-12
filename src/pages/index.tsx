import { Navegation } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navegation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
