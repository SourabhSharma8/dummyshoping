const intialState = {
  cartitems: [],
  order: {},
};

const ProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SAVE_PRODUCT":
      return {
        ...state,
        cartitems: [...state.cartitems, action.payload],
      };

    case "SAVE_ORDER":
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
