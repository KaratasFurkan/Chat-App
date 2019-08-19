const initState = {
  chatBoxes: []
}

const messageReducer = (state = initState, action) => {
  if (action.type === "ADD_CHATBOX") {
    return {
      chatBoxes: [...state.chatBoxes, action.chatBox]
    }
  }
  return state
}

export default messageReducer