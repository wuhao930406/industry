'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appRoot = require('./app-root');

var _appRoot2 = _interopRequireDefault(_appRoot);

var _signInUp = require('./signInUp');

var _signInUp2 = _interopRequireDefault(_signInUp);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _notfound = require('./notfound');

var _notfound2 = _interopRequireDefault(_notfound);

var _listtousers = require('./listtousers');

var _listtousers2 = _interopRequireDefault(_listtousers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ component: _appRoot2.default,
  routes: [{ path: '/',
    exact: true,
    component: _signInUp2.default
  }, { path: '/home',
    component: _signInUp2.default
  }, { path: '/list',
    component: _listtousers2.default
  }, { path: '/users',
    component: _list2.default
  }, {
    path: '*',
    component: _notfound2.default
  }]
}];

exports.default = routes;