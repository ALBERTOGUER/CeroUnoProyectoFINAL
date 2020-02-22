import React from "react";

const MoviesComponent = props => {
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
     const url = `${IMAGE_BASE_URL}w500${props.movie.poster_path}`
     console.log(url);
     
  return (
    <div>
      <div className="card" >
        <img src={url} className="card-img-top" alt="..." />
        
      </div>
    </div>
  );
};

export default MoviesComponent;
