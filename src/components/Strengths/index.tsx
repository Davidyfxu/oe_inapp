import React from "react";
import { Collapse, Typography } from "antd";
import { useGlobalStore } from "../../store/useGlobalStore";

export interface IStrength {
  index: number;
  title: string;
  desc: string;
}
const Strength = (props: IStrength) => {
  const { title, desc, index } = props;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h1>{index + 1}</h1>
        <h2>{title}</h2>
      </div>
      {desc}
    </div>
  );
};

const Strengths = () => {
  const strenths = useGlobalStore((state) => state.strengths);
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography.Title level={1}>核心优势</Typography.Title>
      <Collapse
        style={{ width: "100%" }}
        defaultActiveKey={Array.from({ length: strenths.length }, (_, index) =>
          String(index),
        )}
        items={strenths.map((s, index) => ({
          label: <strong>{s.title}</strong>,
          children: s.desc,
          key: index,
        }))}
      />
    </div>
  );
};

export default Strengths;
