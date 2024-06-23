import React from "react";
import {
  Card,
  Carousel,
  Image,
  Statistic,
  StatisticProps,
  Typography,
} from "antd";
const { Title, Paragraph } = Typography;
import styles from "./index.module.scss";
import { OffersDataEnum, useGlobalStore } from "../../store/useGlobalStore";
import {
  AccountBookOutlined,
  CarryOutOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," duration={3} />
);

const OfferCardMap = {
  [OffersDataEnum.normal]: {
    valueStyle: { color: "#5a958c" },
    prefix: <CarryOutOutlined />,
  },
  [OffersDataEnum.percent]: {
    valueStyle: { color: "#d2623d" },
    prefix: <RiseOutlined />,
    suffix: "%",
  },
  [OffersDataEnum.scholarship]: {
    valueStyle: { color: "#ded0a7" },
    prefix: <AccountBookOutlined />,
    suffix: "万",
  },
};

const OffersRank: React.FC = () => {
  const imageData = useGlobalStore((state) => state.galleries);
  const offers = useGlobalStore((state) => state.offersData);

  const renderSlides = imageData.map((image, index) => (
    <Image key={index} src={image?.url} alt={image?.alt} />
  ));

  return (
    <div className={styles.container}>
      <Title style={{ color: "white" }}>历年累计申请数据</Title>
      <div className={styles.offers}>
        <div className={styles.carousel}>
          <Carousel autoplay>{renderSlides}</Carousel>
        </div>
        <div className={styles.offerCards}>
          {offers.map((offer, index) => (
            <Card
              key={index}
              style={{ flex: 1 }}
              title={offer.title}
              bordered={false}
            >
              <Statistic
                value={offer.value}
                formatter={formatter}
                {...OfferCardMap[offer.type]}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersRank;
