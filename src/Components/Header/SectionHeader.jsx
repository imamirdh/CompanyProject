import React from "react";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="lg:w-1/2 mx-auto text-center">
      <h1 className="lg:text-3xl text-2xl font-VazirBold text-center text-bluemode-700 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-500 lg:text-base text-sm dark:text-gray-300">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
