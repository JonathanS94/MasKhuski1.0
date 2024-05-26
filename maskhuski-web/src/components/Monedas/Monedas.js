import React from "react";
import Image from "../../common/Image/Image.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useStyles } from "./Monedas.style.js";

const Monedas = () => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/moneda25.png"
                alt="Moneda 1"
              />
              <Image
                className={classes.img}
                src="/images/moneda1.png"
                alt="Moneda 1"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/Moneda5.png"
                alt="Moneda 5"
              />
              <Image
                className={classes.img}
                src="/images/moneda1.png"
                alt="Moneda 1"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/moneda10.png"
                alt="Moneda 10"
              />
              <Image
                className={classes.img}
                src="/images/moneda5.png"
                alt="Moneda 5"
              />
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/moneda10.png"
                alt="Moneda 10"
              />
              <Image
                className={classes.img}
                src="/images/moneda50.png"
                alt="Moneda 50"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/moneda5.png"
                alt="Moneda 5"
              />
              <Image
                className={classes.img}
                src="/images/moneda10.png"
                alt="Moneda 10"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.monedaContainer}>
              <Image
                className={classes.img}
                src="/images/moneda50.png"
                alt="Moneda 50"
              />
              <Image
                className={classes.img}
                src="/images/moneda5.png"
                alt="Moneda 5"
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default Monedas;
