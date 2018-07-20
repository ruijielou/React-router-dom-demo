import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Login from "./login"
import Home from "./home"
import About from "./about"
import Topics from "./Topics"

/**关于react-router-dom 
 * 1.BrowserRouter 在npm run build 后预览 需要在package.json里边配置homepage为发布服务器地址，
 *   需要服务端配置一个服务端地址来映射
 * 2.为了防止匹配牵连路由，在'/'这个路由上添加exact
 * 
*/

const BasicExample = () => (
  <Router>
    <div className="root-scale">
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
