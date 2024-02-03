import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
//img
import headerImg from "../../assets/offer_expert_logo.png";

const Header: React.FC = () => {
  return (
    <Box component="header" className={styles.customBox}>
      {/*  Box text  */}
      <Box component="section" className={styles.boxText}>
        <Typography variant="h2" component="h1" className={styles.typographyH2}>
          Offer Expert <br />
          做你的留学百科全书
        </Typography>

        <Typography variant="p" component="p" className={styles.typographyP}>
          在过去的三年中，我们以百分之百成功率，为众多小伙伴拿下理想的offer。其中不乏新港英offer大满贯硕士申请者，ntu、nus等博士申请者。
          为大家提供【新加坡、香港、英国】等地区的【博士和硕士】申请服务，同时提供最新的【留学申请资讯和干货分享】。
        </Typography>

        <Box className={styles.buttons_container}>
          <Button
            component={Link}
            to={"/contact"}
            variant="contained"
            className={styles.buttonBuyNow}
          >
            留学咨询
          </Button>
          <Button
            component={Link}
            to={"/about"}
            variant="outlined"
            className={styles.buttonExplore}
          >
            探索更多
          </Button>
        </Box>
      </Box>
      <Box className={styles.imgBox}>
        <img
          src={headerImg}
          alt="headerImg"
          className={styles.fullWidthImage}
        />
      </Box>
    </Box>
  );
};

export default Header;
