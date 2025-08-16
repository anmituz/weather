import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">お天気ウェブサイト</h1>
        <nav>
          <Link href="/" className="px-3 py-2 hover:bg-blue-700 rounded">ホーム</Link>
          <Link href="/history" className="px-3 py-2 hover:bg-blue-700 rounded">過去の天気</Link>
          <Link href="/game" className="px-3 py-2 hover:bg-blue-700 rounded">気温予想ゲーム</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
