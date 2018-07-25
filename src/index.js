import React from "react";
import ReactDOM from "react-dom";
import "./js/common";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider, observer, inject } from "mobx-react";
import { HashRouter } from "react-router-dom";
import getRoute from "./App";
console.log(store);


@observer
class App extends React.Component {
  render() {
    return (
      <Provider loginStore={store.loginStore}>
        <HashRouter>
          {getRoute()}
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();
