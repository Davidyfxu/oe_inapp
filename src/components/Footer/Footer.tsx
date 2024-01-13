import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./index.module.scss"; 

const Footer = () => {

  return (
    <Box
      component="footer"
      className={`${styles.boxRow} ${styles.padding}`}
    >
      <Stack className={styles.stackColumn}>
        <FooterTitle text={"address"} />
        <FooterLink text={"15th Louis St, london 92382, eng"} />
        <FooterLink text={"25 999-345-10800"} />
        <FooterLink text={"info@housesales.com"} />
      </Stack>

      <Stack className={styles.stackColumn}>
        <FooterTitle text={"our services"} />
        <FooterLink text={"buy house"} />
        <FooterLink text={"sell house"} />
        <FooterLink text={"rent house"} />
        <FooterLink text={"build house"} />
      </Stack>
      <Stack className={styles.stackColumn}>
        <FooterTitle text={"our company"} />
        <FooterLink text={"reporting"} />
        <FooterLink text={"get in touch"} />
        <FooterLink text={"management"} />
      </Stack>

      <Stack className={styles.stackColumn}>
        <FooterTitle text={"hBSales"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="#"
            variant="body2"
            className={styles.iconLink}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            className={styles.iconLink}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; 2022 HBSales Inc.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
