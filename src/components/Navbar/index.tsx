import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";

const itemList = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "关于我们",
    key: "/about",
    icon: <TeamOutlined />,
  },
  {
    label: "联系咨询",
    key: "/contact",
    icon: <ContactsOutlined />,
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(window.location.pathname);

  const onClick = (e: any) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className={styles.navbar}>
      <h1 className={styles.title} onClick={() => navigate("/")}>
        菜博士留学
      </h1>
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
