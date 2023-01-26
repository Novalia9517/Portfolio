import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

const Services = ({ address }: any) => {
  const services = [
    "Frontend Web Development",
    "UI/UX Design with Figma",
    "Consume API",
  ];
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
      // sx={{ color : grey[800]}}
    >
      <Typography variant="subtitle1" fontWeight="semibold">
        My Service
      </Typography>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        style={{
          backgroundImage: "linear-gradient(to right bottom, #3f51b5, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What I Offer
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {services.map((item, i) => (
              <Grid key={i} item>
                <Paper
                  sx={{
                    height: 140,
                    width: 200,
                    p: "10px",
                    borderRadius: "10px",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right bottom, #3f51b5, #42a5f5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
