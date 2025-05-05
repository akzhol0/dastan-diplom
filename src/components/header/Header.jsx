import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ techRef, importantRef, keysRef, moreRef, typesRef }) => {
  const [burger, setBurger] = useState(false);

  return (
    <div className="sticky top-0 w-full h-[70px] flex justify-center items-center bg-[#FBFBFD] border-b z-50">
      <div className="w-[1600px] relative px-4 md:px-8 flex justify-between">
        <p className="brand text-[40px] font-bold text-[#2b2b2b] cursor-pointer">
          Dastan
        </p>
        <ul className="hidden lg:flex items-center justify-between lg:gap-6 z-60 text-lg whitespace-nowrap">
          <li className="cursor-pointer border-b border-white hover:border-black duration-200">
            <button
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                importantRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Важность аудита
            </button>
          </li>
          <li className="cursor-pointer border-b border-white hover:border-black duration-200">
            <button
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                techRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Технологии
            </button>
          </li>
          <li className="cursor-pointer border-b border-white hover:border-black duration-200">
            <button
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                keysRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Ключевые этапы
            </button>
          </li>
          <li
            onClick={() => setBurger(false)}
            className="cursor-pointer border-b border-white hover:border-black duration-200"
          >
            <button
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                typesRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Виды аудита
            </button>
          </li>
          <button
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              moreRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-2 text-white bg-blue-600 rounded cursor-pointer
            font-bold"
          >
            Узнать больше
          </button>
          <p className="hidden xl:block">+7 (778) 311 61-62</p>
        </ul>
        <div
          onClick={() => setBurger(!burger)}
          className="w-[30px] h-[30px] mt-4 flex lg:hidden flex-col items-center justify-between cursor-pointer"
        >
          <span className="w-full h-1 bg-black"></span>
          <span className="w-full h-1 bg-black"></span>
          <span className="w-full h-1 bg-black"></span>
        </div>
        {burger && (
          <div className="lg:hidden absolute top-[65px] left-0 w-full min-h-[10px] bg-white">
            <ul className="flex flex-col lg:hidden py-4 items-center justify-center gap-4 sm:gap-8 text-xl border-b border-black whitespace-nowrap">
              <li
                onClick={() => setBurger(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    importantRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Важность аудита
                </button>
              </li>
              <li
                onClick={() => setBurger(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    techRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Технологии
                </button>
              </li>
              <li
                onClick={() => setBurger(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    keysRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Ключевые этапы
                </button>
              </li>
              <li
                onClick={() => setBurger(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    typesRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Виды аудита
                </button>
              </li>
              <button
                onClick={() => {
                  setBurger(false);
                  // eslint-disable-next-line react/prop-types
                  moreRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-2 border border-blue-600 rounded cursor-pointer
            font-bold hover:bg-blue-600 hover:text-white duration-200 text-blue-600"
              >
                Узнать больше
              </button>
              <p>+7 (778) 311 61-62</p>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
