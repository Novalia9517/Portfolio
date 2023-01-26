import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = ({ address }: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmit = () => {
    setMessage("");
    setName("");
    setCompany("");
  };

  return (
    <Grid
      ref={address}
      id={"services"}
      mt={5}
      container
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      pt={10}
      py={10}
      width={"full"}
      // maxWidth={'100%'}
      minHeight={"full"}
      sx={{
        backgroundImage: "linear-gradient(to right bottom, #3f51b5, #42a5f5)",
      }}
    >
      <Paper
        sx={{
          p: 4,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          fontWeight={"bold"}
          color={"primary"}
        >
          Contact Form
        </Typography>
        <Box
          display={"flex"}
          gap={3}
          flexDirection={{ sm: "column", xs: "column", md: "row" }}
        >
          <TextField
            required
            id="outlined-helperText"
            label="Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-helperText"
            label="Company Name"
            value={company}
            onChange={(e: any) => setName(e.target.value)}
          />
        </Box>
        <TextField
          required
          id="outlined-helperText"
          label="Email"
          type="email"
          value={email}
          onChange={(e: any) => setName(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Input Your Message"
          value={message}
          onChange={(e: any) => setName(e.target.value)}
          multiline
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send Message
        </Button>
      </Paper>
    </Grid>
  );
};

export default Contact;
