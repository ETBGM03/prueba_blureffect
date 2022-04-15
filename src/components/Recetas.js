import { useContext } from "react";
import { Receta } from "../components/Receta";
import { Grid } from "@mui/material";
import { ContextCrearRecetas } from "../context/ContextCrearReceta";

const Recetas = () => {
  const { todasLasRecetas } = useContext(ContextCrearRecetas);
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      {todasLasRecetas?.map((receta) => (
        <Grid item key={receta.id}>
          <Receta
            id={receta.id}
            shorName={receta.shortName}
            urlImg={receta.urlImg}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { Recetas };
