import React from "react";
import { Container as CustomContainer } from "@mui/material";

const Container = ({ maxWidth, children }) => {
  return (
    <>
      <CustomContainer maxWidth={maxWidth}>{children}</CustomContainer>
    </>
  );
};

export default Container;
