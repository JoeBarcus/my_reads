import React from 'react'
import Book from '../components/Book'
import PropTypes from 'prop-types'

const CurrentlyReading = ({ books, shelves, onChange, title }) => {


    const currentReading = books.filter((book) => {
        return book.shelf === 'currentlyReading'
    })




    return (
        console.log(onChange),
        < div className="bookshelf" >
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                < ol className="books-grid" >
                    {currentReading.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            shelves={shelves}
                            onChange={onChange}
                        />
                    ))}
                </ol >
            </div>
        </div >)
}


CurrentlyReading.propTypes = {
    books: PropTypes.array.isRequired
};

export default CurrentlyReading