import React, { Component } from "react";
import classNames from 'classnames';
import './title.scss'

class Title extends Component {
  render() {
    return (
      <div className="title text-center py-4">
        <h2 className="title-text">{props.text}</h2>
        <div className="title-underline"></div>
      </div>
    )
  }
};

export default Title;
