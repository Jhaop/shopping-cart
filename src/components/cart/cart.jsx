import React from "react";
import style from './cart.module.css'
import { useState, useEffect } from "react";

const Cart = (props) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = props.cart.reduce(function (acc, item) {
      return acc + item.price * item.amount
    }, 0)
    setTotal(total);
  })

  return (
    <div className={style.container}>
      <h1>Shopping cart</h1>
      {props.cart ? (
        <>
          <table className={style.productsTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Cancel order</th>
              </tr>
            </thead>
            <tbody>
              {
                props.cart.map(item =>
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.amount}</td>
                    <td>{item.amount * item.price}</td>
                    <td>
                      <button onClick={() => props.remove(item.id)}>Cancel</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td>{total}</td>
                <td>
                  <button>Pay</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <h3>Loading cart...</h3>
      )
      }
    </div >
  )
}

export default Cart;