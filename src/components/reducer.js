export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  //clear cart
  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  //increment
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });

    return { ...state, item: updatedCart };
  }

  //decrement
  if (action.type === "DECREMENT") {
    let updatedCart = state.item.map((curElem) => {
        
        if (curElem.id === action.payload && curElem.quantity > 0) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      // .filter((curElem) => curElem.quantity !== 0);

    return { ...state, item: updatedCart };
  }

  //totalItem and totalAmount
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;

        let updatedAmount = price * quantity;
        accum.totalAmount = accum.totalAmount + updatedAmount;

        accum.totalItem = accum.totalItem + quantity;

        return accum;
      },
      { totalItem: 0, totalAmount: 0 }
    );

    return { ...state, totalItem, totalAmount };
  }

  return state;
};


