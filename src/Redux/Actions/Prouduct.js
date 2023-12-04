
export const SaveProductAction=(payload)=>{
    return{
        type :"SAVE_PRODUCT",
        payload
    }
}


export const RemoveFromCart = (payload) => {
    
    return {
      type: "REMOVE_FROM_CART",
      payload,
    };
  };

