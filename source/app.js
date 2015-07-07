import React from 'react';
import ReactDOM from 'react-dom';

let configuration = {
  type: 'app',
  label: 'My App',
  components: [
    {
      type: 'Foo',
      label: "This is Foo",
      components: [{
        type: 'Bar',
        label: 'This is Bar',
        components: [{
          type: 'Baz',
          label: 'This is Baz',
          components: []
        }]
      }]
    }
  ]
}

// returns a reference to the rendered component.
function renderComponent(component, mountNode) {
  console.log(`renderComponent: rendering ${component.type} into `, mountNode);

  return ReactDOM.render(<component.type />, mountNode, () => {
    console.log("renderComponent: done.");
  });
}

function renderMultipleComponents(components, mountNode) {
  // if (components && components.length > 0) {
  components.forEach(component => {
    let renderedComponent = renderComponent(component, mountNode);

    if (component.components.length > 0) {
      console.log(`${component} has children: `, component.components);
      console.log('finding domnode...', component.type)
      let domNode = ReactDOM.findDOMNode(renderedComponent);
      console.log('gonna render into', domNode);
      renderMultipleComponents(component.components, domNode);
    }
  });
  // }
}

// function renderComponent(component, mountNode) {
//   console.log(`renderComponent: rendering ${component.type}...`);
//   // let theMountPoint = ReactDOM.findDOMNode(component.type)
//   return React.render(component, mountNode, () => {
//     console.log("renderComponent called");
//   });
// }

// function renderMultipleComponents(components, mountNode) {
//   console.log("renderMultipleComponents");
//   let mountPoint = mountNode || document.getElementById('app'); //<App />;
//   console.log("mountPoint is", mountPoint);

//   if (components && components.length <= 0) {
//     renderComponent(<components[0].type />, mountPoint);
//   }

//   if (components && components.length >= 1) {
//     console.log('there are components to render');
//     renderMultipleComponents(components, mountPoint);
//     // components.forEach(component => {

      
//       // ReactDOM.render(<component.type />, mountPoint); 

//     // })
//   }
// }

renderMultipleComponents(configuration.components, document.getElementById('app'));

// if (components.length > 0) {
//   renderMultipleComponents()
// } else {
//   console.log("components.length is <= 0: ", components.length)
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hi</h3>
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

// ReactDOM.render(<App />, document.getElementById('app'));
