import "./SectionTwo.style.scss";

import { useInView } from "react-intersection-observer";

import SvgLineOne from "../components/s2components/SvgLineOne";
import SvgLineTwo from "../components/s2components/SvgLineTwo";

import school from "../assets/s2/school.png";
import university from "../assets/s2/university.png";
import webdev from "../assets/s2/webdev.gif";

const SectionTwo = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div className="container s2">
      <div ref={ref1} className={`schoolBox ${inView1 ? "show" : ""}`}>
        <div className="svg-box">
          <SvgLineOne />
        </div>
        <div className="image-box">
          <img src={school} alt="" />
          <p>
            In 2017, I graduated from "Colegiul Costache Negruzzi" Iasi
            highschool, majoring in mathematics and computer science. I consider
            this a very beautiful period because the teachers and colleagues
            helped me develop both intellectually and personally.
          </p>
        </div>
      </div>

      <div ref={ref2} className={`universityBox ${inView2 ? "show" : ""}`}>
        <div className="image-box">
          <img src={university} alt="" />
          <p>
            In 2020, I graduated from the faculty of "Accounting and management
            informatics", but I can't say that I was happy about this because I
            felt that it wasn't the right thing, that it didn't help me much
            intellectually. After a period in which I was professionally active
            in this field, I felt that things were becoming repetitive, I was no
            longer learning anything that would help me evolve and that it was
            practically a job that could be automated relatively quickly.
          </p>
        </div>
        <div className="svg-box">
          <SvgLineTwo />
        </div>
      </div>

      <div ref={ref3} className={`webdevBox ${inView3 ? "show" : ""}`}>
        <div className="svg-box">SVG</div>
        <div className="image-box">
          <img src={webdev} alt="" />
          <p>
            At the end of 2021, I resigned from my position as an accountant and
            decided to return to my old dream from high school, computer
            science.The passion for visual creation and the burning desire to
            learn new things made me choose front-end development path, so I
            started learning HTML, CSS, JavaScript and React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
