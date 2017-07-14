import React, {Component} from 'react';
// import '../../style/_SignIn.scss';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
          <div className="signin-wrapper ">
              <h1 className="subject">会员登录</h1>
                <form>
                  <input className="sign-name" type="text" name="name" />
                  <input className="sign-pwd" type="password" name="password" />
                  <div className="findback-wrapper">
                    <label className="autologin">
                      <input type="checkbox" name="autologin" />1周内自动登录
                    </label>
                    <span className="findback">找回密码？</span>
                  </div>
                  <input className="signin" type="submit" value="登录" />
                  <p className="go-signup">没有账号？免费注册</p>
                </form>
          </div>
        );
    }
}
