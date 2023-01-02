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
          <a href="#about">About</a>
          <img src={aboutIcon} alt="icon" />
        </li>
        <li>
          <a href="#journey">Journey</a>
          <img src={journeyIcon} alt="icon" />
        </li>
        <li>
          <a href="#projects">Projects</a>
          <img src={projectsIcon} alt="icon" />
        </li>
        <li>
          <a href="#play">Play</a>
          <img src={playIcon} alt="icon" />
        </li>
        <li>
          <a href="#contact">Contact</a>
          <img src={contactIcon} alt="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
