import React from "react";
import Container from "../../common/Container/Container";
import Button from "../../common/Button/Button";
import Typography from "../../common/Typography/Typography";
import Image from "../../common/Image/Image";
import { useStyles } from "./TopFlowers.style.js";

const TopFlowers = () => {
  const classes = useStyles();
  return (
    <Container>
      <imagelist cols={3} rowHeight={164}>
        <Typography level="h2">Top Flowers</Typography>

        <Image src={"/images/Spray-Rose-Snowflake.jpg"}></Image>

        <Image src={"/images/Spray-Rose-Lovely-Lydia.jpg"}></Image>
        <Image src={"/images/Spray-Rose-Snowflake.jpg"}></Image>
        <Image
          className={classes.image}
          src={"/images/Spray-Rose-Viviane.jpg"}
        ></Image>

        <Button variant={"outlined"} value={"More Flowers"}></Button>
      </imagelist>
    </Container>
  );
};

export default TopFlowers;
