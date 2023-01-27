import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast } from 'react-toastify'
  import "react-toastify/dist/ReactToastify.css";

const Contact = ({ address }: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const onSubmit = (e : any) => {
    setLoading(true)
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwRAWvBiJeN0_plEvwEVSCF8ocKXkedyNVHP8RzbOjdyPl14dG7n1Fmdgt1gJBbxPHf/exec";
    // const form : any = document.forms["submit-to-google-sheet"];
    const form : any= new FormData()
    form.append('name', name)
    form.append('email', email)
    form.append('company', company)
    form.append('message', message)

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) =>{
         console.log("Success!", response)
         setLoading(false);
         toast.info(
           "Send Message Successfull. Please wait for a response from Novalia via email!",
           {
             position: "top-center",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           }
         );
         
      })
      .catch((error) => console.error("Error!", error.message));

    setMessage("");
    setName("");
    setCompany("");
    setEmail("")
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
      <form onSubmit={(e) => onSubmit(e)} name="submit-to-google-sheet">
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
              name="name"
              onChange={(e: any) => setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-helperText"
              label="Company Name"
              value={company}
              name="company"
              onChange={(e: any) => setCompany(e.target.value)}
            />
          </Box>
          <TextField
            required
            id="outlined-helperText"
            label="Email"
            type="email"
            value={email}
            name="email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Input Your Message"
            value={message}
            name="message"
            onChange={(e: any) => setMessage(e.target.value)}
            multiline
          />
          <LoadingButton
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            type="submit"
          >
            <span>Send Message</span>
          </LoadingButton>
        </Paper>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Grid>
  );
};

export default Contact;
