import { Typography } from "@mui/material";
import logoLin from "../../assets/img/logoLin.png";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";

const Contacts = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        Contact info
      </Typography>
      {"\n"}
      <Typography
        component="div"
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="div" display="flex" marginBottom={1}>
          <LocalPhoneTwoToneIcon />
          <Typography component="span" marginLeft={1}>
            +374 94 899 926
          </Typography>
        </Typography>
        {"\n"}

        <Typography component="div" display="flex" marginBottom={1}>
          <MarkEmailUnreadTwoToneIcon />
          <Typography component="span" marginLeft={1}>
            gorarakelyan1989@gmail.com
          </Typography>
        </Typography>
        {"\n"}

        <Typography component="div" display="flex" alignItems="center">
          <Typography
            width="25px"
            height="25px"
            alt="logoLin"
            component="img"
            src={logoLin}
          />
          <Typography
            marginLeft={1}
            component="a"
            target="_blank"
            sx={{ textDecoration: "none", color: "unset", fontSize: "14px" }}
            href="https://www.linkedin.com/in/gor-arakelyan-7005581a9/"
          >
            https://www.linkedin.com/in/gor-arakelyan-7005581a9/
          </Typography>
        </Typography>
      </Typography>
      {"\n"}
      {"\n"}
    </>
  );
};

export default Contacts;
