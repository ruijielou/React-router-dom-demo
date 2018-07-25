import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";
import Detail from './Detail'
import { observer, inject} from "mobx-react"

@inject('LoginStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    console.log('=================================')
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
