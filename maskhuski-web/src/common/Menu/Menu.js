import React from "react";
import { Menu as CustomMenu } from "@mui/base/";
import { MenuItem as CustomMenuItem } from "@mui/base/";

const Menu = ({ onClick, slots, value }) => {
  return (
    <>
      <CustomMenu slots={slots}>
        <CustomMenuItem onClick={onClick}>{value}</CustomMenuItem>
      </CustomMenu>
    </>
  );
};

export default Menu;
