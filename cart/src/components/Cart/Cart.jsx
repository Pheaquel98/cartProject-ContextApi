import React, { useContext } from "react"
import "./Cart.css"
import CartItem from "./CartItem"
import products from "../../productData"
import Offcanvas from "../UI/Offcanvas"
import { CartContext } from "../../context/CartProvider"

const Cart = ({ onCloseCart }) => {
  const { items, totalAmount, clearItem } = useContext(CartContext)
  const hasItems = items.length > 0
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  )
  return (
    <Offcanvas onCloseCart={onCloseCart}>
      <div>
        <div className="cart-head">
          <h2>Cart</h2>
          <a href="#" className="cart-close" onClick={() => onCloseCart(false)}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Total Price</span>
          <span>{totalAmount.toFixed(2)}₺</span>
        </div>
        {hasItems && (
          <div className="actions">
            <button className="cart-order">Create Order</button>
            <button className="cart-clear" onClick={() => clearItem()}>
              Delete Order
            </button>
          </div>
        )}
      </div>
    </Offcanvas>
  )
}

export default Cart
