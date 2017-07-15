'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          '404 : Not Found'
        )
      );
    } });
};

exports.default = NotFound;