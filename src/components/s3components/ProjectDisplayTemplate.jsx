import "./ProjectDisplayTemplate.style.scss";

import githubIcon from "../../assets/s3/images/github.svg";
import linkIcon from "../../assets/s3/images/link.svg";

const ProjectDisplayTemplate = ({
  github,
  link,
  title1,
  img,
  title2,
  text,
}) => {
  return (
    <div className="project-box">
      <div className="front-box">
        <h2>{title1}</h2>
        <img src={img} alt={title1} />
      </div>
      <div className="back-box">
        <div className="left-side">
          <h3>INFO</h3>
          <img src={githubIcon} alt="github" />
          <br />
          <img src={linkIcon} alt="link" />
        </div>
        <div className="right-side">
          <h3>{title2}</h3> <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplayTemplate;
