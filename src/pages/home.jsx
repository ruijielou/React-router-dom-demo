import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";
import Detail from './Detail'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {path: 'Home'}
  }
  hadleClick() {
    this.setState((oldState) => {
        this.setState({
          path: 'hahahahahahhhhhhhhhh'
        })
    })
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <Detail />
      </div>
    );
  }
}

export default Home;
