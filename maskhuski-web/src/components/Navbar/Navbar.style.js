import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  app_bar: {
    position: "static",
    display: "flex",
    height: "160px",
    backgroundColor: "#B22222",
    maxWidth: "xl",
  },
  container: {
    display: "flex",
    maxWidth: "xl",
  },
  logo: {
    width: "200px",
    height: "140px",
  },
  button: {
    color: "#FFF8E1",
    fontWeight: "800",
    fontSize: "20px",
    marginLeft: "10px",
    marginRight: "1px",
  },
});
