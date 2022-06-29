import { Typography } from "@mui/material";
import DottedLine from "./../common/DottedLine";

const Skills = () => {
  const softSkills = [
    "Teamwork",
    "Patience",
    "Positivity",
    "Accountability",
    "Problem-Solving",
  ];
  const hardSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Bootstrap",
    "CYPRESS",
    "LESS",
    "REST API",
  ];

  return (
    <Typography component="div" sx={{ marginTop: "20px" }}>
      <Typography sx={{ fontSize: "20px", color: "grey", marginBottom: "8px" }}>
        SOFT SKILLS
      </Typography>
      {"\n"}
      <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
        <Typography component="ul">
          {softSkills.map((skill) => {
            return (
              <Typography component="li" key={skill}>
                {skill}
                {"\n"}
              </Typography>
            );
          })}
        </Typography>
        {"\n"}
      </Typography>

      <DottedLine />

      <Typography
        sx={{
          fontSize: "20px",
          color: "grey",
          marginTop: "20px",
          marginBottom: "8px",
        }}
      >
        HARD SKILLS
      </Typography>
      {"\n"}
      <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
        <Typography component="ul">
          {hardSkills.map((skill) => {
            return (
              <Typography component="li" key={skill}>
                {skill}
                {"\n"}
              </Typography>
            );
          })}
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Skills;
