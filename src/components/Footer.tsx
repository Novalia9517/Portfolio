import React from "react";
import { Stack, Typography, Tooltip, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const buttons = [
  <Tooltip key={"linkedin"} title="Go to Novalia.s Linkedin">
    <IconButton
      color="inherit"
      key="one"
      href="https://www.linkedin.com/in/nova-lia-53b911261/"
    >
      <LinkedInIcon />
    </IconButton>
  </Tooltip>,
  <Tooltip key={"github"} title="Go to Novalia.s Github">
    <IconButton color="inherit" key="two" href="https://github.com/Novalia9517">
      <GitHubIcon />
    </IconButton>
  </Tooltip>,
];

const Footer = () => {
  return (
    <Stack
      height={200}
      width={"full"}
      sx={{
        backgroundImage: "linear-gradient(to right bottom, #3f51b5, #42a5f5)",
        bottom: "0",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography variant="h5">Novalia</Typography>
      <Typography variant="h6">Website Portfolio</Typography>
      <Typography variant="subtitle2">
        Built With Typescript, React, Vite and MaterialUI
      </Typography>

      <Stack
        height={"full"}
        justifyContent={"center"}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Typography variant="subtitle2">Contact me in : </Typography>
        {buttons}
        <Typography variant="subtitle2">novalia.9517@gmail.com </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
