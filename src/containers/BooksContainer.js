import React, {Component} from 'react'
import BookModel from '../models/Book'
import Books from '../components/Books'
import CreateBookForm from '../components/CreateBookForm'

class BooksContainer extends Component {
  constructor(){
    super()
    this.state = {
      books: [{
        title: '',
        author: '',
        image: '',
        releaseDate: '',
        editingBookId: null,
        editing: false
      }]
    }
    this.createBook = this.createBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  createBook(book) {
      let newBook = {
          title: book.title,
          author: book.author,
          image: book.image,
          releaseDate: book.releaseDate
      }
      BookModel.create(newBook).then((res) => {
          let books = this.state.books
          let newBooks = books.push(res.data)
          this.setState({newBooks})
          console.log('I have created a book')
      })
  }

  deleteBook(book) {
      BookModel.delete(book).then((res) => {
          let books = this.state.books.filter(function(book) {
            return book._id !== res.data._id
          });
          this.setState({books})
      })
  }

  updateBook(book) {
      var bookId = this.state.editingBookId
      console.log(bookId)
      function isUpdatedBook(book) {
          return book._id === bookId;
      }
      BookModel.update(bookId, book).then((res) => {
          let books = this.state.books
          console.log(books)

          books.find(isUpdatedBook).title = book.title
          books.find(isUpdatedBook).author = book.author
          books.find(isUpdatedBook).url = book.url
          books.find(isUpdatedBook).releaseDate = book.releaseDate
          this.setState({books: books, editingBookId: null, editing: false})
      })
  }

  editBook(book){
    this.setState({
      editingBookId: book._id,
      editing: true
    })
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    BookModel.all().then( (res) => {
      this.setState ({
        books: res.data.books,
        book: ''
      })
    })
  }

  render() {
    BookModel.all().then( (res) => {
      console.log(res);
    })

    return (
      <div className="booksContainer">
        <Books
          books={this.state.books}
          editingBookId={this.state.editingBookId}
          deleteBook={ this.deleteBook }
          onEditBook={this.editBook}
          onUpdateBook={this.updateBook}/>
        <CreateBookForm
          createBook={ this.createBook }/>
      </div>
    )
  }
}

export default BooksContainer