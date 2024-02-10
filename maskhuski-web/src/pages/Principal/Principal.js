import React from "react";
import Typography from "../../common/Typography/Typography";
import Image from "../../common/Image/Image";
import Button from "../../common/Button/Button";
import { useStyles } from "./Principal.style.js";

const Principal = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.contentLeft}>
          <Typography level={"h1"} children={"Más Khuski"} />
          <Image
            className={classes.img}
            src="/Logo_principal.jpeg"
            alt="Billete 2"
          />
          <Typography level={"h3"} children={"Cuenta Conmigo"} />
        </div>
        <div className={classes.contentRight}>
          <Button
            className={classes.button}
            variant={"contained"}
            value={"Jugar"}
            href={"/niveles"}
          />
        </div>
      </div>
    </div>
  );
};
export default Principal;
