import React from "react";
import { IconButton as CustomIconButton } from "@mui/material/";

const IconButton = ({ children, disabled, size, Onclick, color }) => {
  return (
    <CustomIconButton
      disabled={disabled}
      size={size}
      Onclick={Onclick}
      color={color}
    >
      {children}
    </CustomIconButton>
  );
};

export default IconButton;
