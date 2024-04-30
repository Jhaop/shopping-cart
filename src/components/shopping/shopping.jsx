import React from "react";
import { useState, useEffect } from "react";
import style from './shopping.module.css'
import Product from "../product/product";
import Cart from "../cart/cart";

const Shopping = (props) => {
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (e) => {
    e.preventDefault();
    const quantity = e.target.previousElementSibling.value ? e.target.previousElementSibling.value : 1;
    console.log(`QUANTITY: ${quantity}`)
    setCart(cart => [...cart, { id: products[e.target.parentElement.id - 1].id, title: products[e.target.parentElement.id - 1].title, amount: quantity, price: products[e.target.parentElement.id - 1].price }])
  }

  const remove = (id) => {
    const index = cart.findIndex(product => product.id === id)
    console.log(`index ${index}`)
    cart.splice(index, 1);
    setCart([...cart]);
  }

  const switchShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => response.json())
      .then((response => setProducts(response)))
      .catch((error) => console.log(error))
  }, [])

  return (
    !products ? (
      <h1>Loading...</h1>
    ) : (
      !showCart ? (
        <>
          <button className={style.cartSwitch} onClick={switchShowCart}>Show cart [{cart.length}]</button>
          <div className={style.container}>
            {
              products.map((product) =>
                <Product
                  image={product.image}
                  title={product.title}
                  price={`$` + product.price}
                  description={product.description}
                  id={product.id}
                  key={product.id}
                  onAdd={addToCart}
                />
              )
            }
          </div>
        </>
      ) : (
        <>
          <Cart cart={cart} products={products} remove={remove} />
          <button className={style.cartSwitch} onClick={switchShowCart}>Hide cart</button>
        </>
      )
    )
  )
}

export default Shopping;