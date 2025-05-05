import {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
const FileScanResult = ({file}) => {
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (!file) return;

    setLoading(true);
    setReport(null);

    setTimeout(() => {
      // eslint-disable-next-line react/prop-types
      const extension = file.name.split('.').pop().toLowerCase();
      // eslint-disable-next-line react/prop-types
      const sizeKb = (file.size / 1024).toFixed(1);
      // eslint-disable-next-line react/prop-types
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);

      const riskyExtensions = ['exe', 'bat', 'cmd', 'js', 'vbs', 'dll', 'jar', 'scr', 'msi', 'zip', 'rar', 'docm', 'xlsm', 'pptm'];
      const safeExtensions = ['jpg', 'png', 'pdf', 'txt', 'mp3', 'mp4'];

      const isRisky = riskyExtensions.includes(extension);
      const isSafe = safeExtensions.includes(extension);
      const randomThreats = ['Trojan.Gen', 'Win32.Injector', 'JS.Malware', 'Worm.AutoRun', 'Exploit.Macro'];
      const fakeThreats = isRisky
        ? Array.from({length: Math.floor(Math.random() * 3) + 1}, (_, i) => randomThreats[i])
        : [];

      setReport({
        // eslint-disable-next-line react/prop-types
        name: file.name,
        size: sizeKb + ' KB (' + sizeMb + ' MB)',
        // eslint-disable-next-line react/prop-types
        type: file.type || 'Неизвестно',
        // eslint-disable-next-line react/prop-types
        lastModified: new Date(file.lastModified).toLocaleString(),
        status: isRisky ? '⚠️ Потенциальная угроза обнаружена' : '✅ Файл безопасен',
        riskLevel: isRisky ? 'Высокий' : isSafe ? 'Низкий' : 'Средний',
        threats: fakeThreats,
      });

      setLoading(false);
    }, 5000);
  }, [file]);

  if (!file) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md">
        <p className="text-gray-600 text-center">Файл не выбран для проверки.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800 text-center">Результаты проверки файла</h2>

      {loading ? (
        <div className="text-center text-blue-600">
          🔍 Проверка файла...
          <div className="mt-2 animate-pulse h-2 bg-blue-200 rounded w-2/3 mx-auto"></div>
        </div>
      ) : (
        <div className="text-sm text-gray-800 space-y-2">
          <p><strong>Имя файла:</strong> {report.name}</p>
          <p><strong>Размер:</strong> {report.size}</p>
          <p><strong>Тип файла:</strong> {report.type}</p>
          <p><strong>Дата последнего изменения:</strong> {report.lastModified}</p>

          <div className="mt-4">
            <p><strong>Уровень риска:</strong> {report.riskLevel}</p>
            <p className={report.riskLevel === 'Высокий' ? 'text-red-600 font-semibold' : 'text-green-600'}>
              {report.status}
            </p>
          </div>

          {report.threats.length > 0 && (
            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <p className="font-medium text-red-700 mb-2">Обнаруженные угрозы:</p>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                {report.threats.map((threat, idx) => (
                  <li key={idx}>{threat}</li>
                ))}
              </ul>
              <p className="text-red-600 text-sm mt-2">
                Эти угрозы могут представлять серьёзную опасность для вашей системы. Рекомендуется немедленно выполнить
                дополнительную проверку.
              </p>
            </div>
          )}

          {!report.threats.length && (
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <p className="font-medium text-green-700 mb-2">Файл не содержит угроз.</p>
              <p className="text-green-600 text-sm">
                Этот файл был проверен и признан безопасным. Тем не менее, всегда будьте осторожны при загрузке и
                открытии файлов из ненадёжных источников.
              </p>
            </div>
          )}

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-800">Рекомендации:</h3>
            <p className="text-gray-700 text-sm">
              Если файл был отмечен как опасный, убедитесь, что он был загружен с надёжного источника. Не открывайте
              исполняемые файлы или файлы с макросами, если не уверены в их происхождении. Используйте антивирусные
              программы для дополнительной проверки и защиты.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileScanResult;
