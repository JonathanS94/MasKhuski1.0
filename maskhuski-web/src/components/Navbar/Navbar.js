import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Containner from "../../common/Container/Container";
import Image from "../../common/Image/Image";
import Box from "../../common/Box/Box";
import SearchInput from "../SearchInput/SearchInput";
import { useStyles } from "./Navbar.style";
import Button from "../../common/Button/Button";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.app_bar}>
      <Containner className={classes.container}>
        <Toolbar disableGutters>
          <Image
            className={classes.logo}
            src="/images/logokhuyay.jpg"
            alt={"logo"}
          ></Image>
          <Button
            className={classes.button}
            variant={"text"}
            value={"Who we are"}
            href={"/who-we-are"}
          />
          <Button
            className={classes.button}
            variant={"text"}
            value={"References"}
            href={"/references"}
          />
          <Button
            className={classes.button}
            variant={"text"}
            value={"Flowers"}
            href={"/flowers"}
          />
          <Button
            className={classes.button}
            variant={"text"}
            value={"Contact with us"}
            href={"/contact-with-us"}
          />
          <SearchInput className={classes.search} />
        </Toolbar>
      </Containner>
    </AppBar>
  );
};

export default Navbar;
