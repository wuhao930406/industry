import React, {Component} from 'react';
// import '../../style/_SignInUp.scss';
// import SignIn from './SignIn.jsx';
// const SignIn = require('./SignIn.jsx');
// import SignUp from './SignUp.jsx';

// require('../../public/stylesheets/_test.scss');

export default class SignInUp extends Component {
    constructor() {
        super();
        this.state = {
            footMenu: ['公司简介', '常见问题', '联系我们', '诚聘英才', '帮助页面', '意见反馈'],
            illustrations: [
                [
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                        color: '#cce3ee',
                        icon: 'img/order.png',
                        text: '订单中心',
                    },
                    {
                        bg: '../../img/placeholder.png',
                        color: '#ffffff',
                        icon: 'img/product.png',
                        text: '产品中心',
                    },
                    {
                        bg: '../../img/illustration01.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                        color: '#cce3ee',
                        icon: '../../img/client.png',
                        text: '客户中心',
                    },
                ],
                [
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                        color: '#cce3ee',
                        icon: '../../img/manage.png',
                        text: '管理中心',
                    },
                    {
                        bg: '../../img/placeholder.png',
                        color: '#ffffff',
                        icon: '../../img/finance.png',
                        text: '财务中心',
                    },
                    {
                        bg: '../../img/illustration02.png',
                    },
                ],
                [
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                    },
                    {
                        bg: '../../img/illustration03.png',
                    },
                    {
                        bg: '../../img/placeholder.png',
                    },
                ],
            ],
        };
    }

    render() {
        const {illustrations, footMenu} = this.state;
        const boxItems = illustrations.map((boxes, index) =>
            boxes.map((item, i) => {
                // const itemLen = Object.entries(item).length;

                const divStyle = {
                    backgroundColor: item.color,
                };

                // if (item.bg) {
                //     divStyle =
                // Object.assign(divStyle, {backgroundImage: `url(${item.bg})`});
                // }

                let content = null;
                if (item.icon) {
                    content = <div className="content">
                      <div className="icon preload">
                          <img src={item.icon} />
                      </div>
                      <span className="text">{item.text}</span>
                    </div>
                  ;
                }

                return (
                    <div
                        key={index.toString() + i.toString()}
                        className="box preload"
                        style={divStyle}
                    >
                      <img src={item.bg} />
                      {content}
                    </div>
                );
            })
        );

        const separateline = <span className="separateline">|</span>;

        const menuItems = footMenu.map((item, i) =>
          <li
            key={i.toString()}
            className="menu-item">
            {item}{i === footMenu.length - 1 ? '' : separateline}
          </li>
        );

        return (
          <div className="sign-in-up-wrapper">
              <div className="navbar">
                  <div className="logo-wrapper">
                    <div className="logo preload">
                      <img src="../../img/logo.png" />
                    </div>
                    <div className="text-wrapper">
                      <h1 className="headline">kunrp</h1>
                      <h1 className="subline">昆瑞鹏智能管理平台</h1>
                    </div>
                  </div>
                  <div className="back-wrapper">
                    <span className="backhome">返回首页</span>
                  </div>
              </div>
              <div className="content-wrapper">
                <div className="left-wrapper">
                  <div className="box-wrapper">
                    {boxItems}
                  </div>
                </div>
                <div className="right-wrapper">
                </div>
              </div>
              <div className="footbar">
                <ul className="menu-wrapper">
                  {menuItems}
                </ul>
                <p className="copyright">
                  Copyright© 2016 - 2017, www.baidu.com. All rights reserved. | ICP备案：苏1835412号
                </p>
              </div>
          </div>
        );
    }
}
