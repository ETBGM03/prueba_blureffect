import { uuid } from "../utils/uuid";

export const todasRecetas = [
  {
    id: uuid(),
    nombre: "Crear Pizza",
    shortName: "Pizza",
    urlImg:
      "https://t1.rg.ltmcdn.com/es/posts/1/9/3/pizza_casera_31391_paso_8_600.webp",
    ingredientes: [
      {
        id: uuid(),
        nombre: "Harina",
      },
      {
        id: uuid(),
        nombre: "Levadura",
      },
      {
        id: uuid(),
        nombre: "Sal",
      },
      {
        id: uuid(),
        nombre: "Aceite",
      },
      {
        id: uuid(),
        nombre: "Huevo",
      },
      {
        id: uuid(),
        nombre: "Queso",
      },
      {
        id: uuid(),
        nombre: "Mantequilla",
      },
      {
        id: uuid(),
        nombre: "Jamon",
      },
      {
        id: uuid(),
        nombre: "Pimienta",
      },
      {
        id: uuid(),
        nombre: "Pollo",
      },
      {
        id: uuid(),
        nombre: "Tomate",
      },
      {
        id: uuid(),
        nombre: "Papas",
      },
      {
        id: uuid(),
        nombre: "Cebolla",
      },
    ],
    pasos: [
      {
        id: 1,
        contenido:
          "En un vaso, vierte el agua templada. Disuelve la levadura en el agua. En un bol ponemos la harina, la sal y, poco a poco, vertemos el agua con la levadura. Es más fácil si vamos amasando poco a poco a medida que echamos el agua, hasta verter toda y lograr una masa homogénea. Tras esto, coloca la masa en la encimera, cúbrete las manos de harina para que no se pegue y ponte a amasar. Si la masa se queda pegajosa ve añadiendo más harina. Ésta tiene que quedar lo suficientemente seca para que no se pegue en la mesa o las manos, pero no demasiado, porque si no puede romperse en el horno. Una vez que la masa esté homogénea, elástica, pero no pegajosa, incorpora el aceite, y vuelve a amasar hasta que se integre por completo. Haz una bola y realiza dos incisiones para que pueda crecer bien. Devúelvela al bol, tápalo con un paño humedo y dejalo que repose a temperatura ambiente",
      },
    ],
  },
  {
    id: uuid(),
    nombre: "Ensalada de patata, mayonesa de limón y mostaza",
    shortName: "Ensalada",
    urlImg: "https://i.blogs.es/21dccb/ensaladilla/1366_2000.jpg",
    ingredientes: [
      {
        id: uuid(),
        nombre: "Patata Nueva",
      },
      {
        id: uuid(),
        nombre: "Mayonesan",
      },
      {
        id: uuid(),
        nombre: "Ralladura de limón",
      },
      {
        id: uuid(),
        nombre: "Mostaza de Dijon",
      },
      {
        id: uuid(),
        nombre: "Leche",
      },
      {
        id: uuid(),
        nombre: "Yema Huevo",
      },
      {
        id: uuid(),
        nombre: "Huevos",
      },
      {
        id: uuid(),
        nombre: "Sal",
      },
      {
        id: uuid(),
        nombre: "Pimienta negra molida",
      },
      {
        id: uuid(),
        nombre: "Cebollino para decorar",
      },
    ],
    pasos: [
      {
        id: uuid(),
        contenido:
          "Cocemos las patatas enteras y con piel en una cacerola con abundante agua. El tiempo dependerá del tipo de patata. Las nuestras tardaron 30 minutos, pero lo mejor es comprobar el punto pinchando con una brocheta en la parte más gruesa. Si entra con facilidad, están listas y las podemos retirar del agua. Si no es el caso las dejamos cocer unos minutos más, al tiempo que se hacen las patatas ponemos a hervir agua con un puñado de sal en un cacito. Introducimos cuatro huevos y contamos 11 minutos justos. Retiramos los huevos y los refrescamos en un recipiente con agua helada para cortar la cocción. Pelamos y reservamos. También preparamos la salsa mezclando la mayonesa con la yema de huevo, la ralladura de un limón, la mostaza de Dijon y la leche. Salpimentamos al gusto y removemos bien hasta homogeneizar. Reservamos en la nevera hasta el momento de usar. Pelamos las patatas (en frío) y semi machacamos con un tenedor, dejando trozos irregulares para dar textura. Salpimentamos ligeramente, añadimos los huevos duros troceados (nos reservamos una yema para decorar) junto con la salsa. En el momento de servir la ensalada rallamos la yema de huevo duro que tenemos reservada y decoramos con cebollino fresco picado.",
      },
    ],
  },
  {
    id: uuid(),
    nombre: "Patatas asadas que se derriten en la boca",
    shortName: "Patatas asadas",
    urlImg: "https://i.blogs.es/206d25/patatas/1366_2000.jpg",
    ingredientes: [
      {
        id: uuid(),
        nombre: "Patatas",
      },
      {
        id: uuid(),
        nombre: "Mantequilla",
      },
      {
        id: uuid(),
        nombre: "hierbas provenzales",
      },
      {
        id: uuid(),
        nombre: "Aceite oliva virgen extra",
      },
      {
        id: uuid(),
        nombre: "Sal",
      },
      {
        id: uuid(),
        nombre: "Ajo",
      },
      {
        id: uuid(),
        nombre: "Caldo de pollo",
      },
      {
        id: uuid(),
        nombre: "Vino blanco",
      },
      {
        id: uuid(),
        nombre: "Pimienta negra molida",
      },
    ],
    pasos: [
      {
        id: uuid(),
        contenido:
          "Precalentar el horno a 250ºC y preparar una fuente o bandeja lo suficientemente grande como para acoger todas las patatas en una sola capa. Derretir la mantequilla. Cortar las patatas en rodajas de unos 2 cm de grosor y colocar en la fuente. Salpimentar y añadir hierbas provenzales. Echar por encima la mantequilla y el aceite, y remover. Hornear 15 minutos, sacar y dar la vuelta a cada patata. Volver a hornear unos 10-15 minutos más. Machacar o rallar los dientes de ajo y mezclar con las patatas. Añadir el vino y el caldo y bajar la temperatura a 220ºC. Continuar el horneado hasta que el líquido se haya evaporado casi por completo. Servir inmediatamente con los jugos.",
      },
    ],
  },
];
