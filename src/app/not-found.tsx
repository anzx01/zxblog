export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: 'var(--neob-light-gray)'}}>
      <div className="text-center">
        <div className="border-4 border-black bg-yellow-400 p-8 shadow-brutal transform -rotate-2 hover:rotate-0 transition-all duration-300 inline-block">
          <h1 className="text-6xl font-black text-black mb-4">404</h1>
          <p className="text-2xl font-bold text-black">页面未找到</p>
        </div>
        <div className="mt-8">
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