import React from 'react';
import { Menu } from 'antd';
import './Navigation.less';

const RightMenu = props => {
    return (
      <Menu theme="light" mode={props.mode} className={props.className}>
        <Menu.Item key="1">Smart Staking</Menu.Item>
        <Menu.Item key="2">Farming</Menu.Item>
        <Menu.Item key="3">Raffle</Menu.Item>
        <Menu.Item key="4">IDOs</Menu.Item>
      </Menu>
    );
}
export default RightMenu;