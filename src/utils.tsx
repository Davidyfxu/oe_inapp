export enum SexEnum {
  Female,
  Male,
}
export enum MarryEnum {
  Single,
  Married,
  Other,
  Divorce,
}
export enum VisaRejectEnum {
  No,
  Yes,
}
export enum DegreeEnum {
  Bachelor,
  Master,
  PHD,
}
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
