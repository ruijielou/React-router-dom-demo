import React, { Component } from "react";
import logo from "../img/logo.png";


class Header extends Component {
  render() {
    return (
        <header className="header App-header">
          <span className="header-logo">
            <img className="m_logo" src={logo} alt="" />
          </span>
          <span className="header-title">销售统计</span>
          <span className="iconfont icon-liebiao slide-menu" />
        </header>
    );
  }
}

export default Header;
