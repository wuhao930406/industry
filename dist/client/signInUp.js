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

var signInUp = function (_Component) {
  _inherits(signInUp, _Component);

  function signInUp() {
    _classCallCheck(this, signInUp);

    var _this = _possibleConstructorReturn(this, (signInUp.__proto__ || Object.getPrototypeOf(signInUp)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(signInUp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "sign-in-up-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "navbar" },
          _react2.default.createElement(
            "div",
            { className: "logo-wrapper" },
            _react2.default.createElement(
              "div",
              { className: "logo preload" },
              _react2.default.createElement("img", { src: "../../img/logo.png" })
            ),
            _react2.default.createElement(
              "div",
              { className: "text-wrapper" },
              _react2.default.createElement(
                "h1",
                { className: "headline" },
                "kunrp"
              ),
              _react2.default.createElement(
                "h1",
                { className: "subline" },
                "\u6606\u745E\u9E4F\u667A\u80FD\u7BA1\u7406\u5E73\u53F0"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "back-wrapper" },
            _react2.default.createElement(
              "span",
              { className: "backhome" },
              "\u8FD4\u56DE\u9996\u9875"
            )
          )
        )
      );
    }
  }]);

  return signInUp;
}(_react.Component);

exports.default = signInUp;