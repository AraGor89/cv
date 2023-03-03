import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, TextField, Button, Typography } from "@mui/material";

const Mailing = ({ closeModal }) => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [mailFail, setMailFail] = useState(false);
  const [mailSuccess, setMailSuccess] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setMailSuccess(true);
          setTimeout(() => {
            closeModal();
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setMailFail(true);
        }
      );
  };

  return (
    <Box sx={style}>
      <Typography component="form" ref={formRef} onSubmit={sendEmail}>
        {isSending && <LinearProgress sx={{ margin: "20px" }} />}
        {mailSuccess && (
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "20px",
              padding: "10px",
              color: "green",
            }}
          >
            Thank you. I will reach you asap :)
          </Typography>
        )}
        {mailFail && (
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "20px",
              padding: "10px",
              color: "red",
            }}
          >
            oops, something went wrong :(
          </Typography>
        )}
        <TextField
          fullWidth
          required
          type="text"
          margin="dense"
          name="from_name"
          label="Full name"
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          type="email"
          label="Email"
          margin="dense"
          name="user_email"
          variant="outlined"
        />
        <TextField
          fullWidth
          required
          type="text"
          name="subject"
          margin="dense"
          label="Subject"
          variant="outlined"
        />
        <TextField
          rows={4}
          multiline
          fullWidth
          required
          type="text"
          margin="dense"
          name="message"
          label="message"
          variant="outlined"
        />
        <Button variant="outlined" fullWidth type="submit">
          Send message
        </Button>
      </Typography>
    </Box>
  );
};

export default Mailing;
