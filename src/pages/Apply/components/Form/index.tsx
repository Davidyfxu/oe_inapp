import React from "react";
import {
  Button,
  TextField,
  Container,
  Box,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 680 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Offer Expert Application Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} direction="column">
              <TextField
                {...register("name", { required: "Name is required" })}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />
              <TextField
                {...register("school", { required: "School is required" })}
                label="School"
                variant="outlined"
                error={!!errors.school}
                helperText={errors.school?.message}
                fullWidth
              />
              <TextField
                {...register("gpa", { required: "GPA is required" })}
                label="GPA"
                variant="outlined"
                error={!!errors.gpa}
                helperText={errors.gpa?.message}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Form;
