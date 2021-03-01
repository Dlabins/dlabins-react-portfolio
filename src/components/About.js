import React from "react";
import profilePic from '../images/profile.png'



function About () {
    return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={profilePic}
              alt="profilePic"
              width="auto"
              height="auto"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            Welcome to my About Me page! My name is David Labins and I am an aspiring Software Engineer and Web Developer. I currently reside in Dover, New Hampshire. In my free time I enjoy digital audio production, sports, and my german shepherd Apollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;