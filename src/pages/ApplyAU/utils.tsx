import { DegreeEnum, MarryEnum, SexEnum, VisaRejectEnum } from "./types";
import dayjs from "dayjs";
import axios from "axios";
import { message, Typography } from "antd";

import React from "react";
import { NotificationInstance } from "antd/es/notification/interface";
const { Paragraph } = Typography;

const BASE_URL = "https://psqrszkvx9.us.aircode.run";
export const post = async (url: string, params: any): Promise<any> => {
  try {
    return await axios.post(BASE_URL + url, { ...params });
  } catch (e: any) {
    console.error("Error:", e);
    message.error(e.toString());
  }
};
export const SexOptions = [
  { value: SexEnum.Male, label: "男" },
  { value: SexEnum.Female, label: "女" },
];
export const MarryOptions = [
  { value: MarryEnum.Single, label: "未婚" },
  { value: MarryEnum.Married, label: "已婚" },
  { value: MarryEnum.Other, label: "其他" },
  { value: MarryEnum.Divorce, label: "离婚" },
];
export const VisaRejectOptions = [
  { value: VisaRejectEnum.No, label: "否" },
  { value: VisaRejectEnum.Yes, label: "是" },
];
export const DegreeEnumOptions = [
  { value: DegreeEnum.Bachelor, label: "本科" },
  { value: DegreeEnum.Master, label: "硕士" },
  { value: DegreeEnum.PHD, label: "博士" },
];

export const filterCase = (data: any) => {
  return {
    ...data,
    birth: dayjs(data?.birth * 1000),
    period: data?.period.map((p: number) => dayjs(p * 1000)),
    colleges: data?.colleges.map((college: any) => ({
      ...college,
      entryMonth: dayjs(college?.entryMonth * 1000),
    })),
  };
};
export const openNotification = async (
  api: NotificationInstance,
  id: string,
) => {
  api.info({
    duration: 60,
    message: `创建/更新成功`,
    description: (
      <>
        请保存生成id号，便于后期查询
        <Paragraph type="danger" copyable={{ tooltips: "copy" }}>
          {id}
        </Paragraph>
      </>
    ),
    placement: "top",
  });
};
