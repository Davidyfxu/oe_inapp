import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './index.module.scss';
//img
import headerImg from "../../assets/pexels-binyamin-mellish-186078.png";

const Header: React.FC = () => {
  
  return (
    <Box component="header" className={styles.customBox}>
      {/*  Box text  */}
      <Box component="section" className={styles.boxText}>
        <Typography
          variant="h2"
          component="h1"
          className={styles.typographyH2}
        >
          We'll build house of your dream
        </Typography>

        <Typography
          variant="p"
          component="p"
          className={styles.typographyP}
        >
          We have 9000 more review and our customers trust on out property and
          quality products.
        </Typography>

        <Box>
          <Button
            variant="contained"
            className={styles.buttonBuyNow}
          >
            buy now
          </Button>
          <Button
            component={Link}
            to={"/about"}
            variant="outlined"
            className={styles.buttonExplore}
          >
            explore
          </Button>
        </Box>
      </Box>

      <Box
        className={styles.imgBox}
      >
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
