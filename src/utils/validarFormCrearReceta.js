export const validarFormCrearReceta = (inputs) => {
  const errores = {};
  if(!inputs.nombreReceta || !inputs.nombreReceta.trim()) errores.nombreReceta = 'El nombre de la receta es obligatorio';
  if(!inputs.nombreCorto || !inputs.nombreCorto.trim()) errores.nombreCorto = 'El nombre corto de la receta es obligatorio';
  if(!inputs.ingredientes || !inputs.ingredientes.trim()) errores.ingredientes = 'Los ingrendientes de la receta son obligatorios';
  if(!inputs.pasos || !inputs.pasos.trim()) errores.pasos = 'Los pasos de la receta son obligatorios';
  return errores;
};