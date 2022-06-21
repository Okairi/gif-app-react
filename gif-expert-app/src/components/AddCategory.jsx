import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Rias gremory");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return;

    /*  setCategories((categories) => [...categories, inputValue]); */
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifg"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};