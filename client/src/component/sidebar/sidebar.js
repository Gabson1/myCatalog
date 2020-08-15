import React from 'react'
import { Icon, Menu, Sidebar, Image } from 'semantic-ui-react'

import './sidebar.css';
import logoIcon from "../../assets/logo.svg";

const SideBar = () => (
  <Sidebar
    id="sidebarMenu"
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    vertical
    visible
    width='thin'
  >
    <Menu.Item className="sidebarItem">
      <Image style={{'font-size':24}} avatar alt='Logo Icon' src={logoIcon} />
    </Menu.Item>
    <Menu.Item as='a' className="sidebarItem" href="/dashboard">
      <Icon name='dashboard' />
      Dashboard
    </Menu.Item>
    <Menu.Item as='a' className="sidebarItem" href="/catalog">
      <Icon name='table' />
      Catalog
    </Menu.Item>
    <Menu.Item as='a' className="sidebarItem" href="/api">
      <Icon name='code' />
      API
    </Menu.Item>
    <Menu.Item as='a' className="sidebarItem" href="/setting">
      <Icon name='settings' />
      Setting
    </Menu.Item>
  </Sidebar>
)

export default SideBar