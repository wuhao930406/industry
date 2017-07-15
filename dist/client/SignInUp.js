'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../../style/_SignInUp.scss';
// import SignIn from './SignIn.jsx';
// const SignIn = require('./SignIn.jsx');
// import SignUp from './SignUp.jsx';

// require('../../public/stylesheets/_test.scss');

var SignInUp = function (_Component) {
    _inherits(SignInUp, _Component);

    function SignInUp() {
        _classCallCheck(this, SignInUp);

        var _this = _possibleConstructorReturn(this, (SignInUp.__proto__ || Object.getPrototypeOf(SignInUp)).call(this));

        _this.state = {
            footMenu: ['公司简介', '常见问题', '联系我们', '诚聘英才', '帮助页面', '意见反馈'],
            illustrations: [[{
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/placeholder.png',
                color: '#cce3ee',
                icon: 'img/order.png',
                text: '订单中心'
            }, {
                bg: '../../img/placeholder.png',
                color: '#ffffff',
                icon: 'img/product.png',
                text: '产品中心'
            }, {
                bg: '../../img/illustration01.png'
            }, {
                bg: '../../img/placeholder.png',
                color: '#cce3ee',
                icon: '../../img/client.png',
                text: '客户中心'
            }], [{
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/placeholder.png',
                color: '#cce3ee',
                icon: '../../img/manage.png',
                text: '管理中心'
            }, {
                bg: '../../img/placeholder.png',
                color: '#ffffff',
                icon: '../../img/finance.png',
                text: '财务中心'
            }, {
                bg: '../../img/illustration02.png'
            }], [{
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/placeholder.png'
            }, {
                bg: '../../img/illustration03.png'
            }, {
                bg: '../../img/placeholder.png'
            }]]
        };
        return _this;
    }

    _createClass(SignInUp, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                illustrations = _state.illustrations,
                footMenu = _state.footMenu;

            var boxItems = illustrations.map(function (boxes, index) {
                return boxes.map(function (item, i) {
                    // const itemLen = Object.entries(item).length;

                    var divStyle = {
                        backgroundColor: item.color
                    };

                    // if (item.bg) {
                    //     divStyle =
                    // Object.assign(divStyle, {backgroundImage: `url(${item.bg})`});
                    // }

                    var content = null;
                    if (item.icon) {
                        content = _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'icon preload' },
                                _react2.default.createElement('img', { src: item.icon })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'text' },
                                item.text
                            )
                        );
                    }

                    return _react2.default.createElement(
                        'div',
                        {
                            key: index.toString() + i.toString(),
                            className: 'box preload',
                            style: divStyle
                        },
                        _react2.default.createElement('img', { src: item.bg }),
                        content
                    );
                });
            });

            var separateline = _react2.default.createElement(
                'span',
                { className: 'separateline' },
                '|'
            );

            var menuItems = footMenu.map(function (item, i) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: i.toString(),
                        className: 'menu-item' },
                    item,
                    i === footMenu.length - 1 ? '' : separateline
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'sign-in-up-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo-wrapper' },
                        _react2.default.createElement(
                            'div',
                            { className: 'logo preload' },
                            _react2.default.createElement('img', { src: '../../img/logo.png' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-wrapper' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'headline' },
                                'kunrp'
                            ),
                            _react2.default.createElement(
                                'h1',
                                { className: 'subline' },
                                '\u6606\u745E\u9E4F\u667A\u80FD\u7BA1\u7406\u5E73\u53F0'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'back-wrapper' },
                        _react2.default.createElement(
                            'span',
                            { className: 'backhome' },
                            '\u8FD4\u56DE\u9996\u9875'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content-wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'left-wrapper' },
                        _react2.default.createElement(
                            'div',
                            { className: 'box-wrapper' },
                            boxItems
                        )
                    ),
                    _react2.default.createElement('div', { className: 'right-wrapper' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footbar' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'menu-wrapper' },
                        menuItems
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'copyright' },
                        'Copyright\xA9 2016 - 2017, www.baidu.com. All rights reserved. | ICP\u5907\u6848\uFF1A\u82CF1835412\u53F7'
                    )
                )
            );
        }
    }]);

    return SignInUp;
}(_react.Component);

exports.default = SignInUp;