import React from "react";
import ServicesItem from "./ServicesItem";
import { CgExtension } from "react-icons/cg";
import { BiChart } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FcIdea } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import SectionHeader from "../Header/SectionHeader";
function Services() {
  return (
    <div
      id="services"
      className="pt-20 transition-colors duration-500 dark:bg-bluemode-950"
    >
      <div className="container">
        {/* services header */}
        <SectionHeader
          title={"خدمات ما"}
          subtitle={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه."
          }
        />
        {/* services header */}
        {/* services body */}
        <div className="space-y-10 pt-20 pb-60  ">
          <div className="row flex flex-wrap lg:flex-nowrap items-center justify-center gap-14">
            <ServicesItem
              title={"گسترش کسب و کار شما"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<CgExtension className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
            <ServicesItem
              title={"افزایش فروش"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<BiChart className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
            <ServicesItem
              title={"توسط متخصصان خبره"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<HiUserGroup className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
          </div>
          <div className="row flex flex-wrap lg:flex-nowrap items-center justify-center gap-14">
            <ServicesItem
              title={"بحث و ایده یابی"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<FcIdea className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
            <ServicesItem
              title={"افزایش گفتگو گروهی"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<AiOutlineComment className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
            <ServicesItem
              title={"ایده های پولساز"}
              subtitle={
                "حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی ."
              }
              icon={<GiReceiveMoney className="lg:w-20 lg:h-20 w-12 h-12" />}
            />
          </div>
        </div>
        {/* services body */}
      </div>
      {/* services footer */}
      <div className="bg-bluemode-800 lg:h-[515px] h-[350px] relative">
        <div className="container">
          <img
            src="/images/services.jpg"
            alt=""
            className="mx-auto w-3/4 h-[220px] lg:w-auto lg:h-auto rounded-2xl absolute lg:bottom-[50%] bottom-[70%] left-[50%] -translate-x-[50%]"
          />
          <div className="lg:w-1/2 absolute lg:top-[60%] top-[40%] lg:left-[50%] lg:-translate-x-[50%]">
            <div className="row lg:flex items-center justify-between space-y-5 lg:space-y-0">
              <div className="w-full">
                <p className="lg:text-xl text-sm font-VazirBold text-gray-400">
                  نیاز های مشتری
                </p>
                <h2 className="lg:text-2xl text-xl font-VazirBold text-white">
                  فضایی برای همگان با هر نوع نیازی
                </h2>
              </div>
              <div className="space-y-3 lg:space-y-0">
                <p className="text-gray-400 text-sm leading-6 lg:text-base">
                  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد.
                </p>
                <button className="text-white flex items-center gap-2">
                  مشاهده بیشتر
                  <IoIosArrowBack />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services footer */}
    </div>
  );
}

export default Services;
