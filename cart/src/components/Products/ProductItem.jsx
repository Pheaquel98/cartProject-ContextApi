import React, { useContext } from "react"
import "./ProductItem.css"
import Rating from "./Rating"
import Card from "../UI/Card"
import { CartContext } from "../../context/CartProvider"

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product
  const { items, addItem, totalAmount } = useContext(CartContext)
  return (
    <Card>
      <img src={img} alt="" />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <span>
          <Rating />
        </span>
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart" onClick={() => addItem(product)}>
        Add To Cart
      </button>
    </Card>
  )
}

export default ProductItem
