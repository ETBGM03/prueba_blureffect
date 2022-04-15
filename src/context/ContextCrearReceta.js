import { createContext } from "react";
// import { recetasCreadas } from "../helpers/recetasCreadas";
import { todasRecetas } from "../helpers/recetas";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const ContextCrearRecetas = createContext();

export const ContextCrearRecetasProvider = ({ children }) => {
  //guardar en el local storage las recetas, para que no se pierdan al recargar la pagina
  const { infoLocalStorage, guardarInformacion } = useLocalStorage("todasLasRecetas", todasRecetas);
    
  //obetnemos las recetas del local storage y los pasamos al value del context
  const todasLasRecetas = infoLocalStorage;

  return (
    <ContextCrearRecetas.Provider
      value={{ todasLasRecetas, guardarInformacion }}
    >
      {children}
    </ContextCrearRecetas.Provider>
  );
};
