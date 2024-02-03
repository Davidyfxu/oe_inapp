import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const GetInTouch: React.FC = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.getInTouchContainer}
    >
      <Title text={"欢迎联系我们"} textAlign={"center"} />
      <Paragraph
        text={"有任何不懂的问题，欢迎微博、小红书、微信等途径联系我们。"}
        maxWidth={"600px"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        size="medium"
        className={styles.getInTouchButton}
      >
        get in touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
