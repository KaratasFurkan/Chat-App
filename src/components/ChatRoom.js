import React, { Component } from "react"
import ChatBox from "./ChatBox"
import SendPanel from "./SendPanel"
import { connect } from "react-redux"
import { sendMessage } from "../actions/messageActions"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

class ChatRoom extends Component {

  render() {
    let chatBoxes = this.props.chatBoxes.map(chatBox => {
      return (
        <ChatBox name ={chatBox.name} chat={chatBox.chat} key={chatBox.timeStamp}/>
      )
    })
    return (
      <div className="ChatRoom">
        {chatBoxes}
        <SendPanel sendMessage={this.props.sendMessage} name={this.props.location.state.name[0]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chatBoxes: state.firestore.ordered.conversations || state.message.chatBoxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (name, message) => {
      dispatch(sendMessage(name, message))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: "conversations", orderBy: ["timeStamp", "asc"]}
  ])
)(ChatRoom)