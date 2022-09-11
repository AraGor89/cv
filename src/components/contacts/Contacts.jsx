import { Typography } from "@mui/material";
import mail from "../../assets/img/mail.png";
import phone from "../../assets/img/phone.png";
import logoLin from "../../assets/img/logoLin.png";

const Contacts = ({ headingsCss }) => {
  return (
    <>
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
          <Typography component="span" marginLeft={1}>
            gorarakelyan1989@gmail.com
          </Typography>
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
      </Typography>
    </>
  );
};

export default Contacts;