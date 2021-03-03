import React from "react";
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import readme from '../images/readme.png';
import './style.css';


function Portfolio () {
    return (
<div className="portfolio">
        <br></br>
        <br></br>
        <h1 class="projects">Project #1</h1>
        <br></br>
        <a href="https://shannonquinn91.github.io/Drury-Lane-Sweets/">
        <img class="img-thumbnail" alt="Project 1 Screenshot" src={project1} />
        </a>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="projects">Readme Generator</h1>
        <br></br>
        <a href="https://github.com/Dlabins/README-Generator">
        <img className="img-thumbnail" alt="Readme Generator" src={readme} />
        </a>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="projects">Project #2</h1>
        <br></br>
        <a href="https://eddiephi-plots-of-gold.herokuapp.com/">
        <img className="img-thumbnail" alt="Project 2 Screenshot" src={project2} />
        </a>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }

export default Portfolio;