import React from "react";
import SectionHeader from "../Header/SectionHeader";
import PrivceBox from "./PriceBox";
import useFadein from "../../Hooks/useFadein";
function Prices() {
  const [isInterSection, refshow] = useFadein();
  return (
    <div
      id="prices"
      className="pt-20 pb-20 transition-colors duration-500 bg-slate-100 dark:bg-bluemode-950 overflow-hidden"
    >
      <div className="container">
        {/* price header */}
        <SectionHeader
          title={"پلن های قیمت ما"}
          subtitle={
            "زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        />
        {/* price header */}
        {/* price body */}
        <div className="pt-20 w-full">
          <div
            ref={refshow}
            className="row flex flex-wrap lg:flex-nowrap items-center justify-center w-full gap-5"
          >
            <div
              className={
                isInterSection
                  ? "opacity-1 translate-x-0 transition-all duration-500 w-full lg:w-auto"
                  : "opacity-0 transition-all translate-x-full w-full lg:w-auto"
              }
            >
              <PrivceBox
                title={"کسب و کار کوچک"}
                price={10}
                emkan={10}
                item1={"داکیومنت کامل"}
                item2={"متریال کاربردی در فیگما"}
                item3={"100 گیگابایت فضای ابری"}
                item4={"پشتیبانی تا 500 عضو"}
              />
            </div>
            <div
              className={
                isInterSection
                  ? "opacity-1 translate-y-0 transition-all duration-500 w-full lg:w-auto"
                  : "opacity-0 transition-all translate-y-full w-full lg:w-auto"
              }
            >
              <PrivceBox
                title={"کسب و کار کوچک"}
                price={10}
                emkan={10}
                item1={"داکیومنت کامل"}
                item2={"متریال کاربردی در فیگما"}
                item3={"100 گیگابایت فضای ابری"}
                item4={"پشتیبانی تا 500 عضو"}
              />
            </div>
            <div
              className={
                isInterSection
                  ? "opacity-1 translate-x-0 transition-all duration-500 w-full lg:w-auto"
                  : "opacity-0 transition-all -translate-x-full w-full lg:w-auto"
              }
            >
              <PrivceBox
                title={"کسب و کار کوچک"}
                price={10}
                emkan={10}
                item1={"داکیومنت کامل"}
                item2={"متریال کاربردی در فیگما"}
                item3={"100 گیگابایت فضای ابری"}
                item4={"پشتیبانی تا 500 عضو"}
              />
            </div>
          </div>
        </div>
        {/* price body */}
      </div>
    </div>
  );
}

export default Prices;
