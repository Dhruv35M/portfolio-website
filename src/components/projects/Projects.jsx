import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CodingDude",
    img: "/codingDude.png",
    url: "https://chromewebstore.google.com/detail/codingdude-contest-remind/gceicoplhhmgcoanpkbnopdccpghbngk",
    desc: "This Chrome extension helps programmers never forget any upcoming contests by sending notifications and allowing users to set reminders in Google Calendar. It displays live, contest in 24 hours, and upcoming programming contests happening on popular coding platforms.",
  },
  {
    id: 2,
    title: "Hole and Mole",
    img: "/game.png",
    url: "https://dhruv35m.github.io/hole-and-mole-game/",
    desc: "Experience the thrill of catching moles in this simple yet addictive web game! Click on the mole to score points and choose from three difficulty levels: easy, medium, and hard. Let the fun begin!",
  },
  {
    id: 3,
    title: "Movie Trailer App",
    img: "/movieTrailer.png",
    url: "https://github.com/Dhruv35M/Movie-Trailer-App",
    desc: "Dive into cinema with our React app! Discover the latest movies to watch, watch trailers, and ignite your love for Movies. Lights, camera, action! 🍿🎥",
  },
  {
    id: 4,
    title: "BMI Checker",
    img: "/bmi.png",
    url: "https://github.com/Dhruv35M/BMICheckerApp",
    desc: "Embark on your healthy life journey effortlessly with our BMI checker. Whether you're diving into fitness or pursuing a healthier lifestyle, start your path to wellness here. Your health, your way. 🌟🌱",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Projects">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="__blank">
              <button>Checkout</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
