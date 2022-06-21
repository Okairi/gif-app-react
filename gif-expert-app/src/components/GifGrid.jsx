import { getApiGifs } from "../helpers/getGifs";

//
export const GifGrid = ({ category }) => {
  getApiGifs(category);
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
