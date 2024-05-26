import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  table: {
    width: "50%",
    margin: "auto",
  },
  tableCell: {
    border: "1px solid #000",
    padding: "80px",
    textAlign: "center",
  },
  img: {
    width: "300px",
    height: "300px",
  },
  monedaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
