import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../Title/index";
import styles from "./index.module.scss";
import imgDetail from "../../assets/mogu_MAY.jpg";
import imgDetail2 from "../../assets/mogu_JUN.jpg";

const GetStarted: React.FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      className={styles.getStartedContainer}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component="section"
        className={styles.customGridItem}
      >
        <Box component="article" className={styles.articleBox}>
          <Title text={"豪华阵容导师申请天团"} textAlign={"start"} />
          <Typography className={styles.customTypography}>
            团队目前共拥有100+硕博申请导师，覆盖计算机、金融、电子信息、生化环材、商业分析等40+学科，旨在为大家匹配背景最相符的导师。其中，包含5+副教授，20+来自哈佛、MIT、NTU、NUS的博后，30+来自剑桥、IC、NTU、NUS、港中科的博士，40+来全球top20的硕士，还有计算机、人工智能等热门专业在读硕士，为你的留学之路保驾护航~
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <img src={imgDetail} alt="" className={styles.fullWidthImage} />
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
        <img src={imgDetail2} alt="" className={styles.fullWidthImage} />
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
        <Box component="article" className={styles.articleBox}>
          <Title text={"申请到入学配套一条龙"} textAlign={"start"} />
          <Typography className={styles.customTypography}>
            留学咨询 👉🏻选校方案 👉🏻文书打磨 👉🏻网申投递 👉🏻信息跟进 👉🏻获得Offer
            👉🏻签证申请 👉🏻入学准备，全套流程专业化配套服务
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GetStarted;
