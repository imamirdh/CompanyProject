import React from "react";

function FooterComponent() {
  return (
    <div className="pt-20 pb-10 transition-colors duration-500 bg-bluemode-900">
      <div className="container">
        <div className="text-center border-b border-gray-500 pb-10">
          <div className="lg:w-1/4 font-VazirBold text-2xl text-white shadow-lg shadow-bluemode-300 rounded-md p-4 mx-auto">
            <a href="#">باتیس |Batis</a>
          </div>
          <p className="my-10 lg:text-lg text-gray-300 font-VazirLight">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامهه.
          </p>
          <div className="lg:w-1/2 mx-auto py-2 border border-gray-400 rounded-lg">
            <ul className="flex items-center justify-center h-full  child:text-white child:text-sm lg:child:text-base  child:flex lg:child:px-3 child:px-1 child:items-center child:py-2  child:rounded-lg child:transition-colors child-hover:bg-bluemode-200 child-hover:bg-opacity-30">
              <a href="#">
                <p>صفحه اصلی</p>
              </a>
              <a href="#services">
                <p>خدمات</p>
              </a>
              <a href="#prices">
                <p>قیمت گذاری</p>
              </a>
              <a href="#blog">
                <p>وبلاگ</p>
              </a>
              <a href="#contactus">
                <p>ارتباط با ما</p>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between h-20">
          <p className="text-white text-[14px] lg:text-base">
            طراحی و دیزاین شده توسط امیررضا دهنمکی ❤️
          </p>
          <p dir="ltr" className="text-gray-300">Copyright©</p>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
