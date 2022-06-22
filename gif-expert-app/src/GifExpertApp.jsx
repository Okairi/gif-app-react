import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Rayo"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setcategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif expert app</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
