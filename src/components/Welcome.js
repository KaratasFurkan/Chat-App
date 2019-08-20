import React, { Component } from "react"

class Welcome extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push({
      pathname: "/chatroom",
      state: {
        name: [e.target.name.value]
      }
    })
  }
  
  render() {
    return (
      <div className="Welcome">
        <h1>Welcome</h1>
        <h3>Enter your name:</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name"/>
          <button>Enter</button>
        </form>
      </div>
    )
  }
}

export default Welcome