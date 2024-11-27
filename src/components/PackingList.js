function Item(props) {
  
    if (props.packed === false) {
      return ( 
        <div onClick={props.handleUpdateItem}>
          {props.description} ({props.quantity})
        </div>
      );
    } else {
      return ( 
        <div style={{textDecoration: "line-through"}} onClick={props.handleUpdateItem}>
          {props.description} ({props.quantity})
        </div>
      );
    }
  }

export default function PackingList({item, handleDeleteItem, handleUpdateItem}) {

    return (
      <div className="list">
        <ul>
          {item.map((items, index) => (
            <li key={items.id}>
              <input type="checkbox" onChange={() => handleUpdateItem(items.id)} checked={items.packed}/>
              <Item
              description={items.description}
              quantity={items.quantity}
              packed={items.packed}
              handleUpdateItem={() => handleUpdateItem(items.id)}
            />
            <button onClick={() => handleDeleteItem(index)}>❌</button>
            </li>
            
          ))}
        </ul>
        
      </div>
    );
  }
