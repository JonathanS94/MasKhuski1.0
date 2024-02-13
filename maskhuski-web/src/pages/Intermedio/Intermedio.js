import React, { useState, useEffect } from "react";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import Billetes from "../../components/Billetes/Billetes";
import { useStyles } from "./Intermedio.stlyes";

const Intermedio = () => {
  const classes = useStyles();
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    const initialNumbers = ["$4", "$7", "$15", "$60", "$30", "$70"];
    const shuffledNumbers = shuffleArray(initialNumbers);
    setNumbers(shuffledNumbers);
  }, []);

  // Función para mezclar un array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className={classes.container}>
      <div style={{ fontSize: "36px" }}>
        <Typography level={"h2"} children={"NIVEL INTERMEDIO"} />
      </div>
      <div>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.cell}>{numbers[0]}</td>
              <td className={classes.cell}>{numbers[1]}</td>
              <td className={classes.cell}>{numbers[2]}</td>
            </tr>
            <tr>
              <td className={classes.cell}>{numbers[3]}</td>
              <td className={classes.cell}>{numbers[4]}</td>
              <td className={classes.cell}>{numbers[5]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <div>
        <Billetes />
        <br></br>
      </div>
      <Button
        className={classes.button}
        variant={"contained"}
        value={"Enviar Respuesta"}
      />
    </div>
  );
};
export default Intermedio;
