/**
 * Generate the code for pure component
 *
 * @param  {string} name The name of the component
 *
 * @return {string}      The code of the component
 */
function generatePureComponent(name) {
  let code =
`import React from 'react';

const ${name} = (props) => {
  const {

  } = props;

  return <h1>${name}</h1>;
}

export default ${name};`

  return code;
}

export default generatePureComponent;