import React, {Component} from 'react'

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event){
    event.preventDefault()
    let book = this.state
    if (book) {
      this.props.updateBook(book)
      this.setState({
        title: '',
        author: '',
        image: '',
        releaseDate: ''
      })
    }
  }

  render(){
    return (
      <div className='bookForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            name="title"
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder= {this.props.book.title || 'Edit Title'}
            type='text'
            value={(this.state && this.state.title) ||  ''} />
          <input
            name="author"
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder={this.props.book.author || 'Edit Author'}
            type='text'
            value={(this.state && this.state.author) ||  ''} />
          <input
            name="image"
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder={this.props.book.image || 'Edit Image URL'}
            type='text'
            value={(this.state && this.state.image) || ''} />
          <input
            name="releaseDate"
            autoFocus={ this.props.autoFocus }
            onChange={ this.onChange }
            placeholder={this.props.book.releaseDate || 'Edit Release Date'}
            type='text'
            value={(this.state && this.state.releaseDate)  || ''} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default BookForm
