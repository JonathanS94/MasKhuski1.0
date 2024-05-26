import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  table: {
    width: "50%",
    margin: "auto",
  },
  tableCell: {
    border: "1px solid #000",
    padding: "40px",
    textAlign: "center",
  },
  img: {
    width: "480px",
    height: "240px",
  },
  billeteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
