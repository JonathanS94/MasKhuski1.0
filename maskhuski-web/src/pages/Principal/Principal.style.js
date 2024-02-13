import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    textAlign: "center",
  },
  img: {
    width: "400px",
    height: "400px",
  },
  button: {
    width: "300px",
    height: "150px",
    fontSize: "20px",
    border: "1px solid black",
  },
});
