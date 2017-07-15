import React, {Component} from 'react';
// import '../../public/stylesheets/_SignUp.scss';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
          <div className="signup-wrapper ">
              <h1 className="subject">会员注册</h1>
                <form>
                  <input className="signup-phone" type="text" name="phone" placeholder="请输入手机" />
                  <input className="signup-pwd" type="password" name="password" placeholder="请输入密码" />
                  <div className="requestpin-wrapper">
                    <input className="setpin" type="text" name="pin" placeholder="请输入验证码" />
                    <div className="requestpin">获取手机验证码</div>
                  </div>
                  <input className="signup" type="submit" value="注册" />
                  <p className="go-signin">立即登陆</p>
                </form>
          </div>
        );
    }
}
