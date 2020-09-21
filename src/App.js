import React from "react";
import "./App.css";
import imageMe from "./imgs/me.jpeg";
import Carosel from "./comp/carousel/Carousel";
// Colours
// #9CAFB7
// #6BD425
// #B27C66
// #352D39
// #183059

function App() {
  const skills = [
    {
      title: "Java",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "NodeJs",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "PHP",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "Javascript",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "Python",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "Groovy",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "C",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "CSS",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "HTML5",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "SQL",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "Haskell",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
    {
      title: "Scala",
      summary:
        'Java was my first language, when I was introduced to programming 👨🏽‍💻. It was my first "hello world" my first love 😍.',
      image: {
        src: require("./imgs/java.png"),
        alt: "Java logo",
      },
    },
  ];
  return (
    <div id="page">
      <div className="section light">
        <p className="title"> Asim Poptani </p>
        <img id="imageMe" src={imageMe} alt="A pictiure of Asim Poptani" />
        <p id="strapline">
          Brain: an apparatus with which we think we think. <br />
          <u> Ambrose Bierce(1842 - 1914) </u>
        </p>
      </div>
      <div className="section dark">
        <p> Strange / Awesome stories </p>
      </div>
      <div className="section light">
        <p> Main Skills </p> <Carosel cards={skills} />
      </div>
      <div className="section dark">
        <p> Hobbies </p> <p> Hobbies </p> <p> Hobbies </p>
      </div>
      <div className="section light">
        <p> Previous jobs </p>
      </div>
      <div className="section dark">
        <p> What I have learned </p>
      </div>
      <div className="section light">
        <p> How I made this website </p>
      </div>
      <div className="section dark">
        <p> What am I doing now ? </p>
      </div>
      <div className="section light">
        <p> Contact me </p> <p> Find me on your favorite media platform : ) </p>
      </div>
      <div id="footer"> </div>
    </div>
  );
}

export default App;
