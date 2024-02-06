import React from "react";
import Image from "../../common/Image/Image";
import Typography from "../../common/Typography/Typography";
import Box from "../../common/Box/Box";
import { useStyles } from "./Description.style";

const Description = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Image
        className={classes.image}
        src="/images/Spray-Rose-Snowflake.jpg"
      ></Image>
      <Typography level={"p"}>
        National Grassroot Flower Movement Spreads To Miami By Surprising
        Teachers At Doral Academy Elementary With Appreciative Flower Bouquets
        Before The Start Of The School Year
      </Typography>
    </Box>
  );
};
export default Description;
