import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  table: {
    width: "100%",
  },
  tableCell: {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "center",
  },
  img: {
    width: "50px",
    height: "50px",
  },
  monedaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});