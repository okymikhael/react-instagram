import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    return (
      <div className="w-1/3">
        <a href={this.props.image.url} target="_blank">
          <img
            src={this.props.image.url}
            className="w-full p-0.5 md:p-5 hover:opacity-80"
            alt={this.props.image.title}
          />
        </a>
      </div>
    );
  }
}
