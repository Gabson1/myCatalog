import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Icon, Menu, Sidebar, Image, Button,
} from 'semantic-ui-react';

import { selectUser } from '../../selectors/userSelectors';
import { logoutAction } from '../../actions';

import avatarIcon from '../../assets/svg/avatar.svg';
import './sidebar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
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
        { user
          && (
            <Fragment>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </Fragment>
          )}
        <Button content="Logout" onClick={() => handleLogout()} />
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
};

export default SideBar;
