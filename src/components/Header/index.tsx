import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
//img
import headerImg from "../../assets/offer_expert_logo.png";
import { Typography, Button, Image } from "antd";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.customBox}>
      <div className={styles.boxText}>
        <Typography.Title style={{ color: "white" }} level={1}>
          菜博士留学
        </Typography.Title>
        <div style={{ color: "white", fontSize: "1.5rem" }}>
          立足新加坡 服务全世界
        </div>

        <div style={{ color: "white" }}>
          菜博士留学（OfferExpert）工作室于2019年创立，是一家诞生于新加坡的留学申请指导平台，三位创始人均为海外博士，分别毕业于南洋理工大学（NTU）和丹麦奥胡斯大学。
          <br />
          真诚才是必杀技！我们希望做一群有温度的学长学姐，分享亲身留学申请经验，打破信息差，让你少走弯路！成立至今，菜博士留学工作室已助力学生成功获得1355枚Offer，其中硕士申请成功率达到100%，博士申请成功率为93%，累计斩获奖学金超过8000万人民币。
          <br />
          我们相信，专业的人才能做好的事。团队拥有200多位来自世界顶级名校的硕士博士教授，组成了辅导导师天团，涵盖了基本所有学科领域：理工、商科、经济、社科、人文、艺术、音乐美术等50+个专业领域。我们致力于打造一个互助共赢的留学生互助平台，为学生提供从留学生活到学习求职的全方位陪伴与指导，让每位师弟师妹都能在异国他乡找到归属感和支持！
        </div>
        <div className={styles.buttons_container}>
          <Button type="primary" onClick={() => navigate("/contact")}>
            留学咨询
          </Button>
          <Button ghost onClick={() => navigate("/about")}>
            探索更多
          </Button>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image src={headerImg} alt="headerImg" />
      </div>
    </div>
  );
};

export default Header;
