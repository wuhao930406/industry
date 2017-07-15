'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

require('isomorphic-fetch');

var _users = require('./modules/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-list-action mdl-list' },
        this.props.items.map(function (item) {
          return _react2.default.createElement(
            'div',
            { key: item.id, className: 'mdl-list__item' },
            _react2.default.createElement(
              'span',
              { className: 'mdl-list__item-primary-content' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons mdl-list__item-avatar' },
                'person'
              ),
              _react2.default.createElement(
                'span',
                null,
                item.name
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'mdl-list__item-secondary-action', href: '#' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'star'
              )
            )
          );
        })
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(store) {
      return store.dispatch((0, _users.fetchUsers)());
    }
  }]);

  return List;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { items: state.users.items };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchUsers: _users.fetchUsers }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);