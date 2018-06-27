import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
  render(){
    let books = this.props.books.map( (book) => {
      return (
        <Book
          key={book._id}
          book={book}
          deleteBook={this.props.deleteBook}
          editingBookId={this.props.editingBookId}
          editBook={this.props.editBook}
          updateBook={this.props.updateBook}
          updateCheckbox={this.props.updateCheckbox}/>
      )
    })
    return(
      <div className="row">
        {books}
      </div>
    )
  }
}

export default Books
