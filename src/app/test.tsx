export default function TestPage() {
  return (
    <div className="min-h-screen bg-yellow-300 border-8 border-black p-8">
      <h1 className="text-6xl font-black text-blue-600 mb-8">
        Neo-Brutalism 测试页面
      </h1>
      <div className="bg-pink-500 border-4 border-black p-6 transform rotate-2">
        <p className="text-white text-xl font-bold">
          如果你能看到这个页面，说明基本功能正常！
        </p>
      </div>
    </div>
  );
}