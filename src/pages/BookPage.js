import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from '../components/CurrentlyReading'
import WantToRead from '../components/WantToRead'
import Read from '../components/Read'
import NavBar from '../components/Navbar'

class BookPage extends Component {
    render() {

        const { books, onNavigate } = this.props

        return (
            <div className="list-books">
                <NavBar />
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading books={books} />
                        <WantToRead books={books} />
                        <Read books={books} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' onClick={onNavigate}>
                        <button >Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookPage