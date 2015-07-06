import React, {Component} from 'react';

class App extends Component {
  render() {
    return (<div>
      <h3>Hi</h3>
    </div>);
  }
}

let mountNode = document.getElementById('app');
React.render(<App />, mountNode);
