import React from "react";
import './title.scss'

const Title = (props) => (
  <div className="title text-center">
    <h2 className="title-text">{props.text}</h2>
    <div className="title-underline"></div>
  </div>
);

export default Title;
