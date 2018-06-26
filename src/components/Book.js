import React, {Component} from 'react'
import BookForm from './BookForm'
class Book extends Component {

  constructor() {
    super();
    this.deleteClickedBook = this.deleteClickedBook.bind(this)
    this.editClickedBook = this.editClickedBook.bind(this)
  }
  deleteClickedBook() {
    this.props.onDeleteBook(this.props.book);
  }
  editClickedBook() {
      this.props.onEditBook(this.props.book)
  }
  render(){
    return(
        <div className="book-card small" data-books-index={this.props.book.id}>
          <img src={this.props.book.image} alt={this.props.book.title}></img>
          <h2>{this.props.book.title}</h2>
          <h3>{this.props.book.author}</h3>
          <h4>{this.props.book.releaseDate}</h4>
          <span onClick={ this.editClickedBook }>{this.props.book.title}</span>
          { this.props.editingBookId === this.props.book._id ? <BookForm
                                                                  autoFocus={true}
                                                                  buttonName="Update Book!"
                                                                  onUpdateBook={this.props.onUpdateBook} /> : '' }
          <span className='deleteButton' onClick={this.deleteClickedBook}> (X) </span>
        </div>
    )
  }
}

export default Book
