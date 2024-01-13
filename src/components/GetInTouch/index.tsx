import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import { Link } from "react-router-dom";
import styles from './index.module.scss';

const GetInTouch: React.FC = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.getInTouchContainer}
    >
      <Title text={"Contact us to buy property"} textAlign={"center"} />
      <Paragraph
        text={
          "It is our commitment to ensure a professional and enjoyable \
                new home buying experience for you. \
                If you want to get a home to start living as a family in an \
                area that you love click the button below."
        }
        maxWidth={"sm"}
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
