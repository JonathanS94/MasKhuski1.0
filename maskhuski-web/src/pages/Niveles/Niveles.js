import React from "react";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";

const Niveles = () => {
  return (
    <div>
      <Typography level={"h1"} children={"Más Khuski"} />
      <Button variant={"outlined"} value={"Principiante"}></Button>
      <Button variant={"outlined"} value={"Intermedio"}></Button>
    </div>
  );
};
export default Niveles;
