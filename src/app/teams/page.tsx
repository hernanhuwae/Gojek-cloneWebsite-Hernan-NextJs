import { getOurTeam } from "@/components/user";
import gojek from "../../../public/foto/gojek.png";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import Image from "next/image";
import { json } from "stream/consumers";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

export default async function Teams() {
  let randomuser = await getOurTeam();
  randomuser.results[0].images = gojek;
  console.log(randomuser.results[0].images);

  return (
    <>
      <div className="bg-[#101820] flex flex-col  min-w-[500px]">
        {/* Section 1: Header */}
        <div className="flex  w-full justify-between items-center px-8 py-8 bg-[#101820] z-[10]">
          <ul className="flex items-center gap-2 ">
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

          <ul className="max-sm:hidden flex gap-1 text-white text-[1rem] font-semibold ">
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/"}>Homepage</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/product"}>Product</Link>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className=" w-full mt-32">
          <h1 className="text-white font-extrabold text-center my-4 text-[50px]">
            TIM KAMI
          </h1>
          <p className="text-white text[1.2rem] px-16 p text-center">
            Selamat datang di blog resmi Gojek! Kami ingin mengenalkan kepada
            Anda tim kami yang penuh semangat dan berdedikasi untuk membawa
            layanan terbaik kepada Anda setiap hari. Mari kita kenali lebih
            dekat siapa saja yang berada di balik layanan yang Anda nikmati:
          </p>
          <div className="flex my-16 mx-8 flex-wrap justify-center">
            {randomuser.results.map((getData, index) => {
              return (
                <div key={index}>
                  <div
                    data-aos="zoom-in"
                    className="flex bg-[#00aa14dd] items-center p-4 mb-3  mx-4 my-2 rounded-xl"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="w-24 h-24 rounded-full object-cover"
                        src={getData.picture.large}
                        width="100"
                        height="100"
                        alt="image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="mb-2 font-bold text-white text-[1.2rem]">
                        {getData.name.first} {getData.name.last}
                      </p>
                      <p className="my-2 text-medium text-[#101820]">
                        {getData.email}
                      </p>
                      <p className="flex gap-2 items-center text-bold text-[#101820]">
                        <IoMdCall color="black" size={15} />
                        {getData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
