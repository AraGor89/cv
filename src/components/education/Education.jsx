import { Typography } from "@mui/material";

const Education = () => {
  return (
    <>
      <Typography component="div" sx={{ marginTop: "20px" }}>
        <Typography
          component="div"
          sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
        >
          EDUCATION
        </Typography>
        <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
          <Typography component="ul">
            <Typography component="li">
              <strong>2020 / 3 months</strong> (“Programming basics” C++ course,
              Russian-Armenian University and Ministry of High Tech Industry of
              the Republic of Armenia)
            </Typography>
            <Typography component="li">
              <strong>2019 / 6 months</strong> (front-end development courses)
            </Typography>
            <Typography component="li">
              <strong>2012 - 2014</strong> ( Moscow Institute of Linguistics)
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Education;
