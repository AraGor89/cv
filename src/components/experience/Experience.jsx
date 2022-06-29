import { Typography } from "@mui/material";

const Experience = () => {
  return (
    <Typography component="div">
      <Typography
        component="div"
        sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
      >
        WORK EXPERIENCE
      </Typography>
      {"\n"}
      <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
        <Typography component="ul">
          <Typography component="li">
            FREELANCE 2019-2020 (Front-end web developer)
          </Typography>
          {"\n"}
          <Typography component="li">
            REDKITE 2020 - present days {"\n"}
            <Typography component="ul">
              {"\t"}
              <Typography component="i">
                Automation of hospital workflows. (cypress, react, redux...)
              </Typography>
              {"\n"}
              {"\t"}
              <Typography component="li">
                Worked with "Biopic Medical" (Front-end web developer)
              </Typography>
              {"\n"}
              {"\t"}
              <Typography component="li">
                Worked with "Biopic Medical" (Developer in testing)
              </Typography>
              {"\n"}
            </Typography>
          </Typography>
          {"\n"}
        </Typography>
      </Typography>
      {"\n"}
    </Typography>
  );
};

export default Experience;
