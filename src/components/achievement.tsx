import Image, { StaticImageData } from "next/image";
import kartun1 from "../../public/foto/kartun1.png";
import React from "react";

interface IcardGojek {
  desc: string;
  caption:string
  className?:string
  gambar:StaticImageData
}

export const CardGojek: React.FC<IcardGojek> = ({ desc ,caption,gambar,className}) => {
  return (
    <>
      <div className={`max-md:hidden min-w-[150px] flex group flex-col ${className} items-center p-3 w-[25%] rounded-lg hover:scale-105 hover:duration-200 hover:bg-[#557fac]`}>
        <Image
          className="rounded-full "
          src={gambar}
          alt=""
        ></Image>
        <h1 data-aos="zoom-in" className="text-center text-green-600 font-semibold text-[25px] p-6 group-hover:text-white m-4">{desc}</h1>
        <p data-aos="zoom-in" className="text-center text-black font-semibold text-[15px] text-wrap p-4">{caption}</p>
      </div>
    </>
  );
};
