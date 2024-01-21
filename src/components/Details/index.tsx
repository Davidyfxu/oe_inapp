import React from "react";
import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import styles from './index.module.scss';
import { ClassNames } from "@emotion/react";

const Details: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (email === "") {
    //   alert("请输入邮箱");
    //   return;
    // }
    // if (phone === "") {
    //   alert("请输入电话号码");
    //   return;
    // }
    // 这里可以添加其他的验证逻辑
    // 如果所有的验证都通过，那么可以提交表单
    console.log("表单提交");
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.container}
    >
      <Title text={"Interesting to buy property"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to buy the property contact us we will call you. \
                Shortly to fulfill you requirements and property."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        // noValidate
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <FormControl fullWidth>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="phone"
            id="phone"
            autoComplete="current-phone"
          />
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          className={styles.button}
        >
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
