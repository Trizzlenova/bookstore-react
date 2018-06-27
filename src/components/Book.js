import React, {Component} from 'react'
import BookForm from './BookForm'
import Checkbox from './Checkbox'
import { Switch, Route, Link } from 'react-router-dom';
import {Card, CardTitle, Col} from 'react-materialize'
import ViewBookContainer from '../containers/ViewBookContainer'

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
    this.props.deleteBook(this.props.book);
  }
  editClickedBook() {
      this.props.editBook(this.props.book)
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
                { this.props.editingBookId === this.props.book._id
                  ? <BookForm
                      book={this.props.book}
                      className="update"
                      autoFocus={true}
                      buttonName="Update Book!"
                      updateBook={this.props.updateBook} />
                 : <section>
                   <div className="actions">
                     <span className="crudButts" onClick={this.editClickedBook}>Edit Entry</span>
                     <span className="crudButts" onClick={this.deleteClickedBook}> Delete Entry </span>
                     <Checkbox toggleHaveRead={this.bookComplete}/>
                   </div>
                   <div className="review-link">
                     <Link to={`/books/${this.props.book.title}`}>Read Reviews of {this.props.book.title}</Link>
                   </div>
                 </section>}
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
