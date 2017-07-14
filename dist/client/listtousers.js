'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListToUsers = function ListToUsers() {
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 302;
      }
      return _react2.default.createElement(_reactRouterDom.Redirect, { from: '/list', to: '/users' });
    } });
};

exports.default = ListToUsers;