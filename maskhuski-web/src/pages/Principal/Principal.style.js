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
    width: "80%",
  },
  contentLeft: {
    flex: 1,
    textAlign: "center",
  },
  contentRight: {
    flex: 1,
    textAlign: "center",
  },
  img: {
    width: "400px",
    height: "400px",
  },
  button: {
    width: "200px",
    height: "100px",
  },
});
