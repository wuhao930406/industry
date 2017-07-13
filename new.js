const fs = require('fs');

const NAME = process.argv[2]; // component's NAME

function generateReactComponent() {
    const entry =
`import ${NAME} from './${NAME}';

export default ${NAME};
`;

    const jsx =
`import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import scss from './${NAME}.scss';

export default class ${NAME} extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div className={scss.${NAME}}>

      </div>
    );
  }
}
`;

    const scss = `.${NAME} {}`;

    if (fs.existsSync(`views/auth/${NAME}`)) {
        console.log(`========== ${NAME} folder exist ==========`);
    } else {
        fs.mkdirSync(`views/auth/${NAME}`);
        fs.writeFileSync(`views/auth/${NAME}/index.js`, entry);
        fs.writeFileSync(`views/auth/${NAME}/${NAME}.jsx`, jsx);
        fs.writeFileSync(`views/auth/${NAME}/${NAME}.scss`, scss);
    }
}

if (fs.existsSync('views/auth')) {
    console.log('========== components folder exist ==========');
} else {
    fs.mkdirSync('views/auth');
}

generateReactComponent();
