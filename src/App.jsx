import { useEffect, useState } from "react";

import NewItemForm from "./NewItemForm";
import "./style.css";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  const addItem = (title, itemCount) => {
    setItems((currentItems) => [
      ...currentItems,
      { id: crypto.randomUUID(), title, itemCount, completed: false }, // Include the item count
    ]);
  };

  const deleteItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <NewItemForm addItem={addItem} />
      {items.length === 0 && "[No items]  "}
      <ItemList items={items} deleteItem={deleteItem} />
    </>
  );
};

export default App;
