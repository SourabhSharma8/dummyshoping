import { useDispatch, useSelector } from "react-redux";
import { Produts } from "../../../Utilities/constants";
import IndivualProduct from "./indivualProducts";
import { SaveProductAction } from "../../../Redux/Actions/Prouduct";
const Listing = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(SaveProductAction(product));
  };
  return (
    <>
      <div className=" container">
        <div className="row mx-auto mt-3">
          {Produts?.map((item, id) => {
            return (
              <IndivualProduct AddToCart={addToCart} item={item} key={id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Listing;
