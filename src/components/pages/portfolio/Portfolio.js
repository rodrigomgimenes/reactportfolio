import React, { Component } from "react";
import Projects from "../supplementary/Projects";
import projectList from "../supplementary/myprojects.json";

class Portfolio extends Component {
  state = {
    projectList
  };

  render() {
    return (
      <div className="container container-helper">

        <div className="row row-helper">
          <div className="col-lg-6 col-lg-offset-3 centered">
            <h3>MY PORTFOLIO</h3>
            <hr />
          </div>
        </div> 

        <div className="row row-helper centered">	
          {/* Get every project */}
          {this.state.projectList.map(proj => (
            <Projects 
              id={proj.id} 
              headtitle={proj.headtitle} 
              href_view={proj.href_view} 
              href_code={proj.href_code}
              image={proj.image}
              description={proj.description}
            />
          ))}
        </div> 
      </div>
    );
  }
}

export default Portfolio;
