import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  ListItemButton,
  ListItemText,
  ButtonGroup,
  IconButton,
} from "@mui/material";
// menu
import DrawerItem from "../DrawerIterm/index.js";
// rotas
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { WechatOutlined, WeiboOutlined } from "@ant-design/icons";

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#409eff",
      }}
      elevation={0}
    >
      <Toolbar className={styles.styledToolbar}>
        <Typography variant="h6" component="h2">
          新港英申请菜博士
        </Typography>
        <Box className={styles.drawerItemBox}>
          <DrawerItem />
        </Box>
        <List className={styles.listMenu}>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  className={styles.listItemButton}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
