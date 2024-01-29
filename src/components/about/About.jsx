import { Typography } from "@mui/material";

const About = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        About me
      </Typography>
      <Typography component="div" sx={{ padding: "10px" }}>
        Experienced web developer with proficiency in front-end and a strong
        foundation in back-end technologies. Skilled in crafting clean
        interfaces, I bring a creative approach to problem-solving. Committed to
        staying current with industry trends, I excel in collaborative
        environments and am eager to contribute to dynamic web development
        projects.
      </Typography>
    </>
  );
};

export default About;
