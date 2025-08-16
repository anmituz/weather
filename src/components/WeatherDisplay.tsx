'use client';

import React from 'react';

// 天気データの型定義
export interface WeatherData {
  cityName: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherDisplayProps {
  weather: WeatherData | null;
  onClose: () => void;
}

const WeatherDisplay = ({ weather, onClose }: WeatherDisplayProps) => {
  if (!weather) return null;

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto mt-4">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-gray-800">{weather.cityName}の天気</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-5xl font-bold text-blue-600">{weather.temperature}°C</p>
        <p className="text-xl text-gray-600 mt-2">{weather.description}</p>
      </div>
      <div className="mt-6 flex justify-around text-center">
        <div>
          <p className="font-bold text-gray-700">湿度</p>
          <p className="text-lg">{weather.humidity}%</p>
        </div>
        <div>
          <p className="font-bold text-gray-700">風速</p>
          <p className="text-lg">{weather.windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
