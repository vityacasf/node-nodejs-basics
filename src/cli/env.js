const parseEnv = () => {
    const envVars = process.env;
  
  const rssVariables = Object.entries(envVars)
    .filter(([key]) => key.startsWith('RSS_'))
    .sort(([a], [b]) => a.localeCompare(b));

  const result = rssVariables
    .map(([name, value]) => `${name}=${value}`)
    .join('; ');

  if (result) {
    console.log(result);
  } else {
    console.log('Переменные окружения с префиксом RSS_ не найдены');
  }
};

parseEnv();