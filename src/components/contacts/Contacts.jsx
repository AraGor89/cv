import { useState } from "react";
import { Backdrop, Fade, Modal, Tooltip, Typography } from "@mui/material";
import Mailing from "./Mailing";
import mail from "../../assets/img/mail.png";
import phone from "../../assets/img/phone.png";
import logoLin from "../../assets/img/logoLin.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contacts = ({ headingsCss }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1500,
          },
        }}
      >
        <Fade in={open}>
          <Typography component="div">
            <Mailing closeModal={handleClose} />
          </Typography>
        </Fade>
      </Modal>

      <Typography variant="h5" sx={headingsCss}>
        Contact info
      </Typography>
      <Typography
        component="div"
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="div" display="flex" marginBottom={1}>
          <Typography component="img" src={phone} alt="phone" width={30} />
          <Typography component="span" marginLeft={1}>
            +374 94 899 926
          </Typography>
        </Typography>

        <Typography component="div" display="flex" marginBottom={1}>
          <Typography component="img" src={mail} alt="mail" width={30} />
          <Tooltip
            title={
              <Typography component="span" sx={{ fontSize: "16px" }}>
                Click for email
              </Typography>
            }
            placement="top-end"
          >
            <Typography
              component="span"
              marginLeft={1}
              sx={{ cursor: "pointer" }}
              onClick={handleOpen}
            >
              gorarakelyan1989@gmail.com
            </Typography>
          </Tooltip>
        </Typography>

        <Typography component="div" display="flex" alignItems="center">
          <Typography
            width="30px"
            height="30px"
            alt="logoLin"
            component="img"
            src={logoLin}
          />
          <Typography
            marginLeft={1}
            component="a"
            target="_blank"
            sx={{ textDecoration: "none", color: "unset" }}
            href="https://www.linkedin.com/in/gor-arakelyan-7005581a9/"
          >
            linkedin
          </Typography>
        </Typography>

        <Tooltip
          arrow
          placement="left-start"
          title={
            <Typography
              component="p"
              sx={{ fontSize: "14px", fontWeight: 600 }}
            >
              Dear viewer, please note that these projects were written in
              purpose of self educating and self entertaining, and do not claim
              to be a production level code!
            </Typography>
          }
        >
          <Typography
            component="div"
            display="flex"
            alignItems="center"
            marginLeft={0.4}
            marginTop={1}
          >
            <GitHubIcon />
            <Typography
              marginLeft={1}
              component="a"
              target="_blank"
              href="https://github.com/AraGor89"
              sx={{ textDecoration: "none", color: "unset" }}
            >
              GitHub
            </Typography>
          </Typography>
        </Tooltip>
      </Typography>
    </>
  );
};

export default Contacts;
