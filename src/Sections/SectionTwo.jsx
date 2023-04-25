import "./SectionTwo.style.scss";

import { useInView } from "react-intersection-observer";

import SvgLineOne from "../components/s2components/SvgLineOne";
import SvgLineTwo from "../components/s2components/SvgLineTwo";
import PhoneSvgOne from "../components/s2components/PhoneSvgOne";
import PhoneSvgTwo from "../components/s2components/PhoneSvgTwo";

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
    <div className="container s2" id="journey">
      <div ref={ref1} className={`schoolBox ${inView1 ? "show" : ""}`}>
        <div className="svg-box">
          <SvgLineOne />
        </div>
        <div className="image-box">
          <img src={school} alt="" />
          <p>
            So... in 2017, I graduated from "Colegiul Costache Negruzzi" Iasi
            highschool, majoring in mathematics and computer science. A period
            of my life in which I was able to gain quality information, that I
            later understood it was very valuable for my mindset and way of
            thinking.
          </p>
        </div>
        <div className="svg-box-phone">
          <PhoneSvgOne />
        </div>
      </div>

      <div ref={ref2} className={`universityBox ${inView2 ? "show" : ""}`}>
        <div className="image-box">
          <img src={university} alt="" />
          <p>
            In 2020, I graduated from the faculty of "Accounting and management
            informatics", but I can't say that I was happy about this because I
            felt that it wasn't the right thing, because it didn't brought me
            valuable knowledge that I could use to improve people's lives. After
            a period in which I was professionally active in this field, I felt
            that things were becoming repetitive, I was no longer learning
            anything that would help me evolve and that it was practically a job
            that could be automated relatively quickly.
          </p>
        </div>
        <div className="svg-box">
          <SvgLineTwo />
        </div>
        <div className="svg-box-phone">
          <PhoneSvgTwo />
        </div>
      </div>

      <div ref={ref3} className={`webdevBox ${inView3 ? "show" : ""}`}>
        <div className="svg-box"></div>
        <div className="image-box">
          <img src={webdev} alt="" />
          <p>
            What did I do in the following period? I resigned from my position
            as an accountant and decided to return to my old curiosity from high
            school, computer science. The passion for visual creation and the
            burning desire to learn new things made me choose front-end
            development path, so I started learning HTML, CSS, JavaScript and
            React. <br /> Later, being curious about the overall picture of web
            development, I started to document myself for the backend part as
            well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
