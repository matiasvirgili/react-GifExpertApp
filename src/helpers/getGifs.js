export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=yNL1MR10yuF9RXRewfp9cvfnScr6xs2G`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  // El img de la funcion hace referencia al arreglo que trae la data
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
