import React from 'react';

function About() {
    return (
        <div id="about" class="about">
        <h2>About Me</h2>
        <img src={require("../assets/images/newton.jpg")} alt="Newton Hoang"></img>
        <p>A Seattle born Vietnamese-American, <br /> graduated from Bellevue College in 2021 with a degree in Digital Media. <br />Currently, i'm attending a UW Coding Bootcamp.</p>
        </div>
    );
  }
  
  export default About;