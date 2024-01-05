import React from "react";
import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import Title from "./Title.jsx";
import Paragraph from "./Paragraph.jsx";

const Details = () => {
  const handleSubmit = (event) => {
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
      sx={{
        py: 10,
        px: 2,
      }}
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
        sx={{
          mt: 1,
          py: 2,
        }}
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
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "#14192d",
            "&:hover": {
              backgroundColor: "#1e2a5a",
            },
          }}
        >
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
