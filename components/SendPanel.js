import React, {Component} from "react"

class SendPanel extends Component {
  state = {
    message: ""
  }

  handleEnter = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault()
      e.persist()
      this.setState({
        message: e.target.value
      }, () => {
        let newEvent = document.createEvent("Event");
        newEvent.initEvent("submit", false, true);
        e.target.form.dispatchEvent(newEvent);
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.persist()
    this.setState({
      message: e.target[0].value
    }, () => {
      this.props.sendMessage(this.props.name, this.state.message)
      e.target[0].value = ""
    })
  }

  render() {
    return (
      <div className="SendPanel">
        <form onSubmit={this.handleSubmit}>
          <textarea rows="3" cols="50" style={{resize:"none"}} onKeyPress={this.handleEnter}/>
          <button id="sendButton">Send</button>
        </form>
      </div>
    )
  }
}

export default SendPanel