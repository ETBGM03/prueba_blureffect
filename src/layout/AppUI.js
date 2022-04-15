import { Routes, Route } from "react-router-dom";
import { Recetas } from "../components/Recetas";
import { CrearReceta } from "../components/CrearReceta";
import { RecetaDetalle } from "../components/RecetaDetalle";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { ContextCrearRecetasProvider } from "../context/ContextCrearReceta";
import { ContextComentariosProvider } from "../context/ContextComentarios";
const AppUI = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContextCrearRecetasProvider>
                <Recetas />
              </ContextCrearRecetasProvider>
            }
          />
          <Route
            path="/receta/:id"
            element={
              <ContextCrearRecetasProvider>
                <ContextComentariosProvider>
                  <RecetaDetalle />
                </ContextComentariosProvider>
              </ContextCrearRecetasProvider>
            }
          />
          <Route
            path="/crear-receta"
            element={
              <ContextCrearRecetasProvider>
                <CrearReceta />
              </ContextCrearRecetasProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppUI;
