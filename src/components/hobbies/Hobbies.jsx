import { Typography } from "@mui/material";
import MUSIC from "../../assets/img/MUSIC.png";
import MOVIES from "../../assets/img/MOVIES.png";
import READING from "../../assets/img/READING.png";
import SWIMMING from "../../assets/img/SWIMMING.png";

const Hobbies = ({ headingsCss }) => {
  const hobbies = [
    { hobby: "MUSIC", img: MUSIC },
    { hobby: "MOVIES", img: MOVIES },
    { hobby: "READING", img: READING },
    { hobby: "SWIMMING", img: SWIMMING },
  ];

  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        Hobbies
      </Typography>
      <Typography
        component="div"
        justifyContent="space-between"
        sx={{ padding: "10px", display: "flex" }}
      >
        {hobbies.map((hobby) => (
          <Typography component="div" textAlign="center" key={hobby.hobby}>
            <Typography
              width={30}
              component="img"
              src={hobby.img}
              alt={hobby.hobby}
            />
            <Typography component="div" fontSize={14}>
              {hobby.hobby}
            </Typography>
          </Typography>
        ))}
      </Typography>
    </>
  );
};

export default Hobbies;
