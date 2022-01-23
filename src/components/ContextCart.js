import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import Items from "./Items";

const ContextCart = () => {
  const { item, clearCart,totalItem,totalAmount } = useContext(CartContext);

  //toggle kore deya hoice j jokhon "clear cart " button click kora hobe tokhon jno return hishebe aigula dekhay and baki gula jno clear hoye jay..
  if(item.length === 0){
    return(
      <>
          <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>0</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total items-count">0</span> items in
          shopping cart
        </p>
        </section>
      </>
    )
  }




// main function er return aita

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          {" "}
          you have <span className="total items-count">{totalItem}</span> items in
          shopping cart
        </p>



        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total: <span>$ {totalAmount} </span>
          </h3>
          <button>checkOut</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
