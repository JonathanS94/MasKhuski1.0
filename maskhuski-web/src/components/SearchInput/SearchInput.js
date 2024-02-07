import React from "react";
import Paper from "../../common/Paper/Paper";
import InputBase from "../../common/InputBase/InputBase";
import { useStyles } from "./SearchInput.style";

const SearchInput = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <InputBase className={classes.input_base} placeholder={"Search"} />
    </Paper>
  );
};

export default SearchInput;
