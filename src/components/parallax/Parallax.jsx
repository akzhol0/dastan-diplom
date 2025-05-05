import Brand from '../header/Brand.jsx';

const Parallax = () => {
  return (
    <div className="w-full h-[700px] md:h-[800px] flex justify-center items-center background-paral">
      <div className="w-full md:w-[80%] h-full flex flex-col justify-between px-2 md:px-0 py-10 text-[#2b2b2b]">
        <div>
          <Brand />
          <p className="text-lg md:text-2xl">
            Ознакомительный сайт по аудиту и информационной безопасности
          </p>
        </div>
        <div>
          <p className="text-[35px] md:text-[60px] font-semibold">
            Аудит информационной <br /> безопасности
          </p>
          <hr className="w-[200px] md:w-[300px] bg-red-600 h-[2px] border-0 my-4" />
          <p className="max-w-[700px] text-[16px]">
            Аудит — это систематический процесс оценки и анализа состояния защиты информационных
            систем и данных организации. Его цель — выявить слабые места в системе безопасности,
            оценить соответствие требованиям нормативных актов, стандартов и политик, а также
            предложить рекомендации по их устранению.
          </p>
          <span className="spanspan"></span>
        </div>
        <div>
          <p className="text-[12px]">
            Дипломная работа <br /> Тема: Разработка веб-приложения для проведения аудита
            информационной безопасности на предприятии <br /> Сделал: Тобажаров Дастан
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
