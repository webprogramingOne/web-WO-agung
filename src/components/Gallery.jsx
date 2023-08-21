import { useState } from "react";

import { IoPricetagsSharp } from "react-icons/io5";
import { RiVipCrownFill } from "react-icons/ri";
const Gallery = () => {
  const dekorasi = [
    {
      type: "Vip1",
      img: "../pelaminan1.jpg",
      desc: "Lorem ",
    },
    {
      type: "Vip2",
      img: "../pelaminan2.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "../pelaminan3.jpeg",
      desc: "Lorem ipsum dolor ",
    },

    {
      type: "Vip4",
      img: "../pelaminan-4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip6",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip7",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip8",
      img: "../pelaminan4.jpeg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const tenda = [
    {
      type: "Vip1",
      img: "../card1.jpeg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "../banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const hena = [
    {
      type: "Vip1",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];
  const photography = [
    {
      type: "Vip12",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip2",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip3",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
    {
      type: "Vip4",
      img: "./banner.jpg",
      desc: "Lorem ipsum dolor ",
    },
  ];

  const [gal, setGal] = useState(dekorasi);

  const TgalAria = (index) => {
    setGalAria(index);
  };
  const [galAria, setGalAria] = useState(1);
  const toggleGalery = (index) => {
    setGal(index);
  };
  return (
    <div
      className="absolute w-full mt-[50px] lg:mt-[50px] bg-white drop-shadow"
      id="toggle"
    >
      <h1 className="text-2xl font-semibold ml-12 pt-5 text-center">
        {" "}
        Temukan pilihan menarik disini
      </h1>
      <div className="flex pb-8 gap-8 text-lg lg:text-xl mt-5 flex-row overflow-auto text-gray-400 lg:justify-center w-full">
        <div
          className={
            galAria === 1
              ? " text-blue-600 underline underline-offset-8 decoration-4 text-center "
              : " hover:text-blue-600 text-center"
          }
          onClick={() => TgalAria(1)}
        >
          <a
            className={
              gal === dekorasi
                ? "ml-6  text-blue-600 "
                : "ml-6  hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(dekorasi)}
          >
            Pelaminan
          </a>
        </div>{" "}
        <div
          className={
            galAria === 2
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600"
          }
          onClick={() => TgalAria(2)}
        >
          <a
            className={
              gal === tenda
                ? " text-blue-600"
                : " hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(tenda)}
          >
            Tenda
          </a>
        </div>
        <div
          className={
            galAria === 3
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600"
          }
          onClick={() => TgalAria(3)}
        >
          <a
            className={
              gal === hena
                ? " text-blue-600"
                : " hover:text-blue-600 cursor-pointer  "
            }
            onClick={() => toggleGalery(hena)}
          >
            Hena{" "}
          </a>
        </div>
        <div
          className={
            galAria === 4
              ? " text-blue-600 underline underline-offset-8 decoration-4"
              : " hover:text-blue-600  "
          }
          onClick={() => TgalAria(4)}
        >
          <a
            className={
              gal === photography
                ? " text-blue-600"
                : "mr-4 hover:text-blue-600 cursor-pointer "
            }
            onClick={() => toggleGalery(photography)}
          >
            Photography
          </a>
        </div>
      </div>

      <hr id="hr" />
      <div className="galerry w-full  " id="myGalery">
        <div className="flex-row pb-8 gap-4  text-lg lg:text-xl mt-5   text-gray-400 w-full">
          <div className="w-full    flex overflow-auto  lg:ml-0">
            <div className="flex overflow-auto ">
              {gal.map((item) => {
                return (
                  <div
                    key={item.type}
                    className=" mt-5 mb-3 lg:mb-5 p-4 transition ease-in-out delay-150  hover:-translate-y-5 duration-300"
                  >
                    <div className=" w-[400px] ">
                      <img
                        src={item.img}
                        alt=""
                        className="h-[200px] lg:h-[300px] rounded-lg bg-cover "
                      />
                      <div className=" flex mt-3">
                        <h3 className="font-semibold text-lg  text-blue-800  flex  ">
                          <RiVipCrownFill className="text-xl mr-2" />
                          {item.type}
                        </h3>
                        <p className="ml-20 gap-2 flex items-center">
                          <IoPricetagsSharp />
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
