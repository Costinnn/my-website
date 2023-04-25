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

    // setTimeout(() => setActiveLogo(false), 3000);
  };

  return (
    <div className="container s1" id="about">
      <div className="logo" onClick={!activeLogo ? handleLogo : null}>
        {!activeLogo && <img src={sleepy} alt="pikachu" />}
        {activeLogo && <img src={active} alt="pikachu" />}
      </div>
      <div>
        <IconsSpin />
        <div className="s1-text">
          <p>Hello, my name is</p>
          <p className="name">Crauciuc Costin</p>
          <p className="text">
            ... and I am driven day by day to build more complex and performand
            web applications using amazing technologies. Speaking of which,
            isn't it amazing what capacity the human mind has to create all this
            virtual applications that can make our lives feel like those of
            superheroes?
          </p>
        </div>
      </div>
      <Navbar />
      <img src={portrait} alt="portrait" />
    </div>
  );
};

export default SectionOne;
