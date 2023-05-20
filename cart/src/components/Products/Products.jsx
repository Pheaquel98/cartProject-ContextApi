import React from "react"
import "./Products.css"
import products from "../../productData"
import ProductItem from "./ProductItem"

const Products = () => {
  const productList = products.map((product) => {
    return <ProductItem product={product} key={product.id} />
  })
  return (
    <main className="products-wrapper">
      <ul className="products">{productList}</ul>
    </main>
  )
}

export default Products
