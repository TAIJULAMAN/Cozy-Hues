import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import HeroNav from "../../Components/Shared/Navbar/HeroNav";

function Main() {
  return (
    <>
       <Navbar />
       <HeroNav />
      <Outlet />
      <Footer />P
    </>
  );
}

export default Main;
