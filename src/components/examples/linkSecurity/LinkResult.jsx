import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LinkResult = ({url}) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const isHttps = url.startsWith('https://');

    const fakeResult = {
      https: isHttps,
      ssl: isHttps ? 'Установлен' : 'Отсутствует',
      headers: {
        'Content-Security-Policy': isHttps ? 'Присутствует' : 'Отсутствует',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': isHttps ? 'Включён' : 'Отключён',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      cookies: {
        secure: isHttps,
        httpOnly: true,
        sameSite: 'Strict',
      },
      securityFeatures: {
        clickjackingProtection: true,
        corsPolicy: 'Ограниченная',
        directoryListing: false,
        inputValidation: true,
        outdatedLibraries: false,
      },
      riskLevel: isHttps ? 'Низкий' : 'Средний',
      recommendation: isHttps
        ? 'Рекомендуется настроить дополнительные заголовки безопасности и регулярно обновлять зависимости.'
        : 'Настройте SSL и включите HTTPS, чтобы защитить соединения.',
    };

    setTimeout(() => {
      setResult(fakeResult);
    }, 5000);
  }, [url]);

  if (!result) {
    return (
      <div className="flex flex-col gap-5 h-[300px] bg-white items-center justify-center">
        <p className="text-gray-500 text-lg">Проводим аудит сайта...</p>
        <div className="flex justify-center items-center bg-white">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce200"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce400"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Результаты аудита</h2>
          <p className="text-sm text-gray-500 mt-1">{url}</p>
        </div>

        <section className="space-y-4">
          <SectionTitle title="Основные настройки"/>
          <ResultRow label="HTTPS" value={result.https ? 'Включен' : 'Отключён'} status={result.https}/>
          <ResultRow label="SSL сертификат" value={result.ssl} status={result.https}/>
          <SectionTitle title="Заголовки безопасности"/>
          {Object.entries(result.headers).map(([key, value]) => (
            <ResultRow key={key} label={key} value={value} status={value !== 'Отсутствует'}/>
          ))}
          <SectionTitle title="Cookies"/>
          <ResultRow label="Secure" value={result.cookies.secure ? 'Да' : 'Нет'} status={result.cookies.secure}/>
          <ResultRow label="HttpOnly" value={result.cookies.httpOnly ? 'Да' : 'Нет'} status={result.cookies.httpOnly}/>
          <ResultRow label="SameSite" value={result.cookies.sameSite} status={true}/>
          <SectionTitle title="Механизмы защиты"/>
          <ResultRow label="Clickjacking защита"
                     value={result.securityFeatures.clickjackingProtection ? 'Включена' : 'Отключена'}
                     status={result.securityFeatures.clickjackingProtection}/>
          <ResultRow label="CORS политика" value={result.securityFeatures.corsPolicy} status={true}/>
          <ResultRow label="Directory Listing"
                     value={result.securityFeatures.directoryListing ? 'Включено' : 'Отключено'}
                     status={!result.securityFeatures.directoryListing}/>
          <ResultRow label="Валидация данных" value={result.securityFeatures.inputValidation ? 'Есть' : 'Нет'}
                     status={result.securityFeatures.inputValidation}/>
          <ResultRow label="Устаревшие библиотеки"
                     value={result.securityFeatures.outdatedLibraries ? 'Обнаружены' : 'Не обнаружены'}
                     status={!result.securityFeatures.outdatedLibraries}/>
          <RiskLevel level={result.riskLevel}/>
          <div>
            <p className="text-sm text-gray-600 font-semibold">Рекомендации:</p>
            <p className="text-gray-700 mt-1">{result.recommendation}</p>
          </div>
        </section>
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
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ResultRow = ({label, value, status}) => {
  const color = status ? 'text-green-600' : 'text-red-600';
  const icon = status ? '✔' : '✖';

  return (
    <div className="flex justify-between border-b py-2 text-sm sm:text-base">
      <span className="text-gray-800">{label}</span>
      <span className={`font-medium flex items-center gap-1 ${color}`}>
        {icon} {value}
      </span>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SectionTitle = ({title}) => (
  <h3 className="text-lg font-semibold text-gray-700 mt-4">{title}</h3>
);

// eslint-disable-next-line react/prop-types
const RiskLevel = ({level}) => {
  const color =
    level === 'Низкий'
      ? 'bg-green-100 text-green-700'
      : level === 'Средний'
        ? 'bg-yellow-100 text-yellow-700'
        : 'bg-red-100 text-red-700';

  return (
    <div className="flex flex-col mt-4">
      <p className="text-sm text-gray-600 font-medium">Уровень риска:</p>
      <div className={`mt-1 px-3 py-2 rounded-xl font-bold text-center ${color}`}>
        {level}
      </div>
    </div>
  );
};

export default LinkResult;
