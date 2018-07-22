import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
class Login extends Component {
  
  // let url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/Home/Configuration"; 
  //获取本地运行时的hostname和协议格式
   loadLogin() {
     fetch('http://earth.ebistrategy.com/Home/Configuration')
      .then(response=> {
        return response.json();
      })
      .then(data=>{console.log(data)})
   }
  render() {
    return (
      <div className="login" id="login">
        <div className="login-inner">
        <h2 className="login-title" onClick={this.loadLogin}>观数台</h2>
          <form action="">
          <div className="form-item">
            <label htmlFor="username"> 用户名:</label><input type="text" name="" id="username" />
          </div>
          <div className="form-item">
            <label htmlFor="password"> 密码:</label><input type="text" name="" id="password" />
          </div>
          <div className="form-item">
            <button className="form-submit" type="submit" name="" id="" ><Link to='/Home'>登陆</Link></button>
          </div>
           
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
