import React from "react"

function ChatBox(props) {
  return (
    <div className="ChatBoxContainer">
      <div className="ChatBox">
        <span>{props.name}:</span>
        <pre className="Chat">{props.chat}</pre>
      </div>
    </div>
  )
}

export default ChatBox