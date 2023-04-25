import "./SectionThree.style.scss";

import githubIcon from "../assets/s3/images/github.svg";
import ProjectDisplayTemplate from "../components/s3components/ProjectDisplayTemplate";

import PROJECTS_DATA from "../assets/s3/data/PROJECTS_DATA";

// import { useState } from "react";

// import upArrow from "../assets/s3/up-arrow.png";
// import downArrow from "../assets/s3/down-arrow.png";

import { useInView } from "react-intersection-observer";

const SectionThree = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // const [count, setCount] = useState(3);

  // const viewMore = () => {
  //   if (count === 3) {
  //     setCount(9);
  //   } else {
  //     setCount(3);
  //   }
  // };

  return (
    <div className="container s3" ref={ref} id="projects">
      <div className="s3-svg">
        <svg viewBox="0 0 326.801 85.73" xmlns="http://www.w3.org/2000/svg">
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#f6ae2d"
            strokeWidth="0.8mm"
            fill="#f6ae2d"
            style={{ stroke: "#f6ae2d", strokeWidth: "0.8mm", fill: "#f6ae2d" }}
          >
            <path
              d="M 283.86 58.41 L 283.86 50.13 A 33.13 33.13 0 0 0 287.931 51.382 A 40.57 40.57 0 0 0 290.61 51.93 A 44.377 44.377 0 0 0 295.298 52.486 A 37.264 37.264 0 0 0 297.63 52.56 Q 301.546 52.56 303.723 52.017 A 7.8 7.8 0 0 0 304.83 51.66 A 3.483 3.483 0 0 0 306.187 50.697 Q 306.736 50.044 306.91 49.094 A 5.248 5.248 0 0 0 306.99 48.15 A 4.405 4.405 0 0 0 306.806 46.846 A 3.439 3.439 0 0 0 305.685 45.18 A 7.91 7.91 0 0 0 304.639 44.459 Q 303.507 43.796 301.841 43.209 A 24.948 24.948 0 0 0 301.815 43.2 Q 299.25 42.3 295.29 41.04 Q 291.761 39.864 289.095 38.491 A 30.836 30.836 0 0 1 288.72 38.295 Q 285.93 36.81 284.4 34.47 Q 283.092 32.469 282.902 29.416 A 17.197 17.197 0 0 1 282.87 28.35 A 12.92 12.92 0 0 1 283.44 24.412 A 10.136 10.136 0 0 1 287.1 19.305 Q 290.95 16.397 299.052 16.136 A 50.909 50.909 0 0 1 300.69 16.11 A 45.34 45.34 0 0 1 306.023 16.414 A 39.729 39.729 0 0 1 307.71 16.65 Q 310.422 17.09 312.478 17.709 A 23.275 23.275 0 0 1 313.38 18 L 313.38 26.19 A 27.469 27.469 0 0 0 309.77 25.063 A 33.165 33.165 0 0 0 307.845 24.66 A 35.583 35.583 0 0 0 304.581 24.223 A 27.972 27.972 0 0 0 302.22 24.12 A 43.64 43.64 0 0 0 299.769 24.184 Q 296.869 24.348 295.155 24.93 Q 292.985 25.667 292.789 27.745 A 4.534 4.534 0 0 0 292.77 28.17 Q 292.77 30.256 294.466 31.324 A 5.281 5.281 0 0 0 295.245 31.725 Q 297.628 32.721 302.804 34.427 A 304.751 304.751 0 0 0 303.21 34.56 Q 306.7 35.619 309.197 36.765 A 24.718 24.718 0 0 1 311.22 37.8 A 13.732 13.732 0 0 1 313.349 39.293 Q 314.547 40.327 315.291 41.544 A 8.362 8.362 0 0 1 315.495 41.895 Q 316.559 43.84 316.756 46.712 A 19.768 19.768 0 0 1 316.8 48.06 A 13.649 13.649 0 0 1 316.282 51.932 A 9.879 9.879 0 0 1 312.21 57.465 Q 308.94 59.677 303.567 60.313 A 39.886 39.886 0 0 1 298.89 60.57 A 55.643 55.643 0 0 1 292.247 60.185 A 49.182 49.182 0 0 1 290.475 59.94 A 56.38 56.38 0 0 1 287.722 59.441 Q 286.479 59.181 285.412 58.888 A 25.723 25.723 0 0 1 283.86 58.41 Z M 200.16 34.29 L 200.16 42.21 L 168.93 42.21 Q 169.392 46.195 171.114 48.587 A 8.071 8.071 0 0 0 173.43 50.76 Q 176.959 52.945 183.939 53.09 A 48.642 48.642 0 0 0 184.95 53.1 A 36.237 36.237 0 0 0 190.758 52.618 A 40.571 40.571 0 0 0 191.61 52.47 Q 195.03 51.84 197.55 50.85 L 197.55 58.05 A 24.835 24.835 0 0 1 194.144 59.24 A 32.94 32.94 0 0 1 190.935 59.94 Q 187.2 60.57 182.97 60.57 Q 174.768 60.57 169.289 57.605 A 18.675 18.675 0 0 1 165.69 55.08 A 17.14 17.14 0 0 1 160.87 47.461 Q 159.956 44.66 159.685 41.244 A 37.816 37.816 0 0 1 159.57 38.25 A 32.669 32.669 0 0 1 160.187 31.707 Q 161.364 25.948 164.79 22.05 A 16.44 16.44 0 0 1 172.5 17.207 Q 175.175 16.384 178.411 16.179 A 35 35 0 0 1 180.63 16.11 A 29.551 29.551 0 0 1 186.235 16.607 Q 189.401 17.219 191.852 18.587 A 14.539 14.539 0 0 1 195.255 21.195 A 17.293 17.293 0 0 1 199.98 31.331 A 23.66 23.66 0 0 1 200.16 34.29 Z M 9.81 59.67 L 0 59.67 L 0 1.71 L 25.83 1.71 A 28.96 28.96 0 0 1 30.496 2.064 Q 34.11 2.655 36.81 4.23 Q 41.13 6.75 43.2 11.115 A 21.343 21.343 0 0 1 45.047 17.529 A 27.156 27.156 0 0 1 45.27 21.06 A 22.597 22.597 0 0 1 44.469 27.231 A 17.016 17.016 0 0 1 39.915 34.92 A 17.908 17.908 0 0 1 30.91 39.604 A 26.234 26.234 0 0 1 25.47 40.14 L 9.81 40.14 L 9.81 59.67 Z M 244.44 18.72 L 244.44 26.01 A 21.122 21.122 0 0 0 239.087 24.219 Q 236.671 23.739 233.899 23.679 A 36.904 36.904 0 0 0 233.1 23.67 A 26.697 26.697 0 0 0 228.821 23.991 Q 226.516 24.366 224.668 25.179 A 12.241 12.241 0 0 0 221.76 26.955 A 9.605 9.605 0 0 0 219.018 30.836 Q 218.371 32.435 218.068 34.453 A 26.214 26.214 0 0 0 217.8 38.34 A 26.392 26.392 0 0 0 218.093 42.42 Q 218.42 44.504 219.111 46.162 A 10.497 10.497 0 0 0 221.31 49.545 A 10.257 10.257 0 0 0 224.919 51.847 Q 227.911 53.022 232.325 53.095 A 35.763 35.763 0 0 0 232.92 53.1 A 29.128 29.128 0 0 0 240.096 52.243 A 25.069 25.069 0 0 0 244.53 50.67 L 244.53 58.14 A 34.078 34.078 0 0 1 239.074 59.763 A 38.294 38.294 0 0 1 238.185 59.94 Q 234.81 60.57 230.67 60.57 A 35.326 35.326 0 0 1 224.175 60.012 Q 220.539 59.331 217.701 57.819 A 17.147 17.147 0 0 1 213.66 54.855 Q 208.451 49.687 207.953 40.361 A 37.864 37.864 0 0 1 207.9 38.34 Q 207.9 27.09 214.245 21.6 A 21.631 21.631 0 0 1 223.287 17.016 Q 226.896 16.11 231.21 16.11 Q 234.565 16.11 237.112 16.475 A 24.248 24.248 0 0 1 238.635 16.74 Q 241.65 17.37 244.44 18.72 Z M 255.06 46.98 L 255.06 24.66 L 248.76 24.66 L 248.76 17.01 L 255.06 17.01 L 255.06 7.2 L 264.78 4.23 L 264.78 17.01 L 276.12 17.01 L 275.49 24.66 L 264.78 24.66 L 264.78 46.44 Q 264.78 50.13 266.49 51.615 Q 268.2 53.1 272.07 53.1 A 14.793 14.793 0 0 0 275.132 52.766 A 18.915 18.915 0 0 0 277.2 52.2 L 277.2 59.13 A 17.941 17.941 0 0 1 273.606 60.158 Q 271.912 60.467 269.971 60.544 A 33.193 33.193 0 0 1 268.65 60.57 A 20.426 20.426 0 0 1 264.804 60.232 Q 260.782 59.459 258.435 56.925 A 12.188 12.188 0 0 1 255.578 51.507 Q 255.109 49.64 255.065 47.439 A 22.982 22.982 0 0 1 255.06 46.98 Z M 127.26 79.29 L 127.26 72.18 A 25.54 25.54 0 0 0 129.12 72.655 A 21.296 21.296 0 0 0 130.185 72.855 A 18.661 18.661 0 0 0 131.524 73.024 A 14.052 14.052 0 0 0 132.75 73.08 Q 136.218 73.08 137.962 72.052 A 4.031 4.031 0 0 0 138.645 71.55 A 4.524 4.524 0 0 0 139.783 69.832 Q 140.071 69.095 140.202 68.171 A 11.905 11.905 0 0 0 140.31 66.51 L 140.31 24.48 L 133.83 24.48 L 134.73 17.01 L 150.03 17.01 L 150.03 67.41 A 17.043 17.043 0 0 1 149.543 71.597 A 12.131 12.131 0 0 1 146.565 77.085 A 10.904 10.904 0 0 1 141.906 79.929 Q 139.418 80.73 136.17 80.73 Q 131.725 80.73 128.389 79.686 A 17.424 17.424 0 0 1 127.26 79.29 Z M 87.165 54.81 A 15.63 15.63 0 0 0 91.91 58.254 Q 96.736 60.57 104.04 60.57 A 39.398 39.398 0 0 0 108.695 60.31 Q 111.89 59.929 114.48 58.992 A 16.294 16.294 0 0 0 121.005 54.81 A 17.426 17.426 0 0 0 123.542 51.274 Q 125.1 48.418 125.797 44.764 A 34.336 34.336 0 0 0 126.36 38.34 A 38.984 38.984 0 0 0 126.276 35.75 Q 125.688 26.913 120.96 21.87 A 15.795 15.795 0 0 0 116.209 18.436 Q 111.36 16.11 104.04 16.11 A 38.926 38.926 0 0 0 99.845 16.325 Q 96.538 16.684 93.856 17.641 A 16.556 16.556 0 0 0 87.21 21.87 A 17.431 17.431 0 0 0 84.652 25.406 Q 83.08 28.262 82.378 31.916 A 34.058 34.058 0 0 0 81.81 38.34 A 39.054 39.054 0 0 0 81.906 41.122 Q 82.528 49.822 87.165 54.81 Z M 62.91 59.67 L 53.1 59.67 L 53.1 17.01 L 62.1 17.01 L 62.64 21.96 Q 65.604 20.042 69.667 18.462 A 53.839 53.839 0 0 1 69.93 18.36 A 41.343 41.343 0 0 1 76.614 16.407 A 37.005 37.005 0 0 1 78.3 16.11 L 78.3 23.58 Q 75.78 24.03 72.855 24.885 A 64.822 64.822 0 0 0 68.645 26.269 A 57.339 57.339 0 0 0 67.32 26.775 A 39.064 39.064 0 0 0 65.262 27.656 Q 64.284 28.111 63.456 28.574 A 20.755 20.755 0 0 0 62.91 28.89 L 62.91 59.67 Z M 9.81 9.36 L 9.81 32.4 L 23.67 32.4 A 17.816 17.816 0 0 0 27.045 32.101 Q 30.448 31.444 32.49 29.34 Q 35.46 26.28 35.46 21.06 A 17.667 17.667 0 0 0 35.155 17.669 Q 34.53 14.476 32.625 12.42 A 8.933 8.933 0 0 0 28.676 9.988 Q 26.689 9.36 24.12 9.36 L 9.81 9.36 Z M 104.04 52.29 A 21.818 21.818 0 0 0 107.439 52.044 Q 109.18 51.769 110.553 51.185 A 8.236 8.236 0 0 0 113.625 49.005 A 9.731 9.731 0 0 0 115.346 45.984 Q 116.349 43.267 116.449 39.246 A 36.468 36.468 0 0 0 116.46 38.34 Q 116.46 30.96 113.625 27.72 Q 111.538 25.334 107.327 24.705 A 22.307 22.307 0 0 0 104.04 24.48 Q 100.106 24.48 97.507 25.61 A 8.217 8.217 0 0 0 94.545 27.72 A 9.521 9.521 0 0 0 92.831 30.695 Q 91.822 33.399 91.721 37.432 A 36.44 36.44 0 0 0 91.71 38.34 A 30.454 30.454 0 0 0 91.922 42.07 Q 92.422 46.112 94.105 48.447 A 8.113 8.113 0 0 0 94.545 49.005 Q 96.702 51.504 101.072 52.102 A 21.943 21.943 0 0 0 104.04 52.29 Z M 168.93 35.82 L 191.52 35.82 L 191.52 32.85 A 12.874 12.874 0 0 0 191.233 30.047 Q 190.813 28.165 189.78 26.772 A 7.686 7.686 0 0 0 189.09 25.965 Q 186.752 23.583 181.329 23.494 A 25.945 25.945 0 0 0 180.9 23.49 Q 174.06 23.49 171.495 26.46 A 8.99 8.99 0 0 0 169.882 29.302 Q 168.96 31.844 168.931 35.578 A 31.36 31.36 0 0 0 168.93 35.82 Z M 150.03 8.1 L 139.32 8.1 L 139.32 0 L 150.03 0 L 150.03 8.1 Z"
              className={`svg-elem-1 ${inView ? "svg-active" : ""}`}
            ></path>
          </g>
        </svg>
      </div>
      {PROJECTS_DATA.map((item) => {
        // while (index < count)
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
      {/* <div className="expand" onClick={viewMore}>
        <img src={count === 3 ? downArrow : upArrow} alt="icon" />
        <p>{count === 3 ? "more projects" : "less projects"}</p>
      </div> */}
      <p className="end-text">
        These are only few of my projects, if you are interested, you can check out
        more on my
        <a href="https://github.com/Costinnn" target="_blank" rel="noreferrer">
          &nbsp;
          <img src={githubIcon} alt="github" /> GitHub&nbsp;
        </a>
        account, where I got into more detail about the projects and their
        functionalities. <br /> <br />
        Now... let's take a break and play a game, can you beat the scores on the
        Scoreboard? Let's see!
      </p>
    </div>
  );
};

export default SectionThree;
