import React, { Component } from "react";
import classNames from 'classnames';
import './title.scss'

class Title extends Component {
  render() {
    var undelineClass = classNames(
      'title-underline',
      this.props.color
    );

    return (
      <div className="title text-center py-4">
        <h2 className="title-text">{this.props.text}</h2>
        <div className={undelineClass}></div>
      </div>
    )
  }
};

export default Title;
