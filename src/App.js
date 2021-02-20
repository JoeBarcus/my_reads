import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './pages/SearchPage'
import BookPage from './pages/BookPage'
import { Switch, Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  shelves = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to read",
    read: "Read",
    none: "None"
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  };

  changeBookStatus = (book, e) => {

    let newShelfValue = e.target.value;

    this.setState((previousState) => {
      BooksAPI.update(book, newShelfValue).then(response => {

        // update shelf state of new updated book
        book.shelf = newShelfValue;

        // list other books without new updated book
        const updateBooks = previousState.books.filter((b) => b.id !== book.id)

        // add new updated book to list
        updateBooks.push(book)

        // update state
        this.setState({
          books: updateBooks
        })

      })
    })

  }

  render() {

    return (
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <BookPage
              shelves={this.shelves}
              books={this.state.books}
              changeBookStatus={this.changeBookStatus} />
          </Route>
          <Route path='/search'><SearchPage /></Route>
        </Switch>
      </div>)
  }
}


export default BooksApp