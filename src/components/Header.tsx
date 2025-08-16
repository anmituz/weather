import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">お天気ウェブサイト</h1>
        <nav>
          <a href="/" className="px-3 py-2 hover:bg-blue-700 rounded">ホーム</a>
          <a href="/history" className="px-3 py-2 hover:bg-blue-700 rounded">過去の天気</a>
          <a href="/game" className="px-3 py-2 hover:bg-blue-700 rounded">気温予想ゲーム</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
