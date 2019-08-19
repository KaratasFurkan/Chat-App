import messageReducer from "./messageReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
  message: messageReducer,
})

export default rootReducer