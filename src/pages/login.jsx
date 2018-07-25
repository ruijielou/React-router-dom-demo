import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { observer, inject } from "mobx-react"
import {} from "react-router-dom"

@inject('LoginStore')
@observer
class Login extends Component {

  constructor(props) {
    
    super(props)
    console.log(props.LoginStore)
  
  }
  goHome = () => {
    this.props.history.push("/home") 
  }
  //  loadCommonApi = () => {
  //   let _this = this
  //       fetch('http://earth.ebistrategy.com/Home/Configuration')
  //   .then(response=> {
  //     return response.json();
  //   })
  //   .then(data=>{
  //     console.log(data)
  //     _this.props.LoginStore.changeCommonApi(data)
  //     console.log(_this.props.LoginStore)
  //     _this.props.history.push("/home") 
  //     // sessionStorage.setItem('commonApi', JSON.stringify(data))
  //   })
  // }321ffkx123kao
  componentDidMount() { 
    let _this = this;
    fetch('http://earth.ebistrategy.com/Home/Configuration')
    .then(response=> {
      return response.json();
    })
    .then(data=>{
      _this.props.LoginStore.changeCommonApi(data)
      console.log(_this.props.LoginStore)
      // console.log(data)
      // sessionStorage.setItem('commonApi', JSON.stringify(data))
    })
  }
  loadLogin = () => {
   this.props.LoginStore.getCommonApi()
   console.log(this.props.LoginStore)
    // console.log(this.props.LoginStore.getComm?onApi())
  }
  render() {
    return (
      <div className="login" id="login">
        <div className="login-inner">
        <h2 className="login-title">观数台</h2>
          <form action="">
          <div className="form-item">
            <label htmlFor="username"> 用户名:</label><input type="text" name="" id="username" />
          </div>
          <div className="form-item">
            <label htmlFor="password"> 密码:</label><input type="text" name="" id="password" />
          </div>
          <div className="form-item">
            <button className="form-submit" name="" id="" onClick={this.goHome}>登陆</button>
          </div>
           
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  LoginStore: PropTypes.object
};

export default Login;
