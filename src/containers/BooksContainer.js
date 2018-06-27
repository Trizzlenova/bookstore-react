import React, {Component} from 'react'
import BookModel from '../models/Book'
import Books from '../components/Books'
import CreateBookForm from '../components/CreateBookForm'

class BooksContainer extends Component {
  render() {

    return (
      <main className="booksContainer">
        <Books
          books={this.props.books}
          editingBookId={this.props.editingBookId}
          deleteBook={ this.props.deleteBook }
          editBook={this.props.editBook}
          updateBook={this.props.updateBook}
          updateCheckbox={this.props.updateCheckbox}/>
        <CreateBookForm
          createBook={ this.props.createBook }/>
      </main>
    )
  }
}

export default BooksContainer
