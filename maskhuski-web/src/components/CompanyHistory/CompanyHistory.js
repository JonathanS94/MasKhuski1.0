import React from "react";
import Box from "../../common/Box/Box.js";
import Typography from "../../common/Typography/Typography.js";
import Image from "../../common/Image/Image.js";
import { useStyles } from "./CompanyHistory.style.js";

const CompanyHistory = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography level={"h2"} children={"Our History"} />
      <Typography level={"p"}>
        Agricola Khuyay Farman Akhufar CIA LTDA is a company dedicated to the
        cultivation of Roses and Spray roses located in Quinche Vía a la
        Victoria in Quito-Ecuador, we have been in the market for several years
        “Cultivating emotions”, we have a production area of ​​15000m2
      </Typography>
      <Image
        className={classes.image}
        src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
      ></Image>
    </Box>
  );
};
export default CompanyHistory;
