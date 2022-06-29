import { Typography } from "@mui/material";

const Languages = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        Languages
      </Typography>
      {"\n"}
      <Typography
        component="div"
        justifyContent="space-between"
        sx={{ padding: "10px", display: "flex" }}
      >
        <Typography component="div" textAlign="center">
          <Typography component="div">100%</Typography>
          {"\t"}
          <Typography component="div">ARMENIAN</Typography>
        </Typography>
        {"\n"}
        <Typography component="div" textAlign="center">
          <Typography component="div">75%</Typography>
          {"\t"}
          <Typography component="div">ENGLISH</Typography>
        </Typography>
        {"\n"}
        <Typography component="div" textAlign="center">
          <Typography component="div">95%</Typography>
          {"\t"}
          <Typography component="div">RUSSIAN</Typography>
        </Typography>
      </Typography>
      {"\n"}
      {"\n"}
    </>
  );
};

export default Languages;
