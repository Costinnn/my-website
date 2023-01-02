import { useState } from "react";

import IconsSpin from "../components/s1components/IconsSpin";
import Navbar from "../components/s1components/Navbar";

import "./SectionOne.style.scss";

import portrait from "../assets/s1/portrait.png";
import active from "../assets/s1/active.gif";
import sleepy from "../assets/s1/sleepy.gif";

const SectionOne = () => {
  const [activeLogo, setActiveLogo] = useState(false);

  const handleLogo = () => {
    setActiveLogo(true);

    setTimeout(() => setActiveLogo(false), 2200);
  };

  return (
    <div className="container s1">
      <div className="logo" onClick={handleLogo}>
        {!activeLogo && <img src={sleepy} alt="pikachu" />}
        {activeLogo && <img src={active} alt="pikachu" />}
      </div>
      <div>
        <IconsSpin />
        <div className="s1-text">
          <p>Hello, my name is</p>
          <p className="name">Crauciuc Costin</p>
          <p className="text">
            I love building things for web. The coolest thing about it is that
            not a day goes by, that I'm not amazed at what we can create in this
            digital world.
          </p>
        </div>
      </div>
      <Navbar />
      <img src={portrait} alt="portrait" />
    </div>
  );
};

export default SectionOne;
