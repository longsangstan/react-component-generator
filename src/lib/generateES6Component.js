/**
 * Generate the code for ES6 component
 *
 * @param  {string} name The name of the component
 *
 * @return {string}      The code of the component
 */
function generateES6Component(name) {
  let code =
`import React from 'react';

class ${name} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <h1>${name}</h1>
    );
  }
}

export default ${name};`

  return code;
}

export default generateES6Component;