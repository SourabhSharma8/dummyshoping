import React from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const orderData = useSelector((state) => state.Cart.order);

  return (
    <div className="container mt-5">
      <h2>Order Review</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Personal Details:</h4>
          <p>Name: {orderData?.name}</p>
          <p>Email: {orderData?.email}</p>
          <p>Phone: {orderData?.phone}</p>
        </div>
        <div className="col-md-6">
          <h4>Order Summary:</h4>
          <p>Total: {orderData?.total}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <h4>Ordered Products:</h4>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.orderData?.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ maxWidth: "50px", maxHeight: "50px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Review;
