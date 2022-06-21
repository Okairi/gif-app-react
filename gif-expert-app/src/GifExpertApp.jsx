import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["High School dxd"]);

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
