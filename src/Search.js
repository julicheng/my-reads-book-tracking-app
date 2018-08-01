import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  handleBookSearch = query => {
    this.setState({
      query: query
    });
    if (query) {
      BooksAPI.search(query).then(result => {
        if (result.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: result });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    console.log(this.state.searchedBooks);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"
              onChange={event => this.handleBookSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => {
              searchedBook.shelf = "none";
              this.props.books.map(book => {
                if (book.id === searchedBook.id) {
                  searchedBook.shelf = book.shelf;
                } else {
                }
              });
              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    handleShelfChange={this.props.handleShelfChange}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
