import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function BlogBox({ title, subtitle, img }) {
  return (
    <div className="lg:w-[347px] lg:h-[440px] rounded-xl  shadow-lg shadow-bluemode-300 overflow-hidden">
      <img src={img} alt="" />
      <div className="h-52 body p-6 text-black flex flex-col justify-between">
        <h1 className="text-lg font-VazirBold text-bluemode-800 dark:text-white">
          {title}
        </h1>
        <p className="text-sm text-gray-400">
          {subtitle}
        </p>
        <button className="flex items-center gap-2 text-orange-300">
          مشاهده بیشتر
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
}

export default BlogBox;
