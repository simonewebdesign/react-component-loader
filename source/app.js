import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hi</h3>
      </div>
    );
  }
}
// <Foo>
//   <Bar>
//     <Baz></Baz>
//   </Bar>
// </Foo>


class Foo extends React.Component {
  componentWillMount() {
    console.log('rendering foo...')
  }
  componentDidMount() {
    console.log('rendered foo.')
  }
  render() {
    return (
      <div className="foo">
        <b>This is Foo</b>
        { this.props.children }
      </div>
    )
  }
}

class Bar extends React.Component {
  componentWillMount() {
    console.log('rendering bar...')
  }
  componentDidMount() {
    console.log('rendered bar.')
  }
  render() {
    return (
      <div className="bar">
        <b>This is Bar</b>
        {this.props.children }
      </div>
    )
  }
}

class Baz extends React.Component {
  componentWillMount() {
    console.log('rendering baz...')
  }
  componentDidMount() {
    console.log('rendered baz.')
  }
  render() {
    return (
      <div className="baz">
        <b>This is Baz</b>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
