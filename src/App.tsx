import styles from "./index.module.scss";
import {
  Button,
  Cascader,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Slider,
  Space,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
function App() {
  const props = {
    name: "file",
    action: "https://4gvna555zi.hk.aircode.run/hello",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Offer</div>
          <div className={styles.subTitle}>Expert</div>
          <h1 style={{ marginTop: 48 }}>AU专属信息采集表</h1>
        </div>
      </div>
      <Form className={styles.form} layout="horizontal" onFinish={onFinish}>
        <Divider>基础信息</Divider>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"birth"}
            label={"生日"}
            rules={[{ required: true, message: "Missing birth" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"birth"}
            label={"生日"}
            rules={[{ required: true, message: "Missing birth" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"birth"}
            label={"生日"}
            rules={[{ required: true, message: "Missing birth" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Form.Item
          name={"location"}
          label={"地址"}
          rules={[{ required: true, message: "Missing last name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Divider>教育经历</Divider>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Space style={{ display: "flex" }} align="baseline">
          <Form.Item
            name={"last"}
            label={"姓"}
            rules={[{ required: true, message: "Missing last name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"first"}
            label={"名"}
            rules={[{ required: true, message: "Missing first name" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={"birth"}
            label={"生日"}
            rules={[{ required: true, message: "Missing birth" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Space>
        <Form.Item
          name={"location"}
          label={"地址"}
          rules={[{ required: true, message: "Missing last name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Divider orientation="left" plain>
          项目选择
        </Divider>
        <Form.Item name={"name"} label="学生姓名">
          <Input />
        </Form.Item>
        <Form.Item name={"country"} label="意向国家">
          <Input />
        </Form.Item>
        <Form.List name="schools">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item wrapperCol={{ offset: 15 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
