import React, { useState } from "react";

export default function Form({handleAddItems, handleDeleteAll, handleMarkAllPacked}) {


    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const newItem = {id: Date.now(), description: description, quantity: quantity, packed: false}
      if (description != "") {
        handleAddItems(newItem)
      } 
    
      setDescription("");
      setQuantity(1);
    }
  
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>ADD</button>
        <button onClick={()=> handleDeleteAll()} >Delete All</button>
        <button onClick={()=> handleMarkAllPacked()} >Check All</button>
      </form>
    );
  }