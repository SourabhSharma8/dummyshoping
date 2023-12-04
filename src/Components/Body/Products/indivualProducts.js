import { useSelector } from "react-redux";

const IndivualProduct = ({ item, AddToCart }) => {
  const { id, name, detail, price, image } = item;

  const cartItems = useSelector((state) => state.Cart.cartitems);

  const isProductInCart = cartItems.some((cartItem) => cartItem.id === id);

  const buyAction = () => {
    const payload = {
      id: id,
      name: name,
      price: price,
      image: image,
    };
    AddToCart(payload);
  };
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{detail}</p>
            <p className="card-text">{price}</p>

            <button disabled={isProductInCart} onClick={buyAction} className="btn btn-primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndivualProduct;
