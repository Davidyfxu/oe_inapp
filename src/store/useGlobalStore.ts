import { create } from "zustand";
import { IFounder } from "../components/CoFounders";
import { IStrength } from "../components/Strengths";
interface IGlobalStoreState {
  strengths: Array<IStrength>;
  founders: Array<IFounder>;
  galleries: Array<any>;
  offersData: Array<{
    title: string;
    value: number;
    type: OffersDataEnum;
  }>;
  contacts: Array<{
    title: string;
    value: string;
  }>;
  offerImages: Array<any>;
  setData: (props: unknown) => void;
}
export enum OffersDataEnum {
  normal,
  percent,
  scholarship,
}
export const useGlobalStore = create<IGlobalStoreState>()((set) => ({
  strengths: [],
  founders: [],
  galleries: [],
  offersData: [
    {
      title: "硕士申请成功率",
      value: 100,
      type: OffersDataEnum.percent,
    },
    {
      title: "博士申请成功率",
      value: 93,
      type: OffersDataEnum.percent,
    },
    {
      title: "港三新二申请成功率",
      value: 90,
      type: OffersDataEnum.percent,
    },
    {
      title: "学生总数",
      value: 572,
      type: OffersDataEnum.normal,
    },
    {
      title: "硕士Offer总数",
      value: 1355,
      type: OffersDataEnum.normal,
    },
    {
      title: "博士Offer总数",
      value: 158,
      type: OffersDataEnum.normal,
    },
    {
      title: "奖学金",
      value: 8000,
      type: OffersDataEnum.scholarship,
    },
  ],
  contacts: [
    { title: "官方微博", value: "新港英申请菜博士" },
    {
      title: "官方小红书",
      value: "港新菜博士留学申请（硕） / 菜博士留学（博）",
    },
    {
      title: "微信公众号",
      value: "OfferExpert 留学分享平台",
    },
    {
      title: "官方微信号",
      value: "OfferExpert",
    },
  ],
  offerImages: [],
  setData: (props) => set((state) => ({ ...state, ...props })),
}));
