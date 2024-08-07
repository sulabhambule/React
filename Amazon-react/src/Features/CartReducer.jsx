const CartReducer = (state, action) => {
  let newState = state;

  if (action.type === "ADD_TO_CART") {
    const { product, quantity, deliveryOptionId } = action.payload;
    const productId = product.id;

    const defaultDeliveryOptionId = "1";

    const existingProductIndex = state.findIndex(
      (item) => item.product.id === productId
    );

    if (existingProductIndex !== -1) {
      // Product already in the cart, update quantity and delivery option
      newState = state.map((item, index) =>
        index === existingProductIndex
          ? {
              ...item,
              quantity: item.quantity + quantity,
              deliveryOptionId: deliveryOptionId || defaultDeliveryOptionId,
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
  } else if (action.type === "DELETE_FROM_CART") {
    const { productId } = action.payload;

    newState = state.filter((item) => item.product.id !== productId);
  } else if (action.type === "UPDATE_DELIVERY_OPTION") {
    const { productId, deliveryOptionId } = action.payload;

    newState = state.map((item) =>
      item.product.id === productId ? { ...item, deliveryOptionId } : item
    );
  }

  return newState;
};

export default CartReducer;
