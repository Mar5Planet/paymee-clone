import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const dropdown1 = (
    <Menu>
      <Menu.Item>How it works</Menu.Item>
      <Menu.Item>Tips & Tricks</Menu.Item>
      <Menu.Item>Balance management</Menu.Item>
      <Menu.Item>Direct Deposit</Menu.Item>
    </Menu>
  );

  const dropdown2 = (
    <Menu>
      <Menu.Item>Ways to pay</Menu.Item>
      <Menu.Item>Pay in app</Menu.Item>
      <Menu.Item>Paymee card</Menu.Item>
      <Menu.Item>Pay in store</Menu.Item>
    </Menu>
  );

  const dropdown3 = (
    <Menu>
      <Menu.Item>Accept payments</Menu.Item>
      <Menu.Item>Business profiles</Menu.Item>
      <Menu.Item>Accept in store</Menu.Item>
      <Menu.Item>Accept in apps</Menu.Item>
    </Menu>
  );


const Navg = () => {
    return (
        <nav className="navigation-bar">
            <h2>Paymee</h2>
            <Dropdown overlay={dropdown1}>
            <a href="/" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Pay & Send <DownOutlined />
            </a>
            </Dropdown>
            <Dropdown overlay={dropdown2}>
            <a href="/" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Send with Paymee <DownOutlined />
            </a>
            </Dropdown>
            <Dropdown overlay={dropdown3}>
            <a href="/" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Power Your Business <DownOutlined />
            </a>
            </Dropdown>
            <button className="signup-btn">Get Paymee</button>
            <a href="/">Sign in</a>
        </nav>

    )
}

export default Navg;