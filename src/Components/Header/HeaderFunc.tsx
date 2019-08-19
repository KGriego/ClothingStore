/* Library Imports */
import * as React from "react";

/* Component Imports */
import { Header } from "./Header";
import SideBar from "./SideBar";

class HeaderFunc extends React.Component<any, { activeItem: string }> {
  constructor(props: any) {
    super(props);
    this.state = { activeItem: "editorials" };
  }
  onHandleItemClick = (
    e: React.ReactEventHandler,
    { name }: { name: string }
  ) => this.setState({ activeItem: name });
  render() {
    const { hideSideBar, visible, showSideBar } = this.props;
    const { activeItem } = this.state;
    return (
      <>
        <Header
          activeItem={activeItem}
          handleItemClick={this.onHandleItemClick}
          hideSideBar={hideSideBar}
          showSideBar={showSideBar}
        />
        <SideBar
          hideSideBar={hideSideBar}
          showSideBar={showSideBar}
          visible={visible}
        />
      </>
    );
  }
}

export default HeaderFunc;
