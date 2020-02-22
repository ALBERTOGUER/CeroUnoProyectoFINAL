import React from "react";

const ImgComponent = props => {
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const urlimg1 = `${IMAGE_BASE_URL}w1280${props.movie1}`;
  const urlimg2 = `${IMAGE_BASE_URL}w1280${props.movie2}`;
  const urlimg3 = `${IMAGE_BASE_URL}w1280${props.movie3}`;
  console.log(urlimg1);

  return (
    <div id="section_img">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={urlimg1} className="d-block w-100 image_Size" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.moviename1}</h5>
              <p>{props.info1}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={urlimg2} className="d-block w-100 image_Size" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.moviename2}</h5>
              <p>{props.info2}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={urlimg3} className="d-block w-100 image_Size" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.moviename3}</h5>
              <p>{props.info3}</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ImgComponent;
