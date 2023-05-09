import { Tooltip, Typography } from "@mui/material";

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

  const gitList = [
    {
      projectName: "country-info",
      url: "https://AraGor89.github.io/country-info",
      description:
        "Provides information about countries (REST COUNTRIES free api), such as population, area ,etc..",
    },
    {
      projectName: "common-things",
      url: "https://aragor89.github.io/common-things",
      description: `Typical tasks implementation, such as
      sign in/sign up, routing, conditional rendering, create, delete, search, filter... `,
    },
    {
      projectName: "type-racer",
      url: "https://aragor89.github.io/type-racer",
      description: "Check out how fast are you typing.",
    },
    {
      projectName: "DnD",
      url: "https://aragor89.github.io/DnD",
      description:
        "Drag and Drop example. From admin`s column add new users, and try DnD from admin column to other.  ",
    },
    {
      projectName: "get-movies",
      url: "https://aragor89.github.io/get-movies",
      description:
        "Search for movies by name. Typical fetching from API (IMDB free api), pagination, responsive, redux... ",
    },
    {
      projectName: "Tic-Tac",
      url: "https://aragor89.github.io/tic-Tac2",
      description: "Simple tic-Tac game",
    },
    {
      projectName: "responsive ui",
      url: "https://aragor89.github.io/technical_task",
      description: "Just a responsive UI",
    },
    {
      projectName: "responsive ui 2",
      url: "https://aragor89.github.io/technical-task-2",
      description: "Just a responsive UI",
    },
    {
      projectName: "table-with-filters",
      url: "https://aragor89.github.io/table-with-filters",
      description: "Very simple table with filtration.",
    },
  ];

  const renderer = (data) => {
    return data.map((item) => {
      return (
        <Typography component="li" key={item?.url || item}>
          {!!item?.url ? (
            <Tooltip
              arrow
              placement="left-start"
              title={
                <Typography component="div" sx={{ fontSize: "14px" }}>
                  <Typography component="span"> {item?.description}</Typography>
                </Typography>
              }
            >
              <Typography component="a" href={item?.url} target="blank">
                {item?.projectName}
              </Typography>
            </Tooltip>
          ) : (
            <Typography component="span">{item}</Typography>
          )}
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
          DEPLOYED PROJECTS
        </Typography>
        <Typography component="ul" sx={{ borderLeft: "2px solid grey" }}>
          {renderer(gitList)}
        </Typography>
      </Typography>

      <Typography component="div" marginLeft={3}>
        <Typography
          sx={{ fontSize: "20px", color: "grey", marginBottom: "8px" }}
        >
          HARD SKILLS
        </Typography>
        <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
          <Typography component="ul">{renderer(hardSkills)}</Typography>
        </Typography>
      </Typography>

      <Typography component="div" marginLeft={3}>
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
