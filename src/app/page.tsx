"use client";

import Image from "next/image";
import gojek from "../../public/foto/gojek.png";
import kartun1 from "../../public/foto/kartun1.png";
import { CardGojek } from "@/components/achievement";
import { IButton } from "@/components/buttonshate";
import skala1 from "../../public/foto/skala1.png";
import { CardSkala } from "@/components/skalaCard";
import skala2 from "../../public/foto/skala2-removebg-preview.png";
import skala3 from "../../public/foto/skala3-removebg-preview.png";
import skala4 from "../../public/foto/skala4-removebg-preview.png";
import banner1 from "../../public/foto/1.jpg";
import banner2 from "../../public/foto/2.jpg";
import banner3 from "../../public/foto/3.jpg";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import mapindo from "../../public/foto/output.png";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { CarouselMobile } from "@/components/mobilecarousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-[#101820] w-full min-w-[500px]">
        {/* Section 1: Header */}
        <div className="flex fixed w-full  justify-between items-center px-8 py-8 bg-[#101820] z-[10]">
          <ul className="flex items-center gap-2">
            <div className="w-[30px]">
              <Image src={gojek} alt="logo gojek"></Image>
            </div>
            <h2 className="text-white text-[25px] font-bold">INOICAIN</h2>
          </ul>

          {/* DRAWER BAR FOR MOBILE AJA */}
          <div className="sm:hidden bg-[#101820]">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="bg-[#101820] border-2 border-[#101820] drawer-button btn btn-primary"
                >
                  <ul className="">
                    <li className="bg-white w-8 h-1 mb-1"></li>
                    <li className="bg-white w-8 h-1 mb-1"></li>
                    <li className="bg-white w-8 h-1 mb-1"></li>
                  </ul>
                </label>
              </div>
              <div className="drawer-side ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full text-center text-base-content bg-[#101820]">
                  {/* Sidebar content here */}
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer my-4">
                    <Link href={"/about"}>ABOUT</Link>
                  </li>
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer my-4">
                    <Link href={"/product"}>PRODUCT</Link>
                  </li>
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer my-4">
                    <Link href={"/teams"}>TEAMS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="hidden sm:flex gap-1 text-white text-[1rem] font-semibold ">
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/product"}>Product</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/teams"}>Teams</Link>
            </li>
          </ul>
        </div>

        {/* Section 2: Konten Header 1 */}
        <div className="pt-12">
          <div className="flex justify-center">
            <video
              height="h-screen"
              controls={false}
              loop={true}
              muted={true}
              autoPlay={true}
              className="w-[100%]"
            >
              <source src="/iklan/iklan2.mp4" type="video/mp4" />
            </video>
          </div>
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="text-[50px] text-white font-bold text-center pt-8"
          >
            Kenalin, Inoicain Sang
            <br />
            Life Changer!
          </h1>
          <div className="flex justify-center pt-5">
            <IButton desc="Gabung" />
          </div>
          <div className="flex pt-16 pb-44 justify-center gap-4 px-8 max-md:flex-wrap">
            <CardGojek
              gambar={kartun1}
              caption="Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune"
              desc="Fortune 20"
              className="bg-white"
            />
            <CardGojek
              gambar={kartun1}
              caption="Penggerak roda perekonomian Indonesia"
              desc="Berkontribusi lebih dari $7.1 triliun "
              className="bg-white"
            />
            <CardGojek
              gambar={kartun1}
              caption="Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020"
              desc="Jaket hijau, pergerakan juga hijau"
              className="bg-white"
            />
            <CardGojek
              gambar={kartun1}
              caption="Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM."
              desc="Tumbuh 80% sejak pandemi"
              className="bg-white"
            />

            {/* Bagian Carousel Mobile */}
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box md:hidden">
              <div className="carousel-item">
                <div className="flex flex-col bg-green-400 rounded-xl p-4">
                  <Image
                    width={300}
                    alt=""
                    src={kartun1}
                    className="rounded-box"
                  />
                  <h1 className="  text-white font-semibold text-wrap text-[15px] group-hover:text-white">
                    Mendukung kesejahteraan mitra pengemudi dan <br/> pedagang dengan kesempatan ekonomi yang adil.
                  </h1>
                  <p className=" text-white font-semibold text-[15px] text-wrap text-center">
                    
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex flex-col bg-blue-400 rounded-xl p-4">
                  <Image
                    width={300}
                    alt=""
                    src={kartun1}
                    className="rounded-box"
                  />
                  <h1 className="  text-white font-semibold text-wrap text-[15px] group-hover:text-white">
                    Memberikan solusi transportasi yang aman, <br /> nyaman, dan
                    terjangkau bagi semua
                  </h1>
                  <p className=" text-white font-semibold text-[15px] text-wrap text-center">
                    
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex flex-col bg-red-400 rounded-xl p-4">
                  <Image
                    width={300}
                    alt=""
                    src={kartun1}
                    className="rounded-box"
                  />
                  <h1 className="  text-white font-semibold text-wrap text-[15px] group-hover:text-white">
                    Memperluas akses terhadap layanan keuangan <br/> digital untuk mendorong inklusi finansial
                  </h1>
                  <p className=" text-white font-semibold text-[15px] text-wrap text-center">
                   
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex flex-col bg-yellow-400 rounded-xl p-4">
                  <Image
                    width={300}
                    alt=""
                    src={kartun1}
                    className="rounded-box"
                  />
                  <h1 className="  text-white font-semibold text-wrap text-[15px] group-hover:text-white">
                    Penggerak roda perekonomian Indonesia
                  </h1>
                  <p className=" text-white font-semibold text-[15px] text-wrap text-center">
                    Berkontribusi lebih dari $7.1 triliun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Konten Header 2 */}
        <div className="flex flex-col  bg-white rounded-[15%] item-center my-4 px-12 pt-16 pb-24">
          <h1
            data-aos="fade-right"
            data-aos-duration="1700"
            className="justify-center text-black text-[50px] font-bold text-center mb-8"
          >
            SKALA KAMI
          </h1>
          <div className="flex justify-center">
            <IButton desc="Gabung" />
          </div>
          <div className="flex max-lg:flex-wrap pt-9 gap-2 border-2 justify-center">
            <CardSkala
              gambar={skala1}
              desc="190 juta+"
              caption="jumlah install aplikasi kami."
              className="bg-green-500"
            />
            <CardSkala
              gambar={skala2}
              desc="2 juta+"
              caption="mitra Driver yang sudah bergabung dengan kami."
              className="bg-[#d48bc8]"
            />
            <CardSkala
              gambar={skala3}
              desc="900.000+"
              caption="jumlah mitra GoFood."
              className="bg-[#ffae62]"
            />
            <CardSkala
              gambar={skala4}
              desc="2.448x"
              caption="lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020"
              className="bg-[#4ac9e3]"
            />
          </div>
        </div>

        {/* Section 3: Konten Header 2 */}
        <div className="h-screen  bg-[#1e2c3b] p-12 max-sm:p-4 max-sm:mt-0 mt-4">
          <div className="flex-col flex items-center">
            <h1
              data-aos="zoom-in"
              className="text-white text-center max-sm:text-[45px] text-[50px] leading-[100%] font-bold text-wrap max-w-max"
            >
              Bertumbuh besar bersama
              <br />
              <span className="font-bold text-green-500">INOICAIN</span>
            </h1>
          </div>
          <div className=" px-8 pt-16 max-sm:pt-0 ">
            <div className="carousel h-[350px] group rounded-[5%] ">
              <div
                id="slide1"
                className="carousel-item relative w-full  flex-col justify-center items-center text-[48px]"
              >
                <Image
                  src={banner1}
                  alt=""
                  className=" w-full group-hover:opacity-50 items-start object-cover "
                />
                <h2 className=" group-hover:text-white font-medium group-hover:text-lg group-hover:absolute group-hover: hidden group-hover:block">
                  Memberikan layanan transportasi di seluruh daerah Indonesia
                  untuk mobilitas yang lebih cepat
                </h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="slide2"
                className="carousel-item relative w-full flex-col justify-center items-center"
              >
                <Image
                  alt=""
                  src={banner2}
                  className="w-full group-hover:opacity-50 object-cover "
                />
                <h2 className=" group-hover:text-white font-extrabold text-[4rem] group-hover:text-lg group-hover:absolute hidden group-hover:block">
                  Merancang sebuah aplikasi layanan kami yang mudah digunakan
                  untuk pengguna
                </h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div
                id="slide3"
                className="carousel-item relative w-full flex-col justify-center items-center"
              >
                <Image
                  alt=""
                  src={banner3}
                  className="w-full group-hover:opacity-50 object-fill "
                />
                <h2 className=" group-hover:text-white font-extrabold text-[4rem] group-hover:text-lg group-hover:absolute hidden group-hover:block">
                  Meningkatkan mutu teknologi kamu untuk memudahkan pengguna
                  diselutuh Indonesia
                </h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle"></a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Konten middle  */}
        <div className="h-screen bg-[#00b4d8] pt-8 z-[5]">
          <div className="flex flex-col items-center">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="text-[#101820] text-center text-[36px] mt-8 font-extrabold"
            >
              INDONESIA
            </h1>
            <div className="flex flex-col items-center h-[25px] mx-16">
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="text-black text-[28px] max-sm:text-[18px] text-center text-wrap px-8 pt-5 mb-5 font-serif"
              >
                pada tahun 2019 go-jek berkontribusi hingga 1 triliun bagi
                ekonomi Indonesia membantu pembukaan lapangan kerja peningkatan
                pendapatan dan kualitas hidup
              </p>
              <IButton desc="Newsroom" />
              <Image className="pt-8" width={300} src={mapindo} alt=""></Image>
            </div>
          </div>
        </div>

        {/* REVIEW */}
        <div className="w-full min-w-[500px] overflow-x-hidden">
          <h1 className="text-center font-extrabold text-2xl my-10 mb-10">
            PRODUCT REVIEW
          </h1>
          <div className="chat chat-start lg:px-16 px-5">
            <div
              data-aos="fade-right"
              className="chat-bubble text-sm bg-blue-400 text-white"
            >
              <h1 className="font-bold text-lg">Hernan Huwae</h1>
              <div className="flex flex-row items-center">
                <h1>Rating:</h1>
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <h1 className="ml-1">5/5</h1>
              </div>
              <h1 className="text-justify">
                Review: "Gojek is a godsend! Whether it's a last-minute ride or
                a quick food delivery, they always come through. The app is
                user-friendly, and their drivers are prompt and professional.
                Can't imagine life without it!"
              </h1>
            </div>
          </div>
          <div className="chat chat-end lg:mx-16 mx-5">
            <div
              data-aos="fade-left"
              className="chat-bubble text-sm bg-red-400 text-white"
            >
              <h1 className="font-bold text-lg">Putri Ramadhani</h1>
              <div className="flex flex-row items-center">
                <h1>Rating:</h1>
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStarHalf color="yellow" />
                <h1 className="ml-1">4.5/5</h1>
              </div>
              <h1 className="text-justify">
                Review: "Gojek makes urban living a breeze! I've been using
                their services for everything – from commuting to work to
                picking up groceries. It's like having a personal assistant in
                my pocket. Love the convenience!"
              </h1>
            </div>
          </div>
          <div className="chat chat-start lg:mx-16 mx-5">
            <div
              data-aos="fade-right"
              className="chat-bubble text-sm bg-purple-500 text-white"
            >
              <h1 className="font-bold text-lg">Bang Arief</h1>
              <div className="flex flex-row items-center">
                <h1>Rating:</h1>
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar />
                <h1 className="ml-1">4/5</h1>
              </div>
              <h1 className="text-justify">
                Review: "Gojek is my go-to for convenience! Their app is
                intuitive, their drivers are friendly, and their delivery
                service is lightning-fast. They've saved me countless times when
                I needed something urgently. Highly recommend!"
              </h1>
            </div>
          </div>
          <div className="chat chat-end lg:mx-16 mx-5">
            <div
              data-aos="fade-left"
              className="chat-bubble text-sm bg-orange-400 text-white mb-10"
            >
              <h1 className="font-bold text-lg">Bang Tyoo</h1>
              <div className="flex flex-row items-center">
                <h1>Rating:</h1>
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar color="yellow" />
                <IoMdStar />
                <h1 className="ml-1">4/5</h1>
              </div>
              <h1 className="text-justify">
                Review: "I'm a loyal Gojek user and for good reason! Their
                service is consistently reliable, their prices are competitive,
                and their range of offerings is impressive. Whether it's a ride,
                a meal, or a package delivery, Gojek has got me covered!"
              </h1>
            </div>
          </div>
        </div>

        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded z-[5]">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Product</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2024 - All right reserved by INOICAIN Corp.</p>
          </aside>
        </footer>
      </div>
    </>
  );
}
