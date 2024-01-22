import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "../Title/index";
import styles from './index.module.scss';
// img
import imgDetail from "../../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../../assets/pexels-pixabay-271816.jpg";

const GetStarted: React.FC = () => {

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      className={styles.getStartedContainer}
    >
      <Grid item xs={12} sm={8} md={6} component="section" className={styles.customGridItem}>
        <Box
          component="article"
          className={styles.articleBox}
        >
          <Title
            text={"We make it easy for tenants and landlords"}
            textAlign={"start"}
          />
          <Typography className={styles.customTypography}>
            Listing are updated continuously so you
            <br />
            won't miss out on homes that just hit
            <br />
            market until you find your perfect home.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          className={styles.fullWidthImage}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          className={styles.fullWidthImage}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
        className={styles.customGridItem}
      >
        <Box
          component="article"
          className={styles.articleBox}
        >
          <Title text={"Match with the best agent"} textAlign={"start"} />
          <Typography  className={styles.customTypography}>
            Our verified partner Agents are local experts who
            <br />
            earn an average of 4.8/5 stars from buyers and sellers.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GetStarted;
