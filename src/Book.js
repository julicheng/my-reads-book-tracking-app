import React, { Component } from "react";
import ChangeShelf from "./ChangeShelf";

class Book extends Component {
  state = {};
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url()"
            }}
          />
          <ChangeShelf />
        </div>
        <div className="book-title" />
        <div className="book-authors" />
      </div>
    );
  }
}

export default Book;
