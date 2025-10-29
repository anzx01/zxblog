'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: 'var(--neob-light-gray)'}}>
      <div className="text-center">
        <div className="border-4 border-black bg-red-500 p-8 shadow-brutal transform rotate-2 hover:rotate-0 transition-all duration-300 inline-block">
          <h1 className="text-6xl font-black text-white mb-4">错误</h1>
          <p className="text-xl font-bold text-white mb-4">出现了一些问题</p>
        </div>
        <div className="mt-8 space-x-4">
          <button
            onClick={reset}
            className="border-4 border-black bg-green-500 text-white px-8 py-4 font-bold text-lg shadow-brutal transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 inline-block"
          >
            重试
          </button>
          <a
            href="/"
            className="border-4 border-black bg-blue-600 text-white px-8 py-4 font-bold text-lg shadow-brutal transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 inline-block"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
}