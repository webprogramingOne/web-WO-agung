const Service = () => {
  return (
    <div className="pt-10 " id="order">
      {" "}
      <hr className="mb-4" />
      <h1 className="text-center text-xl lg:text-3xl font-semibold mb-4">
        Mengapa anda harus memilih kami ?
      </h1>
      <div className="w-full lg:flex md:flex">
        <div className="w-1/2 ml-10 items-center justify-items-center place-content-center text-lg lg:text-2xl">
          <h1 className=" text-blue-900 font-semibold">
            Kami menyediakan paket lengkap
          </h1>
          <ul className=" text-lg pt-4">
            <li>Pelaminan</li>
            <li>Tenda</li>
            <li>Undangan</li>
            <li>Henna</li>
            <li>Makeup</li>
            <li>Photografer</li>
            <li>Orgen</li>
          </ul>
        </div>
        <div className="w-1/2 ml-10 items-center justify-items-center place-content-center text-lg lg:text-2xl mt-4 lg:mt-0">
          <h1 className="  text-blue-900 font-semibold">
            Keuntungan yang akan kamu dapatkan
          </h1>
          <ul className=" text-lg pt-4">
            <li>Lebih Murah</li>
            <li>Gak ribet kesana kemari</li>
            <li>Bayar disatu tempat</li>
            <li>Bisa fokus pada persiapan acara pernikahan</li>
            <li>Tentunya gak terjebak permainan owner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Service;
