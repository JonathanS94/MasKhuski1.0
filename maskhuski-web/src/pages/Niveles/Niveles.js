import React from "react";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import { useStyles } from "./Niveles.styles";

const Niveles = () => {
  const classes = useStyles();

  return (
    <div className={classes.interfazNivelesContainer}>
      <Typography className={classes.tipographyNiveles} level={"h1"} children={"Más Khuski"} />
      <Button className={classes.buttonPrincipiante} variant={"outlined"} value={"Principiante"}></Button>
      <Button className={classes.buttonIntermedio} variant={"outlined"} value={"Intermedio"}></Button>
    </div>
  );
};
export default Niveles;
