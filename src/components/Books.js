import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
  render(){
    let books = this.props.books.map( (book) => {
      return (
        <Book
          key={book._id}
          book={book}
          onDeleteBook={this.props.onDeleteBook}
          editingBookId={this.props.editingBookId}
          onEditBook={this.props.onEditBook}
          onUpdateBook={this.props.onUpdateBook}
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
