import React, { Component } from "react";
import Time from "../components/Time";
import ConvertMoney from "../components/ConvertMoney";
import Actors from "../components/Actors";

class MovieContainer extends Component {
  state = {
    encabezado: "",
    imgprincipal: "",
    title: "",
    overview: "",
    votos: "",
    time: 0,
    budget: 0,
    revenue: 0,
    actor: [],
    imgactor: "",
    name: "",
    character: ""
  };
  componentDidMount = () => {
    const API_URL = "https://api.themoviedb.org/3/";
    const API_KEY = "0d59c137d4b1775154cc094577fbe290";
    const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
    const url = `${API_URL}movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`;

    const urlactor = `${API_URL}movie/${this.props.match.params.id}/credits?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        /* const directors = data.crew.filter(
          member => member.job === "Director"
        );
        console.log(directors); */

        this.setState(prevState => ({
          info: data,
          encabezado: `${IMAGE_BASE_URL}w1280${data.backdrop_path}`,
          imgprincipal: `${IMAGE_BASE_URL}w500${data.poster_path}`,
          title: data.title,
          overview: data.overview,
          votos: data.vote_average,
          time: data.runtime,
          budget: data.budget,
          revenue: data.revenue
        }));
      });

    fetch(urlactor)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          actor: data.cast,
          imgactor: data.cast.profile_path,
          name: data.cast.name,
          character: data.cast.character
        }));

        console.log(this.state.actor);
      });
  };

  render() {
    const actosCard = this.state.actor.map((info, idx) => (
      <Actors key={idx} info={info}
       />
    ));

    return (
      <div id="contenedor">
        <img src={this.state.encabezado} id="MOvieimg" />
        <div className="mt-5 infomovie">
          <div className="section">
            <img src={this.state.imgprincipal} alt="" id="poster" />
          </div>
          <div className="section2">
            <h4>{this.state.title}</h4>
            <p>{this.state.overview}</p>
            <p>
              Votes :
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={this.state.votos * 10}
              />
            </p>
            <p>
              Time : <Time time={this.state.time} />
            </p>
            <p>
              Budget: <ConvertMoney budget={this.state.budget} />
            </p>
            <p>
              Revenue: <ConvertMoney budget={this.state.revenue} />
            </p>
          </div>
        </div>
        <div className="card-columns container mt-5">{actosCard}</div>
        ));
      </div>
    );
  }
}

export default MovieContainer;
