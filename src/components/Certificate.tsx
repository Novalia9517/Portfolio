import * as React from "react";
import {
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DicodingWed from "../assets/Serifikat Web dasar-1.png";
import ReactCert from "../assets/react-1.png";
import JavascriptCert from "../assets/javascript-1.png";
import FrontEnd from "../assets/front end web pemula-1.png";
import Devops from "../assets/devops-1.png";
import Dqlab from "../assets/data analysis beginer-1.png";

const itemData = [
  {
    img: DicodingWed,
    title: "Belajar Pemrograman Dasar Wed",
    author: "Dicoding",
    link: "",
  },
  {
    img: JavascriptCert,
    title: "Dasar Pemrograman Javascript",
    author: "Dicoding",
    link: "",
  },
  {
    img: ReactCert,
    title: "Belajar Membuat Aplikasi Web Dengan React",
    author: "Dicoding",
    link: "",
  },
  {
    img: FrontEnd,
    title: "Belajar Membuat Front End Web Untuk Pemula",
    author: "Dicoding",
    link: "",
  },
  {
    img: Devops,
    title: "Belajar Dasar Dasar DevOps",
    author: "Dicoding",
    link: "",
  },
  {
    img: Dqlab,
    title: "Exploratory Data Analyst with Python For Beginner",
    author: "DQLab",
    link: "",
  },
];

const Certificate = ({ address }: any) => {
  return (
    <Grid
      ref={address}
      id={"certificate"}
      mt={10}
      container
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      pt={10}
      width={"full"}
      maxWidth={"100%"}
      height={"100vh"}
      maxHeight="100vh"
      // sx={{ color : grey[800]}}
    >
      <Typography variant="subtitle1" fontWeight="semibold">
        Others
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
        My Certificate
      </Typography>
      <ImageList sx={{ width: "70%", height: 450 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={
                <Link
                  href={item.link}
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  by: {item.author}
                </Link>
              }
              position="below"
              sx={{
                color: "#42a5f5",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Certificate;
