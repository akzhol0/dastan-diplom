import {Link} from "react-router-dom";

const Examples = () => {
  const types = [
    {
      id: 1,
      title: "Аудит проверки веб-приложений",
      link: 'link-security',
      desc: 'Процесс анализа безопасности, выявления уязвимостей и оценки конфигурации с целью защиты данных, предотвращения атак и повышения общей надежности системы.'
    },
    {
      id: 2,
      title: "Проверка файла на вирусы",
      desc: "Это процесс анализа загруженного пользователем файла с целью выявления потенциально вредоносного содержимого. В рамках демонстрации система имитирует сканирование файла, определяя возможные угрозы на основе его расширения, размера и других параметров.",
      link: 'virus-check'
    },
  ];

  return (
    <div className={"flex flex-col gap-8 lg:flex-row justify-between"}>
      <div className="max-w-[1000px] grid grid-cols-2 gap-y-8 gap-x-4 place-content-center">
        {types.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 border-b-2 border-[#1b1b1b] pb-8"
          >
            <Link to={item.link}>
              <p className="text-sm text-red-600 font-semibold lg:text-xl hover:underline">
                {item.id}. {item.title}
              </p>
            </Link>
            <p className="text-sm lg:text-base text-justify	lg:text-start">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="min-w-[300px] max-h-[50px] border-l-2 border-red-600 ps-4 py-2 text-xl">
        Примеры аудита
      </div>
    </div>
  );
};

export default Examples;