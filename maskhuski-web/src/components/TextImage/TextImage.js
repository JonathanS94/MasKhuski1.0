import React from "react";
import Container from "../../common/Container/Container";
import Typography from "../../common/Typography/Typography";
import Image from "../../common/Image/Image";

const TextImage = ({cols, rowHeight}) => {
  return (
    <Container>
      <imagelist cols={cols} rowHeight={rowHeight}>
        <Image></Image>
        <Typography></Typography>
      </imagelist>
    </Container>
  );
};

export default TextImage;
