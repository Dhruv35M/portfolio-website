import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="" className="logo" />
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/dhruv-mishra-developer/"
            target="__blank"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/dhruv35m" target="__blank">
            <img src="/github.png" alt="github" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=dhruv35m@gmail.com"
            target="_blank"
          >
            <img src="/gmail.png" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
