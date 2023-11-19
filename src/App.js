import Home from "./containers/Home";
import "./App.css";
import CartContext from "./context/cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div>
      <CartContext.Provider value={{cart,setCart}}>
        <Home />
      </CartContext.Provider>
    </div>
  );
}

export default App;
