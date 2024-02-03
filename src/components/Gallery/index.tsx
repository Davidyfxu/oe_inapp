import React, { useState } from "react";
// mui
import { Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import styles from "./index.module.scss";

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();

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
    <div key={image.alt}>
      <img width={400} src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.container}
    >
      <Box component="section" className={styles.section}>
        <Title text={"海外留学生活纪念墙"} textAlign={"center"} />
        <Paragraph
          text={"搜集了来自全球各个地区和高校的风景照、纪念照等等"}
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
