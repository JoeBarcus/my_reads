import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './pages/SearchPage'
import BookPage from './pages/BookPage'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],

    showSearchPage: ''
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage === 'search' && (
          < SearchPage onNavigate={() => {
            this.setState(() =>
              ({ showSearchPage: '' }))
          }} />
        )}
        {this.state.showSearchPage === '' && (
          < BookPage books={this.state.books}
            onNavigate={() => {
              this.setState(() =>
                ({ showSearchPage: 'search' }))
            }}
          />
        )}
      </div>)
  }
}


export default BooksApp