import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./assets/styles/global.css";
import Parallax from "./components/parallax/Parallax.jsx";
import Aspects from "./components/aspects/Aspects.jsx";
import Technologies from "./components/tech/Technologies.jsx";
import Etaps from "./components/etaps/Etaps.jsx";
import { useEffect, useRef, useState } from "react";
import TypesMain from "./components/typesMain/TypesMain.jsx";

function App() {
  const techRef = useRef(null);
  const importantRef = useRef(null);
  const keysRef = useRef(null);
  const moreRef = useRef(null);
  const typesRef = useRef(null);

  const [gg, setgg] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 900) {
      setgg(true);
    } else {
      setgg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header
        moreRef={moreRef}
        keysRef={keysRef}
        importantRef={importantRef}
        techRef={techRef}
        typesRef={typesRef}
      />
      <div className="w-full flex flex-col justify-start items-center z-10">
        <Parallax />
        <p className="py-6" ref={importantRef}></p>
        <div
          id="important"
          className="w-full md:w-[80%] px-4 md:px-0 min-h-[600px]"
        >
          <h1 className="text-[30px] my-8 lg:my-16 font-bold text-[#131313]">
            Важность аудита
          </h1>
          <div className="flex flex-col gap-8 lg:flex-row justify-between my-8">
            <Aspects />
          </div>
        </div>
        <p className="py-6" ref={techRef}></p>
        <div className="w-full flex justify-center bg-[#fbfbfd]">
          <div className="w-full md:w-[80%] px-4 md:px-0 ">
            <h1 className="text-[30px] my-8 lg:my-16 font-bold text-[#000]">
              Использованные технологий
            </h1>
            <div className="flex flex-col gap-8 lg:flex-row justify-between my-8">
              <Technologies />
            </div>
          </div>
        </div>
        <p className="py-6" ref={typesRef}></p>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-[80%] px-4 md:px-0 ">
            <h1 className="text-[26px] my-8 lg:my-16 font-bold text-[#000]">
              Виды аудита в информационной безоспасноти
            </h1>
            <div className="flex flex-col gap-8 lg:flex-row justify-between my-8">
              <TypesMain />
            </div>
          </div>
        </div>
        <p className="py-6" ref={keysRef}></p>
        <div className="w-full min-h-[200px] flex flex-col items-center  ">
          <div className="w-full md:w-[80%] px-2 md:px-0">
            <p className="text-[30px] my-8 lg:my-16 font-bold text-[#000]">
              Ключевые этапы аудита
            </p>
            <Etaps />
          </div>
        </div>
        <div className="w-full h-[200px] bg-[#1b1b1b] flex justify-center items-center text-white text-lg md:text-2xl text-center font-semibold">
          <p>Аудит — это инструмент развития и защиты компании.</p>
        </div>
        <p className="py-8" ref={moreRef}></p>
        <div className="w-full min-h-[200px] flex flex-col items-center gap-6 my-6">
          <p className="text-xl font-semibold">Узнать больше</p>
          <div className="w-full px-2 sm:w-[80%] md:w-[60%] flex flex-col gap-6">
            <div className="w-full flex gap-6">
              <input
                className="w-full border-b focus:outline-0 py-4 rounded-lg ps-4"
                placeholder="Введите имя"
                type="text"
                name="name"
                id="name"
              />
              <input
                className="w-full border-b focus:outline-0 py-4 rounded-lg ps-4"
                placeholder="Введите почту"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <textarea
              placeholder="Сообщение"
              className="w-full min-h-[150px] border-b rounded-lg focus:outline-0 ps-4"
            ></textarea>
            <button
              className=" px-8 py-3 border border-blue-600 rounded cursor-pointer
            font-bold hover:bg-blue-600 hover:text-white duration-200 text-blue-600"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
      {gg && (
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed flex justify-center items-center z-50 right-[20px] bottom-[20px] w-[50px] h-[50px] md:right-[50px] md:h-[80px] cursor-pointer rounded-[50%]
        md:w-[80px] md:bottom-[50px] bg-white border border-black"
        >
          <p className="text-[40px]">↑</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
