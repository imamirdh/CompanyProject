import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function PrivceBox({ title, price, emkan, item1, item2, item3, item4, item5 }) {
  return (
    <div className="lg:w-[350px] w-full lg:h-[490px] rounded-2xl bg-white dark:bg-bluemode-800 p-4 ">
      {/* price box top*/}
      <h2 className="lg:text-xl text-lg font-VazirMedium my-2 text-bluemode-800 dark:text-white">
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <p className="lg:text-5xl text-4xl font-VazirBold my-2 text-orange-400" dir="ltr">
          {price}{" "}
          <sup className="lg:text-base text-sm text-gray-400 font-VazirLight ">تومان</sup>
        </p>
        <p className="pt-5 text-sm lg:text-base text-gray-400">
          <span>/</span> در ماه
        </p>
      </div>
      <p className="my-2 text-sm lg:text-base text-bluemode-700 dark:text-bluemode-200">
        امکانات پایه برای {emkan} تا کاربر
      </p>
      <button className="w-full lg:h-10 h-8 text-sm lg:text-base bg-bluemode-300 dark:bg-blue-200 bg-opacity-30 text-bluemode-800 hover:bg-orange-400 dark:hover:bg-orange-400 hover:text-white font-VazirMedium rounded-lg my-5 transition-all">
        دریافت اشتراک
      </button>
      {/* price box top*/}
      <div className="w-full h-px bg-gray-300"></div>
      {/* pricebox bottom */}
      <div className="pt-10">
        <ul className="child:flex child:items-center child:gap-2 child:text-sm lg:child:text-base child:text-bluemode-800 dark:child:text-bluemode-200 space-y-4">
          {item1 && (
            <li>
              <BsCheckCircle className="w-5 h-5 text-green-500"/>
              {item1}
            </li>
          )}
          {item2 && (
            <li>
              <BsCheckCircle className="w-5 h-5 text-green-500"/>
              {item2}
            </li>
          )}
          {item3 && (
            <li>
              <BsCheckCircle className="w-5 h-5 text-green-500"/>
              {item3}
            </li>
          )}
          {item4 && (
            <li>
              <BsCheckCircle className="w-5 h-5 text-green-500"/>
              {item4}
            </li>
          )}
          {item5 && (
            <li>
              <BsCheckCircle className="w-5 h-5 text-green-500"/>
              {item5}
            </li>
          )}
        </ul>
      </div>
      {/* pricebox bottom */}
    </div>
  );
}

export default PrivceBox;
