import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Items from "./pages/Items";
import About from "./components/About"
export default function App() {
  return (
    <div className=" bg-[#F0F0F0] text-black sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
