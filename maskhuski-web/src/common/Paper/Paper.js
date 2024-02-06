import React from "react";
import { Paper as CustomPaper } from "@mui/material";

const Paper = ({ variant, children, className }) => {
  return (
    <CustomPaper className={className} variant={variant}>
      {children}
    </CustomPaper>
  );
};

export default Paper;
