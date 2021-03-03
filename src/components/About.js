import React from "react";
import profilePic from '../images/profile.png';
import './style.css';



function About () {
    return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="profilepic"
              src={profilePic}
              alt="profilePic"
              width="400px"
              height="400px"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="about">A little about me...</h1>
            <br></br>
            <p class="about">
             My name is David Labins and I am an aspiring Software Engineer and Web Developer. I currently reside in Dover, New Hampshire. In my free time I enjoy digital audio production, sports, and my german shepherd Apollo.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default About;