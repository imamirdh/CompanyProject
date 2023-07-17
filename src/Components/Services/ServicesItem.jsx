import React from 'react'
import {CgExtension} from "react-icons/cg"
function ServicesItem({icon , title , subtitle}) {
  return (
    <div>
      <div className="w-[300px] text-center space-y-5">
        <div className="lg:serviceiconbackground serviceiconbackgroundmobile mx-auto bg-bluemode-700 text-white flex items-center justify-center">
          {icon}
        </div>
        <h2 className='lg:text-xl text-lg font-VazirBold text-bluemode-700 dark:text-blue-300'>{title}</h2>
        <p className='text-gray-500 text-[14px] leading-7 lg:text-base dark:text-gray-300'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ServicesItem