import messageReducer from "./messageReducer"
import {combineReducers} from "redux"
import {firestoreReducer} from "redux-firestore"

const rootReducer = combineReducers({
  message: messageReducer,
  firestore: firestoreReducer
})

export default rootReducer