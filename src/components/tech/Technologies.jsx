const Technologies = () => {
  const technologies = [
    {
      id: 1,
      title: "HTML",
      desc: "Язык разметки для создания структуры веб-страниц, включая текст, изображения, ссылки и элементы интерфейса.",
    },
    {
      id: 2,
      title: "CSS",
      desc: "Стиль оформления веб-страниц, отвечающий за внешний вид, включая цвета, шрифты, макеты и адаптивный дизайн.",
    },
    {
      id: 3,
      title: "Tailwind",
      desc: "Утилитарный CSS-фреймворк для быстрого создания адаптивных и кастомизируемых интерфейсов с минимальным использованием кастомного кода.",
    },
    {
      id: 4,
      title: "Java-Script",
      desc: "Скриптовый язык для создания интерактивности и функциональности на веб-страницах, включая анимации, динамический контент и обработку событий.",
    },
    {
      id: 5,
      title: "React",
      desc: "Библиотека JavaScript для создания пользовательских интерфейсов с компонентным подходом, обеспечивающая высокую производительность и удобную разработку.",
    },
    {
      id: 6,
      title: "Netlify",
      desc: "Платформа для хостинга статических сайтов и веб-приложений, с поддержкой автоматического деплоя и встроенных CI/CD функций.",
    },
  ];

  return (
    <div className={"flex flex-col gap-8 lg:flex-row justify-between"}>
      <p className="min-w-[300px] max-h-[50px] border-l-2 border-red-600 ps-4 py-2 text-xl">
        Front-end
      </p>
      <div className="max-w-[1000px] grid grid-cols-2 gap-y-8 gap-x-4 place-content-center">
        {technologies.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 border-b-2 border-[#1b1b1b] pb-8"
          >
            <p className="text-sm text-red-600 font-semibold lg:text-xl">
              {item.id}. {item.title}
            </p>
            <p className="text-sm lg:text-base text-justify	lg:text-start">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
