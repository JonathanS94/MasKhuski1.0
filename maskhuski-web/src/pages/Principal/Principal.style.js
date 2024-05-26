import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    textAlign: "center",
  },
  img: {
    width: "500px",
    height: "500px",
  },
  button: {
    width: "600px",
    height: "300px",
    fontSize: "40px",
    border: "1px solid black",
  },
});
