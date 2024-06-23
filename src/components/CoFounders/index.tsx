import React from "react";
import { useGlobalStore } from "../../store/useGlobalStore";
import styles from "./index.module.scss";
export interface IFounder {
  title: string;
  name: string;
  info: string;
}
const Founder = (props: IFounder) => {
  const { title, name, info } = props;
  return (
    <div className={styles.founder}>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

const CoFounders = () => {
  const founders = useGlobalStore((state) => state?.founders);
  return (
    <div className={styles.coFounders}>
      <Founder {...founders[0]} />
      <div className={styles.coFounder}>
        {founders.slice(1).map((f, index) => (
          <Founder key={index} {...f} />
        ))}
      </div>
    </div>
  );
};

export default CoFounders;
