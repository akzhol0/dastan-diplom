import {useEffect, useRef, useState} from "react";
import LinkResult from "./LinkResult.jsx";
import {Link} from "react-router-dom";

const LinkSecurity = () => {
  const [resultPage, setResultPage] = useState(false);
  const [userUrl, setUserUrl] = useState('');
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current?.scrollIntoView({behavior: "smooth"});
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div ref={startRef}></div>
      <div className="w-full flex flex-col justify-start items-center z-10">
        <div className="w-full md:w-[80%] flex items-center justify-center md:px-0 min-h-[600px]">
          <div className="bg-white flex items-center justify-center">
            {resultPage ? (
              <div className="bg-white flex flex-col items-center justify-center p-4">
                <LinkResult url={userUrl}/>
              </div>
            ) : (
              <div
                className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-md p-6 sm:p-8 space-y-6">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                    Проверка сайта
                  </h1>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Введите ссылку на сайт для демонстрационного аудита безопасности
                  </p>
                </div>
                <form onSubmit={() => setResultPage(true)} className="space-y-4">
                  <input
                    type="url"
                    placeholder="https://example.com"
                    className="w-full p-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition placeholder-gray-400"
                    required
                    onChange={(event) => setUserUrl(event.target.value)}
                    value={userUrl}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-lg transition shadow-md"
                  >
                    Проверить
                  </button>
                </form>
                <div>
                  <Link to='/'>
                    <button
                      className="w-full bg-red-400 hover:bg-red-500 duration-300 text-white px-4 py-2 rounded-xl font-semibold text-lg transition shadow-md"
                    >
                      Назад
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSecurity;