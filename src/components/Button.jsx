import React from "react";

const Button = props => {
  return (
    <button
      type="button"
      name=""
      id=""
      className="btn btn-primary btn-lg btn-block"

      onClick={props.action}
    > VER MAS...</button>
  );
};

export default Button;
