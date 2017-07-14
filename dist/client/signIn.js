"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../../style/_SignIn.scss';

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(SignIn, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "signin-wrapper " },
        _react2.default.createElement(
          "h1",
          { className: "subject" },
          "\u4F1A\u5458\u767B\u5F55"
        ),
        _react2.default.createElement(
          "form",
          null,
          _react2.default.createElement("input", { className: "sign-name", type: "text", name: "name" }),
          _react2.default.createElement("input", { className: "sign-pwd", type: "password", name: "password" }),
          _react2.default.createElement(
            "div",
            { className: "findback-wrapper" },
            _react2.default.createElement(
              "label",
              { className: "autologin" },
              _react2.default.createElement("input", { type: "checkbox", name: "autologin" }),
              "1\u5468\u5185\u81EA\u52A8\u767B\u5F55"
            ),
            _react2.default.createElement(
              "span",
              { className: "findback" },
              "\u627E\u56DE\u5BC6\u7801\uFF1F"
            )
          ),
          _react2.default.createElement("input", { className: "signin", type: "submit", value: "\u767B\u5F55" }),
          _react2.default.createElement(
            "p",
            { className: "go-signup" },
            "\u6CA1\u6709\u8D26\u53F7\uFF1F\u514D\u8D39\u6CE8\u518C"
          )
        )
      );
    }
  }]);

  return SignIn;
}(_react.Component);

exports.default = SignIn;