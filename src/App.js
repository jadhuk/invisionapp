import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
