import React from "react";
import SectionHeader from "../Header/SectionHeader";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
function ContactUs() {
  return (
    <div
      id="contactus"
      className="pt-20 pb-20 transition-colors duration-500 bg-slate-100 dark:bg-bluemode-950 overflow-hidden"
    >
      <div className="container">
        <SectionHeader
          title={"ارتباط با ما"}
          subtitle={
            "زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        />
        {/* contact us body */}
        <div className="lg:py-20 pt-20">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
            <div className="lg:w-2/3">
              <form
                action=""
                className="dark:text-white  bg-white dark:bg-bluemode-900 p-6 space-y-5 rounded-lg shadow-lg shadow-blue-300"
              >
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                  <div className="lg:w-1/2 w-full border rounded-lg">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none p-2"
                      placeholder="نام :"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full border rounded-lg">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none p-2"
                      placeholder="ایمیل :"
                    />
                  </div>
                </div>
                <div className="border rounded-lg">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none p-2"
                    placeholder="موضوع :"
                  />
                </div>
                <div className="border rounded-lg">
                  <textarea
                    rows={5}
                    type="text"
                    className="w-full bg-transparent outline-none p-2"
                    placeholder="پیام :"
                  />
                </div>
                <div className="text-left">
                  <button className="font-VazirMedium text-white bg-bluemode-500 p-2 px-4 rounded-md transition-all hover:bg-bluemode-600">
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/3 mt-5 lg:mt-0 space-y-5">
              <div className="flex items-start gap-5">
                <div className="icon">
                  <HiOutlinePhone className="text-3xl text-orange-300"/>
                </div>
                <div className="">
                  <h2 className="text-2xl font-VazirBold text-bluemode-800 dark:text-bluemode-200">تلفن </h2>
                  <p className="text-gray-400 mt-2">+152 534-468-854</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="icon">
                  <HiOutlineMail className="text-3xl text-orange-300"/>
                </div>
                <div className="">
                  <h2 className="text-2xl font-VazirBold text-bluemode-800 dark:text-bluemode-200">ایمیل </h2>
                  <p className="text-gray-400 mt-2">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="icon"><HiOutlineLocationMarker className="text-3xl text-orange-300"/></div>
                <div className="">
                  <h2 className="text-2xl font-VazirBold text-bluemode-800 dark:text-bluemode-200">موقعیت</h2>
                  <p className="text-gray-400 mt-2">
                    ایران , فارس , خیابان وصال شرقی , جنب اداره پست, دفتر شرکت X
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact us body */}
      </div>
    </div>
  );
}

export default ContactUs;
