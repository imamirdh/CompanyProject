import React, { useContext, useEffect, useRef, useState } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
import {BsMoon , BsSun} from "react-icons/bs"
import AppContext from "../../Context/AppContext";
import useFadein from "../../Hooks/useFadein";
function Navbar() {
  const contextdata=useContext(AppContext)
  const [isInterSection,refshow]=useFadein()
  return (
    <div className="container hidden lg:block fixed top-2 z-10">
      <nav className="flex items-center justify-between w-full h-20 bg-bluemode-950 bg-opacity-70 text-white px-16 rounded-2xl">
        {/* navbar Brand */}
        <div className="font-VazirBold text-2xl shadow rounded-md p-2">
          <a href="#">باتیس |Batis</a>
        </div>
        {/* nsvbar Brand */}
        {/* navbar List Item */}
        <div className="w-1/2 h-full flex items-center justify-between overflow-y-hidden">
          <ul
            ref={refshow}
            className="flex items-center h-full   child:flex child:px-3 child:items-center child:py-2  child:rounded-lg child:transition-colors child-hover:bg-bluemode-200 child-hover:bg-opacity-30"
          >
            <a href="#">
              <p
                className={
                  isInterSection
                    ? "opacity-1 translate-y-0 transition-all duration-500 "
                    : "opacity-0 transition-all translate-y-full"
                }
              >
                صفحه اصلی
              </p>
            </a>
            <a href="#services">
              <p
                className={
                  isInterSection
                    ? "opacity-1 translate-y-0 transition-all duration-500 delay-100"
                    : "opacity-0 transition-all translate-y-full"
                }
              >
                خدمات
              </p>
            </a>
            <a href="#prices">
              <p
                className={
                  isInterSection
                    ? "opacity-1 translate-y-0 transition-all duration-500 delay-200"
                    : "opacity-0 transition-all translate-y-full"
                }
              >
                قیمت گذاری
              </p>
            </a>
            <a href="#blog">
              <p
                className={
                  isInterSection
                    ? "opacity-1 translate-y-0 transition-all duration-500 delay-300"
                    : "opacity-0 transition-all translate-y-full"
                }
              >
                وبلاگ
              </p>
            </a>
            <a href="#contactus">
              <p
                className={
                  isInterSection
                    ? "opacity-1 translate-y-0 transition-all duration-500 delay-500"
                    : "opacity-0 transition-all translate-y-full"
                }
              >
                ارتباط با ما
              </p>
            </a>
          </ul>
          {/* navbar icons */}
          <div
            className={
              isInterSection
                ? "opacity-1 translate-y-0 transition-all duration-500 delay-700 flex"
                : "opacity-0 transition-all translate-y-full"
            }
          >
            <button className="mx-5 text-2xl hover:scale-125 hover:rotate-12 hover:text-bluemode-200 transition-all " onClick={()=>contextdata.setIsDark(prev=>!prev)}>{contextdata.isDark?<BsSun/>:<BsMoon/>}</button>
            <a href="http://localhost:3000/" className="flex items-center hover:text-bluemode-200 transition-all gap-2  group">
              {" "}
              <LuPanelLeftOpen className="text-2xl  group-hover:scale-125 group-hover:rotate-12 group-hover:text-bluemode-200 transition-all" />
              ورود به پنل
            </a>
          </div>
          {/* navbar icons */}
        </div>
        {/* navbar List Item */}
      </nav>
    </div>
  );
}

export default Navbar;
