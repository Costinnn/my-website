import "./PhoneSvgTwo.style.scss";

import { useInView } from "react-intersection-observer";

const PhoneSvgTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  // length  2011.5057373046875

  return (
    <>
      <svg
        viewBox="0 0 353 598"
        fill="none"
        preserveaspectration="xMidYMax meet"
        className="phone-svg2"
        ref={ref}
      >
        <path
          className={`phone-path2 ${inView ? "phone-animation" : ""}`}
          d="M139.49 0V33.5C161.823 57.3333 225.49 101.5 301.49 87.5C396.49 70 317.99 228 301.49 183C284.99 138 283.975 107 314.99 121C346.004 135 344.99 220 338.49 233.5C331.99 247 80.9897 261 30.4897 164.5C-20.0103 68 225.99 85.5 246.99 183C267.99 280.5 58.9896 327 30.4897 333.5C1.98966 340 -36.0103 411 139.49 394C314.99 377 166.49 458 152.99 467.5C142.19 475.1 139.49 520 139.49 541.5V597.5"
          stroke="#919BA1"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default PhoneSvgTwo;
