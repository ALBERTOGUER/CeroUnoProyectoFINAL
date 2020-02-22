import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  const img =
    "https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg";
  return (
    <div>
      <img
        src={img}
        style={{
          width: 600,
          
          display: "block",
          margin: "auto",
          position: "relative"
        }}
      className="mt-5" />
      <center>
        <Link to="/">Return to Home Page</Link>
      </center>
    </div>
  );
};

export default NotFound;
