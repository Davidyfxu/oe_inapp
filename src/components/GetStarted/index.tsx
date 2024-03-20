import React from "react";
import { Typography } from "antd";
import styles from "./index.module.scss";
import imgDetail from "../../assets/mogu_MAY.jpg";
import imgDetail2 from "../../assets/mogu_JUN.jpg";
const { Title, Text } = Typography;
const GetStarted: React.FC = () => {
  return (
    <div className={styles.getStartedContainer}>
      <div className={styles.customGridItem}>
        <div className={styles.articleBox}>
          <Title>豪华阵容导师申请天团</Title>
          <Text>
            团队目前共拥有100+硕博申请导师，覆盖计算机、金融、电子信息、生化环材、商业分析等40+学科，旨在为大家匹配背景最相符的导师。其中，包含5+副教授，20+来自哈佛、MIT、NTU、NUS的博后，30+来自剑桥、IC、NTU、NUS、港中科的博士，40+来全球top20的硕士，还有计算机、人工智能等热门专业在读硕士，为你的留学之路保驾护航~
          </Text>
        </div>
      </div>

      <img src={imgDetail} alt="" className={styles.fullWidthImage} />
      <img src={imgDetail2} alt="" className={styles.fullWidthImage} />

      <div className={styles.customGridItem}>
        <div className={styles.articleBox}>
          <Title>申请到入学配套一条龙</Title>
          <Text>
            留学咨询 👉🏻选校方案 👉🏻文书打磨 👉🏻网申投递 👉🏻信息跟进 👉🏻获得Offer
            👉🏻签证申请 👉🏻入学准备，全套流程专业化配套服务
          </Text>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
