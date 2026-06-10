export async function getw()
{
      const url = "https://api.open-meteo.com/v1/forecast?latitude=43.06&longitude=141.35&current_weather=true";
      const base = await fetch(url);
      const get = await base.json();

      const temp = get.current_weather.temperature;
      const code = get.current_weather.weathercode;
      const wind = get.current_weather.windspeed;
      const weather = codeToText(code);

      document.getElementById("temp").textContent = `${temp} ℃| ${wind} km/h| ${weather} `;
}
export function codeToText(code) 
{
  if (code === 0) return "晴れ";
  if (code <= 3) return "曇り";
  if (code <= 48) return "霧";
  if (code <= 67) return "雨";
  if (code <= 77) return "雪";
  if (code <= 82) return "にわか雨";
  return "雷雨";
}