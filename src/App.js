import React from "react";
import Home from "./containers/HomeContainer";
import Movie from "./containers/MovieContainer";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
