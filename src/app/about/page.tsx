import gojek from "../../../public/foto/gojek.png";
import bg from "../../../public/foto/about.jpg";
import pilar1 from "../../../public/foto/pilar1.svg";
import pilar2 from "../../../public/foto/pilar2.svg";
import pilar3 from "../../../public/foto/pilar3.svg";
import bggojek from "../../../public/foto/bg-gojek.gif";
import Image from "next/image";
import nadiem from "../../../public/foto/Nadiem_Renovasi_Ruangan_Kerja_Senilai_Rp_5_M_saat_Rakyat_Masih_Menderita__Punya_Hati_Gak_Pak_-removebg-preview.png";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
    <div className="w-full min-w-[500px]">
    <div className="flex flex-col">
        {/* Section 1: Header */}
        <div className="flex fixed w-full justify-between items-center px-8 py-8 bg-[#101820] z-[10]">
          <ul className="flex items-center gap-2">
            <div className="w-[30px]">
              <Link href={"/"}><Image src={gojek} alt="logo gojek"></Image></Link>
            </div>
            <h2 className="text-white text-[25px] font-bold">INOICAIN</h2>
          </ul>{/* DRAWER BAR FOR MOBILE AJA */}
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
                  <li className="text-[1.3rem] font-semibold hover:underline cursor-pointer text-white my-4"><Link href={"/product"}>Product</Link></li>
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
              <Link href={"/product"}>Product</Link>
            </li>
            <li className="hover:rounded-full hover:bg-[#3c5269] p-4 cursor-pointer">
              <Link href={"/teams"}>Teams</Link>
            </li>
          </ul>
        </div>

        {/* Section 2: Image */}
        <div className="w-full ">
          <Image src={bg} alt=""></Image>
        </div>

        {/* Section 3: Konten*/}
        <div className="w-full h-screen  bg-white flex flex-col">
          <div className="h-[150PX]  border-white w-full bg-[#101820] flex justify-center items-center ">
            <h1 className="text-white font-extrabold text-[50px]">MILESTONE</h1>
          </div>

          <h1 className="text-[#101820] font-extrabold text-[50px] text-center mt-8 mb-16">
            Tiga Pilar Gojek
          </h1>
          <div data-aos="zoom-in" className="flex px-16 gap-4 justify-center">
            <div className="bg-[#ff808b] flex flex-col text-black rounded-[25px]">
              <h1 className="m-4  font-bold text-center">Inovasi</h1>
              <p className="m-4 text-center">
                Menyelesaikan masalah dalam skala besar
              </p>
              <Image className="mt-6" src={pilar1} alt=""></Image>
            </div>
            <div className="bg-[#ffae62] flex flex-col text-black rounded-[25px]">
              <h1 className="m-4 text-center font-bold">Dampak Sosial</h1>
              <p className="m-4 text-center">
                Menstransformasi hidup,menginspirasi perubahan
              </p>
              <Image className="mt-6" src={pilar2} alt=""></Image>
            </div>
            <div className="bg-green-400 flex flex-col text-black rounded-[25px]">
              <h1 className="m-4 text-center font-bold">Kecepatan</h1>
              <p className="m-4 text-center">
                Bergerak cepat mendorong batasan
              </p>
              <Image className="mt-6" src={pilar3} alt=""></Image>
            </div>
          </div>
        </div>

        {/* Section 4: Konten history*/}
        <div className="flex h-auto bg-[#011f4b] items-center gap-4 max-md:flex-col">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="rounded-full p-8 w-[450px] h-[400px] mx-12"
            src={nadiem}
            alt=""
          ></Image>
          <div data-aos="zoom-in"   data-aos-duration="1500" className=" flex flex-col ">
            <h1 className=" text-[50px] text-center font-bold text-[#F7EEDD]">
              Nadiem Makarim
            </h1>
            <p className="m-8 text-center text-wrap text-[#FBF3D5] text-[18px]">
              Gojek didirikan oleh Nadiem Makarim, warga negara Indonesia
              lulusan Master of Business Administration dari Harvard Business
              School. Ide mendirikan Gojek muncul dari pengalaman pribadi Nadiem
              Makarim menggunakan transportasi ojek hampir setiap hari ke tempat
              kerjanya untuk menembus kemacetan di Jakarta.[8] Saat itu, Nadiem
              masih bekerja sebagai Co-Founder dan Managing Director Zalora
              Indonesia dan Chief Innovation Officer Kartuku.
            </p>
          </div>
        </div>

        {/* Section 4: Konten Teams*/}
        <h1 className="text-[50px] py-8 font-bold text-[#F7EEDD] text-center">DIVISION TEAMS</h1>

        <div className="flex h-auto items-center gap-4 max-md:flex-col">
          <Image
            data-aos="zoom-in"
            className="rounded-full p-8 w-[450px] h-[400px] mx-12"
            src={bggojek}
            alt=""
          ></Image>
          <div className=" flex flex-col ">
            <div className="flex">
            <ul data-aos="zoom-in" className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">CHIEF BRANDING GOJEK</time>
                  <div className="text-lg font-black">Lee Min Ho</div>
                  Lee lahir di Heukseuk-dong, Dongjak-gu, Seoul. Ketika masih kecil, Lee Min-ho bercita-cita untuk menjadi seorang pemain sepak bola profesional. Ia dipilih ke dalam kelas sepak bola khusus pemuda oleh mantan pemain profesional Cha Bum-kun, tetapi saat kelas 5 sekolah dasar, ia mengalami cidera dan terpaksa harus mengubur mimpinya untuk menjadi pemain sepak bola sejak saat itu.[1] Pada tahun kedua SMA-nya, Lee Min-ho mulai menjajal dunia akting.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">CHIEF PRODUCT GOJEK</time>
                  <div className="text-lg font-black">Song joong ki</div>
                  Song Joong-ki adalah seorang aktor, model, dan pembawa acara dari Korea Selatan. Dia mulai terkenal saat membintangi drama bersejarah Sungkyunkwan Scandal dan acara varietas Running Man sebagai salah satu anggota pemain awal ketika dimulai pada tahun 2010.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">CHIEF TECH GOJEK</time>
                  <div className="text-lg font-black">Kim So Hyun</div>
                  Kim So-hyun adalah aktris, pembawa acara, dan model asal Korea Selatan. Ia memulai kariernya sebagai aktris cilik ketika berusia tujuh tahun, dan mulai memperoleh kepopuleran pada tahun 2012 
                </div>
                <hr />
              </li>
              
            </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
