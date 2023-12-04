import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PersonalDetails from "./personalDetails";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.cartitems);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const totalPrice = cartItems?.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <div className="container mt-5">
      <h2>Checkout Page</h2>

      {cartItems?.length ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ maxWidth: "50px", maxHeight: "50px" }}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="2"></td>
                <td>
                  <h4>Total:</h4>
                </td>
                <td>
                  <h4>{total}</h4>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="row m-auto">
            <div className="col-md-6">
              <PersonalDetails orderData={cartItems} total={total} />
            </div>
          </div>
        </>
      ) : (
        <h5 className="text-danger">No items added yet in the cart</h5>
      )}
    </div>
  );
};

export default Checkout;
