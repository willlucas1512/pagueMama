import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Title from "../Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
const GenerateCharge = (props) => {
  const classes = useStyles();

  const generate = () => {
    navigator.clipboard.writeText(`Rosangela boa tarde ♥

      Live 07/03
      12 - Camisa Floral Azul 48	R$ 15,00
      22 - Vestido Rosê GG	R$ 20,00
      26 - Blusa Azul 46 	R$ 16,00
      56 - Regata Estampada 	R$ 14,00
      27 - Peep Toe Arezzo 	R$ 15,00
      
      Pendente:
      6 - Bermuda Rosê 46	R$ 16,00
      17 - Calça Jeans 46	R$ 8,00
      
      Total R$ 104,00
      Crédito R$ 15,00
      
      TOTAL --> R$ 89,00
      
      Feliz dia das mulheres!
      Obrigada por ser essa cliente sensacional!`);
  };
  return (
    <div>
      <Title>Gerar texto de cobrança</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        Rosangela boa tarde ♥
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Live 07/03
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        12 - Camisa Floral Azul 48 R$ 15,00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Total R$ 104,00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Crédito R$ 15,00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        TOTAL -- R$ 89,00
      </Typography>
      <Button color={"primary"} variant="contained" onClick={generate}>
        Copiar texto
      </Button>

      <div>
        {/* <Link color="primary" href="/depositos" onClick={preventDefault}>
        View balance
        </Link> */}
      </div>
    </div>
  );
};

export default GenerateCharge;
