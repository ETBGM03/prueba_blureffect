//creo un uuid custom
export const uuid = () => {
  const random = Math.random();
  const caracteres = random.toString(36);
  const uid = caracteres.slice(2);
  return uid;
};
