import React from "react";
import InventoryItem from "./InventoryItem";

const ItemList = ({ items, toggleItem, deleteItem }) => {
  return (
    <div>
      <h2>Inventory Items</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <InventoryItem
                key={item.id}
                {...item}
                index={index}
                toggleItem={toggleItem}
                deleteItem={deleteItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
