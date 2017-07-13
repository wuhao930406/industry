import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

import scss from './Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={scss.Login}>
        Login
      </div>
    );
  }
}
