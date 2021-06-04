import React, { Component } from "react"

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: null,
      buttonText: "Increase"

    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return(
      <div>
        <button 
          onClick={this.handleChange}>
          {this.state.buttonText}
        </button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Counter