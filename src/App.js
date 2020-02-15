import React, { Component } from "react";
import { Button } from "antd";

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
        <Button>按钮测试</Button>
        <h1>hello world!</h1>
      </div>
    );
  }
}

export default App;
