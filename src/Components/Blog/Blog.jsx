import React from "react";
import BlogBox from "./BlogBox";
import SectionHeader from "../Header/SectionHeader";
import useFadein from "../../Hooks/useFadein";
function Blog() {
  const [isInterSection, refshow] = useFadein();
  return (
    <div
      id="blog"
      className="pt-20 pb-20 transition-colors duration-500 bg-white dark:bg-bluemode-900 overflow-hidden"
    >
      <div className="container">
        <SectionHeader
          title={"اخبار و وبلاگ"}
          subtitle={
            "زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        />
        {/* blog body */}
        <div
          ref={refshow}
          className="pt-20 flex flex-wrap lg:flex-nowrap items-center justify-center gap-10"
        >
          <div
            className={
              isInterSection
                ? "opacity-1 translate-x-0 transition-all duration-500 w-full lg:w-auto"
                : "opacity-0 transition-all translate-x-full w-full lg:w-auto"
            }
          >
            <BlogBox
              title={"معرفی جدید ترین ابزار ها برای طراحی های شما"}
              subtitle={
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ."
              }
              img={"/images/blog1.jpg"}
            />
          </div>
          <div
            className={
              isInterSection
                ? "opacity-1 translate-x-0 transition-all duration-500 delay-75 w-full lg:w-auto"
                : "opacity-0 transition-all translate-x-full w-full lg:w-auto"
            }
          >
            <BlogBox
              title={"بازاریابی گوشه ای زمانی برای دست به کار شدن"}
              subtitle={
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ."
              }
              img={"/images/blog3.jpg"}
            />
          </div>
          <div
            className={
              isInterSection
                ? "opacity-1 translate-x-0 transition-all duration-500 delay-100 w-full lg:w-auto"
                : "opacity-0 transition-all translate-x-full w-full lg:w-auto"
            }
          >
            <BlogBox
              title={"دست راست دنیای کسب و کار IT"}
              subtitle={
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان ."
              }
              img={"/images/blog2.jpg"}
            />
          </div>
        </div>
        {/* blog body */}
      </div>
    </div>
  );
}

export default Blog;
