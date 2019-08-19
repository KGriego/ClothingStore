/* Library Imports */
import * as React from "react";
import { Switch, Route } from "react-router-dom";

/* Component Imports */
import { Header } from "./Components/Header";
import Home from "./Pages/Home";

/* Style Imports */
import { Sidebar } from "semantic-ui-react";
import "./SCSS/App";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { visible: false };
  }
  hideSideBar = () => this.setState({ visible: false });
  showSideBar = () => this.setState({ visible: true });
  render() {
    const { visible } = this.state;
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Sidebar.Pushable as="div">
          <Header
            hideSideBar={this.hideSideBar}
            showSideBar={this.showSideBar}
            visible={visible}
          />
          <Sidebar.Pusher dimmed={visible}>
            <Switch>
              <Route component={() => <Home />} exact path={"/"} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
