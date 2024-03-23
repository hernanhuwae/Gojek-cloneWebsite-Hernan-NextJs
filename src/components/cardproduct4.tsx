import React from "react";
import Image from "next/image";
import icon from "../../public/foto/Gojek_Icon_Black-removebg-preview.png"

interface ICardProduct {
    caption:string
    title:string
  item1: string;
  item2: string;
  item3: string;
  
}

export const CardProduct4: React.FC<ICardProduct> = ({
  item1,
  item2,
  item3,
  title,
  caption

}) => {
  return (
    <>
      {/* PRODUK 1 */}
      <div className="flex flex-col bg-[#93328e] justify-between rounded-[15%] min-w-[200px] min-h-[50px] w-[25%]">
        <div className="rounded-xl py-4">
          <div className="flex items-center px-12 pb-5 justify-center">
            <Image src={icon} width={50} height={50} alt=""></Image>
            <h1 className="max-lg:text-[1rem] text-[2rem] text-white font-semibold">{item1}</h1>
          </div>
          <div className="flex items-center px-12 pb-3 justify-center">
            <Image src={icon} width={50} height={50} alt=""></Image>
            <h1 className="max-lg:text-[1rem] text-[2rem] text-white font-semibold">{item2}</h1>
          </div>
          <div className="flex items-center px-12 pb-3 justify-center">
            <Image src={icon} width={50} height={50} alt=""></Image>
            <h1 className="max-lg:text-[1rem] text-[2rem] text-white font-semibold">{item3}</h1>
          </div>
          
        </div>
        <div className="px-4 bg-[#c35bbec6] rounded-b-[15%]">
          <h1 className="text-white max-lg:text-[20px] text-[25px] font-bold text-center">
            {title}
          </h1>
          <p className="text-center mt-2 mb-8">
            {caption}
          </p>
        </div>
      </div>
    </>
  );
};
