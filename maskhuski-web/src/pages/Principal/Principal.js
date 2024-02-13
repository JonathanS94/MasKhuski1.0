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
        <div>
          <div style={{ fontSize: "36px" }}>
            <Typography level={"h1"} children={"Más Khuski"} />
          </div>
          <Image
            className={classes.img}
            src="/images/Logo_principal.jpeg"
            alt="Logo_principal"
          />
          <div style={{ fontSize: "20px" }}>
            <Typography level={"h2"} children={"Cuenta Conmigo"} />
          </div>
        </div>
        <div>
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
