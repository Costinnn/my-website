import "./SectionThree.style.scss";

import ProjectDisplayTemplate from "../components/s3components/ProjectDisplayTemplate";

import PROJECTS_DATA from "../assets/s3/data/PROJECTS_DATA";

const SectionThree = () => {
  return (
    <div className="container s3">
      {PROJECTS_DATA.map((item) => {
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
      })}
    </div>
  );
};

export default SectionThree;
