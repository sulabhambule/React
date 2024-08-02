export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state, action) => {
  let newState = state;

  if (action.type === "ADD") {
    const existingProduct = state.find(
      (product) => product.id === action.payload.product.id
    );
    if (existingProduct) {
      newState = state.map((product) =>
        product.id === action.payload.product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    } else {
      newState = [...state, { ...action.payload.product, quantity: 1 }];
    }
  } else if (action.type === "DELETE") {
    newState = state.filter((product) => product.id !== action.payload.id);
  } else if (action.type === "INCREASE") {
    newState = state.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else if (action.type === "DECREASE") {
    newState = state.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
  }

    // Save the new state to localStorage
    localStorage.setItem('cart', JSON.stringify(newState));

  return newState;
};

export default CartReducer;
