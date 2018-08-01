import React, { Component } from "react";
import ChangeShelf from "./ChangeShelf";

class Book extends Component {
  render() {
    let bookCover = this.props.book.imageLinks;
    if (bookCover) {
      bookCover = this.props.book.imageLinks.thumbnail;
    } else {
      bookCover = "";
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookCover})`
            }}
          />
          <ChangeShelf
            book={this.props.book}
            handleShelfChange={this.props.handleShelfChange}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
