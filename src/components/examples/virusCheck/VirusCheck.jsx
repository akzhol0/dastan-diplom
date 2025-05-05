import {useEffect, useRef, useState} from "react";
import VirusResults from "./VirusResults.jsx";

const VirusCheck = () => {
  const startRef = useRef(null);
  const [nextStep, setNextStep] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    startRef.current?.scrollIntoView({behavior: "smooth"});
  }, []);

  return (<div className='w-full flex flex-col justify-center items-center'>
    <div className="w-full flex flex-col justify-start items-center z-10">
      <div className="w-full md:w-[80%] flex items-center justify-center md:px-0 h-[600px]">
        <div className="bg-white flex items-center justify-center">
          <div className="flex items-center justify-center bg-white px-4">
            {nextStep ? (<VirusResults file={file}/>) : (
              <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Проверка файла на вирусы</h1>
                <div className="mb-5 text-sm text-gray-700 space-y-2">
                  <p><strong>Рекомендованные типы файлов для проверки:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>.exe, .js, .bat, .vbs</strong> — исполняемые или скриптовые файлы, часто используются
                      в
                      вредоносных целях.
                    </li>
                    <li><strong>.zip, .rar</strong> — архивы, внутри которых может скрываться вредоносный код.</li>
                    <li><strong>.docm, .xlsm</strong> — документы с макросами, потенциально опасны при открытии.</li>
                    <li><strong>.jpg, .txt, .pdf</strong> — как правило, считаются безопасными и используются для
                      демонстрации чистых файлов.
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-lg text-center">
                  {file ? (
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Файл выбран
                    </label>
                  ) : (
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      📂 Выберите файл
                    </label>
                  )}
                  <input
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]); // сохраняем сам файл, а не его имя
                      }
                    }}
                    id="file-upload"
                    type="file"
                    className="hidden"/>

                </div>
                <button
                  type="submit"
                  onClick={() => setNextStep(true)}
                  className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-semibold text-lg transition shadow-md"
                >
                  Проверить
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">Поддерживаются файлы любого типа.</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default VirusCheck;