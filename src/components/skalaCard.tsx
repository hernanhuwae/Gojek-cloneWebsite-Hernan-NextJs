import Image, { StaticImageData } from "next/image";
import kartun1 from "../../public/foto/kartun1.png";
import React from "react";

interface IcardGojek {
  desc: string;
  caption:string
  className?:string
  gambar:StaticImageData
}

export const CardSkala: React.FC<IcardGojek> = ({ desc ,caption,gambar,className}) => {
  return (
    <>
      <div  className={`flex flex-col ${className} items-center px-4 py-2 max-lg:mb-12 w-[25%] rounded-xl text-wrap hover:scale-105 hover:duration-200 min-w-[200px] min-h-[50px] shadow-[0_35px_15px_-5px_rgba(0,0,0,1)]`}>
        <Image
          className="rounded-full"
          src={gambar}
          alt=""
        ></Image>
        <h1 className={`text-center text-black font-semibold ${className}  hover:text-white`}>{desc}</h1>
        <p className="text-center text-black text-wrap p-2 m-4">{caption}</p>
      </div>
    </>
  );
};
