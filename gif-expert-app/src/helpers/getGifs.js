export const getApiGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5d5klkjHkqNuQebA2oDM4aJr7Zli0A7k&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
