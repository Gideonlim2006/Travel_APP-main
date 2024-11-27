import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


function App() {
  const [item, setItem] = useState([]); 

  
  const handleAddItems = (item) => {
    setItem((prevItem) => [...prevItem, item]);
  }

  const handleDeleteItem = (targetIndex) => {
    setItem((prevItem) => prevItem.filter((item, i) => i !== targetIndex));
  }

  const handleUpdateItem = (id) => {
    setItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete all items?');
    if (confirmDelete) {
      setItem([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} handleDeleteAll={handleDeleteAll}/>
      <PackingList item={item} handleDeleteItem={handleDeleteItem} handleUpdateItem = {handleUpdateItem}/>
      <Stats item={item}/>
    </div>
  );
}

export default App;
