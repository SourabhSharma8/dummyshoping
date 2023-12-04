import Checkout from "../Components/Body/Checkout/checkout.js";
import Listing from "../Components/Body/Products/listing.js";
import Review from "../Components/Body/Review.js";
import Wrapper from "../Components/hoc/Wrapper";

const routes = [
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Listing />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/review",
        element: <Review />,
      },
    ],
  },
];

export default routes;
