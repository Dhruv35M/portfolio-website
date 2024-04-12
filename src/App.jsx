import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">Hero</section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Porallax</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
