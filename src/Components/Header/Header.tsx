/* Library Imports */
import * as React from "react";
import { Menu /*, Segment, Sidebar*/, Icon } from "semantic-ui-react";

/* Component Imports */

export function Header(props: any) {
  const { activeItem, handleItemClick, showSideBar } = props;
  return (
    <div className="header">
      <Menu borderless fluid size="huge">
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Menu className={"onlyComputer"}>
          <Menu.Item
            active={activeItem === "editorials"}
            name="editorials"
            onClick={handleItemClick}
          >
            Editorials
          </Menu.Item>
          <Menu.Item
            active={activeItem === "reviews"}
            name="reviews"
            onClick={handleItemClick}
          >
            Reviews
          </Menu.Item>
          <Menu.Item
            active={activeItem === "upcomingEvents"}
            name="upcomingEvents"
            onClick={handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item className="noComputer barMenu">
            <Icon name="search" />
          </Menu.Item>
          <Menu.Item className="noComputer barMenu">
            <Icon name="shopping cart" />
          </Menu.Item>
          <Menu.Item className="noComputer barMenu" onClick={showSideBar}>
            <Icon name="bars" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
