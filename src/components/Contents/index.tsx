import React from "react";
import { Card, Image } from "antd";
import styles from "./index.module.scss";
import imgDetail from "../../assets/mogu_MAY.jpg";
import imgDetail2 from "../../assets/mogu_JUN.jpg";
const Contents: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card
        hoverable
        className={styles.card}
        cover={<Image className={styles.fullWidthImage} src={imgDetail} />}
      >
        <Card.Meta
          title={"豪华阵容导师申请天团"}
          description={
            "团队目前共拥有100+硕博申请导师，覆盖计算机、金融、电子信息、生化环材、商业分析等40+学科，旨在为大家匹配背景最相符的导师。其中，包含5+副教授，20+来自哈佛、MIT、NTU、NUS的博后，30+来自剑桥、IC、NTU、NUS、港中科的博士，40+来全球top20的硕士，还有计算机、人工智能等热门专业在读硕士，为你的留学之路保驾护航~"
          }
        />
      </Card>
      <Card
        hoverable
        className={styles.card}
        cover={<Image className={styles.fullWidthImage} src={imgDetail2} />}
      >
        <Card.Meta
          title={"申请到入学配套一条龙"}
          description={
            "留学咨询 👉🏻选校方案 👉🏻文书打磨 👉🏻网申投递 👉🏻信息跟进 👉🏻获得Offer 👉🏻签证申请 👉🏻入学准备，全套流程专业化配套服务"
          }
        />
      </Card>
    </div>
  );
};

export default Contents;
