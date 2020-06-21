import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="profile-pic">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 centered">
            <img src="./assets/images/profilepic.gif" alt="Rodrigo M. Gimenes" /> 
            <h1>Hello there, I'm Rodrigo.</h1>
            <p>
              I'm a <strong>Programmer</strong> and <strong>Full-Stack Web Developer</strong>, 
              and also a passionate learner.
            </p>
            <p>
              I guess you're here because you want to know a bit about me, huh?! 
              I am not all that good at talking about myself, but I'll give it a 
              shot. Let's start to learn more <Link to="/about">about me</Link>.
            </p> 
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Home;
