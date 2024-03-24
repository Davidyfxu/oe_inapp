import React from "react";
import { Button, Form, type FormProps, Input, Typography } from "antd";

type FieldType = {
  email?: string;
  phone?: string;
};
import styles from "./index.module.scss";
const { Title, Paragraph } = Typography;
const Details: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("表单提交");
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.container}>
      <Title>NTU NUS硕博学长学姐留学帮帮你</Title>
      <Paragraph>
        🌟团队目前共拥有100+硕博申请导师，覆盖计算机、金融、电子信息、生化环材、商业分析等40+学科，旨在为大家匹配背景最相符的导师。其中，包含5+副教授，20+来自哈佛、MIT、NTU、NUS的博后，30+来自剑桥、IC、NTU、NUS、港中科的博士，40+来全球top20的硕士，还有计算机、人工智能等热门专业在读硕士，为你的留学之路保驾护航~
      </Paragraph>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Please input your email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Please input your phone number" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Details;
