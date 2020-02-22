import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  const url= "/img/camera.png"
  return (
    <nav className=" nav navbar navbar-dark bg-dark">
      <Link to="/" ><img src={url} id="img"/>  <span id="react">React</span>   <span>Film</span></Link>
     
    </nav>
  );
};

export default Header;