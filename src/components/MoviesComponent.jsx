import React from "react";

const MoviesComponent = props => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const url = `${IMAGE_BASE_URL}w500${props.movie.poster_path}`;
  

  return (
    <div>
      <div className="card">
        <img src={url}  className="card-img-top" alt="..."  onClick={props.action} name={props.movie.id} />
      </div>
    </div>
  );
};

export default MoviesComponent;
