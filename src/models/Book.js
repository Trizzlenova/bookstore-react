import axios from 'axios'

class BookModel {
  static all(){
    let request = axios.get("https://super-crud-api.herokuapp.com/api/books")
    return request
  }

  static create(book) {
  let request = axios.post("https://super-crud-api.herokuapp.com/api/books", book)
  return request
  }

  static delete(book){
    let request = axios.delete(`https://super-crud-api.herokuapp.com/api/books/${book._id}`)
    return request
  }

  static update(bookId, book) {
      let request = axios.put(`https://super-crud-api.herokuapp.com/api/books/${bookId}`, {
          title: book.title,
          author: book.author,
          image: book.image,
          releaseDate: book.releaseDate
      })
      return request
  }
}

export default BookModel
