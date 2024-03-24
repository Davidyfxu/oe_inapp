import React from "react";
import { Button, Typography } from "antd";

import { Link } from "react-router-dom";
import styles from "./index.module.scss";
const { Title, Paragraph } = Typography;
const GetInTouch: React.FC = () => {
  return (
    <div className={styles.getInTouchContainer}>
      <Title>欢迎联系我们</Title>
      <Paragraph>
        有任何不懂的问题，欢迎微博、小红书、微信等途径联系我们。
      </Paragraph>
      <Link to={"/contact"}>
        <Button type={"primary"}>get in touch</Button>
      </Link>
    </div>
  );
};

export default GetInTouch;
