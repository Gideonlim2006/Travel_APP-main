export default function Stats({ item }) {
  const totalItems = item.length;
  const packedItems = item.filter((item) => item.packed).length;
  const packedPercentage = totalItems > 0 ? (packedItems / totalItems) * 100 : 0;

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>You got everything!</em>
      ) : (
        <em>
          You have {totalItems} items in the list. You already packed {packedItems} (
          {packedPercentage.toFixed(0)}%).
        </em>
      )}
    </footer>
  );
}