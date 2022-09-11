import { Typography } from "@mui/material";

const Languages = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        Languages
      </Typography>
      <Typography
        component="div"
        justifyContent="space-between"
        sx={{ padding: "10px", display: "flex" }}
      >
        <Typography component="div" textAlign="center">
          <Typography component="div">75%</Typography>
          <Typography component="div">ENGLISH</Typography>
        </Typography>
        <Typography component="div" textAlign="center">
          <Typography component="div">95%</Typography>
          <Typography component="div">RUSSIAN</Typography>
        </Typography>
        <Typography component="div" textAlign="center">
          <Typography component="div">native</Typography>
          <Typography component="div">ARMENIAN</Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Languages;
