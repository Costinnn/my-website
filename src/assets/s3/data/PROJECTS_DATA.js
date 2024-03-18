import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";

const PROJECTS_DATA = [
  {
    github: "https://github.com/Costinnn/car-auction",
    link: "https://car-auction-five.vercel.app/en",
    title1: "CAR AUCTION WEBSITE",
    img: p1,
    title2: "FULLSTACK APPLICATION WITH REACT AND NEXTJS",
    text: "A project that I personally liked and from which I learned a lot of new things. From different methods you can use Javascript to create APIs in NEXTjs and filter the database in detail, to authentication errors with NextAuth due to headers overflow. Also, I focused on improving overall app architecture and used URL querys to pass data between components.",
  },
  {
    github: "https://github.com/Costinnn",
    link: "https://www.shauz.ro/",
    title1: "NEXTJS ECOMMERCE",
    img: p5,
    title2: "NEXTJS FULLSTACK STORE + DASHBOARD",
    text: "With this project I consolidated my knowledge of React and NextJs by integrating a database in MongoDb that provides a situation of product stocks in real time. The application also contains an administration panel through which new products are added and stocks of products ordered and marked as delivered are reduced.",
  },
  {
    github: "https://github.com/Costinnn/shauz",
    link: "https://shzwebsite.onrender.com/",
    title1: "ECOMMERCE STORE",
    img: p2,
    title2: "FULL MERN STACK APP",
    text: "After quite few projects only on the frontend I was curious to see the big picture for web development, so I wanted to build a fullstack app using MERN stack. After some ups and downs I finally build a custom ecommerce store with admin panel, using React on frontend, Node.js and Express on backend and MongoDb for database.",
  },
  {
    github: "https://github.com/Costinnn/adoption-website",
    link: "https://adoption-website-xi.vercel.app/",
    title1: "ANIMAL ADOPTION APP",
    img: p3,
    title2: "NEXT.JS SERVER OR CLIENT SIDE RENDERING?",
    text: "Although at the beginning it was a little difficult to think and structure the application according to the requirements of the Next.js framework, after a few days of practice you can already see the indisputable advantages that these technologies offer developers the ability to create high-performance and efficient applications.",
  },
  {
    github: "https://github.com/Costinnn/Real-time-weather-app",
    link: "https://weather-cos.netlify.app/",
    title1: "WEATHER APP",
    img: p4,
    title2: "REAL TIME WEATHER INFO USING AN API",
    text: "Driven by curiosity and ambition to build more performant and complex web applications, I went one step further and used a public API for my weather app. Also, in some of my projects I used Firebase services to develop my knowledge and skills.",
  },
];

export default PROJECTS_DATA;
