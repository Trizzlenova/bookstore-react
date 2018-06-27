import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookModel from './models/Book.js'
import Header from './components/Header'
import BooksContainer from './containers/BooksContainer'
import ViewBookContainer from './containers/ViewBookContainer'
import Home from './components/Home'


class App extends Component {
  constructor(){
    super()
    this.state = {
      books: [{
        title: '',
        author: '',
        image: '',
        releaseDate: '',
        editingBookId: null,
        editing: false,
        checked: false
      }]
    }
    this.createBook = this.createBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.updateBook = this.updateBook.bind(this)
    this.editBook = this.editBook.bind(this)
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
          // console.log('I have created a book')
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
    if (book) {

      let bookId = this.state.editingBookId
      console.log(bookId)
      function isUpdatedBook(book) {
        return book._id === bookId;
      }
      BookModel.update(bookId, book).then((res) => {
        let books = this.state.books

        books.find(isUpdatedBook).title = res.data.title
        books.find(isUpdatedBook).author = res.data.author
        books.find(isUpdatedBook).url = res.data.url
        books.find(isUpdatedBook).releaseDate = res.data.releaseDate
        this.setState({books: books, editingBookId: null, editing: false})
      })
    }
    else {
      console.log('there is nothing to update')
    }
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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/books'
                 render = {() =>
                <BooksContainer
                 books={this.state.books}
                 editingBookId={this.state.editingBookId}
                 deleteBook={ this.deleteBook }
                 editBook={this.editBook}
                 updateBook={this.updateBook}
                 updateCheckbox={this.updateCheckbox}
                 createBook={this.createBook}/>} />
          <Route path={`/books/:title`}
                 render = {() =>
                <ViewBookContainer
                 books={this.state.books}
                 editingBookId={this.state.editingBookId}
                 deleteBook={ this.deleteBook }
                 editBook={this.editBook}
                 updateBook={this.updateBook}
                 updateCheckbox={this.updateCheckbox}/>} />
        </Switch>
      </div>
    );
  }
}

export default App
