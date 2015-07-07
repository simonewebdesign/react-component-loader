import React from 'react';
import ReactDOM from 'react-dom';
import {renderComponent, renderMultipleComponents} from './rendering';
import configuration from './configuration';

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

// renderMultipleComponents(configuration.components, document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('app'));
// <Foo>
//   <Bar>
//     <Baz></Baz>
//   </Bar>
// </Foo>