import React, { useContext } from "react"
import "./CartItem.css"
import { CartContext } from "../../context/CartProvider"

const CartItem = ({ product }) => {
  const { items, removeItem } = useContext(CartContext)
  const { name, img, price, amount } = product
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-text">
          <b>{name}</b>
          <div>
            <span>₺{price} x</span>
            <span className="cart-item-amount">{amount}</span>
          </div>
        </div>
        <a
          href="#"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault
            removeItem(product.id)
          }}
        >
          x
        </a>
      </div>
    </li>
  )
}

export default CartItem
