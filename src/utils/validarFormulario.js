export const validarFormulario = ({ valorComentario }) => {
  let errores = {};
  if (!valorComentario || !valorComentario.trim())
    errores.valorComentario = "El comentario es obligatorio";

  return errores;
};
