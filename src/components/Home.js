import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 class="projects">Hello, I'm David Labins.</h1>
          <br></br>
          <h1 class="hometext">I am a full-stack Web Development Student.</h1>
          <br></br>
          <br></br>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <Link to="/portfolio">
          <button type="button" onClick="/portfolio" class="btn btn-outline-warning">See my work ➟ </button>
          </Link>
       </div>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> 
          <br></br> 
          </div>
          <div class="col-lg-5">
        
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Home;
