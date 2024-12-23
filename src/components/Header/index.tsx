import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import headerImg from "../../assets/offer_expert_logo.png";
import { Button } from "antd";

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.customBox}>
      <div className={styles.boxText}>
        <h1>菜博士留学</h1>
        <div>
          立足新加坡，服务全世界。我们是一家由南洋理工大学学长学姐自发创立的留学互助分享平台，汇集来自世界TOP20名校的博士博后，做你的留学百科全书。
        </div>
        <div>
          真诚才是必杀技！我们希望做一群有温度的学长学姐，分享亲身留学申请经验，打破信息差，让你少走弯路！
          成立至今，菜博士留学工作室已助力学生成功获得1355枚Offer，其中硕士申请成功率达到100%，博士申请成功率为93%，累计斩获奖学金超过8000万人民币。
        </div>
        <div className={styles.buttons_container}>
          <Button type="primary" onClick={() => navigate("/contact")} size="large">
            开始咨询
          </Button>
          <Button onClick={() => navigate("/about")} size="large">
            了解更多
          </Button>
        </div>
      </div>
      <div className={styles.imgBox}>
        <img src={headerImg} alt="菜博士留学" />
      </div>
    </div>
  );
};

export default Header;
