import Link from "next/link";
import gojek from "../../../public/foto/gojek.png";
import Image from "next/image";
import bg from "../../..//public/foto/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
import animasigo from "../../../public/foto/huhuy.png";
import icon from "../../../public/foto/Gojek_Icon_Black-removebg-preview.png";
import { CardProduct } from "@/components/cardproduct";
import { CardProduct2 } from "@/components/cardproduct2";
import { CardProduct3 } from "@/components/cardproduct3";
import { CardProduct4 } from "@/components/cardproduct4";
import { IButton } from "@/components/buttonshate";

export default function AboutPage() {
  return (
    <> 
      <div className="w-full min-w-[500px] bg-[#101820]">
        <div className="flex fixed w-full justify-between items-center px-8 py-8 bg-[#101820] z-[10]">
          <ul className="flex items-center gap-2">
            <div className="w-[30px]">
              <Link href={"/"}><Image src={gojek} alt="logo gojek"></Image></Link>
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
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer text-white my-4"><Link href={"/"}>Homepage</Link></li>
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer text-white my-4"><Link href={"/about"}>About</Link></li>
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer text-white my-4"><Link href={"/teams"}>Teams</Link></li>
                  
                </ul>
                
              </div>
            </div>
          </div>

          <ul className="max-sm:hidden flex gap-1 text-white text-[1rem] font-semibold ">
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/"}>Homepage</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/teams"}>Teams</Link>
            </li>
          </ul>
        </div>

        {/* Section 2: Image */}
        <div className="w-full ">
          <Image height={1300} src={bg} alt=""></Image>
        </div>
      </div>

      <div className="min-w-[500px] h-screen">
        <div className="h-[150PX]  border-white  bg-[#101820] flex justify-center items-center ">
          <h1 data-aos="fade-in" data-aos-duration="1000" className="text-white font-extrabold text-[50px]">PRODUK KAMI</h1>
        </div>
        <div
          data-aos="zoom-in"  data-aos-duration="1700"
          className="flex justify-center max-lg:flex-wrap gap-4 px-8 min-w-[500px] py-8 bg-[#101820]"
        >
          <CardProduct
            item1="GoRide"
            item2="GoCar"
            item3="GoBluebird"
            item4="GoBox"
            title="Transportasi & Logistik"
            caption="we done came that down 13,000 trips between the Earth and the Moon"
          />
          <CardProduct2
            item1="GoPay"
            item2="GoTagihan"
            item3="GoPayLater"
            item4="GoSure"
            title="Payments"
            caption="From deals to donations, we make transacation, we make transaction easy, reliable, and cashless"
          />
          <CardProduct3
            item1="GoFood"
            item2="GoMed"
            item3="GoMart"
            item4="GoShop"
            title="Food & Shopping"
            caption="Fill your cart with food, electronics,medicines, and more"
          />
          <CardProduct4
            item1="GoBiz"
            item2="Moka"
            item3="GoStore"
            title="Business"
            caption="Manage your restaurant,run ads,do any promotions"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center">
            <h1 data-aos="fade-in" data-aos-duration="1100" className="text-[#101820] text-[30px] my-3 font-extrabold">LOYALTY GOJEK PRODUK</h1>
            <p data-aos="zoom-in" data-aos-duration="1500" className="text-[#101820] text-[18px] mb-5">Make more transactions, get more rewards!</p>
            <IButton data-aos="zoom-in" data-aos-duration="1500" desc="Join Us"/>
            <Image data-aos="zoom-in" data-aos-duration="1500" className="mx-8" src={animasigo} alt=""/>
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
