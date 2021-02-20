import React, { Component } from 'react'
import BooksApp from '../App';

class Book extends Component {

    render() {
        console.log(this.props)
        const { book, shelves, onChange } = this.props
        const { title, imageLinks, authors, shelf } = book
        const imageURL = imageLinks ? imageLinks.thumbnail : '';

        return (

            <div>
                <li key={BooksApp.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
                            <div className="book-shelf-changer">
                                <select value={shelf || 'none'} onChange={(e) => onChange(book, e)}>
                                    <option value="move" disabled>Move to...</option>
                                    {Object.entries(shelves).map(([shelfKey, displayName], index) => (
                                        <option key={index} value={shelfKey}>
                                            {displayName}
                                        </option>
                                    ))}
                                </select>
                                {/* <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select> */}
                            </div>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
                </li>
            </div>
        )
    }
}

export default Book