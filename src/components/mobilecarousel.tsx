interface ICarouselMobile {
  gambar: StaticImageData;
  title: string;
  caption: string;
}

import Image, { StaticImageData } from "next/image";
import gambar1 from "../../public/foto/ba.png";
import React from "react";

export const CarouselMobile: React.FC<ICarouselMobile> = ({
  gambar,
  title,
  caption,
}) => {
  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box md:hidden">
        <div className="carousel-item flex-col">
          <Image
            width={300}
            alt=""
            src={gambar}
            className="rounded-box"
          />
          <h1 className="  text-green-600 font-semibold text-wrap text-[15px] group-hover:text-white">
              {title}
            </h1>
            <p className=" text-black font-semibold text-[15px] text-wrap">
              {caption}
            </p>
        </div>
        <div className="carousel-item ">
          <Image
            alt=""
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <Image
            alt=""
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <Image
            alt=""
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
      </div>
    </>
  );
};
