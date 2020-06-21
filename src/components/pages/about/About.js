import React, { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const styles = {
    aCustom: {
      textDecoration: "none"
    },
    imageLinks: {
      border: "2px dotted #555"
    }
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="about">
      {/* About header */}
      <div id="profile-pic">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 centered">
              
              <img src="./assets/images/profilepic.gif" alt="Rodrigo M. Gimenes" />
              
              <h3>ABOUT ME</h3>
              <hr />
              <br />

              <p>
                My name is <strong>Rodrigo M. Gimenes</strong>, I was born in the city 
                of <strong>Sao Paulo</strong> - <strong>Brazil</strong> ( <i>23.5505° S</i>
                , <i>46.6333° W</i> ). Currently, I am living in <strong>Toronto</strong>
                , <strong>Canada ON</strong> ( <i>43.6532° N</i>, <i>79.3832° W</i> ). I 
                possess a <i>Bachelor of Science Major</i> in <strong>Computer Science</strong> at 
                <a href="https://www.mackenzie.br/" target="_blank" rel="noopener noreferrer"> <u><b>Universidade 
                Presbiteriana Mackenzie</b></u></a>.
              </p>

              <p>
                I have been working as a <strong>Software Developer</strong> for at 
                least <i>8+ years</i> in <strong>Brazil</strong>, with professional 
                experience in <i>financial organizations</i> and <i>banking</i>, 
                and <i>web technologies</i>. But I've always seen myself standing on 
                a sweet spot where Design and Code intersects.
              </p>

              {!expanded ? (
                <div role="button" className="btn btn-link" onClick={handleExpandClick} style={styles.aCustom} >
                  Continue Reading...
                </div>
              ) : (
                <div>
                  <p>
                    Throughout my time studying <i>Computer Science</i> at university. I've 
                    realized a good developer is always acquiring new skills, challenging 
                    their assumptions, and seeking feedback in order to grow. And I've 
                    always had a passion of studying abroad. So now, I'm a student at 
                    <strong>University of Toronto</strong> learning more about <i>web 
                    development</i>.
                  </p>

                  <p>
                    I thrive on new experiences and stepping out of my comfort zone to 
                    learn what my strengths and weaknesses are, not only in work but in 
                    all aspects of life.
                  </p>

                  <p>
                    I enjoy taking complex problems and turning them into simple and 
                    beautiful interface designs. Also, love the logic and structure of 
                    coding. I am a person who emphasizes on clean and efficient coding 
                    practices, whether it be <i>HTML5</i>, <i>CSS3</i> or <i>Javascript</i>.
                  </p>
                        
                  <p>
                    When I'm not coding, you'll find me in the gym, skateboarding, playing 
                    soccer ( <strong>well, I am Brazilian!!</strong> ) or on the court shooting 
                    some hoops - <i>even though I don't have height enough or skill to play
                    </i>. Almost forgot, I also love to read and catch a movie once in a 
                    while.
                  </p>

                  <div role="button" className="btn btn-link" onClick={handleExpandClick} style={styles.aCustom} >
                    # Hide
                  </div>
                </div>
              )}
            </div> 
          </div> 
        </div> 
      </div>

      {/* More about information */}
      <div className="container container-helper">
        <div className="row row-helper centered">
          <div className="col-lg-4">
            <Link to="/experience"><img id="img-about" src="./assets/images/about001.png" alt="books" style={styles.imageLinks} /></Link>
            <br /><br />
            <p><Link to="/experience">Professional Experience</Link></p>
          </div>
          <div className="col-lg-4">
            <Link to="/skills"><img id="img-about" src="./assets/images/about002.png" alt="map" style={styles.imageLinks} /></Link>
            <br /><br />
            <p><Link to="/skills">Skills</Link></p>
          </div>
          <div className="col-lg-4">
            <Link to="/portfolio"><img id="img-about" src="./assets/images/about003.png" alt="user" style={styles.imageLinks} /></Link>
            <br /><br />
            <p>Take a look at my personal <Link to="/portfolio">Portfolio</Link>.</p>
          </div>
        </div>
        <div className="row row-helper">
          <div className="col-lg-6">
            
            <h4>EDUCATION</h4>
            
            <h5><a href="https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/ciencia-da-computacao/" target="_blank" rel="noopener noreferrer">Mackenzie University</a> </h5>
            <p className="info"> B.Sc. Major in <strong>COMPUTER SCIENCE</strong> <span>&bull;</span> <em className="date">June 2008</em></p>
            
            <h5><a href="https://bootcamp.learn.utoronto.ca/coding/" target="_blank" rel="noopener noreferrer">University of Toronto</a> <span>&bull;</span> School of Continuing Studies</h5>
            <p className="info"> <strong>FULLSTACK WEB DEVELOPMENT</strong> <span>&bull;</span> <em className="date">Current (2020)</em></p>

          </div> 
          
          <div className="col-lg-6">
            
            <h4>CERTIFICATION</h4>
            
            <h5><a href="https://www.mackenzie.br/pos-graduacao/especializacao/sao-paulo-higienopolis/engenharia-e-tecnologia/gestao-de-projetos/" target="_blank" rel="noopener noreferrer">Mackenzie University</a> </h5>
            <p className="info"> Certified in <strong>PROJECT MANAGEMENT</strong> <span>&bull;</span> <em className="date">June 2010</em></p>

            <h5><a href="https://www.impacta.com.br/" target="_blank" rel="noopener noreferrer">Impacta</a> </h5>
            <p className="info"> Certified in <strong>WEB AND MOBILE APPLICATION DEVELOPMENT</strong> <span>&bull;</span> <em className="date">June 2017</em></p>
            
            <h5><a href="https://www.impacta.com.br/" target="_blank" rel="noopener noreferrer">Impacta</a> </h5>
            <p className="info"> Certified in <strong>SQL 2016 – BUSINESS INTELLIGENCE</strong> <span>&bull;</span> <em className="date">July 2017</em></p>

            <h5><a href="https://www.udemy.com/certificate/UC-LEQDKR0P/" target="_blank" rel="noopener noreferrer">Udemy</a> </h5>
            <p className="info"> Certified in The Complete <strong>SQL BOOTCAMP</strong> <span>&bull;</span> <em className="date">October 2019</em></p>
    
          </div>
        </div>	
      </div>
    </div>
  );
}

export default About;
