import { Outlet } from "react-router-dom";
import Header from "../header";



const Wrapper = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      
    </>
  );
};
export default Wrapper;

