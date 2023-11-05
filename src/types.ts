import { Dayjs } from "dayjs";

export interface IAUCase {
  _id?: string;
  lastName: string;
  firstName: string;
  sex: SexEnum;
  birth: Dayjs;
  marry: MarryEnum;
  passport: string;
  email: string;
  phone: string;
  location: string;
  bachelorSchool: string;
  major: string;
  GPA: string;
  degree: DegreeEnum;
  period: Dayjs[];
  visaReject: VisaRejectEnum;
  colleges: College[];
  teacherName: string;
  teacherWechat: string;
  teacherEmail: string;
}

export interface College {
  college: string;
  master: string;
  learningPeriod: number;
  entryMonth: Dayjs;
  programLink: string;
  notes: string;
}
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
