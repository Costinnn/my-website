import "./SvgLineTwo.style.scss";

import { useInView } from "react-intersection-observer";

const SvgLineTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
 

  return (
    <>
      <svg
        className="svg2"
        viewBox="0 0 644 705"
        fill="none"
        preserveaspectration="xMidYMax meet"
        ref={ref}
      >
        <path
          className={`path2 ${inView ? "animation" : ""}`}
          d="M5.5 197.5C53.6667 227 165.2 268.3 226 197.5C286.8 126.7 311.333 98 316 92.5L340.5 343.5L436 1.5L465 240.5L499 166L528 324.5L598.5 197.5C596.982 237.115 626.127 309.291 598.5 324.5C531.719 361.264 566.5 388.5 598.5 406C630.5 423.5 669 442 598.5 475C528 508 520 524 598.5 549C677 574 609.5 598.5 598.5 623.5C589.7 643.5 589.5 682.5 590.5 699.5"
          stroke="#F6AE2D"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default SvgLineTwo;
