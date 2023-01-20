import "./SectionThree.style.scss";

import ProjectDisplayTemplate from "../components/s3components/ProjectDisplayTemplate";

import PROJECTS_DATA from "../assets/s3/data/PROJECTS_DATA";

import { useState } from "react";

import upArrow from "../assets/s3/up-arrow.png";
import downArrow from "../assets/s3/down-arrow.png";

const SectionThree = () => {
  const [count, setCount] = useState(3);

  const viewMore = () => {
    if (count === 3) {
      setCount(8);
    } else {
      setCount(3);
    }
  };

  return (
    <div className="container s3" id="projects">
      {PROJECTS_DATA.map((item, index) => {
        while (index < count) {
          return (
            <ProjectDisplayTemplate
              key={item.title1}
              github={item.github}
              link={item.link}
              title1={item.title1}
              img={item.img}
              title2={item.title2}
              text={item.text}
            />
          );
        }
      })}
      <div className="expand" onClick={viewMore}>
        <img src={count === 3 ? downArrow : upArrow} alt="icon" />
        <p>{count === 3 ? "more projects" : "less projects"}</p>
      </div>
    </div>
  );
};

export default SectionThree;
