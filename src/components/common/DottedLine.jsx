import { Typography } from "@mui/material";

const DottedLine = () => {
  return (
    <Typography
      component="hr"
      sx={{
        border: "none",
        borderTop: "1px dashed black",
        height: "1px",
        width: "100%",
        marginTop: "20px",
      }}
    />
  );
};

export default DottedLine;
