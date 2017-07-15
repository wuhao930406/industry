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

// import '../../public/stylesheets/_SignUp.scss';

var SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(SignUp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "signup-wrapper " },
        _react2.default.createElement(
          "h1",
          { className: "subject" },
          "\u4F1A\u5458\u6CE8\u518C"
        ),
        _react2.default.createElement(
          "form",
          null,
          _react2.default.createElement("input", { className: "signup-phone", type: "text", name: "phone", placeholder: "\u8BF7\u8F93\u5165\u624B\u673A" }),
          _react2.default.createElement("input", { className: "signup-pwd", type: "password", name: "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801" }),
          _react2.default.createElement(
            "div",
            { className: "requestpin-wrapper" },
            _react2.default.createElement("input", { className: "setpin", type: "text", name: "pin", placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801" }),
            _react2.default.createElement(
              "div",
              { className: "requestpin" },
              "\u83B7\u53D6\u624B\u673A\u9A8C\u8BC1\u7801"
            )
          ),
          _react2.default.createElement("input", { className: "signup", type: "submit", value: "\u6CE8\u518C" }),
          _react2.default.createElement(
            "p",
            { className: "go-signin" },
            "\u7ACB\u5373\u767B\u9646"
          )
        )
      );
    }
  }]);

  return SignUp;
}(_react.Component);

exports.default = SignUp;