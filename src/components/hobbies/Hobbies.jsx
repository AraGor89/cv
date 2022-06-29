import { Typography } from "@mui/material";
import PoolTwoToneIcon from "@mui/icons-material/PoolTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import MusicVideoTwoToneIcon from "@mui/icons-material/MusicVideoTwoTone";
import MovieCreationTwoToneIcon from "@mui/icons-material/MovieCreationTwoTone";

const Hobbies = ({ headingsCss }) => {
  return (
    <>
      <Typography variant="h5" sx={headingsCss}>
        Hobbies
      </Typography>
      {"\n"}
      <Typography
        component="div"
        justifyContent="space-between"
        sx={{ padding: "10px", display: "flex" }}
      >
        <Typography component="div" textAlign="center">
          <PoolTwoToneIcon />
          <Typography component="div">SWIMMING</Typography>
        </Typography>
        {"\n"}
        <Typography component="div" textAlign="center">
          <MenuBookTwoToneIcon />
          <Typography component="div">READING</Typography>
        </Typography>
        {"\n"}
        <Typography component="div" textAlign="center">
          <MusicVideoTwoToneIcon />
          <Typography component="div">MUSIC</Typography>
        </Typography>
        {"\n"}
        <Typography component="div" textAlign="center">
          <MovieCreationTwoToneIcon />
          <Typography component="div">MOVIES</Typography>
        </Typography>
      </Typography>
      {"\n"}
      {"\n"}
    </>
  );
};

export default Hobbies;
