import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCardHandler = () => {
    setIsCartShown(true);
  };
  const hideCardHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCardHandler} />}
      <Header onCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
