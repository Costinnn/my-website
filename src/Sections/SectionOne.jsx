import { useState } from "react";

import IconsSpin from "../components/s1components/IconsSpin";
import Navbar from "../components/s1components/Navbar";

import "./SectionOne.style.scss";

import active from "../assets/s1/active.gif";
import message from "../assets/s1/message.png";
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
        {activeLogo && <img className="message" src={message} alt="pikachu" />}
      </div>
      <div>
        <IconsSpin />
        <div className="s1-text">
          <p>Hello, my name is</p>
          <p className="name">Crauciuc Costin</p>
          <p className="text">
            ... and I am driven day by day to build more complex and performant
            web applications using amazing technologies. Speaking of which,
            isn't it amazing the human's mind capacity to create all this
            virtual applications that can make our lives feel like those of
            superheroes?
          </p>
        </div>
      </div>
      <Navbar />
      <img src="https://i.ibb.co/F5S8j0M/portrait.png" alt="portrait" />
    </div>
  );
};

export default SectionOne;
