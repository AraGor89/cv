import { Typography } from "@mui/material";

const About = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        About me
      </Typography>
      <Typography component="div" sx={{ padding: "10px" }}>
        After trying myself in different industries, I was introduced to the IT
        world by my friend and found it really close to me. Since then I enjoy
        working both on front-end and e2e testing parts.
      </Typography>
    </>
  );
};

export default About;
