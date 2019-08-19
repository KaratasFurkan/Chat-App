import React, { Component } from 'react';
import ChatRoom from "./components/ChatRoom"
import Welcome from "./components/Welcome"
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route path="/chatroom" component={ChatRoom} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
