import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import Shelf from "./Shelf";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  handleBooksForShelving = shelf => {
    let shelfBooks = this.state.books.filter(book => book.shelf === shelf);
    return shelfBooks;
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search
              handleShelfChange={this.handleShelfChange}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                    title="Currently Reading"
                    books={this.handleBooksForShelving("currentlyReading")}
                    handleShelfChange={this.handleShelfChange}
                  />
                  <Shelf
                    title="Want to Read"
                    books={this.handleBooksForShelving("wantToRead")}
                    handleShelfChange={this.handleShelfChange}
                  />
                  <Shelf
                    title="Read"
                    books={this.handleBooksForShelving("read")}
                    handleShelfChange={this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
