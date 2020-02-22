import React, { Component } from "react";
import ImgComponent from "../components/ImgComponent";
import MoviesComponent from "../components/MoviesComponent";
import Button from "../components/Button";

class HomeContainer extends Component {
  state = {
    movies: [],
    currentPage: 2
  };

  componentDidMount = () => {
    const API_URL = "https://api.themoviedb.org/3/";
    const API_KEY = "0d59c137d4b1775154cc094577fbe290";
    const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          movies: data.results,
          movie1: data.results[0].backdrop_path,
          moviename1: data.results[0].title,
          movie2: data.results[1].backdrop_path,
          moviename2: data.results[1].title,
          movie3: data.results[2].backdrop_path,
          moviename3: data.results[2].title,
          info1: data.results[0].overview,
          info2: data.results[1].overview,
          info3: data.results[2].overview
        });
      });
  };

  handleMoreMovies = () => {
    const API_URL = "https://api.themoviedb.org/3/";
    const API_KEY = "0d59c137d4b1775154cc094577fbe290";
    const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage++}`;
    console.log(this.state.currentPage);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let array = this.state.movies;
        console.log(array);

        data.results.map(cambio => array.push(cambio));
        this.setState(prevState => ({
          movies: array,
          
        }));

        console.log(this.state.movies);
      });
  };

  render() {
    const movieCard = this.state.movies.map((img, idx) => (
      <MoviesComponent movie={img} key={idx} />
    ));

    console.log(movieCard);

    return (
      <div className="mb-3">
        <ImgComponent
          movie1={this.state.movie1}
          movie2={this.state.movie2}
          movie3={this.state.movie3}
          moviename1={this.state.moviename1}
          moviename2={this.state.moviename2}
          moviename3={this.state.moviename3}
          info1={this.state.info1}
          info2={this.state.info2}
          info3={this.state.info3}
        />
        <div className="card-columns container mt-5">
          {this.state.movies.length === 0
            ? "No hay contactos disponibles"
            : movieCard}
        </div>
        <Button action={this.handleMoreMovies} />
      </div>
    );
  }
}

export default HomeContainer;
