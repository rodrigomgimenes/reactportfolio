import React from "react";

function Projects(props) {
  return (
    <div className="col-lg-4">
      <article className="work-item">
        <a href={props.href_view} target="_blank" rel="noopener noreferrer" className="image fit thumb">
          <img className="img-responsive" src={props.image} alt="class-activities" />
        </a>
        <h3>{props.headtitle}</h3>
        <p id={`portfolio${props.id}`}>{props.description}</p>
        <a href={props.href_code} target="_blank" rel="noopener noreferrer">
          <i className="md-size-icon fas fa-file-code"></i>
        </a>
      </article>
    </div>
  );
}

export default Projects;
