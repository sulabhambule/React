const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const CartReducer = (state, action) => {
  let newState = [...state];

  if (action.type === "ADD_TO_CART") {
    const { product, quantity, deliveryOptionId } = action.payload;
    const productId = product.id;

    const defaultDeliveryOptionId = "1";

    const existingProductIndex = state.findIndex(
      (item) => item.product.id === productId
    );

    if (existingProductIndex !== -1) {
      newState = state.map((item, index) =>
        index === existingProductIndex
          ? {
              ...item,
              quantity: item.quantity + quantity,
              deliveryOptionId:
                deliveryOptionId ||
                item.deliveryOptionId ||
                defaultDeliveryOptionId,
            }
          : item
      );
    } else {
      newState = [
        ...state,
        {
          product,
          quantity,
          deliveryOptionId: deliveryOptionId || defaultDeliveryOptionId,
        },
      ];
    }

    saveCartToLocalStorage(newState);
  } else if (action.type === "DELETE_FROM_CART") {
    const { productId } = action.payload;

    newState = state.filter((item) => item.product.id !== productId);
    saveCartToLocalStorage(newState);
  } else if (action.type === "UPDATE_DELIVERY_OPTION") {
    const { productId, deliveryOptionId } = action.payload;

    newState = state.map((item) =>
      item.product.id === productId ? { ...item, deliveryOptionId } : item
    );

    saveCartToLocalStorage(newState);
  } else if ("UPDATE_QUANTITY") {
    const { quantity, productId } = action.payload;

    newState = state.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );

    saveCartToLocalStorage(newState);
  }

  return newState;
};

export default CartReducer;
