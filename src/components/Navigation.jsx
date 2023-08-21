/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
function Navigation() {
  const [togleState, setTotgleState] = useState(1);
  const [menu, setMenu] = useState(1);
  const toggleTab = (index) => {
    setTotgleState(index);
  };
  const menuSet = (index) => {
    setMenu(index);
  };
  return (
    <div className="navigasi w-full lg:flex fixed top-0 left-0 right-0 z-20 items-center py-4 mb-12 bg-white">
      <div className="w-full logo ml-6 mr-22 lg:mr-[100px] mt-3 flex  items-center lg:mt-0">
        <a
          href=""
          className="mx-5  text-lg  flex justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 duration-300 "
        >
          <strong className="lg:text-3xl font-bold text-xl text-blue-900 ">
            WOAgungMB
          </strong>
          {"  "}
          <span className="mx-1 "> Sarolangun</span>
        </a>
        <a
          href="#"
          className={
            menu === 1
              ? "hover:text-blue-600 text-2xl transition ease-in-out delay-150 hover:scale-150 duration-300 mr-4 lg:hidden"
              : "hidden"
          }
          onClick={() => menuSet(2)}
        >
          <IoIosMenu />
        </a>
        <a
          href="#"
          className={
            menu === 2
              ? "hover:bg-slate-400 lg:hidden z-10 text-2xl mr-4"
              : "hidden"
          }
          onClick={() => menuSet(1)}
        >
          <IoMdClose />
        </a>
      </div>

      <div
        className={
          menu === 1
            ? "hidden lg:flex"
            : "absolute py-[1000px] -mr-4 -mt-10 lg:mt-10 lg:py-0 transition ease-in items-center justify-center pt-6 bg-white shadow-lg max-w-[250px] w-[150px] right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
        }
      >
        <a
          href="#"
          className={
            togleState === 1
              ? "ml-[20px] text-blue-600 underline underline-offset-8"
              : "ml-[20px] text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(1)}
        >
          Home
        </a>
        <a
          className={
            togleState === 2
              ? "mx-5 py-2 lg:py-0 text-blue-600 block underline underline-offset-8"
              : "mx-5 py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
          }
          href="#order"
          onClick={() => toggleTab(2)}
        >
          Order
        </a>
        <a
          href="#myGalery"
          className={
            togleState === 3
              ? "mx-5 text-blue-600 block underline underline-offset-8"
              : "mx-5 text-slate-600 block transition ease-in-out delay-150  hover:-translate-y-1  hover:text-blue-600 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(3)}
        >
          Galery
        </a>
        <a
          href="#testimoni"
          className={
            togleState === 4
              ? "mx-5 py-2 lg:py-0 text-blue-600 block underline underline-offset-8"
              : "mx-5 py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150   hover:text-blue-600 hover:-translate-y-1 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(4)}
        >
          Testimoni
        </a>
        <a
          href="#testimoni"
          className={
            togleState === 8
              ? "mx-5 py-2 lg:py-0 text-blue-600 block underline underline-offset-8"
              : "mx-5 py-2 lg:py-0 text-slate-600 block transition ease-in-out delay-150   hover:text-blue-600 hover:-translate-y-1 lg:hover:scale-150 duration-300"
          }
          onClick={() => toggleTab(8)}
        >
          Question
        </a>
        <a
          href="#"
          className={
            togleState === 5
              ? "mx-5 text-blue-600 underline underline-offset-8"
              : "mx-5 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-150 duration-300 hover:text-blue-600  "
          }
          onClick={() => toggleTab(5)}
        >
          Contact
        </a>
        <div className="lg:ml-[160px] lg:flex mt-[100px] lg:mt-0">
          <a
            href="/masuk"
            className={
              togleState === 6
                ? "lg:mx-5   text-white bg-blue-800 lg:rounded-full py-2 px-[50px] lg:px-4"
                : "lg:mx-5  text-left lg:border-2 bg-gray-200 px-[50px] border-gray-200 lg:bg-white lg:rounded-full py-2 lg:px-4 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-130 duration-300 hover:text-blue-600 "
            }
            onClick={() => toggleTab(6)}
          >
            Masuk
          </a>
          <hr className="lg:hidden" />
          <div className="lg:flex mt-[20px] lg:mt-0">
            <a
              href="#"
              className={
                togleState === 7
                  ? "lg:mx-5   text-white bg-blue-800 lg:rounded-full py-2 px-[50px] lg:px-4"
                  : "lg:mx-5  text-left lg:border-2 bg-gray-200 px-[50px] border-gray-200 lg:bg-white lg:rounded-full py-2 lg:px-4 text-slate-600 transition ease-in-out delay-150  hover:-translate-y-1 lg:hover:scale-130 duration-300 hover:text-blue-600  "
              }
              onClick={() => toggleTab(7)}
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
