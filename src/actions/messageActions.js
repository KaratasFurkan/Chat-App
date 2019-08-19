export const sendMessage = (name, message) => {
  let timeStamp = Date.now()

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection("conversations").add({
      name: name,
      chat: message,
      timeStamp: timeStamp
    }).then(() => {
      dispatch({
        type: "ADD_CHATBOX",
        chatBox: {
          name: name, chat: message, timeStamp: timeStamp
        }
      })
    }).catch((error) => {
      console.log(error)
    })
  }  
}