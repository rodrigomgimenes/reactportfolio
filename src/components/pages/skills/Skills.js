import React from "react";

function Skills() {
  return (
    <div id="profile-pic">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2 centered">

						<h3>SKILLS</h3>
						<hr />
						<br />		
					</div> 

					<div className="col-lg-4">
					
						<h4>FRONT-END</h4>
						
						<p id="pbar-title" style={{width:"100%"}} data-value="">HTML5</p>
						<progress max="100" value="100" className="html5"></progress>
		
						<p id="pbar-title" style={{width:"100%"}} data-value="">CSS3</p>
						<progress max="100" value="100" className="css3"></progress>

            <p id="pbar-title" style={{width:"100%"}} data-value="">ReactJS</p>
						<progress max="100" value="100" className="reactjs"></progress>
	
					</div> 
					
					<div className="col-lg-4">
						
						<h4>BACK-END</h4>

						<p id="pbar-title" style={{width:"100%"}} data-value="">C</p>
						<progress max="100" value="100" className="c"></progress>
						
						<p id="pbar-title" style={{width:"100%"}} data-value="">Java</p>
						<progress max="100" value="100" className="java"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">Delphi</p>
						<progress max="100" value="100" className="delphi"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">SQL</p>
						<progress max="100" value="100" className="sql"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">Javascript</p>
						<progress max="100" value="100" className="javascript"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">JQuery</p>
						<progress max="100" value="100" className="jquery"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">Node.js</p>
						<progress max="100" value="100" className="node-js"></progress>

						<p id="pbar-title" style={{width:"100%"}} data-value="">PHP</p>
						<progress max="100" value="100" className="php"></progress>
		
					</div>

					<div className="col-lg-4">
						
						<h4>AND MORE</h4>

						<ul>
							<li>C#</li>
							<li>JSON</li>
							<li>Restful APIs</li>
							<li>Sequelize</li>
							<li>MongoDB</li>
							<li>PostgreSQL</li>
							<li>Bootstrap</li>
							<li>MaterialUI</li>
							<li>Git and GitHub</li>
							<li>TortoiseSVN</li>
							<li>Heroku</li>
							<li>Adobe PhoneGap</li>
							<li>Delphi 5/7/2007</li>
							<li>Visual Studio 2013</li>
							<li>Eclipse IDE</li>
							<li>Android Studio</li>
							<li>SQL Server 2016</li>
							<li>SoapUI</li>
							<li>MS Project 2010</li>
							<li>dotProject.net</li>
						</ul>
		
					</div> 
				</div>
			</div>
		</div>
  );
}

export default Skills;
