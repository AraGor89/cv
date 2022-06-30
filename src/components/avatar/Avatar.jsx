import { Typography } from "@mui/material";
import avatar from "../../assets/img/avatar.jpg";

const Avatar = () => {
  return (
    <>
      <Typography
        component="img"
        src={avatar}
        alt="avatar"
        width="200px"
        borderRadius="50%"
        sx={{ margin: "0 auto", display: "flex" }}
      />
    </>
  );
};

export default Avatar;
