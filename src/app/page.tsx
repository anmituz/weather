'use client';

import { useState } from 'react';
import JapanMap, { City } from '@/components/JapanMap';
import WeatherDisplay, { WeatherData } from '@/components/WeatherDisplay';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const showDummyWeather = (cityName: string) => {
    // 本来はここでAPIを叩く
    // 今回はダミーデータを設定
    const dummyWeather: WeatherData = {
      cityName: cityName,
      temperature: Math.round(Math.random() * 20 + 10), // 10〜30度のランダムな気温
      description: ['晴れ', '曇り', '雨'][Math.floor(Math.random() * 3)],
      humidity: Math.round(Math.random() * 50 + 40), // 40〜90%のランダムな湿度
      windSpeed: Math.round(Math.random() * 5 + 1), // 1〜6m/sのランダムな風速
    };
    setWeather(dummyWeather);
  };

  const handleCityClick = (city: City) => {
    showDummyWeather(city.name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // 空の場合は何もしない
    showDummyWeather(searchQuery);
  };

  const handleCloseWeather = () => {
    setWeather(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">日本全国 天気予報</h2>
      
      {/* 天気カードが表示されている時は検索フォームと地図を隠す */}
      {weather ? (
        <WeatherDisplay weather={weather} onClose={handleCloseWeather} />
      ) : (
        <>
          {/* 検索フォーム */}
          <form onSubmit={handleSearch} className="mb-6 flex justify-center">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="市区町村名で検索 (例: 東京都千代田区)"
              className="border border-gray-300 rounded-l-md p-2 w-full max-w-md"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
              検索
            </button>
          </form>

          {/* 地図 */}
          <p className="mb-4 text-center">または、地図上の都市をクリックしてください。</p>
          <div className="flex justify-center">
            <JapanMap onCityClick={handleCityClick} />
          </div>
        </>
      )}
    </div>
  );
}