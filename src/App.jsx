import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import FormPesan from "./components/FormPesan";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import Service from "./components/Service";
function App() {
  return (
    <div className="font-primary w-full">
      <img
        src="./bg-nice.jpg"
        alt=""
        className="absolute h-[3000px] w-full bg-cover opacity-5 -z-20"
      />
      <div className=" scroll-smooth ">
        <Navigation />
        <Banner />
        <Service />
        <Gallery />
        <Testimoni />
        <hr />
        <FormPesan />

        <Footer />
      </div>
    </div>
  );
}
export default App;
