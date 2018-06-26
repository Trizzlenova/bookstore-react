import React, {Component} from 'react'

class CreateBookForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      title: '',
      author: '',
      image: '',
      releaseDate: ''

    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({ [event.target.name]: event.target.value })
  }
  onFormSubmit(event){
    event.preventDefault()
    let book = this.state
    this.props.createBook(book)
    this.setState({
        title: '',
        author: '',
        image: '',
        releaseDate: ''
    })
    console.log(`The state of the form is: {this.state}`)
  }
  render(){
    return (
      <div className='createForm bookForm'>
        <h2>Create Book Here!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            name='title'
            onChange={ this.onInputChange }
            placeholder='Title'
            type='text'
            value={this.state.title} />
          <input
            name='author'
            onChange={ this.onInputChange }
            placeholder='Author'
            type='text'
            value={this.state.author} />
          <input
            name='image'
            onChange={ this.onInputChange }
            placeholder='Image url'
            type='text'
            value={this.state.image} />
          <input
            name='releaseDate'
            onChange={ this.onInputChange }
            placeholder='Release Date'
            type='text'
            value={this.state.releaseDate} />

          <button type='submit'>Create Book!</button>
        </form>
      </div>
    )
  }
}

export default CreateBookForm
