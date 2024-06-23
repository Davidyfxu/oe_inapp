import React from "react";
import ContactForm from "./ContactForm/index";
import { Space, Typography } from "antd";
const { Title } = Typography;
import styles from "./index.module.scss";
import { useGlobalStore } from "../../store/useGlobalStore";

const Contact = () => {
  const contacts = useGlobalStore((state) => state.contacts);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title style={{ color: "white" }}>联系我们</Title>
        <Space direction={"vertical"}>
          {contacts.map((c, index) => (
            <div
              key={index}
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <span style={{ width: "8rem", fontWeight: "bold" }}>
                {c.title}
              </span>
              <span>{c.value}</span>
            </div>
          ))}
        </Space>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
