import "./SvgLineOne.style.scss";

import { useInView } from "react-intersection-observer";

const SvgLineOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
 

  return (
    <>
      <svg
        viewBox="0 0 1029 828"
        fill="none"
        preserveaspectration="xMidYMax meet"
        className="svg1"
        ref={ref}
      >
        <path
          className={`path1 ${inView ? "animation" : ""}`}
          d="M1023.47 236.628C916.836 147.015 932.673 85.3411 856.655 75.8527C780.637 66.3643 770.079 239.264 687.726 245.589C605.374 251.915 585.314 95.8837 501.905 95.8837C418.497 95.8837 379.432 245.589 296.023 245.589C212.615 245.589 124.645 175.095 68.4978 109.589C-23.0181 2.81849 201.529 -22.1938 272.796 36.845C344.063 95.8837 188.446 159.547 68.4978 154.395C7.65972 151.783 2.51008 277.217 142.932 286.178C283.354 295.14 184.636 365.248 83.8069 352.597C-17.0223 339.946 -32.3314 432.721 105.451 437.465C243.233 442.209 246.929 501.775 119.704 497.558C-7.52007 493.341 119.704 569.248 119.704 581.372C119.704 591.071 119.704 720.359 119.704 783.791V822.271"
          stroke="#F26419"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default SvgLineOne;
