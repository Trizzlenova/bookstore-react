import React, {Component} from 'react'
import BookForm from './BookForm'
import Checkbox from './Checkbox'
import {Card, CardTitle, Col} from 'react-materialize'

class Book extends Component {

  constructor() {
    super()
    this.state = {
      bookComplete: false
    }

    this.deleteClickedBook = this.deleteClickedBook.bind(this)
    this.editClickedBook = this.editClickedBook.bind(this)
    this.bookComplete = this.bookComplete.bind(this)
  }
  deleteClickedBook() {
    this.props.onDeleteBook(this.props.book);
  }
  editClickedBook() {
      this.props.onEditBook(this.props.book)
  }
  bookComplete() {
    this.setState({bookComplete: !this.state.bookComplete })
    console.log('book complete')
  }

  render() {
    let styling = this.state.bookComplete ? "large card completed" : "large card"
    return(
      <Col m={4}>
        <Card data-books-index={this.props.book.id}
          className={styling}
          header={<CardTitle image={this.props.book.image}></CardTitle>}
          actions={[
            <div>
              { this.props.editingBookId === this.props.book._id ? <BookForm
                                                                      book={this.props.book}
                                                                      className="update"
                                                                      autoFocus={true}
                                                                      buttonName="Update Book!"
                                                                      onUpdateBook={this.props.onUpdateBook} />
                                                                 : <div className="actions">
                                                                     <span className="crudButts" onClick={this.editClickedBook}>Edit Entry</span>
                                                                     <span className="crudButts" onClick={this.deleteClickedBook}> Delete Entry </span>
                                                                       <Checkbox toggleHaveRead={this.bookComplete}/>
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
