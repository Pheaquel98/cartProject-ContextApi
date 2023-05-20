import { useState } from "react"
import "./App.css"
import Header from "./components/Layout/Header"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartProvider"

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onCloseCart={setCartIsShow} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </CartProvider>
  )
}

export default App
