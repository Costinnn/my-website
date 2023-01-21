import "./PhoneSvgOne.style.scss";

import { useInView } from "react-intersection-observer";

const PhoneSvgOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  // length 1326.98779296875

  return (
    <>
      <svg
        viewBox="0 0 316 436"
        fill="none"
        preserveaspectration="xMidYMax meet"
        className="phone-svg1"
        ref={ref}
      >
        <path
          className={`phone-path1 ${inView ? "phone-animation" : ""}`}
          d="M170 5V36C195 35.3333 249.4 42.8 267 78C289 122 185 116 170 112C155 108 -32 100 12 155C56 210 149 185 170 177C191 169 272 161 297 169C322 177 328 214 170 247C43.6 273.4 50.6667 294 70 301L170 310C181.667 313.667 198 326.6 170 349C135 377 161 370 170 383C177.2 393.4 173 404.667 170 409V431"
          stroke="#F6AE2D"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default PhoneSvgOne;
