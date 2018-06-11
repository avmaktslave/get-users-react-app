import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  myValue = React.createRef();

  getUsers = e => {
    e.preventDefault();
    console.log(this.myValue.current.value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.getUsers}>
          <input type="text" ref={this.myValue} />
          <button>Get Users</button>
        </form>
      </div>
    );
  }
}

export default App;
