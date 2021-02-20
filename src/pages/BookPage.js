import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from '../components/CurrentlyReading'
import WantToRead from '../components/WantToRead'
import Read from '../components/Read'
import NavBar from '../components/Navbar'

class BookPage extends Component {
    render() {

        const { shelves, books, changeBookStatus } = this.props

        return (
            console.log(this.props),
            < div className="list-books" >
                <NavBar />
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading
                            shelves={shelves}
                            books={books}
                            onChange={changeBookStatus}
                        />
                        <WantToRead
                            shelves={shelves}
                            books={books}
                            onChange={changeBookStatus} />
                        <Read
                            shelves={shelves}
                            books={books}
                            onChange={changeBookStatus} />
                    </div>
                </div>
                <div className="open-search">
                    <Link className="btn-search" to="/search">
                        <button >Add a book</button>
                    </Link>
                </div>
            </div >
        )
    }
}

export default BookPage