import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
    state = {
        bookList: [],
        searchQueryText: ''
    }

    clearQuery = () => {
        this.setState({ searchQueryText: '' })
    }

    searchResultwithShelf = (searchResult, books) => {

        const bookList = (searchResult).map(book => {
            for (let bookOnShelf of books) {
                if (bookOnShelf.id === book.id) {
                    book.shelf = bookOnShelf.shelf
                    break;
                }
            }
            return book;
        })

        return bookList;
    }


    searchBookHandle = async (e) => {

        let searchQuery = e.target.value;

        this.setState({
            searchQueryText: searchQuery
        })

        try {
            if (searchQuery === '') {
                this.setState({
                    searchQueryText: '',
                    bookList: []
                })
            } else {
                await BooksAPI.search(searchQuery).then((searchResult) => {
                    if (Array.isArray(searchResult)) {
                        this.setState(() => ({
                            bookList: this.searchResultwithShelf(searchResult, this.props.books),
                        }));
                    } else {
                        this.setState({ bookList: [] })
                    }
                });
            }
        }

        catch (err) {
            this.setState({ bookList: [] })
        }
    }



    render() {

        const { shelves, changeBookStatus } = this.props;
        const { bookList, searchQueryText } = this.state;
        console.log(this.state)
        console.log(this.props)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" onClick={this.clearQuery}>Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={searchQueryText}
                            onChange={(event) => this.searchBookHandle(event)} />
                    </div>

                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {bookList.length > 0 && bookList.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                shelves={shelves}
                                onChange={changeBookStatus}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage