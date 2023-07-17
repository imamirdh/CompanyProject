import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import MenuBar from "../MenuBar/MenuBar";
import AppContext from "../../Context/AppContext";
function NavbarMobile() {
  const contextdata=useContext(AppContext)
  return (
    <div className="lg:hidden w-full fixed top-0 h-16 bg-bluemode-900 text-white z-10">
      <div className="container">
        <div className="w-full h-16 flex items-center justify-between">
          <button className="mx-5 text-xl hover:rotate-12 hover:text-bluemode-200 transition-all" onClick={()=>contextdata.setMenuBarMobile(prev=>!prev)}>
            <AiOutlineMenu />
          </button>
          <div className="font-VazirBold text-xl shadow rounded-md p-2">
            <a href="#">باتیس |Batis</a>
          </div>
          <button className="mx-5 text-xl hover:rotate-12 hover:text-bluemode-200 transition-all " onClick={()=>contextdata.setIsDark(prev=>!prev)}>{contextdata.isDark ? <BsSun /> : <BsMoon />}</button>
        </div>
      </div>
      {contextdata.menuBarMobile &&<MenuBar/>}
    </div>
  );
}

export default NavbarMobile;
