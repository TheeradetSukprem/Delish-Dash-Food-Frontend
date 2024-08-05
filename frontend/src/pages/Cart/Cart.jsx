import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list , removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity > 0) {
            return (
              <div>
                <div
                  key={item._id}
                  className="cart-items-title cart-items-item"
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * quantity).toFixed(2)}</p>
                  <button className="cross" onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <br />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <br />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
           <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code " />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
