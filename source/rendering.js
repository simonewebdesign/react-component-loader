import React from 'react';
import ReactDOM from 'react-dom';

// returns a reference to the rendered component.
export function renderComponent(component, mountNode) {
  console.log(`renderComponent: rendering ${component.type} into `, mountNode);

  return ReactDOM.render(<component.type />, mountNode, () => {
    console.log("renderComponent: done.");
  });
}

export function renderMultipleComponents(components, mountNode) {
  components.forEach(component => {
    let renderedComponent = renderComponent(component, mountNode);

    if (component.components.length > 0) {
      console.log(`${component} has children: `, component.components);
      console.log('finding domNode...', component.type)
      let domNode = ReactDOM.findDOMNode(renderedComponent);
      console.log('gonna render into', domNode);
      renderMultipleComponents(component.components, domNode);
    }
  });
}
