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
  Radio,
  Select,
  Slider,
  Space,
  Spin,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import React, { useState } from "react";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import {
  DegreeEnumOptions,
  MarryOptions,
  SexOptions,
  VisaRejectEnum,
  VisaRejectOptions,
} from "./utils";
import axios from "axios";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const App = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const result = await axios.post(
        "https://4gvna555zi.hk.aircode.run/createAUCase",
        values,
      );
      console.log("Success:", values);
      message.success("创建成功");
    } catch (error) {
      console.error("Something wrong:", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Offer</div>
          <div className={styles.subTitle}>Expert</div>
          <h1 style={{ marginTop: 48 }}>专业代理信息采集表</h1>
        </div>
      </div>
      <Spin spinning={loading}>
        <Form className={styles.form} layout="horizontal" onFinish={onFinish}>
          <Divider>学生信息</Divider>
          <Space className={styles.formLine} align="baseline">
            <Form.Item
              name={"lastName"}
              label={"姓氏"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="请输入姓" allowClear />
            </Form.Item>
            <Form.Item
              name={"firstName"}
              label={"名"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="请输入名" allowClear />
            </Form.Item>
            <Form.Item
              name={"sex"}
              label={"性别"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Radio.Group options={SexOptions} />
            </Form.Item>
          </Space>
          <Space
            style={{ display: "flex", justifyContent: "space-between" }}
            align="baseline"
          >
            <Form.Item
              name={"birth"}
              label={"生日"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <DatePicker placeholder="请选择生日" allowClear />
            </Form.Item>
            <Form.Item
              name={"marry"}
              label={"婚姻"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Select
                style={{ width: 100 }}
                options={MarryOptions}
                placeholder="请输入"
                allowClear
              />
            </Form.Item>
            <Form.Item name={"passport"} label={"护照"}>
              <Input placeholder="请输入护照号" allowClear />
            </Form.Item>
          </Space>
          <Space className={styles.formLine} align="baseline">
            <Form.Item
              name={"email"}
              label={"邮箱"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input type={"email"} placeholder="请输入邮箱" allowClear />
            </Form.Item>
            <Form.Item
              name={"phone"}
              label={"手机号"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="请输入手机号" allowClear />
            </Form.Item>
          </Space>
          <Form.Item
            name={"location"}
            label={"地址"}
            rules={[{ required: true, message: "必填项" }]}
          >
            <Input placeholder="请输入地址" allowClear />
          </Form.Item>

          <Divider>教育经历</Divider>
          <Space className={styles.formLine} align="baseline">
            <Form.Item
              name={"bachelorSchool"}
              label={"学校名称"}
              tooltip={"注明为211/985/双非，例如：清华大学（985）"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="例如：清华大学（985）" allowClear />
            </Form.Item>
            <Form.Item
              name={"major"}
              label={"专业名称"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="例如：计算机科学" allowClear />
            </Form.Item>
            <Form.Item
              name={"GPA"}
              label={"GPA"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Input placeholder="例如：90/100" allowClear />
            </Form.Item>
          </Space>
          <Space className={styles.formLine} align="baseline">
            <Form.Item
              name={"degree"}
              label={"学历"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Select
                options={DegreeEnumOptions}
                placeholder="请选择学历"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name={"period"}
              label={"就读日期"}
              rules={[{ required: true, message: "必填项" }]}
            >
              <RangePicker allowClear />
            </Form.Item>
            <Form.Item
              name={"visaReject"}
              label={"有无该国拒签"}
              initialValue={VisaRejectEnum.No}
              rules={[{ required: true, message: "必填项" }]}
            >
              <Radio.Group options={VisaRejectOptions} />
            </Form.Item>
          </Space>

          <Divider>项目选择</Divider>
          <Form.List name="colleges" initialValue={[{ college: "" }]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <div key={key}>
                    <Divider orientation={"left"} orientationMargin={8}>
                      项目{name + 1}
                    </Divider>
                    <Space className={styles.formLine} align="start">
                      <Form.Item
                        label="院校名称"
                        name={[name, "college"]}
                        rules={[{ required: true, message: "必填项" }]}
                      >
                        <Input placeholder="例如：悉尼大学" allowClear />
                      </Form.Item>
                      <Form.Item
                        label="专业名称"
                        name={[name, "master"]}
                        rules={[{ required: true, message: "必填项" }]}
                      >
                        <Input
                          placeholder="例如：MSc(Computer Science)"
                          allowClear
                        />
                      </Form.Item>
                      <Button
                        onClick={() => remove(name)}
                        type={"primary"}
                        danger
                        icon={<DeleteFilled />}
                      />
                    </Space>
                    <Space className={styles.formLine} align="baseline">
                      <Form.Item
                        label="学制"
                        name={[name, "learningPeriod"]}
                        rules={[{ required: true, message: "必填项" }]}
                      >
                        <InputNumber
                          min={1}
                          precision={1}
                          placeholder="单位：年"
                        />
                      </Form.Item>
                      <Form.Item
                        label="入学时间"
                        name={[name, "entryMonth"]}
                        rules={[{ required: true, message: "必填项" }]}
                      >
                        <DatePicker picker="month" />
                      </Form.Item>
                      <Form.Item
                        label="专业链接"
                        name={[name, "programLink"]}
                        rules={[{ required: true, message: "必填项" }]}
                      >
                        <Input placeholder="Link" allowClear />
                      </Form.Item>
                    </Space>
                    <Form.Item label="备注" name={[name, "notes"]}>
                      <Input
                        placeholder="专业小方向 / 是否配语言班 / 是否减免学分"
                        allowClear
                      />
                    </Form.Item>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} block icon={<PlusOutlined />}>
                    添加项目
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Divider>导师信息</Divider>
          <Space className={styles.formLine} align="baseline">
            <Form.Item name={"teacherName"} label="导师昵称">
              <Input allowClear />
            </Form.Item>
            <Form.Item name={"teacherWechat"} label="导师微信">
              <Input allowClear />
            </Form.Item>
            <Form.Item name={"teacherEmail"} label="导师邮箱">
              <Input allowClear type={"email"} />
            </Form.Item>
          </Space>
          <Form.Item wrapperCol={{ offset: 20 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default App;
