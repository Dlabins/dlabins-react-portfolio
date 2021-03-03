import React from "react";
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import resume from '../images/resume.png';
import './style.css';

function Footer () {
    return (
        <div className="footer">
        <footer class="p-1 bg-dark">
          <div class="container">
          <div class="icons">
          <a href="https://www.linkedin.com/in/david-labins-666b4296/">
              <img src={linkedin} alt="Linkedin" width="30" height="30" />
          </a>
          
            <a href="https://github.com/Dlabins">
              <img src={github} alt="Github" width="30" height="30" />
          </a>
            <a href="https://dlabins.github.io/Dlabins-Portfolio/assets/DavidLabinsResume_2020-2021.pdf">
            <img src={resume} alt="Resume" width="30" height="30" /> 
            </a>
            <p class="text-center text-white">
              Copyright &copy; David Labins 2021
            </p>
          </div>
          </div>
        </footer>
      </div>
    );
  }  

export default Footer;