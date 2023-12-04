
export const SaveProductAction=(payload)=>{
    return{
        type :"SAVE_PRODUCT",
        payload
    }
}


export const RemoveFromCart = (updatedCart) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: updatedCart,
    };
  };

