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
						
						<p id="pbar-title" style={{width:"90%"}} data-value="90">HTML5</p>
						<progress max="100" value="90" className="html5"></progress>
		
						<p id="pbar-title" style={{width:"85%"}} data-value="85">CSS3</p>
						<progress max="100" value="85" className="css3"></progress>

            <p id="pbar-title" style={{width:"50%"}} data-value="50">ReactJS</p>
						<progress max="100" value="50" className="reactjs"></progress>
	
					</div> 
					
					<div className="col-lg-4">
						
						<h4>BACK-END</h4>

						<p id="pbar-title" style={{width:"90%"}} data-value="90">C</p>
						<progress max="100" value="90" className="c"></progress>
						
						<p id="pbar-title" style={{width:"90%"}} data-value="90">Java</p>
						<progress max="100" value="90" className="java"></progress>

						<p id="pbar-title" style={{width:"90%"}} data-value="90">Delphi</p>
						<progress max="100" value="90" className="delphi"></progress>

						<p id="pbar-title" style={{width:"90%"}} data-value="90">SQL</p>
						<progress max="100" value="90" className="sql"></progress>

						<p id="pbar-title" style={{width:"85%"}} data-value="85">Javascript</p>
						<progress max="100" value="85" className="javascript"></progress>

						<p id="pbar-title" style={{width:"85%"}} data-value="85">JQuery</p>
						<progress max="100" value="85" className="jquery"></progress>

						<p id="pbar-title" style={{width:"70%"}} data-value="70">Node.js</p>
						<progress max="100" value="70" className="node-js"></progress>

						<p id="pbar-title" style={{width:"35%"}} data-value="35">PHP</p>
						<progress max="100" value="35" className="php"></progress>
		
					</div>

					<div className="col-lg-4">
						
						<h4>OTHERS</h4>

						<ul>
							<li>Git and GitHub</li>
							<li>TortoiseSVN</li>
							<li>Bootstrap</li>
							<li>Adobe PhoneGap</li>
							<li>Delphi 5/7/2007</li>
							<li>Visual Studio 2013</li>
							<li>Eclipse IDE</li>
							<li>Android Studio</li>
							<li>SQL Server 2016</li>
							<li>PostgreSQL</li>
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
