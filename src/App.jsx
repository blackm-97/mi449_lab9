import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

const shop = [
  {title: "Another Rat", cost: 10, addition: 1}
];


function App() {

  const [points, setPoints] = useState(0);
  const [incrementer, setIncrement] = useState(1);

  function ShopHandler(price, additive){
    if(price <= additive){
      setIncrement((incrementer) => incrementer + additive);
      setPoints((points) => points - price);
    }
  }
  
  function ClickerButton({increment}){
    return(
      <>
        <button onClick={() => setPoints((points) => points + increment)}><img src="GiantRAt.png"></img></button>
  
      </>
    )
  }

  function ShopButtons(){
    const listItems = shop.map(shopItem =>
      <>
        <p>{shopItem.cost} Points</p>
        <button onClick={() => ShopHandler(shopItem.cost,shopItem.addition)}>{shopItem.title}</button>
      </>
    );
    return (
      <section>{listItems}</section>
    )
  }


  return (
    <>
      <h1>RAT CLICKER</h1>
      <h2>Welcome! You win if you can get to 10,000 clicks! Good luck</h2>
      <h1>{points}</h1>
      <ClickerButton increment={incrementer}/>
      <h2>Points Per Click: {incrementer}</h2>
      <ShopButtons/>
    </>
  )
}

export default App
