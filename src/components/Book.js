import React, {Component} from 'react'
import BookForm from './BookForm'
import {Card, CardTitle, Col} from 'react-materialize'
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
      <Col m={4}>
        <Card data-books-index={this.props.book.id} className='large card'
          header={<CardTitle image={this.props.book.image}></CardTitle>}
          actions={[
            <div>
              { this.props.editingBookId === this.props.book._id ? <BookForm
                                                                      className="update"
                                                                      autoFocus={true}
                                                                      buttonName="Update Book!"
                                                                      onUpdateBook={this.props.onUpdateBook} /> :
                                                                  <div className="actions">
                                                                    <span onClick={ this.editClickedBook }>Edit Entry</span>
                                                                    <span onClick={this.deleteClickedBook}> Delete Entry </span>
                                                                  </div>}

            </div>]}>
          <p>{this.props.book.title}</p>
          <p>{this.props.book.author}</p>
          <p>{this.props.book.releaseDate}</p>
        </Card>
      </Col>
    )
  }
}

export default Book
