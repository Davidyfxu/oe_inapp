import React from "react";
import { FloatButton, Image, Popover } from "antd";
import { WechatOutlined, WeiboOutlined } from "@ant-design/icons";
import xhs from "../../assets/xhs.svg";

const FloatButtons = () => {
  return (
    <>
      <Popover
        placement="leftTop"
        content={
          <Image
            width={200}
            src={
              "https://objectstorageapi.gzg.sealos.run/a3ve0keh-sealaf-oevtp9dizy-backend/website/weibo.jpg"
            }
            alt=""
          />
        }
        trigger="click"
      >
        <FloatButton
          icon={<WeiboOutlined />}
          type="default"
          style={{ right: 24 }}
        />
      </Popover>
      <Popover
        placement="leftTop"
        content={
          <Image
            width={200}
            src={
              "https://objectstorageapi.gzg.sealos.run/a3ve0keh-sealaf-oevtp9dizy-backend/website/wechat.jpg"
            }
            alt=""
          />
        }
        trigger="click"
      >
        <FloatButton
          icon={<WechatOutlined />}
          type="default"
          style={{ right: 60 }}
        />
      </Popover>
      <Popover
        placement="top"
        content={
          <Image
            width={200}
            src={
              "https://objectstorageapi.gzg.sealos.run/a3ve0keh-sealaf-oevtp9dizy-backend/website/xhs.jpg"
            }
            alt=""
          />
        }
        trigger="click"
      >
        <FloatButton
          icon={<img width={18} src={xhs} alt="" />}
          type="default"
          style={{
            right: 96,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Popover>
    </>
  );
};

export default FloatButtons;
