import React from "react";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="w-full lg:h-screen h-96 pt-16 lg:pt-0 flex items-center justify-center lg:headerbackground headerbackgroundmobile">
      <div className="container flex items-center justify-center">
        <div className="bodyheader lg:w-1/2 lg:p-12 p-4 text-center space-y-5 bg-bluemode-200 bg-opacity-30 rounded-lg">
          <div className="lg:text-4xl text-2xl text-bluemode-800 font-VazirBold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("ما به موفقیت شما می اندیشیم!")
                  .start()
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("باتیس گروه تخصصی رشد کسب و کار شما")
                  .start()
                  .pauseFor(2000)
                  .deleteAll();
              }}
              options={{ loop: true }}
            />
          </div>
          <p className="text-white lg:text-lg text-[14px] text-right line-clamp-4 lg:line-clamp-none">
            این شرکت مفتخر است با بهره گیری از تجربیات ارزشمند و موفق ۱۹ سال
            گذشته و همکاری با کمپانی های معتبر اروپایی و آسیایی و با دراختیار
            داشتن پرسنل با تجربه و مجرب و با رعایت استانداردهای کیفی با شتابی
            بیشتر از گذشته، جایگاه خود را در حوزه خدمات پزشکی و آزمایشگاهی کشور
            ارتقا دهدد{" "}
          </p>
          <form action="" className="lg:flex items-center gap-2 w-full space-y-2 lg:space-y-0 text-left lg:text-right">
            <div className="lg:w-2/3 text-[12px] lg:text-base bg-black bg-opacity-40 p-2 rounded-lg text-white">
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="شماره خود را وارد کنید تا مشاوران ما باشما تماس بگیرند"
              />
            </div>
            <button className=" bg-bluemode-500 lg:w-1/3 text-[14px] lg:text-base text-white p-2 rounded-lg lg:font-VazirMedium transition-all hover:bg-bluemode-600 ">
              ارسال و مشاوره رایگان
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
