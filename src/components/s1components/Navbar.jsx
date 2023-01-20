import "./Navbar.style.scss";

import aboutIcon from "../../assets/s1/about.png";
import journeyIcon from "../../assets/s1/journey.png";
import projectsIcon from "../../assets/s1/projects.png";
import playIcon from "../../assets/s1/play.png";
import contactIcon from "../../assets/s1/contact.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#about">
            {" "}
            <span>About</span>
            <img src={aboutIcon} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#journey">
            <span>Journey</span>
            <img src={journeyIcon} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#projects">
            <span>Projects</span>
            <img src={projectsIcon} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#play">
            <span>Play</span>
            <img src={playIcon} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>Contact</span>
            <img src={contactIcon} alt="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
