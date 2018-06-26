import React, {Component} from 'react'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      checked: false
    })

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.toggleIsChecked = this.toggleIsChecked.bind(this)

  }

  handleCheckboxChange = (event) => {
      console.log("checkbox changed!", event);
      this.setState({isChecked: event.target.checked})
  }

  toggleIsChecked = () => {
      console.log("toggling isChecked value!");
      this.setState({isChecked: !this.state.isChecked})
    }

  handleButtonClick = (event) => {
      console.log("button was pressed!", event);
      this.props.toggleHaveRead();
      this.toggleIsChecked();
  }

  render() {
      return (
        <label>
          <span onClick={this.handleButtonClick}>
            <input className="checkbox filled-in" type="checkbox" onChange={this.handleCheckboxChange}  checked={this.state.isChecked} />
          </span>
        </label>
      )
  }

}



export default Checkbox
