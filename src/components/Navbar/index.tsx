import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Typography, theme } from "antd";
import {
  ContactsOutlined,
  ContainerOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";
const { useToken } = theme;
const itemList = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "About",
    key: "/about",
    icon: <ContainerOutlined />,
  },
  {
    label: "Contact",
    key: "/contact",
    icon: <ContactsOutlined />,
  },
];

const Navbar: React.FC = () => {
  let { token } = useToken();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(window.location.pathname);
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div
      className={styles.navbar}
      style={{ backgroundColor: token.colorBgBase }}
    >
      <Typography.Title level={5} className={styles.title}>
        新港英申请菜博士
      </Typography.Title>
      <Menu
        className={styles.menu}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={itemList}
      />
    </div>
  );
};

export default Navbar;
