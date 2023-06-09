import { Avatar, Col, Dropdown, Row, Space } from "antd";
import React, { useState, useRef } from "react";
import { ReactComponent as HamburgerMenuIcon } from "./../../assets/svg/hamburger-menu.svg";
import MenuComponent from "../menu/menu";
import { ReactComponent as LogoIcon } from "./../../assets/svg/logo.svg";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { CSSTransition } from 'react-transition-group';
// import { Transition } from "react-transition-group";


import "./header.scss";

function Header(props) {
  const [showMenu, setShowMenu] = useState(true);
  const nodeRef = useRef(null);

  const items = [
    {
      key: "1",
      label: <span>Profile</span>,
    },
  ];
  return (
    <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }} className="header-container">
      <Col span={8}>
        <div className="hamburge-menu">
          <HamburgerMenuIcon onClick={() => props.updateMenu()} />
          <div className="app-title">API Mapping</div>
        </div>
        {/* <CSSTransition
          in={showMenu}
          nodeRef={nodeRef}
          timeout={300}
          classNames="menu-container"
          unmountOnExit
          onEnter={() => setShowMenu(false)}
          onExited={() => setShowMenu(true)}
        > */}
        {/* {showMenu === true && (
          <div className="menu-container">
            <MenuComponent closeMenuAction={() => setShowMenu(false)} />
          </div>
        )} */}
        {/* </CSSTransition> */}
      </Col>
      <Col span={8}>
        <div className="logo-info">
          <LogoIcon />
          <div className="logo-text">bots api</div>
        </div>
      </Col>
      <Col span={8}>
        <div className="profile-wrapper">
          <Avatar size="large" icon={<UserOutlined />} />
          <Dropdown
            menu={{
              items,
            }}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                <div>
                  <div className="name">Robert Fox</div>
                  <div className="email">robert.admin@bostapi.com</div>
                </div>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
}
export default Header;
