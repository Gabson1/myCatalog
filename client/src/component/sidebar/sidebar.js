import React from 'react';
import { connect } from 'react-redux';
import {
  Icon, Menu, Sidebar, Image,
} from 'semantic-ui-react';

import './sidebar.css';
import avatarIcon from '../../assets/svg/avatar.svg';

const SideBar = ({ user }) => (
  <Sidebar
    id="sidebarMenu"
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
  >
    <Menu.Item className="sidebarItem">
      <Image style={{ 'font-size': 24 }} avatar alt="Logo Icon" src={avatarIcon} />
      <p>{user.username}</p>
      <p>{user.email}</p>
    </Menu.Item>
    <Menu.Item as="a" className="sidebarItem" href="/">
      <Icon name="dashboard" />
      Dashboard
    </Menu.Item>
    <Menu.Item as="a" className="sidebarItem" href="/catalog">
      <Icon name="table" />
      Catalog
    </Menu.Item>
    <Menu.Item as="a" className="sidebarItem" href="/api">
      <Icon name="code" />
      API
    </Menu.Item>
    <Menu.Item as="a" className="sidebarItem" href="/setting">
      <Icon name="settings" />
      Setting
    </Menu.Item>
  </Sidebar>
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(SideBar);
