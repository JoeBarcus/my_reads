import React, { Component } from 'react'
import Book from '../components/Book'

class CurrentlyReading extends Component {
    render() {

        const { books } = this.props

        return (

            < div className="bookshelf" >
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <Book books={books} />
                </div>
            </div >)
    }
}

export default CurrentlyReading