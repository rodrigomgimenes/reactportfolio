import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-4">
            <h4><strong>My Contact</strong></h4>
            <p className="address">
              <i className="fa fa-user"></i><span> Rodrigo Macedo Gimenes</span><br />
              <i className="fa fa-phone"></i><span> (647) 679-3415</span><br />
              <i className="fa fa-envelope"></i><span> rodrigomacedogimenes@gmail.com</span>
            </p> 
          </div> 
            
          <div className="col-lg-5">
            <h4 className="social-title"><strong>Social Media</strong></h4>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=100040648456479" target="_blank" rel="noopener noreferrer"><i className="plus-size-icon fab fa-facebook"></i></a></li>
							<li><a href="https://www.linkedin.com/in/rodrigo-m-gimenes-b0a1a227/" target="_blank" rel="noopener noreferrer"><i className="plus-size-icon fab fa-linkedin"></i></a></li>
							<li><a href="https://www.instagram.com/rodrigomgimenes/" target="_blank" rel="noopener noreferrer"><i className="plus-size-icon fab fa-instagram"></i></a></li>
							<li><a href="https://join.skype.com/invite/B9JicSF0g7Nl" target="_blank" rel="noopener noreferrer"><i className="plus-size-icon fab fa-skype"></i></a></li>
							<li><a href="https://github.com/rodrigomgimenes" target="_blank" rel="noopener noreferrer"><i className="plus-size-icon fab fa-github"></i></a></li>
            </ul> 	
          </div>
            
          <div className="col-lg-3">
            <p className="download">
              <a href="./assets/documents/RodrigoGimenes.pdf" target="_blank" className="button"><i className="fa fa-download"></i> Download Resume</a>
            </p>
            <br />
            <ul className="copyright centered">
              <li>&copy; Copyright 2020</li>
              <li>Design by RMG</li>   
            </ul> 
          </div> 
          
        </div> 
      </div>
    </div>
  );
}

export default Footer;