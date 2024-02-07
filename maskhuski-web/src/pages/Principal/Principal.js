import React from "react";
import Typography from "../../common/Typography/Typography";
import Image from "../../common/Image/Image";
import Button from "../../common/Button/Button";

const Principal = () => {
  return (
    <div>
      <Typography level={"h1"} children={"Más Khuski"} />
      <Image></Image>
      <Button variant={"outlined"} value={"Jugar"}></Button>
      <Typography level={"3"} children={"Cuenta Conmigo "} />
    </div>
  );
};
export default Principal;
