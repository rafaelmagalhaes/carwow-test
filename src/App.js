import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/main.scss";
import Nav from "./components/Nav";
import HomePage from "./pages/home";
import DetailPage from "./pages/detail";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/detail/:id" component={DetailPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
