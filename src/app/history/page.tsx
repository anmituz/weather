'use client';

import { useState } from 'react';
import WeatherDisplay, { WeatherData } from '@/components/WeatherDisplay';

export default function HistoryPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !date) return; // 空の場合は何もしない

    // ダミーデータを表示
    const dummyWeather: WeatherData = {
      cityName: `${searchQuery} (${date})`,
      temperature: Math.round(Math.random() * 20 + 5), // 5〜25度のランダムな気温
      description: ['快晴', '晴れのち曇り', '雨天'][Math.floor(Math.random() * 3)],
      humidity: Math.round(Math.random() * 60 + 30), // 30〜90%のランダムな湿度
      windSpeed: Math.round(Math.random() * 4 + 1), // 1〜5m/sのランダムな風速
    };
    setWeather(dummyWeather);
  };

  const handleCloseWeather = () => {
    setWeather(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">過去の天気</h2>
      <p className="mb-6">調べたい都市名と日付を入力してください。</p>

      <form onSubmit={handleSearch} className="mb-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-grow">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">都市名</label>
            <input 
              id="city"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="例: 大阪府大阪市"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">日付</label>
            <input 
              id="date"
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 self-end h-11">
            この日の天気を表示
          </button>
        </div>
      </form>

      {weather && (
        <div className="mt-8">
          <WeatherDisplay weather={weather} onClose={handleCloseWeather} />
        </div>
      )}
    </div>
  );
}
