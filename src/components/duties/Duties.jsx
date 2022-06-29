import React from "react";
import { Typography } from "@mui/material";

const Duties = () => {
  return (
    <>
      <Typography component="div" sx={{ marginTop: "20px" }}>
        <Typography
          component="div"
          sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
        >
          PROFESSIONAL DUTIES
        </Typography>
        {"\n"}
        <Typography
          component="div"
          sx={{
            width: "80%",
            borderLeft: "2px solid grey",
          }}
        >
          <Typography component="ul">
            <Typography component="li">
              Providing adaptive and cross-browser layout.
            </Typography>
            {"\n"}
            <Typography component="li">
              Development and improving of autotests.
            </Typography>
            {"\n"}
            <Typography component="li">
              Creation and completion of new program modules.
            </Typography>
            {"\n"}
            <Typography component="li">
              Support and development of the current architecture.
            </Typography>
            {"\n"}
            <Typography component="li">
              Refactoring (improving and optimizing the code) of existing
              modules.
            </Typography>
            {"\n"}
            <Typography component="li">
              Generating new ideas to improve the system.
            </Typography>
            {"\n"}
            <Typography component="li">
              Active participation in the product team.
            </Typography>
            {"\n"}
            <Typography component="li">
              Demonstrations of the work done (new features, improvements).
            </Typography>
            {"\n"}
          </Typography>
        </Typography>
      </Typography>
      {"\n"}
      {"\n"}
    </>
  );
};

export default Duties;
