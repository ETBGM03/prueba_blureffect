import { useState, useEffect, useContext } from "react";
import { uuid } from "../utils/uuid";
import { validarFormCrearReceta } from "../utils/validarFormCrearReceta";
import {
  Typography,
  TextField,
  Button,
  Container,
  FormHelperText,
} from "@mui/material";
import { ContextCrearRecetas } from "../context/ContextCrearReceta";
import { useNavigate } from "react-router-dom";

export const CrearReceta = () => {
  const { todasLasRecetas, guardarInformacion } = useContext(ContextCrearRecetas);

  //hacemos un form controlador para el estado de los campos
  const [crearReceta, setCrearReceta] = useState({
    nombreReceta: "",
    nombreCorto: "",
    ingredientes: "",
    pasos: "",
  });

  //redireccionamos al home cuando se cree una receta
  let navegar = useNavigate();

  const [error, setError] = useState({});
  const [urlImg, setUrlImg] = useState("");

  //hacemos el fetch para obtener la imagen relacionada con el nombre corto que el usuario escriba
  useEffect(() => {
    //la API_KEY debe estar en un archivo .env y no en el codigo. Por temas practicos lo dejo aquí
    const API_KEY = "26764508-8b09ea0b69bc91d3c296f0096";
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${crearReceta.nombreCorto}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUrlImg(data.hits[0].webformatURL);
      });
  }, [crearReceta.nombreCorto]);

  const handleChange = (e) => {
    setCrearReceta({
      ...crearReceta,
      [e.target.name]: e.target.value,
    });
    setError(
      validarFormCrearReceta({
        ...crearReceta,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ingredienteSeparados = crearReceta.ingredientes.split(", ");
    let nuevosIngredientes = ingredienteSeparados.reduce(
      (acumulador, ingrediente) => {
        acumulador.push({
          id: uuid(),
          nombre: ingrediente,
        });
        return acumulador;
      }, []);

    const nuevaReceta = {
      id: uuid(),
      nombre: crearReceta.nombreReceta,
      shortName: crearReceta.nombreCorto,
      urlImg,
      ingredientes: nuevosIngredientes,
      pasos: [
        {
          id: uuid(),
          contenido: crearReceta.pasos,
        },
      ],
    };

    guardarInformacion([...todasLasRecetas, nuevaReceta]);

    setCrearReceta({
      nombreReceta: "",
      nombreCorto: "",
      ingredientes: "",
      pasos: "",
    });
    
    navegar("/");
  };

  return (
    <Container
      width="100%"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "25px",
      }}
    >
      <Typography variant="h5">Formulario Crear Receta</Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        {error.nombreReceta ? (
          <FormHelperText error>{error.nombreReceta}</FormHelperText>
        ) : null}
        <TextField
          label="Nombre de la receta"
          name="nombreReceta"
          onInput={(e) => handleChange(e)}
          style={{ width: "400px", margin: "5px" }}
          type="text"
          value={crearReceta.nombreReceta}
          variant="outlined"
        />
        <br />
        {error.nombreCorto ? (
          <FormHelperText error>{error.nombreCorto}</FormHelperText>
        ) : null}
        <TextField
          label="Nombre Corto de la receta"
          name="nombreCorto"
          onInput={(e) => handleChange(e)}
          style={{ width: "400px", margin: "5px" }}
          type="text"
          value={crearReceta.nombreCorto}
          variant="outlined"
        />
        <br />
        {error.ingredientes ? (
          <FormHelperText error>{error.ingredientes}</FormHelperText>
        ) : null}
        <TextField
          label="Ingredientes"
          name="ingredientes"
          onInput={(e) => handleChange(e)}
          placeholder="Ingrediente 1, Ingrediente 2, Ingrediente 3"
          style={{ width: "400px", margin: "5px" }}
          type="text"
          value={crearReceta.ingredientes}
          variant="outlined"
        />
        <br />
        {error.pasos ? (
          <FormHelperText error>{error.pasos}</FormHelperText>
        ) : null}
        <TextField
          label="Pasos"
          name="pasos"
          onInput={(e) => handleChange(e)}
          placeholder="Describa los pasos para realizar la receta"
          style={{ width: "400px", margin: "5px" }}
          type="text"
          value={crearReceta.pasos}
          variant="outlined"
        />
        <br />
        <br />
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={
            error.nombreReceta ||
            error.nombreCorto ||
            error.ingredientes ||
            error.pasos
              ? true
              : false
          }
        >
          Crear Receta
        </Button>
      </form>
    </Container>
  );
};
