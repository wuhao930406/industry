'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appRoot = require('./app-root');

var _appRoot2 = _interopRequireDefault(_appRoot);

var _SignInUp = require('./SignInUp');

var _SignInUp2 = _interopRequireDefault(_SignInUp);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _notfound = require('./notfound');

var _notfound2 = _interopRequireDefault(_notfound);

var _listtousers = require('./listtousers');

var _listtousers2 = _interopRequireDefault(_listtousers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function loadRoute(cb) {
//     return (module) => cb(null, module.default);
// }

// const SignInUp = () => require('./SignInUp');
// const SignInUp = (location, cb) => {
//     System.import('./SignInUp')
//       .then(loadRoute(cb))
//       .catch(errorLoading);
// }

// const SignInUp = (location, cb) => rp('./SignInUp')
//     .then(module => module)
//     .catch(err => err);

// const SignInUp = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./SignInUp').default);
//   }, 'signInUp');
// };

var routes = [{ component: _appRoot2.default,
  routes: [{ path: '/',
    exact: true,
    component: _SignInUp2.default
  }, { path: '/home',
    component: _SignInUp2.default
  }, { path: '/list',
    component: _listtousers2.default
  }, { path: '/users',
    component: _list2.default
  }, {
    path: '*',
    component: _notfound2.default
  }]
}];
// const SignInUp = require('./SignInUp');
// import SignIn from './SignIn';
// require('require-ensure');
exports.default = routes;