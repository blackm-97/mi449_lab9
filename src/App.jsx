import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

const shop = [
  {title: "Another Rat", cost: 10, addition: 1},
  {title: "Cage of Rats", cost: 1000, addition: 150},
  {title: "Truckload of Rats", cost: 100000, addition: 25000}

];

let win_threshold = 100000000


function App() {

  const [points, setPoints] = useState(0);
  const [incrementer, setIncrement] = useState(1);

  function ShopHandler(price, additive, wallet){

    if(price <= wallet){
      setIncrement((incrementer) => incrementer + additive);
      setPoints((points) => points - price);
    }
  }
  
  function ClickerButton({increment}){
    if(points >= win_threshold){
      return(
        <>
          <h1 className="winMessage">YOU WIN!!!</h1>
        </>
      )
    }
    else{
      return(
        <>
          <button onClick={() => setPoints((points) => points + increment)}><img src="GiantRAt.png"></img></button>
          
        </>
      )
    }
  }

  function ShopButtons(){
    const listItems = shop.map(shopItem =>
      <div>
        <p className={shopItem.title}>{shopItem.cost} Points</p>
        <button onClick={() => ShopHandler(shopItem.cost,shopItem.addition, points)}>{shopItem.title}</button>
      </div>
    );
    return (
      <section>{listItems}</section>
    )
  }


  return (
    <>
      <h1 className="gameTitle">RAT CLICKER</h1>
      <h2>Welcome! You win if you can get to 100,000,000 clicks! Good luck</h2>
      <h1>{points}</h1>
      <ClickerButton increment={incrementer}/>
      <h2>Points Per Click: {incrementer}</h2>
      <ShopButtons/>
    </>
  )
}

export default App
