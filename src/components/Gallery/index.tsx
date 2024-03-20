import React from "react";
import { Carousel, Image, Typography } from "antd";
const { Title, Paragraph } = Typography;
import styles from "./index.module.scss";

const Gallery: React.FC = () => {
  const imageData = [
    {
      alt: "image1",
      url: "https://oss.laf.dev/cpvg7c-offer-expert-inapp/gallery_1.png",
    },
    {
      alt: "image2",
      url: "https://oss.laf.dev/cpvg7c-offer-expert-inapp/gallery_2.png",
    },
    {
      alt: "image3",
      url: "https://oss.laf.dev/cpvg7c-offer-expert-inapp/gallery_3.png",
    },
    {
      alt: "image4",
      url: "https://oss.laf.dev/cpvg7c-offer-expert-inapp/gallery_4.png",
    },
    {
      alt: "image5",
      url: "https://oss.laf.dev/cpvg7c-offer-expert-inapp/gallery_5.png",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <Image width={400} src={image.url} alt={image.alt}></Image>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Title>海外留学生活纪念墙</Title>
        <Paragraph>搜集了来自全球各个地区和高校的风景照、纪念照等等</Paragraph>
      </div>
      <Carousel className={styles.carousel} autoplay>
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default Gallery;
