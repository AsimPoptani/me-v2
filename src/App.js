import React from 'react';
import './App.css';
import imageMe from './imgs/me.jpeg'
import Carosel from './comp/carousel/Carousel'
// Colours
// #9CAFB7
// #6BD425
// #B27C66
// #352D39
// #183059


function App() {

  const skills=[
    {
      title: "Java",
      summary: "Love Java",
      image: {
        src: require('./imgs/java.png')
      }
    },
  ]
  return (
    <div id='page'>
      <div className="section light" >
        <p className='title'>Asim Poptani</p>
        <img id="imageMe" src={imageMe} alt="A pictiure of Asim Poptani"/>
        <p id="strapline">Brain: an apparatus with which we think we think. <br/><u>Ambrose Bierce (1842 - 1914)</u></p>
        
      </div>
      <div className="section dark">
        <p>Strange/Awesome stories</p>
      </div>
      <div className="section light">
        <p>Main Skills</p>
        <Carosel cards={skills}/>

        <p>Java</p>
        <p>NodeJs</p>
      </div>
      <div className="section dark">
        <p>Hobbies</p>
        <p>Hobbies</p>
        <p>Hobbies</p>
      </div>
      <div className="section light">
        <p>Previous jobs</p>
      </div>
      <div className="section dark">
        <p>What I have learned</p>
      </div>
      <div className="section light">
        <p>How I made this website</p>
      </div>
      <div className="section dark">
        <p>What am I doing now?</p>
      </div>
      <div className="section light">
        <p>Contact me</p>
        <p> Find me on your favorite media platform :)</p>
      </div>
      <div id="footer"></div>

    </div>
  );
}

export default App;
