import { Component } from "react";

import "./App.css";

class AppClass extends Component {
  message = "Hello Class Component";

  constructor() {
    super();

    this.state = {
      count: 10,
    };
  }

  setCount(newValue) {
    this.setState({ count: newValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.message}</p>

          <p>
            <button
              type="button"
              onClick={() => this.setCount(this.state.count + 1)}
            >
              count is: {this.state.count}
            </button>
          </p>
        </header>
      </div>
    );
  }
}

export default AppClass;
