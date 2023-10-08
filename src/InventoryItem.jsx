const InventoryItem = ({
  id,
  title,
  itemCount,
  index,
  deleteItem,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{itemCount}</td>
      <td>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default InventoryItem;
