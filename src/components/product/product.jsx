import React from "react";
import style from './product.module.css'

const Product = (props) => {

  return (
    <div id={props.id} className={style.container}>
      <img src={props.image} alt={props.title} className={style.productImage} />
      <h2 className={style.productTitle}>{props.title}</h2>
      <h3 className={style.productPrice}>{props.price}</h3>
      <p className={style.productDescription}>{props.description}</p>
      <input className={style.productInput} placeholder="1"></input>
      <button className={style.productButton} onClick={props.onAdd}>Add to cart</button>
    </div>
  )
}

export default Product;