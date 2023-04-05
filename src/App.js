import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './Components/Demo/DemoList';
import Button from './Components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [descendingOrder,setDescendingOrder] = useState(false)
  const [title,setTitle]= useState('Change to ascending order')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  
  const changeOrderHandler = () =>{
    // setDescendingOrder(true)
    if (descendingOrder === false){
       
      setTitle ('Change to descending order')
      setDescendingOrder(true)
    }
    
    if (descendingOrder === true){
      //  orders=true
      setTitle ('Change to ascending order')
      setDescendingOrder(false)
    }
    console.log("order change");
  }

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {descendingOrder && <DemoList title={listTitle} items={listItems} order={descendingOrder} />}
      {!descendingOrder && <DemoList title={listTitle} items={listItems} order={descendingOrder}/>}
      <div>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{title}</Button>
      </div>
    </div>
  );
}

export default App;
