import React from "react";
import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import Title from "../Title/index";
import Paragraph from "../Paragraph/index";
import styles from "./index.module.scss";
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
      <Title text={"NTU NUS硕博学长学姐留学帮帮你"} textAlign={"center"} />
      <Paragraph
        text={
          "🌟团队目前共拥有100+硕博申请导师，覆盖计算机、金融、电子信息、生化环材、商业分析等40+学科，旨在为大家匹配背景最相符的导师。其中，包含5+副教授，20+来自哈佛、MIT、NTU、NUS的博后，30+来自剑桥、IC、NTU、NUS、港中科的博士，40+来全球top20的硕士，还有计算机、人工智能等热门专业在读硕士，为你的留学之路保驾护航~"
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Paragraph
        text={
          "🌟欢迎大家私信菜菜，进行咨询或投稿（唠嗑，提问和offer分享都ok），也欢迎加入我们的留学资讯分享群。💫菜菜会第一时间回复大家的。"
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
        <Button variant="contained" fullWidth size="medium" type="submit">
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
