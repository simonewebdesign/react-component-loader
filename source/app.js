import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hi</h3>
        <Foo>
          <Bar>
            <Baz></Baz>
          </Bar>
        </Foo>
      </div>
    );
  }
}

class Foo extends React.Component {
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
  render() {
    return (
      <div className="baz">
        <b>This is Baz</b>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));
