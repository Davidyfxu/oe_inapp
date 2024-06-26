import React from "react";
import { Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

import styles from "./index.module.scss";

const Content: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <Title>关于我们</Title>
      <Title level={4}>专业的留学服务</Title>
      <Paragraph>
        第一家由南洋理工大学学长学姐自发创立的留学互助分享平台，汇集来自世界TOP20名校的博士博后，做你的留学百科全书。不定期干货/留学讲座分享：大牛学长学姐答疑/各国申请新动态/海外留学生活/海外求职就业等，让专业的「留学领路者」带你飞。
      </Paragraph>
    </div>
  );
};

export default Content;
