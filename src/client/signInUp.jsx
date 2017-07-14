import React, {Component} from 'react';

export default class signInUp extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
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
          </div>
        );
    }
}
