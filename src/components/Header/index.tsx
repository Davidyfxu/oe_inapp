import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
//img
import headerImg from "../../assets/offer_expert_logo.png";
import { Typography, Button } from "antd";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.customBox}>
      {/*  Box text  */}
      <div className={styles.boxText}>
        <Typography.Title level={1}>
          Offer Expert <br />
          做你的留学百科全书
        </Typography.Title>
        <Typography.Paragraph>
          在过去的三年中，我们以百分之百成功率，为众多小伙伴拿下理想的offer。其中不乏新港英offer大满贯硕士申请者，ntu、nus等博士申请者。
          为大家提供【新加坡、香港、英国】等地区的【博士和硕士】申请服务，同时提供最新的【留学申请资讯和干货分享】。
        </Typography.Paragraph>
        <div className={styles.buttons_container}>
          <Button type="primary" onClick={() => navigate("/contact")}>
            留学咨询
          </Button>
          <Button type="text" onClick={() => navigate("/about")}>
            探索更多
          </Button>
        </div>
      </div>
      <div className={styles.imgBox}>
        <img
          src={headerImg}
          alt="headerImg"
          className={styles.fullWidthImage}
        />
      </div>
    </div>
  );
};

export default Header;
