import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
        <header className="Home-header">
          {/* <h1 className="App-title" onClick={this.hadleClick.bind(this)}>Welcome to {this.state.path}</h1> */}
          <Link to={'/about'}>to about</Link>
        </header>
      </div>
    );
  }
}

export default Home;
