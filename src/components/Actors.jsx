import React from "react";

const Actors = props => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  console.log(props.info);

  const urlactor = `${IMAGE_BASE_URL}w154/${props.info.profile_path}`;

  return (
    <div className="card">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={urlactor} className="card-img-top" alt="..." />
        </div>
        <div class="col-md-8">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p className="card-text">Name: {props.info.name} </p>
            <p className="card-text">Character:{props.info.character} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
