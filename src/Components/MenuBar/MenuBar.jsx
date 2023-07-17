import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../Context/AppContext";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrBlog } from "react-icons/gr";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  HiOutlineLogin,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineShoppingCart,
} from "react-icons/hi";
function MenuBar() {
  const contextdata = useContext(AppContext);
  const [subMenu, setSubMenu] = useState(false);
  const [menubox, setMenoBox] = useState(false);

  useEffect(() => {
    if (contextdata.menuBarMobile) {
      setMenoBox(true);
    }
  }, []);
  return ReactDOM.createPortal(
    <div
      className={
        contextdata.isDark
          ? "dark w-screen h-screen fixed top-0 bg-opacity-50 bg-black z-40"
          : "w-screen h-screen fixed top-0 bg-opacity-50 bg-black z-40"
      }
      dir="rtl"
    >
      <div
        className={
          menubox
            ? " bg-white w-3/4 h-screen p-4 opacity-1 transition-all duration-500 opacity-1 dark:bg-bluemode-900 "
            : "bg-white w-3/4 h-screen p-4 opacity-0 translate-x-[100%] transition-all duration-500 dark:bg-bluemode-900 "
        }
      >
        <div className="header-menubar pb-5 flex items-center justify-between border-b border-b-gray-100">
          <div className="logo flex items-center justify-between w-[155px] h-10">
            <div className="font-VazirBold text-xl shadow text-bluemode-700 dark:text-bluemode-300 rounded-md p-2">
              <a href="#">باتیس |Batis</a>
            </div>
          </div>
          <button
            className="dark:text-white"
            onClick={() => {
              setMenoBox(false);
              setTimeout(() => {
                contextdata.setMenuBarMobile(false);
              }, 300);
            }}
          >
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
        <a href="#" className="w-full rounded-md bg-bluemode-300 dark:bg-bluemode-200 dark:bg-opacity-20 bg-opacity-20 flex items-center h-10 mt-6 px-3 text-bluemode-400 dark:text-bluemode-200 gap-2">
          <AiOutlineHome className="w-5 h-5" />
          <p>صفحه اصلی</p>
        </a>
        <ul className="menulist mt-6 pb-6 child:px-3 child:text-zinc-600 child:dark:text-white child:gap-2 border-b border-b-gray-100">
          <a href="#services" className="flex items-center h-10">
            <BsPersonWorkspace className="w-5 h-5" />
            <p>خدمات</p>
          </a>
          <a href="#prices" className="flex items-center h-10">
            <AiOutlineComment className="w-5 h-5" />
            <p>پلن ها و قیمت</p>
          </a>
          <a href="#blog" className="flex items-center h-10">
            <GrBlog className="w-5 h-5" />
            <p>بلاگ</p>
          </a>
          <a href="#contactus" className="flex items-center h-10">
            <VscCallOutgoing className="w-5 h-5" />
            <p>ارتباط با ما</p>
          </a>
        </ul>
        <ul className="mt-6 pb-6 child:px-3 child:text-bluemode-400 dark:child:text-bluemode-200 child:gap-2">
          <button className="flex items-center h-10">
            <HiOutlineLogin className="w-5 h-5" />
            <p>ورود به پنل</p>
          </button>
          <button
            className="flex items-center h-10"
            onClick={() => contextdata.setIsDark((prev) => !prev)}
          >
            {contextdata.isDark ? (
              <HiOutlineSun className="w-5 h-5" />
            ) : (
              <HiOutlineMoon className="w-5 h-5" />
            )}
            {contextdata.isDark ? <p>تم روشن</p> : <p>تم تیره</p>}
          </button>
        </ul>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default MenuBar;
