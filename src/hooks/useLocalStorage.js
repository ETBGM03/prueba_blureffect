import { useEffect, useState } from "react";

//creacion de un custom hook que nos permite guardar y mantener información en el localStorage
export const useLocalStorage = (key, initialValue) => {
  const [infoLocalStorage, setInfoLocalStorage] = useState(initialValue);
  //creamos una funcion que nos permita guardar la información en el localStorage 1 sola vez
  useEffect(() => {
    setTimeout(() => {
      try {
        let comentarios = localStorage.getItem(key);
        let comentariosDefault;
        if (!comentarios) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          comentariosDefault = initialValue;
        } else {
          comentariosDefault = JSON.parse(comentarios);
        }
        setInfoLocalStorage(comentariosDefault);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, [key, initialValue]);

  let guardarInformacion = (nuevosComentarios) => {
    try {
      let str = JSON.stringify(nuevosComentarios);
      localStorage.setItem(key, str);
      setInfoLocalStorage(nuevosComentarios);
    } catch (error) {
      console.log(error);
    }
  };

  return { infoLocalStorage, guardarInformacion };
};
