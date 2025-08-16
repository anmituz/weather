'use client';

import { useState } from 'react';

export default function GamePage() {
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess) return;
    // ここでは単純に送信済みフラグを立てるだけ
    setSubmitted(true);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">気温予想ミニゲーム！</h2>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-800">お題</h3>
          <p className="text-lg my-4">
            <span className="font-bold text-blue-600">明日の正午 (12:00)</span> の <span className="font-bold text-red-600">東京</span> の気温は？
          </p>
          <div className="flex justify-center items-center gap-2">
            <input 
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="例: 18"
              className="border border-gray-300 rounded-md p-2 text-center w-32 text-xl"
              required
            />
            <span className="text-xl">°C</span>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 mt-6 w-full">
            予想を送信！
          </button>
        </form>
      ) : (
        <div className="p-8 bg-green-100 border border-green-300 rounded-lg max-w-md mx-auto">
          <h3 className="text-xl font-bold text-green-800">予想を登録しました！</h3>
          <p className="mt-4">あなたの予想: <span className="font-bold text-2xl">{guess}°C</span></p>
          <p className="mt-2">結果は明日の正午に、このページで発表されます。（という設定です！）</p>
          <button onClick={() => setSubmitted(false)} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 mt-6">
            もう一度予想する
          </button>
        </div>
      )}
    </div>
  );
}
