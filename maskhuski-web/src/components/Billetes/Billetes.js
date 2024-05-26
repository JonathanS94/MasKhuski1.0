import React from "react";
import Image from "../../common/Image/Image.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useStyles } from "./Billetes.style.js";

const Billetes = () => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete2.png"
                alt="Billete 2"
              />
              <Image
                className={classes.img}
                src="/images/billete2.png"
                alt="Billete 2"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete5.png"
                alt="Billete 5"
              />
              <Image
                className={classes.img}
                src="/images/billete2.png"
                alt="Billete 2"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete10.png"
                alt="Billete 10"
              />
              <Image
                className={classes.img}
                src="/images/billete5.png"
                alt="Billete 5"
              />
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete10.png"
                alt="Billete 10"
              />
              <Image
                className={classes.img}
                src="/images/billete50.png"
                alt="Billete 50"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete20.png"
                alt="Billete 20"
              />
              <Image
                className={classes.img}
                src="/images/billete10.png"
                alt="Billete 10"
              />
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <div className={classes.billeteContainer}>
              <Image
                className={classes.img}
                src="/images/billete50.png"
                alt="Billete 50"
              />
              <Image
                className={classes.img}
                src="/images/billete20.png"
                alt="Billete 20"
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Billetes;
