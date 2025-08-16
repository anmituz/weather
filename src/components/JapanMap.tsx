'use client';

import React from 'react';
import Image from 'next/image';

// 都市の型定義
export interface City {
  name: string;
  top: string;
  left: string;
}

// 表示する主要都市のリスト
const cities: City[] = [
  { name: '札幌', top: '16%', left: '78%' },
  { name: '仙台', top: '38%', left: '79%' },
  { name: '東京', top: '58%', left: '76%' },
  { name: '名古屋', top: '62%', left: '65%' },
  { name: '大阪', top: '65%', left: '56%' },
  { name: '広島', top: '68%', left: '42%' },
  { name: '福岡', top: '74%', left: '32%' },
  { name: '那覇', top: '85%', left: '10%' },
];

const Marker = ({ city, onCityClick }: { city: City; onCityClick: (city: City) => void; }) => (
  <div 
    style={{ position: 'absolute', top: city.top, left: city.left, transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
    onClick={() => onCityClick(city)}
    className="flex flex-col items-center group"
  >
    <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
    <span className="mt-2 text-sm font-bold text-gray-800 bg-white bg-opacity-75 px-1 rounded">
      {city.name}
    </span>
  </div>
);

const JapanMap = ({ onCityClick }: { onCityClick: (city: City) => void; }) => {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      <Image 
        src="/images/japan-map.png" 
        alt="日本地図"
        width={600} 
        height={600} 
        style={{ width: '100%', height: 'auto' }}
      />
      {cities.map((city) => (
        <Marker key={city.name} city={city} onCityClick={onCityClick} />
      ))}
    </div>
  );
};

export default JapanMap;
