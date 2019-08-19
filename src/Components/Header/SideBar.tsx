/* Library Imports */
import * as React from "react"
import { Menu, Sidebar } from "semantic-ui-react"

/* Component Imports */

export default function SideBar(props: any) {
  const { hideSideBar, visible } = props
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      direction="right"
      onHide={hideSideBar}
      onClick={hideSideBar}
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as="a">
Home
      </Menu.Item>
      <Menu.Item as="a">
Shirts
      </Menu.Item>
      <Menu.Item as="a">
Tees
      </Menu.Item>
      <Menu.Item as="a">
Pants
      </Menu.Item>
      <Menu.Item as="a">
Knits
      </Menu.Item>
      <Menu.Item as="a">
Sweaters
      </Menu.Item>
      <Menu.Item as="a">
Shoes
      </Menu.Item>
    </Sidebar>
  )
}
