import { useState } from "react";
import { Button, Card, FormHelperText } from "@mui/material";
import { validarFormulario } from "../utils/validarFormulario";
import { TextField, Typography } from "@mui/material";
import { uuid } from "../utils/uuid";
import { useParams } from "react-router-dom";
import { Comentarios } from "./Comentarios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CrearComentario = ({ todosLosComentarios, guardarInformacion }) => {
  const { id } = useParams();

  //validamos los campos por medio de un form controlado
  const [comentario, setComentario] = useState({
    valorComentario: "",
    usuarioComentario: "Anónimo",
  });
  
  const [errores, setErrores] = useState({
    valorComentario: "Escribe un comentario",
  });

  const handleChange = (e) => {
    setComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
    setErrores(
      validarFormulario({
        ...comentario,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoComentario = {
      id: uuid(),
      receta_id: id,
      comentario: comentario.valorComentario,
      usuarioComentario: !comentario.usuarioComentario
        ? "Anónimo"
        : comentario.usuarioComentario,
      fechaComentario: new Date().toLocaleDateString(),
      puntuacionComentario: 0,
    };
    guardarInformacion([...todosLosComentarios, nuevoComentario]);
    setComentario({
      valorComentario: "",
      usuarioComentario: "Anónimo",
    });
    setErrores({
      valorComentario: "Escribe un comentario",
    });
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: 260,
          borderRadius: "5px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="usuarioComentario"
            value={comentario.usuarioComentario}
            onInput={(e) => handleChange(e)}
          />
          <Typography />
          {errores.valorComentario ? (
            <FormHelperText error>{errores.valorComentario}</FormHelperText>
          ) : null}
          <TextField
            type="text"
            name="valorComentario"
            value={comentario.valorComentario}
            onInput={(e) => handleChange(e)}
          />
          <Typography />

          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={errores.valorComentario ? true : false}
          >
            Crea Comentario
          </Button>
        </form>
      </Card>
      <Box sx={{ my: 3, maxWidth: "100%" }}>
        <Container>
          <Comentarios comentaries={todosLosComentarios} 
            guardarInformacion={guardarInformacion}
          />
        </Container>
      </Box>
    </>
  );
};

export { CrearComentario };
