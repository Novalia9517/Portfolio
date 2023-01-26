import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Paper,
  IconButton,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Nav = ({ onToggleDark }: any) => {
  const [mode, setMode] = useState("light");
  const handleClick = () => {
    mode == "light" ? setMode("dark") : setMode("light");
    onToggleDark();
  };

  console.log(mode);
  return (
    <Box width={"full"} sx={{ flexGrow: 1 }} position={"sticky"} top={"0"}>
      <Paper sx={{ px: 16 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, #3f51b5, #42a5f5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Novalia
          </Typography>

          <IconButton
            value={mode}
            aria-label="website-mode"
            onClick={handleClick}
          >
            {mode == "dark" ? (
              <LightModeIcon color="info" />
            ) : (
              <DarkModeIcon color="info" />
            )}
          </IconButton>
        </Toolbar>
      </Paper>
    </Box>
  );
};

export default Nav;
