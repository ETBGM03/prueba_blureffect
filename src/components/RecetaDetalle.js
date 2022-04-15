import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Card, CardContent, List, ListItem } from "@mui/material";
import { ContextCrearRecetas } from "../context/ContextCrearReceta";
import { CrearComentario } from "./CrearComentario";
import { ContextComentarios } from "../context/ContextComentarios";

const RecetaDetalle = () => {
  const { id } = useParams();
  const { todasLasRecetas } = useContext(ContextCrearRecetas);
  const { todosLosComentarios, guardarInformacion } = useContext(ContextComentarios);
  /**Hacemos un filtrado de todas las recetas, basándonos en el id del params 
    que viene de la url, con lo cual obtenemos la receta que corresponde al id */
  const filtrarReceta = (id, todasLasRecetas) =>
    todasLasRecetas.filter((receta) => receta.id === id);
  const recetaFiltrada = useMemo(
    () => filtrarReceta(id, todasLasRecetas),
    [id, todasLasRecetas]
  );
  return (
    <Container sx={{ my: 4 }}>
      {recetaFiltrada?.map((receta) => (
        <Card variant="outlined" key={receta.id}>
          <CardContent>
            <Typography variant="h2" component="h3" textAlign="center">
              {receta.nombre}
            </Typography>
            <CardMedia
              component="img"
              height="220"
              image={receta.urlImg}
              alt={`url de la imagen de la receta ${receta.shortName}`}
            />
          </CardContent>
          <CardContent>
            <Typography variant="h4" component="h1">
              Ingredientes
            </Typography>
            <List>
              {receta.ingredientes.map((ingrediente) => (
                <ListItem disableGutters>
                  {ingrediente.nombre} {ingrediente.cantidad}
                </ListItem>
              ))}
            </List>
          </CardContent>
          <CardContent>
            <Typography variant="h4" component="h1">
              Pasos
            </Typography>
            {receta.pasos.map((paso) => (
              <Typography variant="body1">{paso.pasos}</Typography>
            ))}
          </CardContent>
        </Card>
      ))}
      <Box sx={{ my: 4 }}>
        <Container>
          <CrearComentario
            todosLosComentarios={todosLosComentarios}
            guardarInformacion={guardarInformacion}
          />
        </Container>
      </Box>
    </Container>
  );
};

export { RecetaDetalle };
