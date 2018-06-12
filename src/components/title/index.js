import React from "react";
import './title.scss'

const Title = (props) => (
  <div className="title text-center">
    <h1 className="title-text">{props.text}</h1>
    <div className="title-underline"></div>
  </div>
);

export default Title;
