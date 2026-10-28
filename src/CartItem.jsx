import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';
import './CartItem.css';

const getPrice = (cost) => Number.parseFloat(String(cost).replace(/[^0-9.]/g, '')) || 0;

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + getPrice(item.cost) * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const handleContinueShopping = () => {
    if (onContinueShopping) onContinueShopping();
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      window.alert('Your cart is empty. Add some plants before checkout.');
      return;
    }
    window.alert('Thank you for shopping at Paradise Nursery! Checkout is a demo in this assignment.');
    dispatch(clearCart());
  };

  return (
    <main className="cart-container">
      <h2>Total Cart Amount: ${total.toFixed(2)}</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty. Continue shopping to add plants.</p>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <article className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-cost">Unit price: ${getPrice(item.cost).toFixed(2)}</p>
                <div className="cart-item-quantity" aria-label={`${item.name} quantity controls`}>
                  <button className="cart-item-button cart-item-button-dec" type="button" onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span className="cart-item-quantity-value" aria-live="polite">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" type="button" onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
                <p className="cart-item-total">Subtotal: ${(getPrice(item.cost) * item.quantity).toFixed(2)}</p>
                <button className="cart-item-delete" type="button" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      )}
      <div className="continue_shopping_btn">
        <button className="get-started-button" type="button" onClick={handleContinueShopping}>Continue Shopping</button>
        <button className="get-started-button1" type="button" onClick={handleCheckout}>Checkout</button>
      </div>
    </main>
  );
};

export default CartItem;