import React from "react";
import { Grid, Typography, IconButton, Card, CardContent } from "@mui/material";
// icons
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
// components
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import styles from './index.module.scss';

const Content: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      className={styles.contentContainer}
    >
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"What we are offering?"} textAlign={"start"} />

        <Typography
          variant="h6"
          component="h4"
          className={styles.typographyH6}
        >
          Property facilities
        </Typography>

        <Paragraph
          text={
            " We have more 5000 reviews\
                    and our customers trust on out quality\
                    product and trust own our product."
          }
          maxWidth={"75%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          className={styles.borderCard}
        >
          <CardContent>
            <IconButton>
              <SportsGymnasticsIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              gym
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          className={styles.borderCard}
        >
          <CardContent>
            <IconButton>
              <LocalParkingIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              parking
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        className={styles.cardArrow}
      >
        <Card
          square={true}
          className={styles.shadowlessCard}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <FastfoodOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              local dining
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          className={styles.borderCard}
        >
          <CardContent>
            <IconButton>
              <PoolOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              swimming pool
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          className={styles.borderCard}
        >
          <CardContent>
            <IconButton>
              <WifiPasswordIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              Internet
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
