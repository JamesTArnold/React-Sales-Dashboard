import "./App.scss";
import Nav from "./Nav/Nav.js";
import React from "react";

class Enum {
  constructor(...keys) {
    keys.forEach((key, i) => {
      this[key] = i;
    });
    Object.freeze(this);
  }

  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) yield key;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      activePage :new Enum("Performance", "Opportunities"),
      error: null,
    };
  }
  render() {
    return (
      <div className="App">
        <Nav activePage={this.state.activePage}/>
      </div>
    );
  }
}

export default App;
