import { useDispatch, useSelector } from "react-redux";
import {removeItem ,clearCart, addItem} from "../utils/cartSlice";
import "./cart.css";
import { REACT_MEDIA_URL } from "../constant";
import { IMG_MENU_URL } from "../constant";
import { selectTotalCartItem } from "../constant";

const Cart = () => {
  
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const CDN_URL = IMG_MENU_URL;
  const totalCount = useSelector(selectTotalCartItem)

  return (
    <>
      <div className="cart-container">
  <header className="cart-header">
    <h1>This is a cart page</h1>
    <div className="cart-count">Cart Items - <span>{totalCount}</span></div>
  </header>

  <div className="cart-list">
    {cartItems.map(item => (
        
      <div className="cart-item" key={item.id}>
        <div className="item-image"> {/* optional image placeholder */}
           <img src={REACT_MEDIA_URL + CDN_URL + item.imageId}  alt={item.name} />            
        </div>

        <div className="item-info">
          <h2 className="item-name">{item.name}</h2>
          <p className="item-desc">{item.description}</p>
          <div className="item-meta">
            <div className="item-price">₹ {(item.price||0)/100}</div>
            <div className="item-rating">⭐ {item.ratings?.aggregatedRating?.rating || "–"} <span>({item.ratings?.aggregatedRating?.ratingCountV2})</span></div>
          </div>
        </div>

        <div className="item-actions">
          <button className="qty-btn" onClick={() => dispatch(removeItem(item.id))}>-</button>
          <button className="add-btn" onClick={()=> dispatch(addItem(item))}>+</button>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear</button>
          Qty: <span className="qty-text">{item.quantity}</span>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Cart;
