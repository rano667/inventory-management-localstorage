import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const [itemCount, setItemCount] = useState(0); // Add item count state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    addItem(newItem, itemCount); // Pass item name and item count

    setNewItem("");
    setItemCount(0); // Reset item count after submission
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <h1>Inventory Management</h1>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <div className="form-row">
        <label htmlFor="itemCount">Item Count</label>
        <input
          value={itemCount}
          onChange={(e) => setItemCount(e.target.value)}
          type="number"
          id="itemCount"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewItemForm;
