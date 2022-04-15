import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import estilos from "../styles/Comentarios.module.css";

export const Comentarios = ({ comentaries, guardarInformacion }) => {
  const { id } = useParams();

  const comentariosFiltradosPorReceta = comentaries.filter((comentario) => {
    return comentario.receta_id === id;
  });

  const handleClick = (idComentario) => {
    const nuenvosComentarios = comentaries.map((comentario) => {
      if (comentario.receta_id === id && comentario.id === idComentario) {
        comentario.puntuacionComentario++;
      }
      return comentario;
    });
    guardarInformacion(nuenvosComentarios);
  };
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "5px",
        position: "relative",
        overflow: "auto",
        maxHeight: 600,
        minHeight: 200,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {comentariosFiltradosPorReceta.map((comentario) => {
        return (
          <ListItem key={comentario.id}>
            <ListItemText
              primary={comentario.comentario}
              secondary={`${comentario.usuarioComentario} - ${comentario.fechaComentario}`}
            />
            <button
              className={estilos.incrementarPunto}
              onClick={() => handleClick(comentario.id)}
            >
              <Typography>{comentario.puntuacionComentario} puntos</Typography>
            </button>
          </ListItem>
        );
      })}
      {comentariosFiltradosPorReceta.length === 0 && (
        <Typography variant="h6" align="center" mt={6}>
          No hay comentarios para esta receta
        </Typography>
      )}
    </List>
  );
};
