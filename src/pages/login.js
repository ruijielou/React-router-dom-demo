import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { observer, inject } from "mobx-react"
// import {connect} from "react-redux"
// import { addUser, addCommonApi } from '../actions'
// @inject('LoginStore')

// @inject(stores => ({
//   commonApi: stores.LoginStore.commonApi,
//   user: stores.LoginStore.user,
//   getCommonApi: stores.LoginStore.getCommonApi
// }))
@inject('loginStore')
@observer
class Login extends Component {

  constructor(props) {
    console.log(props.loginStore)
    super(props)
  
  }
  // componentDidMount() { 321ffkx123kao
  //   fetch('http://earth.ebistrategy.com/Home/Configuration')
  //   .then(response=> {
  //     return response.json();
  //   })
  //   .then(data=>{
  //     console.log(data)
  //     sessionStorage.setItem('commonApi', JSON.stringify(data))
  //   })
  // }
  loadLogin() {
  //  props.LoginStore.getCommonApi()
    // console.log(this.props.LoginStore.getComm?onApi())
  }
  render() {
    // const LoginStore = this.props.LoginStore
    return (
      <div className="login" id="login">
        <div className="login-inner">
        <h2 className="login-title" onClick={this.getCommon}>观数台</h2>
          <form action="">
          <div className="form-item">
            <label htmlFor="username"> 用户名:</label><input type="text" name="" id="username" />
          </div>
          <div className="form-item">
            <label htmlFor="password"> 密码:</label><input type="text" name="" id="password" />
          </div>
          <div className="form-item">
            <button className="form-submit" name="" id="" onClick={this.loadLogin}>登陆</button>
          </div>
           
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginStore: PropTypes.object.isRequired
};

export default Login;
