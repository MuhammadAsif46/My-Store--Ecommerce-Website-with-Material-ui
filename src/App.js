import "./App.css";
import CartContext from "./context/cart";
import { useState,useEffect } from "react";
import Router from "./routes/Router";

function App() {
  const [cart, setCart] = useState([]); //context state

  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cart)
  },[])

  return (
    <div>
      <CartContext.Provider value={{cart,setCart}}>
        <Router />
      </CartContext.Provider>
    </div>
  );
}

export default App;
