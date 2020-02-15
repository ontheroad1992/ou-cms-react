import React, { Component } from "react";

const testDecorator = Cmp => {
  return props => (
    <div>
      <h1>Hi!</h1>
      <Cmp {...props} />
    </div>
  );
};
@testDecorator
class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world!</h1>
      </div>
    );
  }
}

export default App;
