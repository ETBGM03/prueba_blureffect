import { createContext } from "react";
import { puntosComentarios } from "../helpers/puntosComentarios";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ContextComentarios = createContext();

export const ContextComentariosProvider = ({ children }) => {
  //guardar en el local storage los comentarios, para que no se pierdan al recargar la pagina
  const { infoLocalStorage, guardarInformacion } = useLocalStorage("comentarios", puntosComentarios);
  //obetnemos los comentarios del local storage y los pasamos al value del context
  const todosLosComentarios = infoLocalStorage;

  return (
    <ContextComentarios.Provider
      value={{ todosLosComentarios, guardarInformacion }}
    >
      {children}
    </ContextComentarios.Provider>
  );
};
