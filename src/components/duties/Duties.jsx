import React from "react";
import { Typography } from "@mui/material";

const Duties = () => {
  const duties = [
    "Providing adaptive and cross-browser layout.",
    "Development and improving of autotests.",
    "Creation and completion of new program modules.",
    "Support and development of the current architecture.",
    "Refactoring (improving and optimizing the code) of existing modules.",
    "Generating new ideas to improve the system.",
    "Active participation in the product team.",
    "Demonstrations of the work done (new features, improvements).",
  ];

  return (
    <>
      <Typography component="div" sx={{ marginTop: "20px" }}>
        <Typography
          component="div"
          sx={{ marginBottom: "8px", fontSize: "20px", color: "grey" }}
        >
          PROFESSIONAL DUTIES
        </Typography>
        <Typography component="div" sx={{ borderLeft: "2px solid grey" }}>
          <Typography component="ul">
            {duties.map((duty) => (
              <Typography component="li" key={duty}>
                {duty}
              </Typography>
            ))}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Duties;
