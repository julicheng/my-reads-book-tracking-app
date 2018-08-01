import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import Shelf from "./Shelf";

class BooksApp extends React.Component {
  state = {
    books: [],
    updatedBook: [],
    searchedBooks: []
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => <Search />} />
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
                  <Shelf title="Currently Reading" />
                  <Shelf title="Want to Read" />
                  <Shelf title="Read" />
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
