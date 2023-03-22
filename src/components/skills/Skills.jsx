import { Typography } from "@mui/material";

const Skills = () => {
  const softSkills = [
    "Teamwork",
    "Patience",
    "Positivity",
    "Accountability",
    "Problem solving",
    "Process management",
  ];
  const hardSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "REST API",
    "CYPRESS",
    "HTML",
    "CSS",
    "LESS",
    "Material-UI",
    "Bootstrap",
  ];

  const renderer = (data) => {
    return data.map((item) => {
      return (
        <Typography component="li" key={item}>
          {item}
        </Typography>
      );
    });
  };

  return (
    <Typography
      component="div"
      justifyContent="flex-start"
      sx={{ marginTop: "20px", display: "flex" }}
    >
      <Typography component="div">
        <Typography
          sx={{ fontSize: "20px", color: "grey", marginBottom: "8px" }}
        >
          HARD SKILLS
        </Typography>
        <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
          <Typography component="ul">{renderer(hardSkills)}</Typography>
        </Typography>
      </Typography>

      <Typography component="div" marginLeft={7}>
        <Typography
          sx={{ fontSize: "20px", color: "grey", marginBottom: "8px" }}
        >
          SOFT SKILLS
        </Typography>
        <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
          <Typography component="ul">{renderer(softSkills)}</Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Skills;
