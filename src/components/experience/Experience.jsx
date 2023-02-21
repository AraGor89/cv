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
      <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
        <Typography component="ul">
          <Typography component="li">
            FREELANCE 2019-2020 (Front-end web developer)
          </Typography>
          <Typography component="li">
            REDKITE 2020 - present.
            <Typography component="ul">
              <i>
                {/* Worked with "Biopic Medical" (Automation of hospital workflows). */}
                Worked in medical field (Automation of hospital workflows).
              </i>
              <Typography component="li">
                Front-end web developer (js, react, redux, ...)
              </Typography>
              <Typography component="li">
                Developer in QA automation (cypress)
              </Typography>
              <hr />
              {/* <i>Worked with "Warner Music Group"</i> */}
              <i>Worked in music industry</i>
              <Typography component="li">
                Developer in QA automation (cypress)
              </Typography>
              <Typography component="li">
                <Typography
                  component="a"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                  href="https://medium.com/@gorarakelyan1989/100-days-of-quality-assurance-e0e0ff0d6707"
                >
                  Wrote an article on the topic "What can be tested ?"
                </Typography>
              </Typography>
              <hr />
              {/* <i>Working with ITU (International Telecommunication Union)</i> */}
              <i>Worked in telecommunication field </i>
              <Typography component="li">
                Front-end web developer (js, react, redux, ...)
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Experience;
