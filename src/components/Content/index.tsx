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
import styles from "./index.module.scss";

const Content: React.FC = () => {
  return (
    <Grid container spacing={0} className={styles.contentContainer}>
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"我们为你提供"} textAlign={"start"} />

        <Typography variant="h6" component="h4" className={styles.typographyH6}>
          专业的留学服务
        </Typography>

        <Paragraph
          text={
            "第一家由南洋理工大学学长学姐自发创立的留学互助分享平台，汇集来自世界TOP20名校的博士博后，做你的留学百科全书。不定期干货/留学讲座分享：大牛学长学姐答疑/各国申请新动态/海外留学生活/海外求职就业等，让专业的「留学领路者」带你飞。"
          }
          maxWidth={"75%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card square={true} className={styles.borderCard}>
          <CardContent>
            <IconButton>
              <SportsGymnasticsIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              硕士生活
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card square={true} className={styles.borderCard}>
          <CardContent>
            <IconButton>
              <LocalParkingIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              文书指导
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={2} className={styles.cardArrow}>
        <Card square={true} className={styles.shadowlessCard}>
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card square={true} className={styles.borderCard}>
          <CardContent>
            <IconButton>
              <FastfoodOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              留学日常
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card square={true} className={styles.borderCard}>
          <CardContent>
            <IconButton>
              <PoolOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              出海求职
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card square={true} className={styles.borderCard}>
          <CardContent>
            <IconButton>
              <WifiPasswordIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              className={styles.typographyH5}
            >
              全球见闻
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
