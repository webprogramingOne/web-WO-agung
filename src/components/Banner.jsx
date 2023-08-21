import { FcCamera, FcHome, FcBusinesswoman, FcLibrary } from "react-icons/fc";
const Banner = () => {
  return (
    <div className=" relative  bg-gray-500">
      <div className="relative w-full ">
        <img
          src="../banner.jpeg"
          alt=""
          className="absolute background-image   w-full h-[400px] lg:h-[650px]  shadow-lg"
        />
        <div className=" absolute  w-full  lg:h-[500px] z-10 text-center ">
          <h1 className="lg:text-5xl mt-[100px] lg:mt-[200px] text-3xl justify-center font-bold text-white ">
            {" "}
            Cari Jasa WO?
          </h1>
          <h3 className="lg:text-4xl text-lg text-white font-bold my-3">
            WO Agung MB solusinya
          </h3>
          <p className="lg:text-xl text-slate-200">
            Harga Terjangkau 100% amanah
          </p>
          <button className=" items-center mt-6  bg-blue-500 shadow-lg  shadow-blue-500/50 px-7 py-3 rounded-full   text-sm text-white  lg:mt-12 hover:bg-white hover:text-blue-700 ">
            Tentukan Pilihamu
          </button>
          <div className=" mt-10 lg:mt-20  justify-center flex gap-6">
            <FcCamera className="text-4xl bg-white rounded-full p-2 " />
            <FcHome className="text-4xl bg-white rounded-full p-2" />
            <FcBusinesswoman className="text-4xl bg-white rounded-full p-2" />
            <FcLibrary className="text-4xl bg-white rounded-full p-2 " />
          </div>
        </div>
      </div>
      <div className="relative bg-blue-800 opacity-90 w-full h-[400px] lg:h-[650px] "></div>
    </div>
  );
};
export default Banner;
